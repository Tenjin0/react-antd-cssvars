(self["webpackChunkreact_antd_cssvars"] = self["webpackChunkreact_antd_cssvars"] || []).push([[179],{

/***/ 3985:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/values.js/dist/index.umd.js
var index_umd = __webpack_require__(6581);
var index_umd_default = /*#__PURE__*/__webpack_require__.n(index_umd);
;// CONCATENATED MODULE: ./src/context/theme.ts

var ThemeColorKeys = [
    "primary-color",
    "secondary-color",
    "danger-color",
    "primary-color-hover",
    "secondary-color-hover",
    "danger-color-hover",
    "disable-color",
    "text-color",
    "text-color-inv",
    "background-hover",
    "background-selected",
    "table-head-text-color",
    "table-head-background",
    "table-head-background-hover",
    "table-head-background-selected",
    "table-head-background-selected-hover",
    "menu-background",
    "submenu-background",
    "menu-text-color",
];
var Theme = /** @class */ (function () {
    function Theme(theme, computed) {
        this.theme = new Map();
        for (var i = 0; i < Theme.ThemeColorKeys.length; i++) {
            var themecolorKey = Theme.ThemeColorKeys[i];
            var cssvar = this.keyToProperty(themecolorKey);
            if (theme && theme.has(themecolorKey)) {
                var color = theme.get(themecolorKey);
                this.set(themecolorKey, color, false);
            }
            else {
                var color = getComputedStyle(document.body).getPropertyValue(cssvar).trim();
                this.theme.set(themecolorKey, color);
            }
        }
        if (computed) {
            this.computed = computed;
        }
    }
    Theme.prototype.keyToProperty = function (key) {
        return "--" + key;
    };
    Theme.prototype.set = function (key, value, computed) {
        if (computed === void 0) { computed = false; }
        this.theme.set(key, value);
        var cssvar = this.keyToProperty(key);
        document.body.style.setProperty(cssvar, value);
        if (computed && this.computed) {
            this.computed(key, value);
        }
    };
    Theme.prototype.has = function (key) {
        return this.theme.has(key);
    };
    Theme.prototype.get = function (key) {
        return this.theme.get(key);
    };
    Theme.tint = function (hex, weigth) {
        var color = new (index_umd_default())(hex);
        return "#" + color.tint(weigth).hex;
    };
    Theme.shade = function (hex, weigth) {
        var color = new (index_umd_default())(hex);
        return "#" + color.tint(weigth).hex;
    };
    Theme.ThemeColorKeys = ThemeColorKeys;
    return Theme;
}());

// document.documentElement.style.setProperty("--primary-color", "#23b696");

;// CONCATENATED MODULE: ./src/context/themeProvider.ts


var ThemeContext = react.createContext(null);
var ThemeProvider = ThemeContext.Provider;
var ThemeConsumer = ThemeContext.Consumer;
/* harmony default export */ const themeProvider = (ThemeContext);


// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__(7183);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 3 modules
var es_menu = __webpack_require__(9210);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PieChartOutlined.js + 1 modules
var PieChartOutlined = __webpack_require__(2223);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DesktopOutlined.js + 1 modules
var DesktopOutlined = __webpack_require__(2164);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ContainerOutlined.js + 1 modules
var ContainerOutlined = __webpack_require__(3375);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MailOutlined.js + 1 modules
var MailOutlined = __webpack_require__(4302);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/AppstoreOutlined.js + 1 modules
var AppstoreOutlined = __webpack_require__(5405);
;// CONCATENATED MODULE: ./example/components/menu.tsx



var SubMenu = es_menu/* default.SubMenu */.Z.SubMenu;
var MenuComponent = function (props) {
    return (react.createElement(es_menu/* default */.Z, { defaultSelectedKeys: ["1"], defaultOpenKeys: [], mode: "inline", inlineCollapsed: props.collapse, collapsedWidth: 50, style: { height: "100%" } },
        react.createElement(es_menu/* default.Item */.Z.Item, { key: "1", icon: react.createElement(PieChartOutlined/* default */.Z, null) }, "Option 1"),
        react.createElement(es_menu/* default.Item */.Z.Item, { key: "2", icon: react.createElement(DesktopOutlined/* default */.Z, null) }, "Option 2"),
        react.createElement(es_menu/* default.Item */.Z.Item, { key: "3", icon: react.createElement(ContainerOutlined/* default */.Z, null) }, "Option 3"),
        react.createElement(SubMenu, { key: "sub1", icon: react.createElement(MailOutlined/* default */.Z, null), title: "Navigation One" },
            react.createElement(es_menu/* default.Item */.Z.Item, { key: "5" }, "Option 5"),
            react.createElement(es_menu/* default.Item */.Z.Item, { key: "6" }, "Option 6"),
            react.createElement(es_menu/* default.Item */.Z.Item, { key: "7" }, "Option 7"),
            react.createElement(es_menu/* default.Item */.Z.Item, { key: "8" }, "Option 8")),
        react.createElement(SubMenu, { key: "sub2", icon: react.createElement(AppstoreOutlined/* default */.Z, null), title: "Navigation Two" },
            react.createElement(es_menu/* default.Item */.Z.Item, { key: "9" }, "Option 9"),
            react.createElement(es_menu/* default.Item */.Z.Item, { key: "10" }, "Option 10"),
            react.createElement(SubMenu, { key: "sub3", title: "Submenu" },
                react.createElement(es_menu/* default.Item */.Z.Item, { key: "11" }, "Option 11"),
                react.createElement(es_menu/* default.Item */.Z.Item, { key: "12" }, "Option 12")))));
};
/* harmony default export */ const menu = (MenuComponent);

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 7 modules
var input = __webpack_require__(5019);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 44 modules
var es_select = __webpack_require__(7531);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 17 modules
var tabs = __webpack_require__(7428);
// EXTERNAL MODULE: ./node_modules/antd/es/collapse/index.js + 6 modules
var collapse = __webpack_require__(7279);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(9676);
// EXTERNAL MODULE: ./node_modules/antd/es/switch/index.js + 1 modules
var es_switch = __webpack_require__(2028);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 4 modules
var es_radio = __webpack_require__(7933);
// EXTERNAL MODULE: ./node_modules/antd/es/slider/index.js + 14 modules
var slider = __webpack_require__(5454);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 76 modules
var table = __webpack_require__(56);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/AudioOutlined.js + 1 modules
var AudioOutlined = __webpack_require__(2272);
// EXTERNAL MODULE: ./node_modules/react-color/es/index.js + 217 modules
var es = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(4549);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 4 modules
var es_button = __webpack_require__(404);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Button/index.tsx
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var ButtonComponent = function (props) {
    var convertLegacyProps = function () {
        var type = props.type || undefined;
        if (props.type === "secondary") {
            type = undefined;
        }
        return {
            type: type,
            className: classnames_default()(props.className, {
                "btn-secondary": props.type === "secondary",
                "btn-menu": props.type === "menu",
                "btn-uppercase": props.uppercase,
            }),
        };
    };
    var convertedProps = __assign(__assign(__assign({}, props), { uppercase: undefined }), convertLegacyProps());
    return react.createElement(es_button/* default */.Z, __assign({}, convertedProps), props.children);
};
/* harmony default export */ const Button = (ButtonComponent);

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 7 modules
var message = __webpack_require__(0);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 1 modules
var tooltip = __webpack_require__(1097);
;// CONCATENATED MODULE: ./src/components/ColorPicker/TintsAndShades.tsx



var Palette = function (props) {
    var onClick = function (e) {
        var hex = e.currentTarget.dataset.hex;
        navigator.clipboard.writeText(e.currentTarget.dataset.hex).then(function () {
            message/* default.config */.ZP.config({
                duration: 0.8,
                top: 0,
            });
            message/* default.info */.ZP.info({
                content: "Copy to clipboard: " + hex,
            });
        });
    };
    var color = new (index_umd_default())(props.color);
    var all = color.all();
    var base = Math.floor(all.length / 2);
    var tints = [];
    var shades = [];
    for (var i = 0; i < base; i++) {
        var element = all[i];
        tints.push(react.createElement(tooltip/* default */.Z, { key: "tint-" + i, title: "T[" + element.weight + "] #" + element.hex },
            react.createElement("div", { "data-weight": element.weight, "data-hex": "#" + element.hex, style: { background: "#" + element.hex }, onClick: onClick })));
    }
    for (var i = base + 1; i < all.length; i++) {
        var element = all[i];
        shades.push(react.createElement(tooltip/* default */.Z, { key: "shade-" + i, title: "S[" + element.weight + "] #" + element.hex },
            react.createElement("div", { "data-weight": element.weight, "data-hex": "#" + element.hex, style: { background: "#" + element.hex }, onClick: onClick })));
    }
    return (react.createElement("div", { className: "tints-shades" },
        react.createElement("div", { className: "tints" }, tints),
        react.createElement("div", { className: "shades" }, shades)));
};
/* harmony default export */ const TintsAndShades = (Palette);

;// CONCATENATED MODULE: ./src/components/ColorPicker/index.tsx
var ColorPicker_assign = (undefined && undefined.__assign) || function () {
    ColorPicker_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ColorPicker_assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





var ColorPickerChooser = function (props) {
    var _a = (0,react.useState)({
        open: false,
        color: props.defaultColor,
    }), colorPickerState = _a[0], setColorPickerState = _a[1];
    var onClickButton = function () {
        setColorPickerState(ColorPicker_assign(ColorPicker_assign({}, colorPickerState), { open: !colorPickerState.open }));
    };
    var innerOnChangeColor = function (color) {
        if (colorPickerState.color !== color.hex) {
            setColorPickerState(ColorPicker_assign(ColorPicker_assign({}, colorPickerState), { color: color.hex, open: !colorPickerState.open }));
            if (props.onChangeColor) {
                props.onChangeColor(color.hex);
            }
        }
    };
    var onClose = function () {
        setColorPickerState(ColorPicker_assign(ColorPicker_assign({}, colorPickerState), { open: !colorPickerState.open }));
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var defaultColor = props.defaultColor, onChangeColor = props.onChangeColor, tintsAndShades = props.tintsAndShades, othersProps = __rest(props, ["defaultColor", "onChangeColor", "tintsAndShades"]);
    return (react.createElement("div", { "data-testid": "colorpicker-component", className: "color-picker-chooser" },
        react.createElement("div", { onClick: onClickButton },
            react.createElement(Button, ColorPicker_assign({}, othersProps, { className: "color-picker-button" }), props.children)),
        colorPickerState.open && colorPickerState.color && (react.createElement("div", { className: "color-picker-container" },
            react.createElement(es/* SketchPicker */.xS, { color: colorPickerState.color, onChangeComplete: innerOnChangeColor }),
            react.createElement(Button, { className: "color-picker-btn-close", shape: "circle", size: "small", type: "text", onClick: onClose },
                react.createElement(CloseOutlined/* default */.Z, null)))),
        tintsAndShades && react.createElement(TintsAndShades, { color: colorPickerState.color })));
};
/* harmony default export */ const ColorPicker = (ColorPickerChooser);

// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(331);
;// CONCATENATED MODULE: ./src/components/Tag/index.tsx
var Tag_assign = (undefined && undefined.__assign) || function () {
    Tag_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Tag_assign.apply(this, arguments);
};



var TagComponent = function (props) {
    var convertLegacyProps = function () {
        var color = props.color || undefined;
        if (props.color === "primary") {
            color = undefined;
        }
        if (props.color === "primary-bg") {
            color = undefined;
        }
        if (props.color === "secondary") {
            color = undefined;
        }
        return {
            color: color,
            className: classnames_default()(props.className, {
                "tag-primary": props.color === "primary",
                "tag-secondary": props.color === "secondary",
                "tag-primary-bg": props.color === "primary-bg",
            }),
        };
    };
    var convertedProps = Tag_assign(Tag_assign({}, props), convertLegacyProps());
    return react.createElement(tag/* default */.Z, Tag_assign({}, convertedProps), props.children);
};
/* harmony default export */ const Tag = (TagComponent);

;// CONCATENATED MODULE: ./src/index.ts





// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(3296);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__(3013);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js + 3 modules
var row = __webpack_require__(4990);
// EXTERNAL MODULE: ./node_modules/antd/es/page-header/index.js + 14 modules
var page_header = __webpack_require__(2011);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(4545);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SendOutlined.js + 1 modules
var SendOutlined = __webpack_require__(4072);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js + 1 modules
var InfoCircleOutlined = __webpack_require__(8628);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/FileOutlined.js + 1 modules
var FileOutlined = __webpack_require__(6504);
;// CONCATENATED MODULE: ./example/components/pageHeader.tsx




var Paragraph = typography/* default.Paragraph */.Z.Paragraph;
// eslint-disable-next-line @typescript-eslint/ban-types
var PageHeaderComponent = function () {
    var menu = (react.createElement(es_menu/* default */.Z, null,
        react.createElement(es_menu/* default.Item */.Z.Item, null,
            react.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "http://www.alipay.com/" }, "1st menu item")),
        react.createElement(es_menu/* default.Item */.Z.Item, null,
            react.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "http://www.taobao.com/" }, "2nd menu item")),
        react.createElement(es_menu/* default.Item */.Z.Item, null,
            react.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "http://www.tmall.com/" }, "3rd menu item"))));
    var DropdownMenu = function () { return (react.createElement(dropdown/* default */.Z, { key: "more", overlay: menu },
        react.createElement(es_button/* default */.Z, { style: {
                border: "none",
                padding: 0,
            } },
            react.createElement(EllipsisOutlined/* default */.Z, { style: {
                    fontSize: 20,
                    verticalAlign: "top",
                } })))); };
    var routes = [
        {
            path: "index",
            breadcrumbName: "First-level Menu",
        },
        {
            path: "first",
            breadcrumbName: "Second-level Menu",
        },
        {
            path: "second",
            breadcrumbName: "Third-level Menu",
        },
    ];
    var IconLink = function (_a) {
        var icon = _a.icon, text = _a.text;
        return (react.createElement("div", { className: "example-icon" },
            icon,
            text));
    };
    var content = (react.createElement(react.Fragment, null,
        react.createElement(Paragraph, null, "Ant Design interprets the color system into two levels: a system-level color system and a product-level color system."),
        react.createElement(Paragraph, null, "Ant Design's design team preferred to design with the HSB color model, which makes it easier for designers to have a clear psychological expectation of color when adjusting colors, as well as facilitate communication in teams."),
        react.createElement("div", { className: "example-icon-container" },
            react.createElement(IconLink, { icon: react.createElement(SendOutlined/* default */.Z, null), text: "Quick Start" }),
            react.createElement(IconLink, { icon: react.createElement(InfoCircleOutlined/* default */.Z, null), text: "Product Info" }),
            react.createElement(IconLink, { icon: react.createElement(FileOutlined/* default */.Z, null), text: "Product Doc" }))));
    var Content = function (_a) {
        var children = _a.children, extraContent = _a.extraContent;
        return (react.createElement(row/* default */.Z, null,
            react.createElement("div", { style: { flex: 1 } }, children),
            react.createElement("div", { className: "image" }, extraContent)));
    };
    return (react.createElement(page_header/* default */.Z, { title: "Title", className: "site-page-header", subTitle: "This is a subtitle", ghost: false, tags: [
            react.createElement(Tag, { key: "tag-1", color: "primary" }, "Primary"),
            react.createElement(Tag, { key: "tag-1", color: "primary-bg" }, "Primary bg"),
            react.createElement(Tag, { key: "tag-2", color: "secondary" }, "Secondary"),
        ], extra: [
            react.createElement(es_button/* default */.Z, { key: "2" }, "Operation"),
            react.createElement(es_button/* default */.Z, { key: "1", type: "primary" }, "Primary"),
            react.createElement(DropdownMenu, { key: "more" }),
        ], avatar: { src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4" }, breadcrumb: { routes: routes } },
        react.createElement(Content, { extraContent: react.createElement("img", { src: "https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg", alt: "content", width: "100%" }) }, content)));
};
/* harmony default export */ const pageHeader = (PageHeaderComponent);

;// CONCATENATED MODULE: ./example/components/content.tsx







var Search = input/* default.Search */.Z.Search;
var Option = es_select/* default.Option */.Z.Option;
var TabPane = tabs/* default.TabPane */.Z.TabPane;
var Panel = collapse/* default.Panel */.Z.Panel;
// eslint-disable-next-line @typescript-eslint/ban-types
var MyComponent = function () {
    var theme = (0,react.useContext)(themeProvider);
    var suffix = (react.createElement(AudioOutlined/* default */.Z, { style: {
            fontSize: 16,
            color: "var(--primary-color)",
        } }));
    var columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Chinese Score",
            dataIndex: "chinese",
            sorter: {
                compare: function (a, b) { return a.chinese - b.chinese; },
            },
        },
        {
            title: "Math Score",
            dataIndex: "math",
            sorter: {
                compare: function (a, b) { return a.math - b.math; },
            },
        },
        {
            title: "English Score",
            dataIndex: "english",
            sorter: {
                compare: function (a, b) { return a.english - b.english; },
            },
        },
    ];
    var data = [
        {
            key: "1",
            name: "John Brown",
            chinese: 98,
            math: 60,
            english: 70,
        },
        {
            key: "2",
            name: "Jim Green",
            chinese: 98,
            math: 66,
            english: 89,
        },
        {
            key: "3",
            name: "Joe Black",
            chinese: 98,
            math: 90,
            english: 70,
        },
        {
            key: "4",
            name: "Jim Red",
            chinese: 88,
            math: 99,
            english: 89,
        },
    ];
    var text = "\n\tA dog is a type of domesticated animal.\n\tKnown for its loyalty and faithfulness,\n\tit can be found as a welcome guest in many households across the world.\n\t";
    var pagination = {
        total: data.length,
        pageSize: 2,
    };
    var onPrimaryChange = function (color) {
        theme.set("primary-color", color, true);
    };
    var onSecondaryChange = function (color) {
        theme.set("secondary-color", color, true);
    };
    var onMenuChange = function (color) {
        theme.set("menu-background", color, true);
    };
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { style: { display: "flex", justifyContent: "space-evenly" } },
            react.createElement(ColorPicker, { type: "primary", defaultColor: theme.get("primary-color"), onChangeColor: onPrimaryChange, tintsAndShades: true }, "Primary Color"),
            react.createElement(ColorPicker, { type: "secondary", defaultColor: theme.get("secondary-color"), onChangeColor: onSecondaryChange }, "Secondary Color"),
            react.createElement(ColorPicker, { type: "menu", danger: true, defaultColor: theme.get("menu-background"), onChangeColor: onMenuChange }, "Menu Color")),
        react.createElement("br", null),
        react.createElement("br", null),
        react.createElement(pageHeader, null),
        react.createElement("br", null),
        react.createElement("br", null),
        react.createElement("div", { style: { display: "flex", justifyContent: "space-evenly" } },
            react.createElement(Button, null, "Default Button"),
            react.createElement(Button, { type: "dashed" }, "Dashed Button"),
            react.createElement(Button, { type: "text" }, "Text Button"),
            react.createElement(Button, { type: "link" }, "Link Button")),
        react.createElement("br", null),
        react.createElement("br", null),
        react.createElement("div", { style: { display: "flex", justifyContent: "space-evenly" } },
            react.createElement("div", null,
                react.createElement(es_checkbox/* default */.Z, { checked: true }, "Checkbox")),
            react.createElement("div", null,
                react.createElement(es_switch/* default */.Z, { defaultChecked: true })),
            react.createElement("div", null,
                react.createElement(es_radio/* default.Group */.ZP.Group, { defaultValue: 4 },
                    react.createElement(es_radio/* default */.ZP, { value: 1 }, "A"),
                    react.createElement(es_radio/* default */.ZP, { value: 2 }, "B"),
                    react.createElement(es_radio/* default */.ZP, { value: 3 }, "C"),
                    react.createElement(es_radio/* default */.ZP, { value: 4 }, "D")))),
        react.createElement("br", null),
        react.createElement("br", null),
        react.createElement("div", null,
            react.createElement(input/* default */.Z, { placeholder: "Basic usage", style: { marginBottom: "15px" } }),
            react.createElement(Search, { placeholder: "input search text", enterButton: "Search", size: "large", suffix: suffix })),
        react.createElement("div", null,
            react.createElement("br", null),
            react.createElement("br", null),
            react.createElement(es_select/* default */.Z, { defaultValue: "lucy", style: { width: 120 } },
                react.createElement(Option, { value: "jack" }, "Jack"),
                react.createElement(Option, { value: "Yiminghe" }, "yiminghe"))),
        react.createElement("br", null),
        react.createElement("br", null),
        react.createElement("div", null,
            react.createElement(tabs/* default */.Z, { defaultActiveKey: "1" },
                react.createElement(TabPane, { tab: "Tab 1", key: "1" }, "Content of Tab Pane 1"),
                react.createElement(TabPane, { tab: "Tab 2", key: "2" }, "Content of Tab Pane 2"),
                react.createElement(TabPane, { tab: "Tab 3", key: "3" }, "Content of Tab Pane 3"))),
        react.createElement("br", null),
        react.createElement("br", null),
        react.createElement("div", null,
            react.createElement(collapse/* default */.Z, { defaultActiveKey: ["1"] },
                react.createElement(Panel, { header: "This is panel header 1", key: "1" },
                    react.createElement("p", null, text)),
                react.createElement(Panel, { header: "This is panel header 2", key: "2" },
                    react.createElement("p", null, text)),
                react.createElement(Panel, { header: "This is panel header 3", key: "3" },
                    react.createElement("p", null, text))),
            ","),
        react.createElement("div", null,
            react.createElement(slider/* default */.Z, { defaultValue: 30 })),
        react.createElement("br", null),
        react.createElement("br", null),
        react.createElement("div", null,
            react.createElement(table/* default */.Z, { columns: columns, dataSource: data, pagination: pagination }))));
};
/* harmony default export */ const content = (MyComponent);

