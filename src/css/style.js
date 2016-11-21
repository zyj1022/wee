import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "sans-serif",
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "100%",
        "lineHeight": 1.25,
        "color": "#585858",
        "background": "#fff",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 1,
        "marginRight": 40,
        "marginBottom": 1,
        "marginLeft": 40
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block",
        "background": "#7548D7",
        "height": 100
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "canvas": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "video": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "a": {
        "backgroundColor": "transparent",
        "color": "#0066ff",
        "background": "transparent",
        "textDecoration": "underline"
    },
    "a:active": {
        "outline": 0,
        "textDecoration": "none"
    },
    "a:hover": {
        "outline": 0,
        "textDecoration": "none"
    },
    "abbr[title]": {
        "borderBottom": "1px dotted"
    },
    "b": {
        "fontWeight": "bold"
    },
    "strong": {
        "fontWeight": "bold"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "h1": {
        "fontSize": 2,
        "marginTop": 0.7,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0,
        "lineHeight": 3,
        "color": "#343434"
    },
    "mark": {
        "background": "#ff0",
        "color": "#000"
    },
    "small": {
        "fontSize": "80%"
    },
    "sub": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "img": {
        "border": 0,
        "MsInterpolationMode": "bicubic",
        "verticalAlign": "middle"
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "hr": {
        "boxSizing": "content-box",
        "height": 1,
        "WebkitBoxSizing": "content-box",
        "MozBoxSizing": "content-box",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "background": "#eee",
        "border": 0
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "monospace, monospace",
        "fontSize": 0.75,
        "lineHeight": 1.125,
        "color": "#000",
        "overflowValue": "break-word",
        "wordValue": "break-word",
        "wordBreak": "break-all",
        "backgroundColor": "#ececec",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "whiteSpace": "pre-wrap"
    },
    "code": {
        "fontFamily": "monospace, monospace",
        "fontSize": 0.75,
        "lineHeight": 1.125,
        "color": "#000",
        "overflowValue": "break-word",
        "wordValue": "break-word",
        "wordBreak": "break-all",
        "backgroundColor": "#ececec",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "whiteSpace": "pre-wrap"
    },
    "kbd": {
        "fontFamily": "monospace, monospace",
        "fontSize": 0.75,
        "lineHeight": 1.125,
        "color": "#000",
        "overflowValue": "break-word",
        "wordValue": "break-word",
        "wordBreak": "break-all",
        "backgroundColor": "#ececec",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "whiteSpace": "pre-wrap"
    },
    "samp": {
        "fontFamily": "monospace, monospace",
        "fontSize": 0.75,
        "lineHeight": 1.125,
        "color": "#000",
        "overflowValue": "break-word",
        "wordValue": "break-word",
        "wordBreak": "break-all",
        "backgroundColor": "#ececec",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "whiteSpace": "pre-wrap"
    },
    "button": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "optgroup": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "bold"
    },
    "select": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textTransform": "none",
        "width": 200,
        "height": 36,
        "paddingTop": 0,
        "paddingRight": 0.4,
        "paddingBottom": 0,
        "paddingLeft": 0.4,
        "outline": "none",
        "display": "block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3,
        "overflow": "hidden",
        "lineHeight": 32,
        "position": "relative"
    },
    "textarea": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "auto",
        "width": 300,
        "height": 150,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "html input[type=\"button\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"reset\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"submit\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "button::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"checkbox\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"radio\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"number\"]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "input[type=\"number\"]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "input[type=\"search\"]": {
        "WebkitAppearance": "textfield",
        "boxSizing": "content-box",
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "fieldset": {
        "border": "1px solid #c0c0c0",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "paddingTop": 0.35,
        "paddingRight": 0.625,
        "paddingBottom": 0.75,
        "paddingLeft": 0.625
    },
    "legend": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "fontSize": 0.875,
        "width": "100%",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "textAlign": "left"
    },
    "td": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "th": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "*": {
        "boxSizing": "inherit"
    },
    "*:before": {
        "boxSizing": "inherit"
    },
    "*:after": {
        "boxSizing": "inherit"
    },
    "em": {
        "fontStyle": "italic"
    },
    "ul": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 40
    },
    "ol": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 40
    },
    "ul li": {
        "marginBottom": 5
    },
    "ol li": {
        "marginBottom": 5
    },
    "dl::after": {
        "clear": "both",
        "content": "",
        "display": "table"
    },
    "dl dt": {
        "float": "left",
        "width": "25%",
        "display": "block",
        "fontWeight": "400"
    },
    "dl dd": {
        "overflow": "hidden",
        "display": "block"
    },
    "p": {
        "marginTop": 0.25,
        "marginRight": 0,
        "marginBottom": 0.25,
        "marginLeft": 0
    },
    "h2": {
        "marginTop": 1.4,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "fontSize": 1.625,
        "lineHeight": 2.75,
        "color": "#343434"
    },
    "h3": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "fontSize": 1.375,
        "lineHeight": 2.375,
        "color": "#343434"
    },
    "h4": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "fontSize": 1.125,
        "lineHeight": 2.25,
        "color": "#343434"
    },
    "h5": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0.1,
        "marginLeft": 0,
        "fontSize": 1,
        "lineHeight": 1.75,
        "color": "#343434"
    },
    "h6": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0.1,
        "marginLeft": 0,
        "fontSize": 0.875,
        "lineHeight": 1.5,
        "color": "#343434"
    },
    "blockquote": {
        "color": "#424242",
        "fontStyle": "italic",
        "marginTop": 3,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0
    },
    "blockquote p": {
        "fontSize": 1.375,
        "lineHeight": 1.75,
        "paddingLeft": 20,
        "borderLeft": "4px solid #ccc",
        "marginBottom": 0.4
    },
    "blockquote cite": {
        "fontSize": 0.75,
        "lineHeight": 1.125,
        "color": "#999",
        "fontStyle": "normal"
    },
    "blockquote cite:before": {
        "content": "'\\2014 \\0020'"
    },
    "text-left": {
        "textAlign": "left"
    },
    "text-right": {
        "textAlign": "right"
    },
    "text-center": {
        "textAlign": "center"
    },
    "text-justify": {
        "textAlign": "justify"
    },
    "text-nowrap": {
        "whiteSpace": "nowrap"
    },
    "caption": {
        "fontSize": 1.125,
        "lineHeight": "normal",
        "fontWeight": "700",
        "textAlign": "left",
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 0,
        "borderBottom": "1px solid #d7d7d7"
    },
    "table thead td": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "table thead th": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "table tbody td": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "table tbody th": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "table tfoot td": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "table tfoot th": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "table-striped>tbody>tr:nth-child(even)": {
        "backgroundColor": "#FFF"
    },
    "table-striped>tbody>tr:nth-child(odd)": {
        "backgroundColor": "#EEE"
    },
    "table-border": {
        "borderLeft": "1px solid #e9e9e9",
        "borderRight": "1px solid #e9e9e9"
    },
    "btn": {
        "border": "1px solid #d7d7d7",
        "backgroundColor": "#f3f3f3",
        "lineHeight": "normal",
        "paddingTop": 0.5,
        "paddingRight": 1,
        "paddingBottom": 0.5,
        "paddingLeft": 1,
        "textDecoration": "none",
        "fontSize": 14,
        "color": "#363636",
        "display": "inline-block",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3,
        "WebkitTransition": "all 1s ease-in",
        "MozTransition": "all 1s ease-in",
        "transition": "all 1s ease-in"
    },
    "btn:hover": {
        "textDecoration": "none"
    },
    "btn:active": {
        "textDecoration": "none"
    },
    "btn-block": {
        "display": "block"
    },
    "btn-lg": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "fontSize": 18,
        "lineHeight": 1.3333
    },
    "btn-sm": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "lineHeight": 1.5,
        "fontSize": 12
    },
    "btn-blue": {
        "background": "#2592f6",
        "color": "#fff",
        "border": "1px solid #2592f6"
    },
    "btn-green": {
        "background": "#12b335",
        "color": "#fff",
        "border": "1px solid #12b335"
    },
    "btn-orange": {
        "background": "#f77e00",
        "color": "#fff",
        "border": "1px solid #f77e00"
    },
    "btn-gray": {
        "background": "#b3b3b3",
        "color": "#fff",
        "border": "1px solid #b3b3b3"
    },
    "btn-link": {
        "color": "#0066ff",
        "textDecoration": "underline",
        "border": 0,
        "background": "transparent",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "btn-link:hover": {
        "textDecoration": "none"
    },
    "btn-link:active": {
        "outline": 0
    },
    "form": {
        "paddingTop": 1,
        "paddingBottom": 1
    },
    "label": {
        "marginBottom": 5,
        "maxWidth": "100%",
        "display": "inline-block"
    },
    "form-group ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "form-group li": {
        "listStyle": "none",
        "marginBottom": 15,
        "lineHeight": 30
    },
    "form-uniline li": {
        "float": "left",
        "marginRight": 20
    },
    "form-block label": {
        "marginRight": 5,
        "width": 100,
        "textAlign": "right"
    },
    "form-field": {
        "paddingLeft": 110
    },
    "checkbox": {
        "display": "inline-block",
        "position": "relative",
        "paddingTop": 0.5,
        "paddingBottom": 0.5
    },
    "radio": {
        "display": "inline-block",
        "position": "relative",
        "paddingTop": 0.5,
        "paddingBottom": 0.5
    },
    "checkbox label": {
        "paddingTop": 0,
        "paddingLeft": 20,
        "display": "inline-block"
    },
    "radio label": {
        "paddingTop": 0,
        "paddingLeft": 20,
        "display": "inline-block"
    },
    "checkbox input[type=\"checkbox\"]": {
        "position": "absolute",
        "top": 4,
        "left": 0
    },
    "checkbox input[type=\"radio\"]": {
        "position": "absolute",
        "top": 4,
        "left": 0
    },
    "radio input[type=\"checkbox\"]": {
        "position": "absolute",
        "top": 4,
        "left": 0
    },
    "radio input[type=\"radio\"]": {
        "position": "absolute",
        "top": 4,
        "left": 0
    },
    "input[type=\"text\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"password\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"datetime\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"datetime-local\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"date\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"month\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"time\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"week\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"number\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"email\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"url\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"tel\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "input[type=\"color\"]": {
        "width": 200,
        "height": 30,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "outline": "none",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "select[disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "textarea[disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"text\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"password\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"datetime\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"datetime-local\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"date\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"month\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"time\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"week\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"number\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"email\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"url\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"search\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"tel\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "input[type=\"color\"][disabled]": {
        "opacity": 0.35,
        "cursor": "default"
    },
    "select:before": {
        "content": "",
        "border": "6px solid transparent",
        "borderTopColor": "#676767",
        "top": "50%",
        "right": 10,
        "marginTop": -3,
        "pointerEvents": "none",
        "position": "absolute"
    },
    "select select": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "width": "120%",
        "height": 36,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": "normal",
        "border": 0,
        "background": "transparent",
        "display": "block"
    },
    "select select:focus": {
        "outline": 0
    },
    "::-webkit-input-placeholder": {
        "color": "#999"
    },
    ":-moz-placeholder": {
        "color": "#999"
    },
    "::-moz-placeholder": {
        "color": "#999"
    },
    ":-ms-input-placeholder": {
        "color": "#999"
    },
    "row::after": {
        "clear": "both",
        "content": "",
        "display": "table"
    },
    "row": {
        "position": "relative",
        "marginRight": -10,
        "marginLeft": -10
    },
    "gird-md": {
        "width": 960
    },
    "gird-hd": {
        "width": 1120
    },
    "container": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "container-full": {
        "paddingRight": 0,
        "paddingLeft": 0,
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "col-1": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "8.33333%"
    },
    "col-2": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "16.66667%"
    },
    "col-3": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "25%"
    },
    "col-4": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "33.33333%"
    },
    "col-5": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "41.66667%"
    },
    "col-6": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "50%"
    },
    "col-7": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "58.33333%"
    },
    "col-8": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "66.66667%"
    },
    "col-9": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "75%"
    },
    "col-10": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "83.33333%"
    },
    "col-11": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "91.66667%"
    },
    "col-12": {
        "paddingRight": 10,
        "paddingLeft": 10,
        "position": "relative",
        "float": "left",
        "width": "100%"
    },
    "push-1": {
        "left": "8.33333%"
    },
    "push-2": {
        "left": "16.66667%"
    },
    "push-3": {
        "left": "25%"
    },
    "push-4": {
        "left": "33.33333%"
    },
    "push-5": {
        "left": "41.66667%"
    },
    "push-6": {
        "left": "50%"
    },
    "push-7": {
        "left": "58.33333%"
    },
    "push-8": {
        "left": "66.66667%"
    },
    "push-9": {
        "left": "75%"
    },
    "push-10": {
        "left": "83.33333%"
    },
    "push-11": {
        "left": "91.66667%"
    },
    "pull-1": {
        "left": "-8.33333%"
    },
    "pull-2": {
        "left": "-16.66667%"
    },
    "pull-3": {
        "left": "-25%"
    },
    "pull-4": {
        "left": "-33.33333%"
    },
    "pull-5": {
        "left": "-41.66667%"
    },
    "pull-6": {
        "left": "-50%"
    },
    "pull-7": {
        "left": "-58.33333%"
    },
    "pull-8": {
        "left": "-66.66667%"
    },
    "pull-9": {
        "left": "-75%"
    },
    "pull-10": {
        "left": "-83.33333%"
    },
    "pull-11": {
        "left": "-91.66667%"
    },
    "no-margin": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "no-padding": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "no-float": {
        "float": "none"
    },
    "no-bg": {
        "background": "transparent"
    },
    "no-border": {
        "border": 0
    },
    "no-select": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "cursor": "default"
    },
    "fl": {
        "float": "left"
    },
    "fr": {
        "float": "right"
    },
    "alert": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "borderRadius": 5
    },
    "alert alert-link": {
        "fontWeight": "bold"
    },
    "imgresponsive": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto"
    },
    "imground": {
        "WebkitBorderRadius": 10,
        "MozBorderRadius": 10,
        "borderRadius": 10
    },
    "imgthumbnail": {
        "display": "inline-block",
        "maxWidth": "100%",
        "height": "auto",
        "lineHeight": 20,
        "backgroundColor": "transparent",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "border": "1px solid #ddd",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "imgcircle": {
        "WebkitBorderRadius": "50%",
        "MozBorderRadius": "50%",
        "borderRadius": "50%"
    },
    "flex-column": {
        "display": "-webkit-flex",
        "WebkitFlexWrap": "wrap",
        "MsFlexWrap": "wrap",
        "flexWrap": "wrap",
        "WebkitFlexDirection": "row",
        "MsFlexDirection": "row",
        "flexDirection": "row",
        "marginBottom": 20
    },
    "flex-row": {
        "display": "-webkit-flex",
        "WebkitFlexWrap": "wrap",
        "MsFlexWrap": "wrap",
        "flexWrap": "wrap",
        "WebkitFlexDirection": "column",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "marginBottom": 20
    },
    "flex-column:before": {
        "content": " ",
        "display": "-webkit-flex",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "width": 0,
        "height": 0,
        "fontSize": 0
    },
    "flex-column:after": {
        "content": " ",
        "display": "-webkit-flex",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "width": 0,
        "height": 0,
        "fontSize": 0,
        "clear": "both"
    },
    "flex-row:before": {
        "content": " ",
        "display": "-webkit-flex",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "width": 0,
        "height": 0,
        "fontSize": 0
    },
    "flex-row:after": {
        "content": " ",
        "display": "-webkit-flex",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "width": 0,
        "height": 0,
        "fontSize": 0,
        "clear": "both"
    },
    "flex-around": {
        "WebkitJustifyContent": "space-around",
        "MsJustifyContent": "space-around",
        "justifyContent": "space-around"
    },
    "flex-between": {
        "WebkitJustifyContent": "space-between",
        "MsJustifyContent": "space-between",
        "justifyContent": "space-between"
    },
    "flex-baseline": {
        "WebkitAlignItems": "baseline",
        "MsAlignItems": "baseline",
        "alignItems": "baseline"
    },
    "flex-strech": {
        "WebkitAlignItems": "stretch",
        "MsAlignItems": "stretch",
        "alignItems": "stretch"
    },
    "flex-col": {
        "WebkitFlexGrow": 1,
        "MsFlexGrow": 1,
        "flexGrow": 1
    },
    "flex-col-1": {
        "width": "4.16667%"
    },
    "flex-order-1": {
        "order": 1
    },
    "flex-col-2": {
        "width": "8.33333%"
    },
    "flex-order-2": {
        "order": 2
    },
    "flex-col-3": {
        "width": "12.5%"
    },
    "flex-order-3": {
        "order": 3
    },
    "flex-col-4": {
        "width": "16.66667%"
    },
    "flex-order-4": {
        "order": 4
    },
    "flex-col-5": {
        "width": "20.83333%"
    },
    "flex-order-5": {
        "order": 5
    },
    "flex-col-6": {
        "width": "25%"
    },
    "flex-order-6": {
        "order": 6
    },
    "flex-col-7": {
        "width": "29.16667%"
    },
    "flex-order-7": {
        "order": 7
    },
    "flex-col-8": {
        "width": "33.33333%"
    },
    "flex-order-8": {
        "order": 8
    },
    "flex-col-9": {
        "width": "37.5%"
    },
    "flex-order-9": {
        "order": 9
    },
    "flex-col-10": {
        "width": "41.66667%"
    },
    "flex-order-10": {
        "order": 10
    },
    "flex-col-11": {
        "width": "45.83333%"
    },
    "flex-order-11": {
        "order": 11
    },
    "flex-col-12": {
        "width": "50%"
    },
    "flex-order-12": {
        "order": 12
    },
    "flex-col-13": {
        "width": "54.16667%"
    },
    "flex-order-13": {
        "order": 13
    },
    "flex-col-14": {
        "width": "58.33333%"
    },
    "flex-order-14": {
        "order": 14
    },
    "flex-col-15": {
        "width": "62.5%"
    },
    "flex-order-15": {
        "order": 15
    },
    "flex-col-16": {
        "width": "66.66667%"
    },
    "flex-order-16": {
        "order": 16
    },
    "flex-col-17": {
        "width": "70.83333%"
    },
    "flex-order-17": {
        "order": 17
    },
    "flex-col-18": {
        "width": "75%"
    },
    "flex-order-18": {
        "order": 18
    },
    "flex-col-19": {
        "width": "79.16667%"
    },
    "flex-order-19": {
        "order": 19
    },
    "flex-col-20": {
        "width": "83.33333%"
    },
    "flex-order-20": {
        "order": 20
    },
    "flex-col-21": {
        "width": "87.5%"
    },
    "flex-order-21": {
        "order": 21
    },
    "flex-col-22": {
        "width": "91.66667%"
    },
    "flex-order-22": {
        "order": 22
    },
    "flex-col-23": {
        "width": "95.83333%"
    },
    "flex-order-23": {
        "order": 23
    },
    "flex-col-24": {
        "width": "100%"
    },
    "flex-order-24": {
        "order": 24
    },
    "flex-push-1": {
        "marginLeft": "4.16667%"
    },
    "flex-push-2": {
        "marginLeft": "8.33333%"
    },
    "flex-push-3": {
        "marginLeft": "12.5%"
    },
    "flex-push-4": {
        "marginLeft": "16.66667%"
    },
    "flex-push-5": {
        "marginLeft": "20.83333%"
    },
    "flex-push-6": {
        "marginLeft": "25%"
    },
    "flex-push-7": {
        "marginLeft": "29.16667%"
    },
    "flex-push-8": {
        "marginLeft": "33.33333%"
    },
    "flex-push-9": {
        "marginLeft": "37.5%"
    },
    "flex-push-10": {
        "marginLeft": "41.66667%"
    },
    "flex-push-11": {
        "marginLeft": "45.83333%"
    },
    "flex-push-12": {
        "marginLeft": "50%"
    },
    "flex-push-13": {
        "marginLeft": "54.16667%"
    },
    "flex-push-14": {
        "marginLeft": "58.33333%"
    },
    "flex-push-15": {
        "marginLeft": "62.5%"
    },
    "flex-push-16": {
        "marginLeft": "66.66667%"
    },
    "flex-push-17": {
        "marginLeft": "70.83333%"
    },
    "flex-push-18": {
        "marginLeft": "75%"
    },
    "flex-push-19": {
        "marginLeft": "79.16667%"
    },
    "flex-push-20": {
        "marginLeft": "83.33333%"
    },
    "flex-push-21": {
        "marginLeft": "87.5%"
    },
    "flex-push-22": {
        "marginLeft": "91.66667%"
    },
    "flex-push-23": {
        "marginLeft": "95.83333%"
    },
    "flex-rowflex-left": {
        "WebkitAlignItems": "flex-start",
        "MsAlignItems": "flex-start",
        "alignItems": "flex-start"
    },
    "flex-rowflex-right": {
        "WebkitAlignItems": "flex-end",
        "MsAlignItems": "flex-end",
        "alignItems": "flex-end"
    },
    "flex-rowflex-top": {
        "WebkitJustifyContent": "flex-start",
        "MsJustifyContent": "flex-start",
        "justifyContent": "flex-start"
    },
    "flex-rowflex-bottom": {
        "WebkitJustifyContent": "flex-end",
        "MsJustifyContent": "flex-end",
        "justifyContent": "flex-end"
    },
    "flex-rowflex-center": {
        "WebkitAlignItems": "center",
        "MsAlignItems": "center",
        "alignItems": "center"
    },
    "flex-rowflex-middle": {
        "WebkitJustifyContent": "center",
        "MsJustifyContent": "center",
        "justifyContent": "center"
    },
    "flex-columnflex-left": {
        "WebkitJustifyContent": "flex-start",
        "MsJustifyContent": "flex-start",
        "justifyContent": "flex-start"
    },
    "flex-columnflex-right": {
        "WebkitJustifyContent": "flex-end",
        "MsJustifyContent": "flex-end",
        "justifyContent": "flex-end"
    },
    "flex-columnflex-top": {
        "WebkitAlignItems": "flex-start",
        "MsAlignItems": "flex-start",
        "alignItems": "flex-start"
    },
    "flex-columnflex-bottom": {
        "WebkitAlignItems": "flex-end",
        "MsAlignItems": "flex-end",
        "alignItems": "flex-end"
    },
    "flex-columnflex-center": {
        "WebkitJustifyContent": "center",
        "MsJustifyContent": "center",
        "justifyContent": "center"
    },
    "flex-columnflex-middle": {
        "WebkitAlignItems": "center",
        "MsAlignItems": "center",
        "alignItems": "center"
    },
    "[class*=flex-col]flex-left": {
        "marginRight": "auto"
    },
    "[class*=flex-col]flex-right": {
        "marginLeft": "auto"
    },
    "[class*=flex-col]flex-top": {
        "marginBottom": "auto"
    },
    "[class*=flex-col]flex-bottom": {
        "marginTop": "auto"
    },
    "[class*=flex-col]flex-center": {
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "[class*=flex-col]flex-middle": {
        "marginTop": "auto",
        "marginBottom": "auto"
    },
    "flex-sm-show": {
        "display": "none"
    },
    "flex-md-show": {
        "display": "none"
    },
    "header a": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "header alogo": {
        "lineHeight": 100,
        "fontSize": 36
    },
    "header nav": {
        "float": "right",
        "lineHeight": 70,
        "color": "#fff"
    },
    "header nav li": {
        "listStyle": "none",
        "float": "left",
        "display": "block",
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 20
    },
    "row span": {
        "lineHeight": 30,
        "background": "#ccc",
        "display": "block",
        "textAlign": "center"
    },
    "col-exp row": {
        "marginBottom": 10
    },
    "col-resp md1": {
        "display": "block"
    },
    "col-resp sm": {
        "display": "none"
    },
    "col-resp md": {
        "display": "none"
    },
    "col-resp hd": {
        "display": "none"
    },
    "col-push div": {
        "marginBottom": 20
    },
    "btn-area btn": {
        "marginBottom": 20
    },
    "flex-column span": {
        "lineHeight": 30,
        "display": "block",
        "textAlign": "center",
        "border": "1px solid #ccc",
        "backgroundColor": "#eee"
    },
    "flex-row span": {
        "lineHeight": 30,
        "display": "block",
        "textAlign": "center",
        "border": "1px solid #ccc",
        "backgroundColor": "#eee"
    },
    "flex-test": {
        "marginBottom": 20
    }
});