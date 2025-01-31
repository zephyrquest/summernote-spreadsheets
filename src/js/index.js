// Configure Webix
webix.env.cdn = "https://cdn.webix.com/";

$(document).ready(function () {
  $("#editor").summernote({
    height: 600,
    toolbar: [
      ["style", ["bold", "italic", "underline", "clear"]],
      ["font", ["strikethrough", "superscript", "subscript"]],
      ["fontsize", ["fontsize"]],
      ["color", ["color"]],
      ["insert", ["link", "picture", "video"]],
      ["custom", ["new_spreadsheet"]],
    ],
    popover: {
      image: [
        ["float", ["floatLeft", "floatRight", "floatNone"]],
        ["remove", ["removeMedia"]],
        ["custom", ["edit_spreadsheet"]],
      ],
    },
    // spreadsheet configurations
    spreadsheet: {
      fullscreen: false,
      width: 1200,
      height: 800,
      replaceImage: true,
      resizeImage: true,
    },
    callbacks: {
      onMousedown: function (e) {
        const target = e.target;

        /*
          Check if an image has been selected. If the image is a spreadsheet, the popup button to reopen the spreadsheet
          is shown, otherwise it is hidden.
           */
        if (target.tagName === "IMG") {
          const editSpreadsheetButton = document.querySelector(
            ".edit-spreadsheet-button"
          );
          if (!editSpreadsheetButton) {
            return;
          }

          if (
            target.classList.contains("spreadsheet-image") &&
            target.hasAttribute("data-spreadsheetState")
          ) {
            editSpreadsheetButton.style.display = "inline-block";
          } else {
            editSpreadsheetButton.style.display = "none";
          }
        }
      },
    },
  });
});
