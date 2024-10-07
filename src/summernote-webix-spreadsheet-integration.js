(function (factory) {
	// Global define
	if (typeof define === "function" && define.amd)
	{
		// AMD. Register as an anonymous module.
		define(["jquery"], factory);
	}
	else if (typeof module === "object" && module.exports)
	{
		// Node/CommonJS
		module.exports = factory(require("jquery"));
	}
	else
	{
		// Browser globals
		factory(window.jQuery);
	}
}

(function ($) { 
    let selectionStartTop = 0
let selectionStartLeft = 0
let selectionHeight = 0
let selectionWidth = 0

function letterToNumber(letter) {
    return parseInt(letter.toUpperCase().charCodeAt(0) - 64, 10);
}

function captureSelectedCells(spreadsheet, startCell, endCell) {
    const startColumn = letterToNumber(startCell[0])
    const startRow = parseInt(startCell.substring(1), 10)
    const endColumn = letterToNumber(endCell[0])
    const endRow = parseInt(endCell.substring(1), 10)

    const gridSelected = document.createElement('div')
    gridSelected.classList.add("webix_ss_center_scroll")
    gridSelected.setAttribute("role", "rowgroup")

    const columnDefault = document.createElement('div')
    columnDefault.classList.add("webix_column")
    columnDefault.style.top = "0px"

    const gridCellDefault = document.createElement('div')
    gridCellDefault.classList.add("webix_cell")
    gridCellDefault.setAttribute("role", "gridcell")

    let totalWidth = 0
    let totalHeight = 0

    for (let i = startColumn; i <= endColumn; i++) {
        const columnObject = spreadsheet.getColumn(i)
        const columnWidth = columnObject.width

        const column = columnDefault.cloneNode(false)
        column.setAttribute("column", i - startColumn + 1)
        column.style.width = `${columnWidth}px`
        column.style.left = `${totalWidth}px`

        for (let j = startRow; j <= endRow; j++) {
            const rowObject = spreadsheet.getRow(j)
            const rowHeight = rowObject.$height

            const gridCell = gridCellDefault.cloneNode(false)
            gridCell.setAttribute("aria-rowindex", j - startRow + 1)
            gridCell.setAttribute("aria-colindex", i - startColumn + 1)
            gridCell.style.height = `${rowHeight}px`

            const value = spreadsheet.getCellValue(j, i, false)
            if (value) {
                const div = document.createElement('div')
                div.innerHTML = value
                gridCell.appendChild(div)
            }
            
            const style = spreadsheet.getStyle(j, i)
            if (style) {
                gridCell.classList.add(`${style.id}`)
            }

            column.appendChild(gridCell)

            if (i == startColumn) {
                totalHeight += rowHeight
            }   
        }

        gridSelected.appendChild(column)

        totalWidth += columnWidth
    }

    selectionWidth = totalWidth
    selectionHeight = totalHeight

    gridSelected.style.width = `${selectionWidth}px`
    gridSelected.style.height = `${selectionHeight}px`
    gridSelected.style.border = "1px solid #EDEFF0"

    return gridSelected
}

function captureSelectedViewsAboveCells(activeSheet) {
    const views = activeSheet.content.views

    const div = document.createElement('div')

    if (views) {
        views.forEach((view, index) => {
            const leftPos = view[0]
            const topPos = view[1]
            const type = view[2]
            const width = view[4].width
            const height = view[4].height

            //check if view is inside selected area
            if (leftPos - selectionStartLeft >= 0
                && leftPos + width <= selectionStartLeft + selectionWidth
                && topPos - selectionStartTop >= 0
                && topPos + height <= selectionStartTop + selectionHeight
                && selectionWidth >= width
                && selectionHeight >= height) {

                if (type === "image") { 
                    const data = view[3]
                    const img = document.createElement('img')
                    img.src = data
                    img.style.width = `${width}px`
                    img.style.height = `${height}px`
                    img.style.position = "absolute"
                    img.style.display = "block"
                    img.style.left = `${leftPos - selectionStartLeft}px`
                    img.style.top = `${topPos - selectionStartTop}px`

                    div.appendChild(img)
                }
                else if (type === "chart") { 
                    const chartContainers = document.querySelectorAll('.webix_ssheet_ui')
                    if (chartContainers) {
                        const chartContainer = Array.from(chartContainers).find(cc => {
                            const style = cc.style
                            
                            return parseInt(style.left) === leftPos && parseInt(style.top) === topPos
                                && parseInt(style.width) === width && parseInt(style.height) === height
                        })

                        if (chartContainer) {
                            chartContainer.style.position = "absolute"
                            chartContainer.style.display = "block"
                            chartContainer.style.left = `${leftPos - selectionStartLeft}px`
                            chartContainer.style.top = `${topPos - selectionStartTop}px`

                            div.appendChild(chartContainer)
                        }
                    }
                }
            }
        })

        return div
    }

    return null
}

function createSelectedArea(selectedCells, selectedViews) {
    if (!selectedCells) {
        return null
    }

    if (!selectedViews) {
        return selectedCells
    }

    const div = document.createElement('div')
    div.appendChild(selectedCells)
    Array.from(selectedViews.children).forEach(child => {
        div.appendChild(child);
    });

    div.style.width = selectedCells.style.width
    div.style.height = selectedCells.style.height
    div.style.position = "relative"

    return div
}

async function generateImage(selectedArea) {
    const div = document.createElement('div')
    div.style.width = selectedArea.style.width
    div.style.height = selectedArea.style.height

    const styleElements = document.querySelectorAll('style[type="text/css"][media="screen,print"]')
    if (styleElements) {
        const styleElement = styleElements.length > 1 ? styleElements[styleElements.length - 1] : styleElements[0]
        if (styleElement) {
            div.appendChild(styleElement)

            const styleContent = styleElement.textContent
            const match = styleContent.match(/\.wss_(\d+)/)
            if (match && match[1]) {
                const number = match[1]
                selectedArea.classList.add(`wss_${number}`)
            }
            else {
                selectedArea.classList.add("wss_1")
            }
        }
    }
    
    div.appendChild(selectedArea)

    document.body.appendChild(div)
    const canvas = await html2canvas(div)
    document.body.removeChild(div)

    const image = canvas.toDataURL("image/png")
    return image
}

function insertNewImageToSummernote(context, imageData, spreadsheetState) {
    const img = document.createElement('img')
    img.src = imageData
    img.setAttribute("data-spreadsheetState", JSON.stringify(spreadsheetState))

    const div = document.createElement('div')
    div.style.marginTop = "20px"
    div.style.marginBottom = "20px"
    div.appendChild(img)

    $(context.$note).summernote("restoreRange")
    $(context.$note).summernote("focus")
    $(context.$note).summernote("insertNode", div)
}

function replaceImageInSummernote(context, imageData, oldImage, spreadsheetState) {
    const img = document.createElement('img')
    img.src = imageData
    img.setAttribute("data-spreadsheetState", JSON.stringify(spreadsheetState))

    oldImage.replaceWith(img)
}

const openSpreadSheetModal = function(context, title, selectedImage) {
    webix.ready(function () {
        webix.ui({
            id: "spreadsheet-window",
            view:"window",
            modal: true,
            position: "center",
            head: title,
            width: context.options.spreadsheet.width === undefined ? 1200 : context.options.spreadsheet.width,
            height: context.options.spreadsheet.height === undefined ? 800 : context.options.spreadsheet.height,
            resize: true,
            body: {
                rows: [
                    {
                        view: "toolbar",
                        elements: [
                            {
                            view: "button",
                            css: "webix_primary",
                            value: "Save and close",
                            on: {
                                onItemClick: () => {
                                    const spreadsheet = $$("spreadsheet-editor")
                                    const spreadsheetState = spreadsheet.serialize({ sheets: true })
                                    const activeSheetName = spreadsheet.getActiveSheet()
                                    const activeSheet = spreadsheetState.find(sheet => sheet.name === activeSheetName)
                                    const selectedRange = spreadsheet.getSelectedRange()
                                    
                                    if (selectedRange) {
                                        const range = selectedRange.split(":")
                                        const startCell = range[0]
                                        const endCell = range[1]

                                        const selectedCells = captureSelectedCells(spreadsheet, startCell, endCell)

                                        const selectedViews = captureSelectedViewsAboveCells(activeSheet)

                                        const selectedArea = createSelectedArea(selectedCells, selectedViews)

                                        if (selectedArea) {
                                            generateImage(selectedArea).then(imageData => {
                                                if (selectedImage && context.options.spreadsheet.replace) {
                                                    replaceImageInSummernote(context, imageData, selectedImage, spreadsheetState)
                                                }
                                                else {
                                                    insertNewImageToSummernote(context, imageData, spreadsheetState)
                                                }
                                                
                                                $$("spreadsheet-window").close()
                                            });
                                        }                   
                                    }
                                    else {
                                        alert("No cells selected!")
                                    }
                                }

                                },
                            },
                            {
                                view: "button",
                                css: "webix_danger",
                                value: "Close without saving",
                                on: {
                                    onItemClick: () => {
                                        const confirm_close = window.confirm("Are you sure you want to close the editor?" + 
                                            "All unsaved changes will be lost.")

                                        if (confirm_close)
                                        {
                                            $$("spreadsheet-window").close()
                                        }
                                    },
                                }
                            }
                        ],
                    },
                    {
                        id: "spreadsheet-editor",
                        view: "spreadsheet",
                        toolbar: "full",
                        data: selectedImage == null ? null : JSON.parse(selectedImage.attr('data-spreadsheetState')),
                        on: {   
                            onAfterSelect: function (selectedCells) {
                                const spreadsheet = $$("spreadsheet-editor")

                                const length = selectedCells.length

                                const startRow = selectedCells[0].row
                                const startColumn = selectedCells[0].column

                                const endRow = selectedCells[length - 1].row
                                const endColumn = selectedCells[length - 1].column

                                let startTop = 0

                                for (let i = 1; i < startRow; i++) {
                                    const row = spreadsheet.getRow(i)
                                    startTop += row.$height
                                }

                                let startLeft = 0

                                for (let i = 1; i < startColumn; i++) {
                                    const column = spreadsheet.getColumn(i)
                                    startLeft += column.width
                                }


                                selectionStartTop = startTop
                                selectionStartLeft = startLeft
                            }
                        }
                    },
                ],
            }
        }).show();
    });
}

// Register plugin actions
$.extend($.summernote.plugins, {
    'new_spreadsheet': function (context) {
        context.memo('button.new_spreadsheet', function () {
            const button = $.summernote.ui.button({
                contents: '<span class="fa fa-child">Insert new spreadsheet</span>',
				tooltip: 'Open the spreadsheet editor and create a new spreadsheet.',
                click: () => {
                    openSpreadSheetModal(context, "New SpreadSheet", null)
                }
            })

            return button.render()
        })
    },
    'edit_spreadsheet': function (context) {
        context.memo('button.edit_spreadsheet', function () {
            const button = $.summernote.ui.button({
                contents: '<span class="fa fa-child">Edit spreadsheet</span>',
				tooltip: 'Open the spreadsheet editor and edit the selected spreadsheet.',
                click: () => {
                    const selectedImage = $(context.invoke('restoreTarget')) 
                    
                    if (selectedImage && selectedImage.is('img') && selectedImage.attr('data-spreadsheetState')) {
                        $('.note-popover').hide()

                        openSpreadSheetModal(context, "Edit SpreadSheet", selectedImage)
                    }
                    else {
                        window.alert("The selected image is not a spreadsheet!")
                    }
            
                }
            })

            return button.render()
        })
    }
})
}))