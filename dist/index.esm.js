import * as React from 'react';
import React__default from 'react';
import styled from 'styled-components';
import HouseIcon from '@/assets/icons/houseIcon.svg';
import MasterIcon from '@/assets/icons/masterIcon.svg';
import PlusIcon from '@/assets/icons/plusIcon.svg';

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
        width: "4rem",
        height: "2.5rem",
        padding: ".2rem .4rem",
        fontSize: "0.6rem",
        smWidth: "40%",
    },
    md: {
        width: "8rem",
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
};

var Button = styled.button(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  padding: ", ";\n  background-color: ", ";\n  border: ", ";\n  color: ", ";\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 1rem 0;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ", " !important;\n  font-weight: 500 !important;\n  margin: ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: #000;\n    border: none;\n  }\n\n  :only-child {\n    fill: ", ";\n  }\n\n  &:hover :only-child {\n    fill: #000 !important;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    cursor: not-allowed;\n    color: ", " !important;\n    border: none;\n\n    :only-child {\n      fill: ", " !important;\n    }\n  }\n\n  &:active {\n    background-color: ", ";\n    color: #fff !important;\n\n    :only-child {\n      fill: #fff !important;\n    }\n  }\n\n  @media screen and (max-width: 60rem) {\n    width: ", ";\n    font-size: 0.8rem;\n  }\n\n  @media screen and (max-width: 20rem) {\n    font-size: 0.5rem;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  padding: ", ";\n  background-color: ", ";\n  border: ", ";\n  color: ", ";\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 1rem 0;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ", " !important;\n  font-weight: 500 !important;\n  margin: ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: #000;\n    border: none;\n  }\n\n  :only-child {\n    fill: ", ";\n  }\n\n  &:hover :only-child {\n    fill: #000 !important;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    cursor: not-allowed;\n    color: ", " !important;\n    border: none;\n\n    :only-child {\n      fill: ", " !important;\n    }\n  }\n\n  &:active {\n    background-color: ", ";\n    color: #fff !important;\n\n    :only-child {\n      fill: #fff !important;\n    }\n  }\n\n  @media screen and (max-width: 60rem) {\n    width: ", ";\n    font-size: 0.8rem;\n  }\n\n  @media screen and (max-width: 20rem) {\n    font-size: 0.5rem;\n  }\n"])), function (props) {
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
    return props.$type == "primary"
        ? props.$bgcolor
            ? generalColors[props.$bgcolor]
            : generalColors.primary
        : "transparent";
}, function (props) {
    return props.$type == "primary" ? "none" : "1px solid ".concat(generalColors.terciary);
}, function (props) {
    return props.$type == "primary"
        ? props.$textcolor
            ? props.$textcolor
            : "white"
        : props.$bgcolor
            ? generalColors[props.$bgcolor]
            : generalColors.terciary;
}, function (props) {
    return props.$size
        ? buttonSizes[props.$size].fontSize
        : buttonSizes.md.fontSize;
}, function (props) { return props.$m; }, function (props) {
    return props.$bgcolor
        ? generalColors["".concat(props.$bgcolor, "Hover")]
        : generalColors.primary;
}, function (props) {
    return props.$type == "primary"
        ? props.$textcolor
            ? props.$textcolor
            : "white"
        : props.$bgcolor
            ? generalColors[props.$bgcolor]
            : generalColors.terciary;
}, generalColors.disabled, generalColors.disabledSecond, generalColors.disabledSecond, generalColors.terciary, function (props) {
    return props.$size
        ? buttonSizes[props.$size].smWidth
        : props.$w
            ? props.$w
            : buttonSizes.md.smWidth;
});
var ButtonContent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  overflow: hidden;\n"], ["\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  overflow: hidden;\n"])));
var OrangeButton = styled(Button)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 2.5rem;\n  background-color: ", ";\n  border-radius: 1rem;\n  border-top-right-radius: 0;\n  border: ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: #fff;\n  }\n\n  &:active {\n    background-color: ", ";\n    border: 4px solid ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: #fff !important;\n    border: none;\n  }\n"], ["\n  height: 2.5rem;\n  background-color: ", ";\n  border-radius: 1rem;\n  border-top-right-radius: 0;\n  border: ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: #fff;\n  }\n\n  &:active {\n    background-color: ", ";\n    border: 4px solid ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: #fff !important;\n    border: none;\n  }\n"])), function (props) {
    return props.$type == "primary"
        ? props.$bgcolor
            ? generalColors.secondary
            : generalColors.secondary
        : "transparent";
}, function (props) {
    return props.$type == "primary"
        ? "none"
        : "1px solid ".concat(generalColors.quaternary);
}, function (props) {
    return props.$type == "primary"
        ? props.$textcolor
            ? props.$textcolor
            : "white"
        : props.$bgcolor
            ? generalColors.secondary
            : generalColors.quaternary;
}, generalColors.secondaryHover, generalColors.quaternary, generalColors.secondaryHover, generalColors.disabledSecond);
var templateObject_1$1, templateObject_2, templateObject_3;

var icons = {
    house: HouseIcon,
    master: MasterIcon,
    plus: PlusIcon,
};
var StyledSvgIcon = styled.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 15%;\n  height: auto;\n  max-height: 60%;\n"], ["\n  width: 15%;\n  height: auto;\n  max-height: 60%;\n"])));
var Icon = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "plus" : _b;
    var SvgIcon = icons[name];
    return React__default.createElement(StyledSvgIcon, { as: SvgIcon });
};
var templateObject_1;

var ButtonWithIcon = function (data) {
    var $size = data.$size, icon = data.icon, children = data.children;
    return (React.createElement(Button, __assign({}, data),
        React.createElement(Icon, { name: icon }),
        React.createElement(ButtonContent, null, children),
        $size == "lg" && React.createElement(Icon, { name: icon })));
};

export { Button, ButtonContent, ButtonWithIcon, OrangeButton };
//# sourceMappingURL=index.esm.js.map
