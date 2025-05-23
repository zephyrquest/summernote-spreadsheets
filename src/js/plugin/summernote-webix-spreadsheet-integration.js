(function (factory) {
  // Global define
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node/CommonJS
    module.exports = factory(require("jquery"));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
})(function ($) {
  // these variables are used to determine the position of the selected area in the viewport
  let selectionStartTop = 0;
  let selectionStartLeft = 0;
  let selectionHeight = 0;
  let selectionWidth = 0;
  let selectionStartRow = 0;
  let selectionEndRow = 0;
  let selectionStartColumn = 0;
  let selectionEndColumn = 0;

  // convert the column labeled with letters to a number
  function getColumnNumber(column) {
    let digits = new Array(column.length);

    for (let i = 0; i < column.length; ++i) {
      digits[i] = column.charCodeAt(i) - 64;
    }

    let mul = 1;
    let res = 0;

    for (let pos = digits.length - 1; pos >= 0; --pos) {
      res += digits[pos] * mul;
      mul *= 26;
    }

    return res;
  }

  function getCellNumber(cell) {
    const match = cell.match(/^([A-Z]+)(\d+)$/);

    const column = match[1];
    const columnNumber = getColumnNumber(column);
    const row = match[2];
    const rowNumber = parseInt(row, 10);

    return { row: rowNumber, column: columnNumber };
  }

  // this method is used to visually represent a cell number in the generated image if it has a specific formatting
  function getCellFormatValue(value, format) {
    let formattedValue = value;

    if (format === "price") {
      formattedValue = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(value);
    } else if (format === "int") {
      formattedValue = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    } else if (format === "percent") {
      formattedValue = new Intl.NumberFormat("en-US", {
        style: "percent",
        maximumFractionDigits: 0,
      }).format(value);
    }

    return formattedValue;
  }

  // create the container element that includes all the cells inside the selected area
  function captureSelectedCells(spreadsheet) {
    const gridSelected = document.createElement("div");
    gridSelected.classList.add("webix_ss_center_scroll");
    gridSelected.setAttribute("role", "rowgroup");

    const columnDefault = document.createElement("div");
    columnDefault.classList.add("webix_column");
    columnDefault.style.top = "0px";

    const gridCellDefault = document.createElement("div");
    gridCellDefault.classList.add("webix_cell");
    gridCellDefault.setAttribute("role", "gridcell");

    let totalWidth = 0;
    let totalHeight = 0;

    for (let i = selectionStartColumn; i <= selectionEndColumn; i++) {
      const columnObject = spreadsheet.getColumn(i);
      const columnWidth = columnObject.width;

      const column = columnDefault.cloneNode(false);
      column.setAttribute("column", i - selectionStartColumn + 1);
      column.style.width = `${columnWidth}px`;
      column.style.left = `${totalWidth}px`;

      for (let j = selectionStartRow; j <= selectionEndRow; j++) {
        const rowObject = spreadsheet.getRow(j);
        const rowHeight = rowObject.$height;

        const gridCell = gridCellDefault.cloneNode(false);
        gridCell.setAttribute("aria-rowindex", j - selectionStartRow + 1);
        gridCell.setAttribute("aria-colindex", i - selectionStartColumn + 1);
        gridCell.style.height = `${rowHeight}px`;

        const style = spreadsheet.getStyle(j, i);
        if (style) {
          gridCell.classList.add(`${style.id}`);
        }

        const value = spreadsheet.getCellValue(j, i, false);
        if (value !== undefined && value !== null) {
          const div = document.createElement("div");
          div.style.position = "absolute";
          div.style.whiteSpace = "nowrap";

          if (
            typeof value === "number" &&
            !isNaN(value) &&
            style &&
            style.props
          ) {
            const format = style.props.format;
            if (format) {
              const formattedValue = getCellFormatValue(value, format);
              div.innerHTML = formattedValue;
            } else {
              div.innerHTML = value;
            }
          } else {
            div.innerHTML = value;
          }

          gridCell.appendChild(div);
        }

        column.appendChild(gridCell);

        if (i === selectionStartColumn) {
          totalHeight += rowHeight;
        }
      }

      gridSelected.appendChild(column);

      totalWidth += columnWidth;
    }

    selectionWidth = totalWidth;
    selectionHeight = totalHeight;

    gridSelected.style.width = `${selectionWidth}px`;
    gridSelected.style.height = `${selectionHeight}px`;
    gridSelected.style.border = "1px solid #EDEFF0";

    return gridSelected;
  }

  // create the container that includes any merged cells (if present)
  function captureSelectedSpans(activeSheet) {
    const spans = activeSheet.content.spans;
    const spanLayer = document.querySelector(
      ".custom-spreadsheet .webix_ss_center .webix_span_layer"
    );
    const container = document.createElement("div");
    if (!spanLayer || !spanLayer.children.length) {
      return null;
    }

    spans.forEach((span, i) => {
      if (span.length === 4) {
        const [startRow, startColumn, columns, rows] = span;
        const spanElement = spanLayer.children[i];

        // check if spanElement is within the selected area
        const isInsideSelection =
          startRow <= selectionEndRow &&
          startRow + rows - 1 >= selectionStartRow &&
          startColumn <= selectionEndColumn &&
          startColumn + columns - 1 >= selectionStartColumn;

        if (spanElement && isInsideSelection) {
          const spanElementClone = spanElement.cloneNode(true);

          const currentLeft = parseFloat(spanElement.style.left) || 0;
          const currentTop = parseFloat(spanElement.style.top) || 0;
          const newLeft = currentLeft - selectionStartLeft;
          const newTop = currentTop - selectionStartTop;
          spanElementClone.style.left = `${newLeft}px`;
          spanElementClone.style.top = `${newTop}px`;

          // Retrieve and set border style to fix bug in image generation
          const wssClass = Array.from(spanElementClone.classList).find((cls) =>
            /^wss\d+$/.test(cls)
          );

          let borders = {
            top: "",
            right: "",
            bottom: "",
            left: "",
          };

          if (wssClass) {
            const headStyles = Array.from(
              document.querySelectorAll("head style")
            );

            const regex = new RegExp(`.wss_\\d+\\s+\\.(${wssClass})$`);

            for (const styleTag of headStyles) {
              const sheet = styleTag.sheet;
              try {
                for (const rule of sheet.cssRules || []) {
                  if (regex.test(rule.selectorText)) {
                    const style = rule.style;
                    // Retrieve border styles if defined
                    borders.top = style.getPropertyValue("border-top") || "";
                    borders.right =
                      style.getPropertyValue("border-right") || "";
                    borders.bottom =
                      style.getPropertyValue("border-bottom") || "";
                    borders.left = style.getPropertyValue("border-left") || "";

                    break;
                  }
                }
              } catch (e) {}
            }
          }

          // Apply default border for top and left and transparent border for right and bottom (if is not defined)
          const defaultBorder = "1px solid #edeff0";

          if (!borders.top) {
            spanElementClone.style.borderTop = borders.bottom
              ? borders.bottom
              : defaultBorder;
          }
          if (!borders.left) {
            spanElementClone.style.borderLeft = borders.right
              ? borders.right
              : defaultBorder;
          }
          if (!borders.right) {
            spanElementClone.style.borderRight = "1px solid transparent";
          }
          if (!borders.bottom) {
            spanElementClone.style.borderBottom = "1px solid transparent";
          }

          container.appendChild(spanElementClone);
        }
      }
    });

    return container;
  }

  // create the container element that includes the charts and/or images above the cells (if present)
  function captureSelectedViewsAboveCells(activeSheet) {
    const views = activeSheet.content.views;

    const div = document.createElement("div");

    if (views) {
      views.forEach((view, index) => {
        const leftPos = view[0];
        const topPos = view[1];
        const type = view[2];
        const width = view[4].width;
        const height = view[4].height;

        /*
          Check if the view is inside the selected area. If a part of the view is outside the selected area,
          the view is discarded.
        */
        if (
          leftPos - selectionStartLeft >= 0 &&
          leftPos + width <= selectionStartLeft + selectionWidth &&
          topPos - selectionStartTop >= 0 &&
          topPos + height <= selectionStartTop + selectionHeight &&
          selectionWidth >= width &&
          selectionHeight >= height
        ) {
          if (type === "image") {
            const data = view[3];
            const img = document.createElement("img");
            img.src = data;
            img.style.width = `${width}px`;
            img.style.height = `${height}px`;
            img.style.position = "absolute";
            img.style.display = "block";
            img.style.left = `${leftPos - selectionStartLeft}px`;
            img.style.top = `${topPos - selectionStartTop}px`;

            div.appendChild(img);
          } else if (type === "chart") {
            const chartContainers =
              document.querySelectorAll(".webix_ssheet_ui");
            if (chartContainers) {
              const chartContainer = Array.from(chartContainers).find((cc) => {
                const style = cc.style;

                return (
                  parseInt(style.left) === leftPos &&
                  parseInt(style.top) === topPos &&
                  parseInt(style.width) === width &&
                  parseInt(style.height) === height
                );
              });

              if (chartContainer) {
                chartContainer.style.position = "absolute";
                chartContainer.style.display = "block";
                chartContainer.style.left = `${leftPos - selectionStartLeft}px`;
                chartContainer.style.top = `${topPos - selectionStartTop}px`;

                div.appendChild(chartContainer);
              }
            }
          }
        }
      });

      return div;
    }

    return null;
  }

  function createSelectedArea(selectedCells, selectedSpans, selectedViews) {
    if (!selectedCells) {
      return null;
    }

    const div = document.createElement("div");

    div.appendChild(selectedCells);

    if (selectedSpans) {
      div.appendChild(selectedSpans);
    }

    if (selectedViews) {
      Array.from(selectedViews.children).forEach((child) => {
        div.appendChild(child);
      });
    }

    div.style.width = selectedCells.style.width;
    div.style.height = selectedCells.style.height;
    div.style.position = "relative";

    return div;
  }

  /*
    Generate the image using html2canvas. The style tags in the head section are also included,
    in order to maintain the style of the cells in the generated image
     */
  async function generateImage(selectedArea) {
    const div = document.createElement("div");
    div.style.width = selectedArea.style.width;
    div.style.height = selectedArea.style.height;
    div.classList.add("webix_view", "webix_dtable", "webix_ssheet_table");

    const styleElements = document.querySelectorAll(
      'style[type="text/css"][media="screen,print"]'
    );
    if (styleElements) {
      const styleElement =
        styleElements.length > 1
          ? styleElements[styleElements.length - 1]
          : styleElements[0];
      if (styleElement) {
        div.appendChild(styleElement);
        const styleContent = styleElement.textContent;
        const match = styleContent.match(/\.wss_(\d+)/);
        if (match && match[1]) {
          const number = match[1];
          selectedArea.classList.add(`wss_${number}`);
        } else {
          selectedArea.classList.add("wss_1");
        }
      }
    }

    div.appendChild(selectedArea);

    document.body.appendChild(div);
    const canvas = await html2canvas(div);
    document.body.removeChild(div);

    const image = canvas.toDataURL("image/png");
    return image;
  }

  function createImageElement(context, imageData, spreadsheetState, resize) {
    const img = document.createElement("img");
    img.src = imageData;
    img.setAttribute("data-spreadsheetState", JSON.stringify(spreadsheetState));
    img.classList.add("spreadsheet-image");

    img.onload = function () {
      // resize the image if it is larger than summernote's viewport
      if (resize) {
        const maxWidth = $(context.$note.parent()).width();
        if (img.width > maxWidth) {
          img.style.width = "100%";
          img.style.height = "auto";
        }
      }
    };

    return img;
  }

  function insertNewImageToSummernote(
    context,
    imageData,
    spreadsheetState,
    resize
  ) {
    const img = createImageElement(
      context,
      imageData,
      spreadsheetState,
      resize
    );

    const div = document.createElement("div");
    div.style.marginTop = "20px";
    div.style.marginBottom = "20px";
    div.appendChild(img);

    try {
      $(context.$note).summernote("restoreRange");
      $(context.$note).summernote("focus");
    } catch (error) {
      console.warn(
        "restoreRange failed, inserting the image at the top of the summernote area.",
        error
      );
    }

    $(context.$note).summernote("insertNode", div);
  }

  function replaceImageInSummernote(
    context,
    imageData,
    oldImage,
    spreadsheetState,
    resize
  ) {
    const img = createImageElement(
      context,
      imageData,
      spreadsheetState,
      resize
    );

    oldImage.replaceWith(img);
  }

  function handleCellsSelection(spreadsheet, selectedCells) {
    // calculate the position of the selected area in the viewport

    const length = selectedCells.length;

    if (length < 2) {
      disableSaveButton();
      return;
    }

    const startRow = selectedCells[0].row;
    const startColumn = selectedCells[0].column;

    const endRow = selectedCells[length - 1].row;
    const endColumn = selectedCells[length - 1].column;

    selectionStartRow = startRow;
    selectionEndRow = endRow;
    selectionStartColumn = startColumn;
    selectionEndColumn = endColumn;

    let startTop = 0;

    for (let i = 1; i < selectionStartRow; i++) {
      const row = spreadsheet.getRow(i);
      startTop += row.$height;
    }

    let startLeft = 0;

    for (let i = 1; i < selectionStartColumn; i++) {
      const column = spreadsheet.getColumn(i);
      startLeft += column.width;
    }

    selectionStartTop = startTop;
    selectionStartLeft = startLeft;

    enableSaveButton();
  }

  const openSpreadSheetModal = function (context, title, selectedImage) {
    webix.ready(function () {
      webix
        .ui({
          id: "spreadsheet-window",
          view: "window",
          modal: true,
          position: "center",
          head: title,
          fullscreen:
            context.options.spreadsheet.fullscreen === undefined
              ? true
              : context.options.spreadsheet.fullscreen,
          width:
            context.options.spreadsheet.width === undefined
              ? 1200
              : context.options.spreadsheet.width,
          height:
            context.options.spreadsheet.height === undefined
              ? 800
              : context.options.spreadsheet.height,
          resize: false,
          css: "custom-spreadsheet",
          body: {
            rows: [
              {
                id: "spreadsheet-editor",
                view: "spreadsheet",
                toolbar: "full",
                menu: true,
                rowCount: 50,
                columnCount: 26,
                readonly: false,
                data:
                  selectedImage == null
                    ? null
                    : JSON.parse(selectedImage.attr("data-spreadsheetState")),
                on: {
                  onAfterSelect: function (selectedCells) {
                    const spreadsheet = $$("spreadsheet-editor");
                    handleCellsSelection(spreadsheet, selectedCells);
                  },
                  onItemClick: function (id, e, node) {
                    // a workaround for handling multiple cells selection with shift + mouse click
                    if (
                      e.shiftKey &&
                      node &&
                      node.classList.contains("webix_cell")
                    ) {
                      const spreadsheet = $$("spreadsheet-editor");
                      const selectedCells = spreadsheet.getSelectedId(true);

                      handleCellsSelection(spreadsheet, selectedCells);
                    }
                  },
                  onAfterSheetShow: function (name) {
                    disableSaveButton();
                  },
                },
              },
              {
                view: "toolbar",
                elements: [
                  {
                    view: "button",
                    css: "close-button",
                    value: "Close without saving",
                    on: {
                      onItemClick: () => {
                        const confirm_close = window.confirm(
                          "Are you sure you want to close the editor?" +
                            "All unsaved changes will be lost."
                        );

                        if (confirm_close) {
                          $$("spreadsheet-window").close();
                        }
                      },
                    },
                  },
                  {
                    view: "button",
                    css: "save-button",
                    value: "Save and close",
                    on: {
                      onItemClick: () => {
                        const spreadsheet = $$("spreadsheet-editor");

                        const selectedRange = spreadsheet.getSelectedRange();
                        if (!selectedRange) {
                          return;
                        }

                        const spreadsheetState = spreadsheet.serialize({
                          sheets: true,
                        });
                        const activeSheetName = spreadsheet.getActiveSheet();
                        const activeSheet = spreadsheetState.find(
                          (sheet) => sheet.name === activeSheetName
                        );

                        const range = selectedRange.split(":");
                        const startCell = range[0];
                        const startCellNumber = getCellNumber(startCell);
                        const endCell = range[1];
                        const endCellNumber = getCellNumber(endCell);

                        if (selectionEndRow !== endCellNumber.row) {
                          selectionEndRow = endCellNumber.row;
                        }
                        if (selectionEndColumn !== endCellNumber.column) {
                          selectionEndColumn = endCellNumber.column;
                        }

                        const selectedCells = captureSelectedCells(spreadsheet);
                        const selectedSpans = captureSelectedSpans(activeSheet);
                        const selectedViews =
                          captureSelectedViewsAboveCells(activeSheet);

                        const selectedArea = createSelectedArea(
                          selectedCells,
                          selectedSpans,
                          selectedViews
                        );

                        if (selectedArea) {
                          const replace =
                            context.options.spreadsheet.replaceImage;
                          const resize =
                            context.options.spreadsheet.resizeImage;
                          generateImage(selectedArea).then((imageData) => {
                            if (selectedImage && replace) {
                              replaceImageInSummernote(
                                context,
                                imageData,
                                selectedImage,
                                spreadsheetState,
                                resize
                              );
                            } else {
                              insertNewImageToSummernote(
                                context,
                                imageData,
                                spreadsheetState,
                                resize
                              );
                            }

                            $$("spreadsheet-window").close();
                          });
                        }
                      },
                    },
                  },
                ],
              },
            ],
          },
        })
        .show();
    });

    disableSaveButton();
  };

  function enableSaveButton() {
    const saveButton = document.querySelector(
      ".custom-spreadsheet .save-button button"
    );

    if (saveButton) {
      saveButton.disabled = false;

      const parent = saveButton.parentElement;
      const tooltipInstance = bootstrap.Tooltip.getInstance(parent);
      if (tooltipInstance) {
        tooltipInstance.dispose();
      }
      parent.removeAttribute("data-bs-toggle");
      parent.removeAttribute("data-bs-placement");
      parent.removeAttribute("data-bs-title");
    }
  }

  function disableSaveButton() {
    const saveButton = document.querySelector(
      ".custom-spreadsheet .save-button button"
    );

    if (saveButton) {
      saveButton.disabled = true;

      const parent = saveButton.parentElement;

      parent.setAttribute("data-bs-toggle", "tooltip");
      parent.setAttribute("data-bs-placement", "top");
      parent.setAttribute("data-bs-title", "Select at least two cells.");

      new bootstrap.Tooltip(parent);
    }
  }

  // Register plugin actions
  $.extend($.summernote.plugins, {
    new_spreadsheet: function (context) {
      context.memo("button.new_spreadsheet", function () {
        const button = $.summernote.ui.button({
          contents: '<span class="fa fa-child">Insert new spreadsheet</span>',
          tooltip: "Open the spreadsheet editor and create a new spreadsheet.",
          click: () => {
            openSpreadSheetModal(context, "New SpreadSheet", null);
          },
        });

        return button.render();
      });
    },
    edit_spreadsheet: function (context) {
      context.memo("button.edit_spreadsheet", function () {
        const button = $.summernote.ui.button({
          contents: '<span class="fa fa-child">Edit spreadsheet</span>',
          tooltip:
            "Open the spreadsheet editor and edit the selected spreadsheet.",
          click: () => {
            const selectedImage = $(context.invoke("restoreTarget"));

            if (
              selectedImage &&
              selectedImage.is("img") &&
              selectedImage.attr("data-spreadsheetState")
            ) {
              $(".note-popover").hide();

              openSpreadSheetModal(context, "Edit SpreadSheet", selectedImage);
            }
          },
        });

        const editSpreadsheetButton = button.render();
        $(editSpreadsheetButton).addClass("edit-spreadsheet-button");
        $(editSpreadsheetButton).css("display", "none");

        return editSpreadsheetButton;
      });
    },
  });
});
