(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[9750],{"./src/markdown/markdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Markdown});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_heading_heading_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/heading/heading.css"),_heading_heading_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_heading_heading_css__WEBPACK_IMPORTED_MODULE_2__),_link_link_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/link/link.css"),_link_link_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_link_link_css__WEBPACK_IMPORTED_MODULE_3__),_markdown_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/markdown/markdown.css"),_markdown_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_markdown_css__WEBPACK_IMPORTED_MODULE_4__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");class Markdown extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{className,children,inline}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,_heading_heading_css__WEBPACK_IMPORTED_MODULE_2___default().contentWithHeadings,_link_link_css__WEBPACK_IMPORTED_MODULE_3___default().withLinks,{[_markdown_css__WEBPACK_IMPORTED_MODULE_4___default().markdown]:!inline,[_markdown_css__WEBPACK_IMPORTED_MODULE_4___default().inline]:inline});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:classes,children})}}Markdown.propTypes={inline:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string},Markdown.__docgenInfo={description:"@name Markdown",methods:[],displayName:"Markdown",props:{inline:{required:!1,tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/code/highlight.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'/*\n  Custom theme for highlight.js\n  Based on "idea.css" and "darcula.css" themes of hljs distributive\n*/\n\n.highlightContainer_f8e9.hljs {\n    display: block;\n    overflow-x: auto;\n\n    color: var(--ring-code-color);\n  }\n\n.highlightContainer_f8e9 .hljs-subst,.highlightContainer_f8e9 .hljs-title {\n    color: var(--ring-code-color);\n\n    font-weight: normal;\n  }\n\n.highlightContainer_f8e9 .hljs-comment,.highlightContainer_f8e9 .hljs-quote {\n    color: var(--ring-code-comment-color);\n\n    font-style: italic;\n  }\n\n.highlightContainer_f8e9 .hljs-meta {\n    color: var(--ring-code-meta-color);\n  }\n\n.highlightContainer_f8e9 .hljs-tag {\n    background: var(--ring-code-tag-background-color);\n    box-shadow: 0 1px var(--ring-code-tag-background-color), 0 -1px var(--ring-code-tag-background-color);\n  }\n\n.highlightContainer_f8e9 .hljs-section,.highlightContainer_f8e9 .hljs-literal,.highlightContainer_f8e9 .hljs-keyword,.highlightContainer_f8e9 .hljs-type {\n    color: var(--ring-code-keyword-color);\n\n    font-weight: var(--ring-font-weight-bold);\n  }\n\n.highlightContainer_f8e9 .hljs-name,.highlightContainer_f8e9 .hljs-selector-pseudo,.highlightContainer_f8e9 .hljs-selector-id,.highlightContainer_f8e9 .hljs-selector-class {\n    color: var(--ring-code-tag-color);\n\n    font-weight: var(--ring-code-tag-font-weight);\n  }\n\n.highlightContainer_f8e9 .hljs-selector-tag {\n    color: var(--ring-code-keyword-color);\n\n    font-weight: var(--ring-code-tag-font-weight);\n  }\n\n.highlightContainer_f8e9 .hljs-attr {\n    color: var(--ring-code-field-color);\n\n    font-weight: var(--ring-font-weight-bold);\n  }\n\n.highlightContainer_f8e9 .hljs-tag > .hljs-attr,.highlightContainer_f8e9 .hljs-attribute {\n    color: var(--ring-code-attribute-color);\n\n    font-weight: var(--ring-code-tag-font-weight);\n  }\n\n.highlightContainer_f8e9 .hljs-number,.highlightContainer_f8e9 .hljs-regexp,.highlightContainer_f8e9 .hljs-link {\n    color: var(--ring-code-number-color);\n\n    font-weight: normal;\n  }\n\n.highlightContainer_f8e9 .hljs-string {\n    color: var(--ring-code-string-color);\n\n    font-weight: var(--ring-font-weight-bold);\n  }\n\n.highlightContainer_f8e9 .hljs-doctag {\n    text-decoration: underline;\n  }\n\n.highlightContainer_f8e9 .hljs-variable,.highlightContainer_f8e9 .hljs-template-variable {\n    color: var(--ring-code-field-color);\n  }\n\n.highlightContainer_f8e9 .hljs-addition {\n    background: var(--ring-code-addition-color);\n  }\n\n.highlightContainer_f8e9 .hljs-deletion {\n    background: var(--ring-code-deletion-color);\n  }\n\n.highlightContainer_f8e9 .hljs-emphasis {\n    font-style: italic;\n  }\n\n.highlightContainer_f8e9 .hljs-strong {\n    font-weight: var(--ring-font-weight-bold);\n  }\n',"",{version:3,sources:["webpack://./src/code/highlight.css"],names:[],mappings:"AAAA;;;CAGC;;AAGC;IACE,cAAc;IACd,gBAAgB;;IAEhB,6BAA6B;EAC/B;;AAEA;IAEE,6BAA6B;;IAE7B,mBAAmB;EACrB;;AAEA;IAEE,qCAAqC;;IAErC,kBAAkB;EACpB;;AAEA;IACE,kCAAkC;EACpC;;AAEA;IACE,iDAAiD;IACjD,qGAAqG;EACvG;;AAEA;IAIE,qCAAqC;;IAErC,yCAAyC;EAC3C;;AAEA;IAIE,iCAAiC;;IAEjC,6CAA6C;EAC/C;;AAEA;IACE,qCAAqC;;IAErC,6CAA6C;EAC/C;;AAEA;IACE,mCAAmC;;IAEnC,yCAAyC;EAC3C;;AAEA;IAEE,uCAAuC;;IAEvC,6CAA6C;EAC/C;;AAEA;IAGE,oCAAoC;;IAEpC,mBAAmB;EACrB;;AAEA;IACE,oCAAoC;;IAEpC,yCAAyC;EAC3C;;AAEA;IACE,0BAA0B;EAC5B;;AAEA;IAEE,mCAAmC;EACrC;;AAEA;IACE,2CAA2C;EAC7C;;AAEA;IACE,2CAA2C;EAC7C;;AAEA;IACE,kBAAkB;EACpB;;AAEA;IACE,yCAAyC;EAC3C",sourcesContent:['/*\n  Custom theme for highlight.js\n  Based on "idea.css" and "darcula.css" themes of hljs distributive\n*/\n\n.highlightContainer {\n  &:global(.hljs) {\n    display: block;\n    overflow-x: auto;\n\n    color: var(--ring-code-color);\n  }\n\n  & :global(.hljs-subst),\n  & :global(.hljs-title) {\n    color: var(--ring-code-color);\n\n    font-weight: normal;\n  }\n\n  & :global(.hljs-comment),\n  & :global(.hljs-quote) {\n    color: var(--ring-code-comment-color);\n\n    font-style: italic;\n  }\n\n  & :global(.hljs-meta) {\n    color: var(--ring-code-meta-color);\n  }\n\n  & :global(.hljs-tag) {\n    background: var(--ring-code-tag-background-color);\n    box-shadow: 0 1px var(--ring-code-tag-background-color), 0 -1px var(--ring-code-tag-background-color);\n  }\n\n  & :global(.hljs-section),\n  & :global(.hljs-literal),\n  & :global(.hljs-keyword),\n  & :global(.hljs-type) {\n    color: var(--ring-code-keyword-color);\n\n    font-weight: var(--ring-font-weight-bold);\n  }\n\n  & :global(.hljs-name),\n  & :global(.hljs-selector-pseudo),\n  & :global(.hljs-selector-id),\n  & :global(.hljs-selector-class) {\n    color: var(--ring-code-tag-color);\n\n    font-weight: var(--ring-code-tag-font-weight);\n  }\n\n  & :global(.hljs-selector-tag) {\n    color: var(--ring-code-keyword-color);\n\n    font-weight: var(--ring-code-tag-font-weight);\n  }\n\n  & :global(.hljs-attr) {\n    color: var(--ring-code-field-color);\n\n    font-weight: var(--ring-font-weight-bold);\n  }\n\n  & :global(.hljs-tag) > :global(.hljs-attr),\n  & :global(.hljs-attribute) {\n    color: var(--ring-code-attribute-color);\n\n    font-weight: var(--ring-code-tag-font-weight);\n  }\n\n  & :global(.hljs-number),\n  & :global(.hljs-regexp),\n  & :global(.hljs-link) {\n    color: var(--ring-code-number-color);\n\n    font-weight: normal;\n  }\n\n  & :global(.hljs-string) {\n    color: var(--ring-code-string-color);\n\n    font-weight: var(--ring-font-weight-bold);\n  }\n\n  & :global(.hljs-doctag) {\n    text-decoration: underline;\n  }\n\n  & :global(.hljs-variable),\n  & :global(.hljs-template-variable) {\n    color: var(--ring-code-field-color);\n  }\n\n  & :global(.hljs-addition) {\n    background: var(--ring-code-addition-color);\n  }\n\n  & :global(.hljs-deletion) {\n    background: var(--ring-code-deletion-color);\n  }\n\n  & :global(.hljs-emphasis) {\n    font-style: italic;\n  }\n\n  & :global(.hljs-strong) {\n    font-weight: var(--ring-font-weight-bold);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={highlightContainer:"highlightContainer_f8e9"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/heading/heading.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".contentWithHeadings_cdca h1,.contentWithHeadings_cdca:is(h1),.contentWithHeadings_cdca h2,.contentWithHeadings_cdca:is(h2),.contentWithHeadings_cdca h3,.contentWithHeadings_cdca:is(h3),.contentWithHeadings_cdca h4,.contentWithHeadings_cdca:is(h4) {\n    margin-top: var(--ring-line-height);\n\n    font-weight: var(--ring-font-weight-bold);\n  }\n\n:is(.contentWithHeadings_cdca h1,.contentWithHeadings_cdca:is(h1),.contentWithHeadings_cdca h2,.contentWithHeadings_cdca:is(h2),.contentWithHeadings_cdca h3,.contentWithHeadings_cdca:is(h3),.contentWithHeadings_cdca h4,.contentWithHeadings_cdca:is(h4)):first-child {\n      margin-top: 0;\n    }\n\n.contentWithHeadings_cdca :is(h1,h2),.contentWithHeadings_cdca:is(h1,h2) {\n    margin-bottom: 8px;\n\n    color: var(--ring-heading-color);\n  }\n\n.contentWithHeadings_cdca h1,.contentWithHeadings_cdca:is(h1) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n.contentWithHeadings_cdca h2,.contentWithHeadings_cdca:is(h2) {\n    font-size: 20px;\n    line-height: 24px;\n  }\n\n.contentWithHeadings_cdca h3,.contentWithHeadings_cdca:is(h3) {\n    margin-bottom: 0;\n\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n.contentWithHeadings_cdca h4,.contentWithHeadings_cdca:is(h4) {\n    margin-bottom: 1px;\n\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    font-size: 12px;\n    font-weight: normal;\n    line-height: 18px;\n  }\n\n.heading_cd1b {\n}\n\n.caps_ae59 {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n.heading_cd1b.bold_f434 {\n  font-weight: var(--ring-font-weight-bold);\n}\n","",{version:3,sources:["webpack://./src/heading/heading.css"],names:[],mappings:"AAGE;IAQE,mCAAmC;;IAEnC,yCAAyC;EAK3C;;AAHE;MACE,aAAa;IACf;;AAIF;IAEE,kBAAkB;;IAElB,gCAAgC;EAClC;;AAEA;IAEE,eAAe;IACf,iBAAiB;EACnB;;AAEA;IAEE,eAAe;IACf,iBAAiB;EACnB;;AAEA;IAEE,gBAAgB;;IAEhB,eAAe;IACf,iBAAiB;EACnB;;AAEA;IAEE,kBAAkB;;IAElB,mBAAmB;IACnB,yBAAyB;;IAEzB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;EACnB;;AAGF;AAGA;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,yCAAyC;AAC3C",sourcesContent:['@import "../global/variables.css";\n\n.contentWithHeadings {\n  & h1,\n  &:is(h1),\n  & h2,\n  &:is(h2),\n  & h3,\n  &:is(h3),\n  & h4,\n  &:is(h4) {\n    margin-top: var(--ring-line-height);\n\n    font-weight: var(--ring-font-weight-bold);\n\n    &:first-child {\n      margin-top: 0;\n    }\n  }\n\n\n  & :is(h1, h2),\n  &:is(h1, h2) {\n    margin-bottom: 8px;\n\n    color: var(--ring-heading-color);\n  }\n\n  & h1,\n  &:is(h1) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n  & h2,\n  &:is(h2) {\n    font-size: 20px;\n    line-height: 24px;\n  }\n\n  & h3,\n  &:is(h3) {\n    margin-bottom: 0;\n\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n  & h4,\n  &:is(h4) {\n    margin-bottom: 1px;\n\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    font-size: 12px;\n    font-weight: normal;\n    line-height: 18px;\n  }\n}\n\n.heading {\n  composes: font from "../global/global.css";\n  composes: contentWithHeadings;\n}\n\n.caps {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n.heading.bold {\n  font-weight: var(--ring-font-weight-bold);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={contentWithHeadings:"contentWithHeadings_cdca",heading:`heading_cd1b ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.font} contentWithHeadings_cdca`,caps:"caps_ae59",bold:"bold_f434"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/link/link.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,"@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n.link_c73c,\n.withLinks_a3f8 a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n}\n\n@media (resolution >= 2dppx) {\n\n.link_c73c,\n.withLinks_a3f8 a {\n    text-decoration-thickness: 0.5px;\n}\n  }\n\n.hover_e4ca:is(.link_c73c,.withLinks_a3f8 a) {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.pseudo_cb40:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration: none;\n  }}\n\n:is(.link_c73c,.withLinks_a3f8 a):focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n.link_c73c.active_eef2 {\n  color: inherit;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["<no source>","webpack://./src/link/link.css"],names:[],mappings:"AAAA,wGAAA;IAAA,gCAAA;;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;ACEA;;EAEE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EAE7B,aAAa;;EAEb,0BAA0B;EAC1B,8BAA8B;EAC9B,0BAA0B;AAuB5B;;AArBE;;AAbF;;IAcI,gCAAgC;AAoBpC;EAnBE;;AAEA;IAEE,+BAA+B;;IAE/B,gBAAgB;;IAEhB,mCAAmC;EACrC;;AAEA,yDAAyD;;AD5B3D,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ACiCE;IACE,oDAAoD;EACtD;;AAGF;EACE,cAAc;AAChB;;ADxCA,wGAAA;EAAA,eAAA;CAAA,CAAA;;AC8CA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:[null,'@import "../global/variables.css";\n\n.link,\n.withLinks a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n\n  @media (resolution >= 2dppx) {\n    text-decoration-thickness: 0.5px;\n  }\n\n  &:hover,\n  &.hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  &.pseudo:hover {\n    text-decoration: none;\n  }\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n.link.active {\n  color: inherit;\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",withLinks:"withLinks_a3f8",hover:"hover_e4ca",pseudo:"pseudo_cb40",active:"active_eef2",inherit:"inherit_c3d7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/markdown/markdown.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'.inline_f46d,.inline_f46d p {\n    display: inline;\n  }\n\n.markdown_c055 {\n}\n\n.markdown_c055 ol,.markdown_c055 ul {\n    margin: 0;\n  }\n\n.markdown_c055 p,.markdown_c055 blockquote,.markdown_c055 pre {\n    margin: 0;\n  }\n\n:is(.markdown_c055 p,.markdown_c055 blockquote,.markdown_c055 pre):not(:first-child) {\n      margin-top: 10px;\n    }\n\n.markdown_c055 li {\n    margin-top: 10px;\n  }\n\n:is(:is(.markdown_c055 li) p,:is(.markdown_c055 li) blockquote,:is(.markdown_c055 li) pre):not(:first-child) {\n        margin-top: 6px;\n      }\n\n.markdown_c055 hr {\n    margin: 10px 0;\n\n    border: none;\n    border-bottom: 1px solid var(--ring-line-color);\n  }\n\n.markdown_c055 blockquote {\n    padding: 0 0 0 calc(var(--ring-unit)*2);\n\n    color: var(--ring-secondary-color);\n    box-shadow: inset 2px 0 0 var(--ring-line-color);\n\n    font-size: 12px;\n    line-height: 18px;\n  }\n\n.markdown_c055 ul {\n    padding: 0 0 0 calc(var(--ring-unit)*2);\n  }\n\n.markdown_c055 ol {\n    padding: 0;\n\n    list-style-position: inside;\n    font-feature-settings: "tnum";\n    font-variant-numeric: tabular-nums;\n  }\n\n.markdown_c055 ul {\n    list-style-type: none;\n  }\n\n.markdown_c055 pre {\n    position: relative;\n\n    padding: calc(var(--ring-unit)*3) calc(var(--ring-unit)*2);\n\n    white-space: pre;\n    tab-size: 2;\n\n    border-radius: var(--ring-border-radius);\n    background-color: rgba(var(--ring-tag-background-components), 0.5);\n\n    font-family: var(--ring-font-family-monospace);\n  }\n\n:is(.markdown_c055 pre):first-child {\n      margin-top: calc(var(--ring-unit)*4);\n    }\n\n:is(.markdown_c055 pre):last-child {\n      margin-bottom: calc(var(--ring-unit)*4);\n    }\n\n.markdown_c055 code {\n    padding: 2px 4px;\n\n    white-space: pre-wrap;\n\n    color: var(--ring-text-color);\n\n    border-radius: var(--ring-border-radius-small);\n\n    font-family: var(--ring-font-family-monospace);\n    font-size: var(--ring-font-size);\n  }\n\n.markdown_c055 :not(pre) > code {\n    background-color: var(--ring-disabled-background-color);\n  }\n\n.markdown_c055 pre > code {\n    display: block;\n\n    padding: 0;\n\n    white-space: inherit;\n\n    color: var(--ring-code-color);\n\n    font-size: var(--ring-font-size);\n  }\n',"",{version:3,sources:["webpack://./src/markdown/markdown.css"],names:[],mappings:"AAKE;IAEE,eAAe;EACjB;;AAGF;AAkHA;;AA/GE;IAEE,SAAS;EACX;;AAEA;IAGE,SAAS;EAKX;;AAHE;MACE,gBAAoB;IACtB;;AAGF;IACE,gBAAoB;EACtB;;AAMI;QACE,eAAe;MACjB;;AAIJ;IACE,cAAkB;;IAElB,YAAY;IACZ,+CAA+C;EACjD;;AAEA;IACE,uCAAyC;;IAEzC,kCAAkC;IAClC,gDAAgD;;IAEhD,eAAe;IACf,iBAAiB;EACnB;;AAEA;IACE,uCAAyC;EAC3C;;AAEA;IACE,UAAU;;IAEV,2BAA2B;IAC3B,6BAAkC;IAAlC,kCAAkC;EACpC;;AAEA;IACE,qBAAqB;EACvB;;AAEA;IACE,kBAAkB;;IAElB,0DAA8D;;IAE9D,gBAAgB;IAChB,WAAW;;IAEX,wCAAwC;IACxC,kEAAkE;;IAElE,8CAA8C;EAShD;;AAPE;MACE,oCAAsC;IACxC;;AAEA;MACE,uCAAyC;IAC3C;;AAGF;IACE,gBAAgB;;IAEhB,qBAAqB;;IAErB,6BAA6B;;IAE7B,8CAA8C;;IAE9C,8CAA8C;IAC9C,gCAAgC;EAClC;;AAEA;IACE,uDAAuD;EACzD;;AAEA;IACE,cAAc;;IAEd,UAAU;;IAEV,oBAAoB;;IAEpB,6BAA6B;;IAE7B,gCAAgC;EAClC",sourcesContent:['@import "../global/variables.css";\n\n@value p-margin: 10px;\n\n.inline {\n  &,\n  & p {\n    display: inline;\n  }\n}\n\n.markdown {\n  composes: font from  "../global/global.css";\n\n  & ol,\n  & ul {\n    margin: 0;\n  }\n\n  & p,\n  & blockquote,\n  & pre {\n    margin: 0;\n\n    &:not(:first-child) {\n      margin-top: p-margin;\n    }\n  }\n\n  & li {\n    margin-top: p-margin;\n  }\n\n  & li {\n    & p,\n    & blockquote,\n    & pre {\n      &:not(:first-child) {\n        margin-top: 6px;\n      }\n    }\n  }\n\n  & hr {\n    margin: p-margin 0;\n\n    border: none;\n    border-bottom: 1px solid var(--ring-line-color);\n  }\n\n  & blockquote {\n    padding: 0 0 0 calc(2 * var(--ring-unit));\n\n    color: var(--ring-secondary-color);\n    box-shadow: inset 2px 0 0 var(--ring-line-color);\n\n    font-size: 12px;\n    line-height: 18px;\n  }\n\n  & ul {\n    padding: 0 0 0 calc(2 * var(--ring-unit));\n  }\n\n  & ol {\n    padding: 0;\n\n    list-style-position: inside;\n    font-variant-numeric: tabular-nums;\n  }\n\n  & ul {\n    list-style-type: none;\n  }\n\n  & pre {\n    position: relative;\n\n    padding: calc(var(--ring-unit) * 3) calc(var(--ring-unit) * 2);\n\n    white-space: pre;\n    tab-size: 2;\n\n    border-radius: var(--ring-border-radius);\n    background-color: rgba(var(--ring-tag-background-components), 0.5);\n\n    font-family: var(--ring-font-family-monospace);\n\n    &:first-child {\n      margin-top: calc(var(--ring-unit) * 4);\n    }\n\n    &:last-child {\n      margin-bottom: calc(var(--ring-unit) * 4);\n    }\n  }\n\n  & code {\n    padding: 2px 4px;\n\n    white-space: pre-wrap;\n\n    color: var(--ring-text-color);\n\n    border-radius: var(--ring-border-radius-small);\n\n    font-family: var(--ring-font-family-monospace);\n    font-size: var(--ring-font-size);\n  }\n\n  & :not(pre) > code {\n    background-color: var(--ring-disabled-background-color);\n  }\n\n  & pre > code {\n    display: block;\n\n    padding: 0;\n\n    white-space: inherit;\n\n    color: var(--ring-code-color);\n\n    font-size: var(--ring-font-size);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"p-margin":"10px",inline:"inline_f46d",markdown:`markdown_c055 ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.font}`};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/code/highlight.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/code/highlight.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/heading/heading.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/heading/heading.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/link/link.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/link/link.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/markdown/markdown.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/markdown/markdown.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);