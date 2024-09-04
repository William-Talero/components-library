import * as React from 'react';
import React__default from 'react';
import styled from 'styled-components';

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


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var PlusIcon = function (props) { return (React__default.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, props),
    React__default.createElement("path", { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" }))); };

var icons = {
    plus: PlusIcon,
};
var IconContainer = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  width: ", ";\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: ", ";\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (props) { return props.$wContainer; });
var StyledSvgIcon = styled.svg(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\nwidth: 100%;\nheight: auto;\nmax-height: 60%;\n"], ["\nwidth: 100%;\nheight: auto;\nmax-height: 60%;\n"])));
var Icon = function (_a) {
    var _b = _a.$name, $name = _b === void 0 ? "plus" : _b, $w = _a.$w;
    var SvgIcon = icons[$name];
    return (React__default.createElement(IconContainer, { "$wContainer": $w },
        React__default.createElement(StyledSvgIcon, { as: SvgIcon })));
};
var templateObject_1$1, templateObject_2$1;

var Button = function (data) {
    var children = data.children, $type = data.$type, $size = data.$size, $m = data.$m, rest = __rest(data, ["children", "$type", "$size", "$m"]);
    var className = "button button-".concat($type, " button-").concat($size, " button-").concat($m);
    return (React.createElement("button", __assign({ className: className }, rest), children));
};
var ButtonWithIcon = function (data) {
    var children = data.children, $type = data.$type, $size = data.$size, $m = data.$m, rest = __rest(data, ["children", "$type", "$size", "$m"]);
    var classNames = "button button-".concat($type, " button-").concat($size, " button-").concat($m);
    return (React.createElement("button", __assign({ className: classNames }, rest),
        React.createElement(Icon, { "$name": "plus", "$w": "10%" }),
        React.createElement("div", { style: { width: "100%" } }, children),
        $size === "lg" && React.createElement(Icon, { "$name": "plus", "$w": "10%" })));
};
var OrangeButton = function (data) {
    var children = data.children, $type = data.$type, $size = data.$size, $m = data.$m, rest = __rest(data, ["children", "$type", "$size", "$m"]);
    var classNames = "button button-".concat($type, " button-").concat($size, " button-").concat($m);
    return (React.createElement("button", __assign({ className: classNames }, rest), children));
};

var buttonSizes = {
    sm: {
        width: "6rem",
        height: "2.5rem",
        padding: ".2rem .4rem",
        fontSize: "0.6rem",
        smWidth: "40%",
    },
    md: {
        width: "10rem",
        height: "2.8rem",
        padding: ".3rem .5rem",
        fontSize: "0.8rem",
        smWidth: "60%",
    },
    lg: {
        width: "16rem",
        height: "2.8rem",
        padding: ".3rem .5rem",
        fontSize: "0.9rem",
        smWidth: "100%",
    },
};

var generalColors = {
    primary: "#659125",
    secondary: "#fc802a",
    terciary: "#3E6A27",
    quaternary: "#FC8029",
    disabled: "#EFEFEF",
    disabledSecond: "#8f8f8f",
    primaryHover: "#B9CC56",
    secondaryHover: "#FB6903",
    principalDark: "#292929",
};

var ButtonElement = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  padding: ", ";\n  background-color: ", ";\n  border: ", ";\n  color: ", " !important;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: ", ";\n  cursor: pointer;\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ", " !important;\n  font-weight: 500 !important;\n\n  &:hover {\n    background-color: ", ";\n    color: #000 !important;\n    border: none;\n  }\n\n  :only-child {\n    fill: ", " !important;\n  }\n\n  &:hover :only-child {\n    fill: #000 !important;\n  }\n\n  &:disabled {\n    background-color: light-dark(\n      ", ",\n      ", "\n    );\n    cursor: not-allowed;\n    color: light-dark(\n      ", ",\n      ", "\n    ) !important;\n    border: none;\n\n    :only-child {\n      fill: ", " !important;\n    }\n\n    &:hover {\n      background-color: ", ";\n      color: ", " !important;\n    }\n  }\n\n  &:active {\n    background-color: ", ";\n    color: #fff !important;\n\n    :only-child {\n      fill: #fff !important;\n    }\n  }\n\n  @media screen and (max-width: 60rem) {\n    width: ", ";\n    font-size: 0.8rem;\n  }\n\n  @media screen and (max-width: 20rem) {\n    font-size: 0.5rem;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  padding: ", ";\n  background-color: ", ";\n  border: ", ";\n  color: ", " !important;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: ", ";\n  cursor: pointer;\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ", " !important;\n  font-weight: 500 !important;\n\n  &:hover {\n    background-color: ", ";\n    color: #000 !important;\n    border: none;\n  }\n\n  :only-child {\n    fill: ", " !important;\n  }\n\n  &:hover :only-child {\n    fill: #000 !important;\n  }\n\n  &:disabled {\n    background-color: light-dark(\n      ", ",\n      ", "\n    );\n    cursor: not-allowed;\n    color: light-dark(\n      ", ",\n      ", "\n    ) !important;\n    border: none;\n\n    :only-child {\n      fill: ", " !important;\n    }\n\n    &:hover {\n      background-color: ", ";\n      color: ", " !important;\n    }\n  }\n\n  &:active {\n    background-color: ", ";\n    color: #fff !important;\n\n    :only-child {\n      fill: #fff !important;\n    }\n  }\n\n  @media screen and (max-width: 60rem) {\n    width: ", ";\n    font-size: 0.8rem;\n  }\n\n  @media screen and (max-width: 20rem) {\n    font-size: 0.5rem;\n  }\n"])), function (props) {
    return props.$size
        ? buttonSizes[props.$size].width
        : props.$w
            ? props.$w
            : buttonSizes.md.width;
}, function (props) {
    return props.$size
        ? buttonSizes[props.$size].height
        : props.$h
            ? props.$h
            : buttonSizes.md.height;
}, function (props) {
    return props.$size ? buttonSizes[props.$size].padding : buttonSizes.md.padding;
}, function (props) {
    return props.$type == "primary" ? generalColors.primary : "transparent";
}, function (props) {
    return props.$type == "primary"
        ? "none"
        : "2px solid light-dark(".concat(generalColors.terciary, ", ").concat(generalColors.primary, ")");
}, function (props) {
    return props.$type == "primary"
        ? "white"
        : "light-dark(".concat(generalColors.terciary, ", ").concat(generalColors.primary, ")");
}, function (props) { return props.$m; }, function (props) {
    return props.$size
        ? buttonSizes[props.$size].fontSize
        : buttonSizes.md.fontSize;
}, generalColors.primaryHover, function (props) {
    return props.$type == "primary" ? "white" : generalColors.terciary;
}, generalColors.disabled, generalColors.disabledSecond, generalColors.disabledSecond, generalColors.disabled, generalColors.disabledSecond, generalColors.disabled, generalColors.disabledSecond, generalColors.terciary, function (props) {
    return props.$size
        ? buttonSizes[props.$size].smWidth
        : props.$w
            ? props.$w
            : buttonSizes.md.smWidth;
});
var ButtonContent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  overflow: hidden;\n"], ["\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  overflow: hidden;\n"])));
var OrangeButtonElement = styled(ButtonElement)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 2.5rem;\n  background-color: ", ";\n  border-radius: 1rem;\n  border-top-right-radius: 0;\n  border: ", ";\n  color: ", " !important;\n\n  &:hover {\n    background-color: ", ";\n    color: #fff !important;\n  }\n\n  &:active {\n    background-color: ", ";\n    border: 4px solid ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: #fff !important;\n    border: none;\n  }\n"], ["\n  height: 2.5rem;\n  background-color: ", ";\n  border-radius: 1rem;\n  border-top-right-radius: 0;\n  border: ", ";\n  color: ", " !important;\n\n  &:hover {\n    background-color: ", ";\n    color: #fff !important;\n  }\n\n  &:active {\n    background-color: ", ";\n    border: 4px solid ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: #fff !important;\n    border: none;\n  }\n"])), function (props) {
    return props.$type == "primary" ? generalColors.secondary : "transparent";
}, function (props) {
    return props.$type == "primary"
        ? "none"
        : "1px solid ".concat(generalColors.quaternary);
}, function (props) {
    return props.$type == "primary" ? "white" : generalColors.quaternary;
}, generalColors.secondaryHover, generalColors.quaternary, generalColors.secondaryHover, generalColors.disabledSecond);
var templateObject_1, templateObject_2, templateObject_3;

export { Button, ButtonContent, ButtonElement, ButtonWithIcon, OrangeButton, OrangeButtonElement };
//# sourceMappingURL=bundle.js.map
