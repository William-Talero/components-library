import * as React from 'react';
import React__default from 'react';

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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var PlusIcon = function (props) { return (React__default.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, props),
    React__default.createElement("path", { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" }))); };

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".icon-container{align-items:center;display:flex;height:100%;justify-content:center;width:var(--w-container)}.styled-svg-icon{height:auto;max-height:60%;width:100%}";
styleInject(css_248z$1);

var icons = {
    plus: PlusIcon,
};
var Icon = function (_a) {
    var _b = _a.$name, $name = _b === void 0 ? "plus" : _b, $w = _a.$w;
    var SvgIcon = icons[$name];
    return (React__default.createElement("div", { className: "icon-container", style: { "--w-container": $w } },
        React__default.createElement(SvgIcon, { className: "styled-svg-icon" })));
};

var css_248z = ".button-primary{align-items:center;background-color:#659125;border:none;border-radius:.5rem;color:#fff!important;cursor:pointer;display:inline-block;display:flex;font-size:.8rem!important;font-weight:500!important;height:2.8rem;justify-content:center;margin:1rem 0;padding:.3rem .5rem;text-align:center;text-decoration:none;width:10rem}.button-primary:hover{background-color:#b9cc56;border:none;color:#000!important}.button-primary :only-child{fill:#fff!important}.button-primary:hover :only-child{fill:#000!important}.button-primary:disabled{background-color:light-dark(#efefef,#8f8f8f);border:none;color:light-dark(#8f8f8f,#efefef)!important;cursor:not-allowed}.button-primary:disabled :only-child{fill:#8f8f8f!important}.button-primary:disabled:hover{background-color:#efefef;color:#8f8f8f!important}.button-primary:active{background-color:#3e6a27;color:#fff!important}.button-primary:active :only-child{fill:#fff!important}@media screen and (max-width:60rem){.button-primary{font-size:.8rem;width:60%}}@media screen and (max-width:20rem){.button-primary{font-size:.5rem}}.button-primary.button-sm{align-items:center;background-color:#659125;border:none;border-radius:.5rem;color:#fff!important;cursor:pointer;display:inline-block;display:flex;font-size:.6rem!important;font-weight:500!important;height:2.5rem;justify-content:center;margin:1rem 0;padding:.2rem .4rem;text-align:center;text-decoration:none;width:6rem}.button-primary.button-sm:hover{background-color:#b9cc56;border:none;color:#000!important}.button-primary.button-sm :only-child{fill:#fff!important}.button-primary.button-sm:hover :only-child{fill:#000!important}.button-primary.button-sm:disabled{background-color:light-dark(#efefef,#8f8f8f);border:none;color:light-dark(#8f8f8f,#efefef)!important;cursor:not-allowed}.button-primary.button-sm:disabled :only-child{fill:#8f8f8f!important}.button-primary.button-sm:disabled:hover{background-color:#efefef;color:#8f8f8f!important}.button-primary.button-sm:active{background-color:#3e6a27;color:#fff!important}.button-primary.button-sm:active :only-child{fill:#fff!important}@media screen and (max-width:60rem){.button-primary.button-sm{font-size:.8rem;width:40%}}@media screen and (max-width:20rem){.button-primary.button-sm{font-size:.5rem}}.button-primary.button-md{align-items:center;background-color:#659125;border:none;border-radius:.5rem;color:#fff!important;cursor:pointer;display:inline-block;display:flex;font-size:.8rem!important;font-weight:500!important;height:2.8rem;justify-content:center;margin:1rem 0;padding:.3rem .5rem;text-align:center;text-decoration:none;width:10rem}.button-primary.button-md:hover{background-color:#b9cc56;border:none;color:#000!important}.button-primary.button-md :only-child{fill:#fff!important}.button-primary.button-md:hover :only-child{fill:#000!important}.button-primary.button-md:disabled{background-color:light-dark(#efefef,#8f8f8f);border:none;color:light-dark(#8f8f8f,#efefef)!important;cursor:not-allowed}.button-primary.button-md:disabled :only-child{fill:#8f8f8f!important}.button-primary.button-md:disabled:hover{background-color:#efefef;color:#8f8f8f!important}.button-primary.button-md:active{background-color:#3e6a27;color:#fff!important}.button-primary.button-md:active :only-child{fill:#fff!important}@media screen and (max-width:60rem){.button-primary.button-md{font-size:.8rem;width:60%}}@media screen and (max-width:20rem){.button-primary.button-md{font-size:.5rem}}.button-primary.button-lg{align-items:center;background-color:#659125;border:none;border-radius:.5rem;color:#fff!important;cursor:pointer;display:inline-block;display:flex;font-size:.9rem!important;font-weight:500!important;height:2.8rem;justify-content:center;margin:1rem 0;padding:.3rem .5rem;text-align:center;text-decoration:none;width:16rem}.button-primary.button-lg:hover{background-color:#b9cc56;border:none;color:#000!important}.button-primary.button-lg :only-child{fill:#fff!important}.button-primary.button-lg:hover :only-child{fill:#000!important}.button-primary.button-lg:disabled{background-color:light-dark(#efefef,#8f8f8f);border:none;color:light-dark(#8f8f8f,#efefef)!important;cursor:not-allowed}.button-primary.button-lg:disabled :only-child{fill:#8f8f8f!important}.button-primary.button-lg:disabled:hover{background-color:#efefef;color:#8f8f8f!important}.button-primary.button-lg:active{background-color:#3e6a27;color:#fff!important}.button-primary.button-lg:active :only-child{fill:#fff!important}@media screen and (max-width:60rem){.button-primary.button-lg{font-size:.8rem;width:100%}}@media screen and (max-width:20rem){.button-primary.button-lg{font-size:.5rem}}.button-secondary{align-items:center;background-color:transparent;border:2px solid light-dark(#3e6a27,#659125);border-radius:.5rem;color:light-dark(#3e6a27,#659125)!important;cursor:pointer;display:inline-block;display:flex;font-size:.8rem!important;font-weight:500!important;height:2.8rem;justify-content:center;margin:1rem 0;padding:.3rem .5rem;text-align:center;text-decoration:none;width:10rem}.button-secondary:hover{background-color:#b9cc56;border:none;color:#000!important}.button-secondary :only-child{fill:#3e6a27!important}.button-secondary:hover :only-child{fill:#000!important}.button-secondary:disabled{background-color:light-dark(#efefef,#8f8f8f);border:none;color:light-dark(#8f8f8f,#efefef)!important;cursor:not-allowed}.button-secondary:disabled :only-child{fill:#8f8f8f!important}.button-secondary:disabled:hover{background-color:#efefef;color:#8f8f8f!important}.button-secondary:active{background-color:#3e6a27;color:#fff!important}.button-secondary:active :only-child{fill:#fff!important}@media screen and (max-width:60rem){.button-secondary{font-size:.8rem;width:60%}}@media screen and (max-width:20rem){.button-secondary{font-size:.5rem}}.button-secondary.button-sm{align-items:center;background-color:transparent;border:2px solid light-dark(#3e6a27,#659125);border-radius:.5rem;color:light-dark(#3e6a27,#659125)!important;cursor:pointer;display:inline-block;display:flex;font-size:.6rem!important;font-weight:500!important;height:2.5rem;justify-content:center;margin:1rem 0;padding:.2rem .4rem;text-align:center;text-decoration:none;width:6rem}.button-secondary.button-sm:hover{background-color:#b9cc56;border:none;color:#000!important}.button-secondary.button-sm :only-child{fill:#3e6a27!important}.button-secondary.button-sm:hover :only-child{fill:#000!important}.button-secondary.button-sm:disabled{background-color:light-dark(#efefef,#8f8f8f);border:none;color:light-dark(#8f8f8f,#efefef)!important;cursor:not-allowed}.button-secondary.button-sm:disabled :only-child{fill:#8f8f8f!important}.button-secondary.button-sm:disabled:hover{background-color:#efefef;color:#8f8f8f!important}.button-secondary.button-sm:active{background-color:#3e6a27;color:#fff!important}.button-secondary.button-sm:active :only-child{fill:#fff!important}@media screen and (max-width:60rem){.button-secondary.button-sm{font-size:.8rem;width:40%}}@media screen and (max-width:20rem){.button-secondary.button-sm{font-size:.5rem}}.button-secondary.button-md{align-items:center;background-color:transparent;border:2px solid light-dark(#3e6a27,#659125);border-radius:.5rem;color:light-dark(#3e6a27,#659125)!important;cursor:pointer;display:inline-block;display:flex;font-size:.8rem!important;font-weight:500!important;height:2.8rem;justify-content:center;margin:1rem 0;padding:.3rem .5rem;text-align:center;text-decoration:none;width:10rem}.button-secondary.button-md:hover{background-color:#b9cc56;border:none;color:#000!important}.button-secondary.button-md :only-child{fill:#3e6a27!important}.button-secondary.button-md:hover :only-child{fill:#000!important}.button-secondary.button-md:disabled{background-color:light-dark(#efefef,#8f8f8f);border:none;color:light-dark(#8f8f8f,#efefef)!important;cursor:not-allowed}.button-secondary.button-md:disabled :only-child{fill:#8f8f8f!important}.button-secondary.button-md:disabled:hover{background-color:#efefef;color:#8f8f8f!important}.button-secondary.button-md:active{background-color:#3e6a27;color:#fff!important}.button-secondary.button-md:active :only-child{fill:#fff!important}@media screen and (max-width:60rem){.button-secondary.button-md{font-size:.8rem;width:60%}}@media screen and (max-width:20rem){.button-secondary.button-md{font-size:.5rem}}.button-secondary.button-lg{align-items:center;background-color:transparent;border:2px solid light-dark(#3e6a27,#659125);border-radius:.5rem;color:light-dark(#3e6a27,#659125)!important;cursor:pointer;display:inline-block;display:flex;font-size:.9rem!important;font-weight:500!important;height:2.8rem;justify-content:center;margin:1rem 0;padding:.3rem .5rem;text-align:center;text-decoration:none;width:16rem}.button-secondary.button-lg:hover{background-color:#b9cc56;border:none;color:#000!important}.button-secondary.button-lg :only-child{fill:#3e6a27!important}.button-secondary.button-lg:hover :only-child{fill:#000!important}.button-secondary.button-lg:disabled{background-color:light-dark(#efefef,#8f8f8f);border:none;color:light-dark(#8f8f8f,#efefef)!important;cursor:not-allowed}.button-secondary.button-lg:disabled :only-child{fill:#8f8f8f!important}.button-secondary.button-lg:disabled:hover{background-color:#efefef;color:#8f8f8f!important}.button-secondary.button-lg:active{background-color:#3e6a27;color:#fff!important}.button-secondary.button-lg:active :only-child{fill:#fff!important}@media screen and (max-width:60rem){.button-secondary.button-lg{font-size:.8rem;width:100%}}@media screen and (max-width:20rem){.button-secondary.button-lg{font-size:.5rem}}";
styleInject(css_248z);

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

export { Button, ButtonWithIcon, OrangeButton };
//# sourceMappingURL=index.esm.js.map
