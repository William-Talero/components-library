'use strict';

var styled = require('styled-components');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var buttonSizes = {
    sm: {
        width: "5em",
        height: "2rem",
        padding: "10px 20px",
    },
    md: {
        width: "7em",
        height: "3rem",
        padding: "15px 32px",
    },
    lg: {
        width: "9em",
        height: "4rem",
        padding: "20px 40px",
    },
};

var generalColors = {
    primary: "#fc802a",
    secondary: "#659125",
};

var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  padding: ", ";\n  background-color: ", ";\n  border: none;\n  color: ", ";\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 1rem 0;\n  cursor: pointer;\n  border-radius: 1rem;\n"], ["\n  width: ", ";\n  height: ", ";\n  padding: ", ";\n  background-color: ", ";\n  border: none;\n  color: ", ";\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 1rem 0;\n  cursor: pointer;\n  border-radius: 1rem;\n"])), function (props) {
    return props.size
        ? buttonSizes[props.size].width
        : props.w
            ? props.w
            : buttonSizes.md.width;
}, function (props) {
    return props.size
        ? buttonSizes[props.size].height
        : props.h
            ? props.h
            : buttonSizes.md.height;
}, function (props) {
    return props.size ? buttonSizes[props.size].padding : buttonSizes.md.padding;
}, function (props) {
    return props.bgcolor ? generalColors[props.bgcolor] : props.w;
}, function (props) { return (props.textcolor ? props.textcolor : "white"); });
var templateObject_1;

exports.Button = Button;
//# sourceMappingURL=index.js.map
