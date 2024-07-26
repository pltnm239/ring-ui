(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[4854],{"./src/footer/footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>footer_stories});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),link_link=__webpack_require__("./src/link/link.tsx"),footer=__webpack_require__("./src/footer/footer.css"),footer_default=__webpack_require__.n(footer),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FooterColumn=(0,react.memo)((function FooterColumn({position,children}){const classes=classnames_default()({[footer_default().columnLeft]:"left"===position,[footer_default().columnCenter]:"center"===position,[footer_default().columnRight]:"right"===position});return(0,jsx_runtime.jsx)("div",{className:classes,children:(0,jsx_runtime.jsx)("ul",{className:footer_default().columnItem,children})})}));FooterColumn.propTypes={position:prop_types_default().oneOf(["left","center","right"]).isRequired,children:prop_types_default().node};const FooterLine=(0,react.memo)((function FooterLine(props){const items=Array.isArray(props.item)?props.item:[props.item];return(0,jsx_runtime.jsx)("li",{className:footer_default().line,children:items.map((function renderItem(item){if((0,react.isValidElement)(item)||"object"!=typeof item)return item;const element=(item.copyright?function copyright(year){const currentYear=(new Date).getUTCFullYear();let ret="Copyright © ";return ret+=year>=currentYear?year:year+"–"+currentYear,ret}(item.copyright):"")+(item.label||item);return item.url?(0,jsx_runtime.jsx)(link_link.A,{href:item.url,target:item.target,title:item.title,children:element},item.url+item.title):element}))})}));FooterLine.propTypes={item:prop_types_default().oneOfType([prop_types_default().object,prop_types_default().array,prop_types_default().string])};const Footer=(0,react.memo)((function Footer({floating,className,left,center,right}){function content(elements,position){return!!elements&&(0,jsx_runtime.jsx)(FooterColumn,{position,children:elements.map(((item,idx)=>(0,jsx_runtime.jsx)(FooterLine,{item},idx)))},position)}const classes=classnames_default()(footer_default().footer,className,{[footer_default().footerFloating]:floating});return(0,jsx_runtime.jsx)("footer",{className:classes,"data-test":"ring-footer",children:[content(left,"left"),content(center,"center"),content(right,"right")]})}));Footer.propTypes={className:prop_types_default().string,floating:prop_types_default().bool,left:prop_types_default().array,center:prop_types_default().array,right:prop_types_default().array};const footer_footer=Footer;Footer.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{className:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},floating:{required:!1,tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"bool"}},left:{required:!1,tsType:{name:"union",raw:"FooterItems | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"array"}},center:{required:!1,tsType:{name:"union",raw:"FooterItems | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"array"}},right:{required:!1,tsType:{name:"union",raw:"FooterItems | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"array"}}}};const footer_stories={title:"Components/Footer",parameters:{notes:"\nDisplays a configurable page footer.\n\nA footer consists of three sections, each optional:\n\n- left\n- center\n- right\n    ",zeplinLink:"https://app.zeplin.io/project/5afd8f5511c2d1c625752bb0/screen/5b2a6042114b24a11a8ac153"}},basic=()=>(0,jsx_runtime.jsx)(footer_footer,{className:"stuff",left:[[{url:"http://www.jetbrains.com/teamcity/?fromserver",label:"TeamCity"}," by JetBrains"],"Enterprise 8.0.2 EAP (build 27448)"],center:[[{copyright:2e3,label:" JetBrains"}],{url:"https://teamcity.jetbrains.com/showAgreement.html",label:"License agreement",title:"read me!",target:"_blank"}],right:[{url:"http://www.jetbrains.com/teamcity/feedback?source=footer&version=8.0.3%20(build%2027531)&build=27531&mode=ent",label:"Feedback"}]});basic.storyName="Footer",basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:"() => <Footer className=\"stuff\" left={[[{\n  url: 'http://www.jetbrains.com/teamcity/?fromserver',\n  label: 'TeamCity'\n}, ' by JetBrains'], 'Enterprise 8.0.2 EAP (build 27448)']} center={[[{\n  copyright: 2000,\n  label: ' JetBrains'\n}], {\n  url: 'https://teamcity.jetbrains.com/showAgreement.html',\n  label: 'License agreement',\n  title: 'read me!',\n  target: '_blank'\n}]} right={[{\n  url: 'http://www.jetbrains.com/teamcity/feedback?source=footer&version=8.0.3%20(build%2027531)&build=27531&mode=ent',\n  label: 'Feedback'\n}]} />",...basic.parameters?.docs?.source}}}},"./src/link/clickableLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>ClickableLink});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class ClickableLink extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,onPlainLeftClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,onConditionalClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired};onClick=e=>{const{onClick,onConditionalClick,onPlainLeftClick}=this.props,isPlainLeft=(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e);onClick&&onClick(e),onConditionalClick&&onConditionalClick(isPlainLeft,e),onPlainLeftClick&&isPlainLeft&&(e.preventDefault(),onPlainLeftClick(e))};render(){const{onConditionalClick,onPlainLeftClick,activeClassName,href,children,...restProps}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href,...restProps,onClick:this.onClick,children})}}ClickableLink.__docgenInfo={description:"",methods:[{name:"onClick",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}],alias:"React.MouseEvent"}}],returns:null}],displayName:"ClickableLink",props:{onConditionalClick:{required:!1,tsType:{name:"union",raw:"| ((isPlainLeft: boolean, e: React.MouseEvent<HTMLAnchorElement>) => void)\n| null\n| undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"func"}},onPlainLeftClick:{required:!1,tsType:{name:"union",raw:"((e: React.MouseEvent<HTMLAnchorElement>) => void) | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"func"}},activeClassName:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},disabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},onClick:{description:"",type:{name:"func"},required:!1},href:{description:"",type:{name:"string"},required:!0},children:{description:"",type:{name:"node"},required:!0}},composes:["AnchorHTMLAttributes"]}},"./src/link/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,F:()=>linkHOC});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/data-tests.ts"),_clickableLink__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/link/clickableLink.tsx"),_link_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/link/link.css"),_link_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_link_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function linkHOC(ComposedComponent){const isCustom="string"!=typeof ComposedComponent&&ComposedComponent!==_clickableLink__WEBPACK_IMPORTED_MODULE_4__.A;return class Link extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,active:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,inherit:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,pseudo:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,hover:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,onPlainLeftClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func};render(){const{active,inherit,pseudo,hover,className,"data-test":dataTest,href,children,onPlainLeftClick,onClick,...restProps}=this.props,useButton=pseudo||!isCustom&&null==href,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_link_css__WEBPACK_IMPORTED_MODULE_2___default().link,className,{[_link_css__WEBPACK_IMPORTED_MODULE_2___default().active]:active,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().inherit]:inherit,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().hover]:hover,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().pseudo]:useButton});let props=restProps;return isCustom&&!props.activeClassName&&(props={...props,activeClassName:_link_css__WEBPACK_IMPORTED_MODULE_2___default().active}),useButton?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{type:"button",...props,className:classes,onClick:onClick||onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_6__.A)("ring-link",dataTest),children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ComposedComponent,{...props,href,className:classes,onClick,onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_6__.A)("ring-link",dataTest),children})}}}const __WEBPACK_DEFAULT_EXPORT__=linkHOC(_clickableLink__WEBPACK_IMPORTED_MODULE_4__.A)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/footer/footer.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".footer_ed96 {\n\n  position: relative;\n\n  box-sizing: border-box;\n  height: calc(var(--ring-unit)*8);\n  margin: calc(var(--ring-unit)*5) calc(var(--ring-unit)*4) 0;\n  padding-top: calc(var(--ring-unit)*2);\n\n  text-align: center;\n\n  border-top: 1px solid var(--ring-line-color);\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.footerFloating_fa30 {\n\n  position: absolute;\n  z-index: var(--ring-fixed-z-index);\n  bottom: 0;\n\n  width: 100%;\n  margin-right: 0;\n  margin-bottom: var(--ring-unit);\n  margin-left: 0;\n}\n\n.column_bba2 {\n  position: absolute;\n\n  width: 33%;\n}\n\n.columnItem_a060 {\n  display: inline-block;\n\n  margin: 0;\n  padding: 0;\n\n  vertical-align: top;\n}\n\n.columnLeft_d5f0 {\n\n  text-align: left;\n}\n\n.columnCenter_c40a {\n\n  left: 33.6%;\n}\n\n.columnCenter_c40a .line_b8a7 {\n  text-align: left;\n}\n\n.columnRight_ba81 {\n\n  top: calc(var(--ring-unit)*2);\n  right: 0;\n\n  text-align: right;\n}\n\n.line_b8a7 {\n  padding: 0;\n\n  list-style: none;\n\n  line-height: calc(var(--ring-unit)*2);\n}\n\n.lineCenter_bca7 {\n  text-align: left;\n}\n","",{version:3,sources:["webpack://./src/footer/footer.css"],names:[],mappings:"AAEA;;EAGE,kBAAkB;;EAElB,sBAAsB;EACtB,gCAAkC;EAClC,2DAA+D;EAC/D,qCAAuC;;EAEvC,kBAAkB;;EAElB,4CAA4C;;EAE5C,wCAAwC;AAC1C;;AAEA;;EAGE,kBAAkB;EAClB,kCAAkC;EAClC,SAAS;;EAET,WAAW;EACX,eAAe;EACf,+BAA+B;EAC/B,cAAc;AAChB;;AAEA;EACE,kBAAkB;;EAElB,UAAU;AACZ;;AAEA;EACE,qBAAqB;;EAErB,SAAS;EACT,UAAU;;EAEV,mBAAmB;AACrB;;AAEA;;EAGE,gBAAgB;AAClB;;AAEA;;EAGE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAGE,6BAA+B;EAC/B,QAAQ;;EAER,iBAAiB;AACnB;;AAEA;EACE,UAAU;;EAEV,gBAAgB;;EAEhB,qCAAuC;AACzC;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:['@import "../global/variables.css";\n\n.footer {\n  composes: font from "../global/global.css";\n\n  position: relative;\n\n  box-sizing: border-box;\n  height: calc(var(--ring-unit) * 8);\n  margin: calc(var(--ring-unit) * 5) calc(var(--ring-unit) * 4) 0;\n  padding-top: calc(var(--ring-unit) * 2);\n\n  text-align: center;\n\n  border-top: 1px solid var(--ring-line-color);\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.footerFloating {\n  composes: footer;\n\n  position: absolute;\n  z-index: var(--ring-fixed-z-index);\n  bottom: 0;\n\n  width: 100%;\n  margin-right: 0;\n  margin-bottom: var(--ring-unit);\n  margin-left: 0;\n}\n\n.column {\n  position: absolute;\n\n  width: 33%;\n}\n\n.columnItem {\n  display: inline-block;\n\n  margin: 0;\n  padding: 0;\n\n  vertical-align: top;\n}\n\n.columnLeft {\n  composes: column;\n\n  text-align: left;\n}\n\n.columnCenter {\n  composes: column;\n\n  left: 33.6%;\n}\n\n.columnCenter .line {\n  text-align: left;\n}\n\n.columnRight {\n  composes: column;\n\n  top: calc(var(--ring-unit) * 2);\n  right: 0;\n\n  text-align: right;\n}\n\n.line {\n  padding: 0;\n\n  list-style: none;\n\n  line-height: calc(var(--ring-unit) * 2);\n}\n\n.lineCenter {\n  text-align: left;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={footer:`footer_ed96 ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.font}`,footerFloating:`footerFloating_fa30 footer_ed96 ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.font}`,column:"column_bba2",columnItem:"columnItem_a060",columnLeft:"columnLeft_d5f0 column_bba2",columnCenter:"columnCenter_c40a column_bba2",line:"line_b8a7",columnRight:"columnRight_ba81 column_bba2",lineCenter:"lineCenter_bca7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/link/link.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c,\n.withLinks_a3f8 a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (resolution >= 2dppx) {\n\n.link_c73c,\n.withLinks_a3f8 a {\n    text-decoration-thickness: 0.5px;\n}\n  }\n\n.hover_e4ca:is(.link_c73c,.withLinks_a3f8 a) {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.pseudo_cb40:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration: none;\n  }}\n\n:is(.link_c73c,.withLinks_a3f8 a):focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n.link_c73c.active_eef2 {\n  color: inherit;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;;EAEE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EAE7B,aAAa;;EAEb,0BAA0B;EAC1B,8BAA8B;EAC9B,0BAA0B;AAuB5B;;ACpCA,wGAAA;IAAA,gCAAA;;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;ADeE;;AAbF;;IAcI,gCAAgC;AAoBpC;EAnBE;;AAEA;IAEE,+BAA+B;;IAE/B,gBAAgB;;IAEhB,mCAAmC;EACrC;;AAEA,yDAAyD;;AC5B3D,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADiCE;IACE,oDAAoD;EACtD;;AAGF;EACE,cAAc;AAChB;;ACxCA,wGAAA;EAAA,eAAA;CAAA,CAAA;;AD8CA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link,\n.withLinks a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n\n  @media (resolution >= 2dppx) {\n    text-decoration-thickness: 0.5px;\n  }\n\n  &:hover,\n  &.hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  &.pseudo:hover {\n    text-decoration: none;\n  }\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n.link.active {\n  color: inherit;\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",withLinks:"withLinks_a3f8",hover:"hover_e4ca",pseudo:"pseudo_cb40",active:"active_eef2",inherit:"inherit_c3d7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/footer/footer.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/footer/footer.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/link/link.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/link/link.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);