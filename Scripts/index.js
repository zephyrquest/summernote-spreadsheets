// Configure Webix
webix.env.cdn = "https://cdn.webix.com/"; 

$(document).ready(function() {
    $('#editor').summernote({
      height: 400,
      toolbar: [
        ["style", ["bold", "italic", "underline", "clear"]],
        ["font", ["strikethrough", "superscript", "subscript"]],
        ["fontsize", ["fontsize"]],
        ["color", ["color"]],
        ["insert", ["link", "picture", "video"]],
        ["custom", ["new_spreadsheet"]]
      ],
      popover: {
        image: [
          ["imagesize", ["imageSize100", "imageSize50", "imageSize25"]],
          ["float", ["floatLeft", "floatRight", "floatNone"]],
          ["remove", ["removeMedia"]],
          ["custom", ["edit_spreadsheet"]],
        ]
      },
      spreadsheet: {
        width: 1200,
        height: 800,
        replace: true
      },
    });
  });