;// CONCATENATED MODULE: ./example/components/index.tsx




// eslint-disable-next-line @typescript-eslint/ban-types
var components_MyComponent = function () {
    var _a = (0,react.useState)({
        collapse: false,
    }), layoutState = _a[0], setLayoutState = _a[1];
    var onMouseOver = function () {
        setLayoutState({ collapse: false });
    };
    var onMouseLeave = function () {
        setLayoutState({ collapse: true });
    };
    return (react.createElement("div", { id: "layout" },
        react.createElement(layout/* default */.Z, { id: "layout-menu", onMouseLeave: onMouseLeave, onMouseOver: onMouseOver },
            react.createElement(menu, { collapse: false })),
        react.createElement(layout/* default */.Z, { id: "layout-content" },
            react.createElement(content, null))));
};
/* harmony default export */ const components = (components_MyComponent);

;// CONCATENATED MODULE: ./example/index.tsx





var computed = function (key, value) {
    if (key === "primary-color") {
        theme.set("table-head-text-color", value);
        theme.set("table-head-background", Theme.tint(value, 90));
        theme.set("background-selected", Theme.tint(value, 90));
        theme.set("table-head-background-hover", Theme.tint(value, 75));
        theme.set("table-head-background-selected", Theme.tint(value, 15));
        theme.set("table-head-background-selected-hover", value);
    }
    if (theme.has(key + "-hover")) {
        theme.set(key + "-hover", Theme.tint(value, 17.5));
    }
    if (key === "menu-background") {
        theme.set("submenu-background", Theme.shade(value, 15));
    }
};
var theme = new Theme(null, computed);
window["theme"] = theme;
react_dom.render(react.createElement(ThemeProvider, { value: theme },
    react.createElement(components, null)), document.getElementById("root"));


/***/ })

},
0,[[3985,303,414]]]);
//# sourceMappingURL=main.js.map