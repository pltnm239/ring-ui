(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[982],{"./node_modules/@jetbrains/icons/frown.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><g class="frown"><path fill-rule="evenodd" d="M5.058 11.442a.625.625 0 0 1 0-.884L5.5 11l-.442-.442.002-.002.001-.001.005-.005.015-.014a2.611 2.611 0 0 1 .208-.18c.138-.11.337-.255.588-.399A4.29 4.29 0 0 1 8 9.375c.89 0 1.622.296 2.123.582a4.603 4.603 0 0 1 .75.536l.046.043.015.014.005.005.002.002s.001.001-.441.443l.442-.442a.625.625 0 0 1-.882.886l-4.118-.002h4.117v.002-.001l-.002-.002a3.363 3.363 0 0 0-.555-.399A3.042 3.042 0 0 0 8 10.626a3.04 3.04 0 0 0-1.502.418 3.357 3.357 0 0 0-.555.398l-.001.001-.002.002a.625.625 0 0 1-.882-.002ZM8 13.75a5.75 5.75 0 1 0 0-11.5 5.75 5.75 0 0 0 0 11.5ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.508 6.529a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.004 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" class="Union" clip-rule="evenodd"/></g></svg>'},"./src/global/memoize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function memoize(fn){const primitiveCache=new Map,objectCache=new WeakMap;return function memoized(arg){const key=null!=arg?arg:"__singleValue__",cache=key instanceof Object?objectCache:primitiveCache,cached=cache.get(key);if(null!=cached)return cached;const value=fn(arg);return cache.set(key,value),value}}__webpack_require__.d(__webpack_exports__,{A:()=>memoize})},"./src/icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>Icon});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),browser=__webpack_require__("./node_modules/util-deprecate/browser.js"),browser_default=__webpack_require__.n(browser),icon_constants=__webpack_require__("./src/icon/icon__constants.ts"),icon=__webpack_require__("./src/icon/icon.css"),icon_default=__webpack_require__.n(icon),memoize=__webpack_require__("./src/global/memoize.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function extractSVGProps(svgNode){const map=svgNode.attributes;return map.length>0?function serializeAttrs(map){const res={};for(let i=0;i<map.length;i++){const key=map[i].name;let prop=key;"class"===key?prop="className":key.startsWith("data-")||(prop=key.replace(/[-|:]([a-z])/g,(g=>g[1].toUpperCase()))),res[prop]=map[i].value}return res}(map):null}const getSVGFromSource=(0,memoize.A)((src=>{const svgContainer=document.createElement("div");svgContainer.innerHTML=src;const svg=svgContainer.firstElementChild;return svg.remove?svg.remove():svgContainer.removeChild(svg),{props:extractSVGProps(svg),html:svg.innerHTML}}));function isCompatibilityMode(iconSrc){const hasWidth=/width="[\d\.]+"/gi.test(iconSrc),hasHeight=/height="[\d\.]+"/gi.test(iconSrc);return!hasWidth||!hasHeight}function IconSVG({src,className,...rest}){const glyphClasses=classnames_default()(icon_default().glyph,{[icon_default().compatibilityMode]:isCompatibilityMode(src)},className),{props,html}=getSVGFromSource(src);return(0,jsx_runtime.jsx)("svg",{...props,...rest,className:glyphClasses,dangerouslySetInnerHTML:{__html:html}})}IconSVG.propTypes={className:prop_types_default().string,src:prop_types_default().string.isRequired,style:prop_types_default().object};const icon_svg=(0,react.memo)(IconSVG);IconSVG.__docgenInfo={description:"",methods:[],displayName:"IconSVG",props:{src:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},className:{description:"",type:{name:"string"},required:!1},style:{description:"",type:{name:"object"},required:!1}},composes:["SVGAttributes"]};const warnSize=browser_default()((()=>{}),"`size`, `width` and `height` props are not recommended to use in Ring UI `Icon` component. The intrinsic sizes of SVG icon (`width` and `height` SVG attributes) are used instead.\n\nWe strongly recommend to use icons handcrafted for particular sizes. If your icon doesn't exist in the desired size, please ask your designer to draw one. \"Responsive\" checkmark should be unchecked when exporting icon.'");class Icon extends react.PureComponent{static propTypes={className:prop_types_default().string,color:prop_types_default().string,glyph:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().elementType]).isRequired,height:prop_types_default().number,size:prop_types_default().number,width:prop_types_default().number,loading:prop_types_default().bool,suppressSizeWarning:prop_types_default().bool};static defaultProps={className:"",color:icon_constants.Q.DEFAULT,glyph:""};static Color=icon_constants.Q;static Size=icon_constants.o;warnSize(){this.props.suppressSizeWarning||warnSize()}getStyle(){const{size,width,height}=this.props;return width||height?(this.warnSize(),{width,height}):size?(this.warnSize(),{width:size,height:size}):void 0}render(){const{className,size,color,loading,glyph:Glyph,width,height,suppressSizeWarning,...restProps}=this.props;if(!Glyph)return null;const classes=classnames_default()(icon_default().icon,{[icon_default()[color]]:!!color,[icon_default().loading]:loading},className);return(0,jsx_runtime.jsx)("span",{...restProps,className:classes,children:"string"==typeof Glyph?(0,jsx_runtime.jsx)(icon_svg,{src:Glyph,style:this.getStyle()}):(0,jsx_runtime.jsx)(Glyph,{className:icon_default().glyph,style:this.getStyle()})})}}Icon.__docgenInfo={description:"",methods:[{name:"warnSize",docblock:null,modifiers:[],params:[],returns:null},{name:"getStyle",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Icon",props:{color:{required:!1,tsType:{name:"Color"},description:"",defaultValue:{value:"Color.DEFAULT",computed:!0},type:{name:"string"}},glyph:{required:!1,tsType:{name:"union",raw:"string | IconType | null",elements:[{name:"string"},{name:"ComponentType",elements:[{name:"SVGAttributes",elements:[{name:"SVGSVGElement"}],raw:"SVGAttributes<SVGSVGElement>"}],raw:"ComponentType<SVGAttributes<SVGSVGElement>>"},{name:"null"}]},description:"",defaultValue:{value:"''",computed:!1},type:{name:"union",value:[{name:"string"},{name:"elementType"}]}},height:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:"",type:{name:"number"}},size:{required:!1,tsType:{name:"union",raw:"Size | number | null | undefined",elements:[{name:"Size"},{name:"number"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"number"}},width:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:"",type:{name:"number"}},loading:{required:!1,tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"bool"}},suppressSizeWarning:{required:!1,tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"bool"}},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}},composes:["HTMLAttributes"]}},"./src/icon/icon__constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>Color,o:()=>Size});let Color=function(Color){return Color.BLUE="blue",Color.DEFAULT="",Color.GRAY="gray",Color.GREEN="green",Color.MAGENTA="magenta",Color.RED="red",Color.WHITE="white",Color}({}),Size=function(Size){return Size[Size.Size12=12]="Size12",Size[Size.Size14=14]="Size14",Size[Size.Size16=16]="Size16",Size[Size.Size18=18]="Size18",Size[Size.Size20=20]="Size20",Size[Size.Size24=24]="Size24",Size[Size.Size32=32]="Size32",Size[Size.Size40=40]="Size40",Size[Size.Size48=48]="Size48",Size[Size.Size64=64]="Size64",Size[Size.Size96=96]="Size96",Size[Size.Size128=128]="Size128",Size}({})},"./src/link/clickableLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>ClickableLink});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class ClickableLink extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,onPlainLeftClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,onConditionalClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired};onClick=e=>{const{onClick,onConditionalClick,onPlainLeftClick}=this.props,isPlainLeft=(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e);onClick&&onClick(e),onConditionalClick&&onConditionalClick(isPlainLeft,e),onPlainLeftClick&&isPlainLeft&&(e.preventDefault(),onPlainLeftClick(e))};render(){const{onConditionalClick,onPlainLeftClick,activeClassName,href,children,...restProps}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href,...restProps,onClick:this.onClick,children})}}ClickableLink.__docgenInfo={description:"",methods:[{name:"onClick",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}],alias:"React.MouseEvent"}}],returns:null}],displayName:"ClickableLink",props:{onConditionalClick:{required:!1,tsType:{name:"union",raw:"| ((isPlainLeft: boolean, e: React.MouseEvent<HTMLAnchorElement>) => void)\n| null\n| undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"func"}},onPlainLeftClick:{required:!1,tsType:{name:"union",raw:"((e: React.MouseEvent<HTMLAnchorElement>) => void) | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"func"}},activeClassName:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},disabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},onClick:{description:"",type:{name:"func"},required:!1},href:{description:"",type:{name:"string"},required:!0},children:{description:"",type:{name:"node"},required:!0}},composes:["AnchorHTMLAttributes"]}},"./src/link/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,F:()=>linkHOC});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/data-tests.ts"),_clickableLink__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/link/clickableLink.tsx"),_link_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/link/link.css"),_link_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_link_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function linkHOC(ComposedComponent){const isCustom="string"!=typeof ComposedComponent&&ComposedComponent!==_clickableLink__WEBPACK_IMPORTED_MODULE_4__.A;return class Link extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,active:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,inherit:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,pseudo:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,hover:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,onPlainLeftClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func};render(){const{active,inherit,pseudo,hover,className,"data-test":dataTest,href,children,onPlainLeftClick,onClick,...restProps}=this.props,useButton=pseudo||!isCustom&&null==href,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_link_css__WEBPACK_IMPORTED_MODULE_2___default().link,className,{[_link_css__WEBPACK_IMPORTED_MODULE_2___default().active]:active,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().inherit]:inherit,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().hover]:hover,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().pseudo]:useButton});let props=restProps;return isCustom&&!props.activeClassName&&(props={...props,activeClassName:_link_css__WEBPACK_IMPORTED_MODULE_2___default().active}),useButton?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{type:"button",...props,className:classes,onClick:onClick||onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_6__.A)("ring-link",dataTest),children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ComposedComponent,{...props,href,className:classes,onClick,onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_6__.A)("ring-link",dataTest),children})}}}const __WEBPACK_DEFAULT_EXPORT__=linkHOC(_clickableLink__WEBPACK_IMPORTED_MODULE_4__.A)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/error-message/error-message.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".errorMessage_f07b {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n\n  max-width: 600px;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.title_fea1 {\n  font-size: 21px;\n}\n\n.description_f1f0 {\n  font-size: 15px;\n}\n\n.content_af62 {\n  flex-direction: column;\n\n  color: var(--ring-text-color);\n}\n\n.content_af62 > .title_fea1,\n.description_f1f0 {\n  margin-bottom: 16px;\n}\n\n.icon_e05e {\n  margin: 0 16px 24px 0;\n\n  color: var(--ring-icon-secondary-color);\n}\n","",{version:3,sources:["webpack://./src/error-message/error-message.css"],names:[],mappings:"AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;;EAEvB,gBAAgB;EAChB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;;EAEtB,6BAA6B;AAC/B;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;;EAErB,uCAAuC;AACzC",sourcesContent:['@import "../global/variables.css";\n\n.errorMessage {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n\n  max-width: 600px;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.title {\n  font-size: 21px;\n}\n\n.description {\n  font-size: 15px;\n}\n\n.content {\n  flex-direction: column;\n\n  color: var(--ring-text-color);\n}\n\n.content > .title,\n.description {\n  margin-bottom: 16px;\n}\n\n.icon {\n  margin: 0 16px 24px 0;\n\n  color: var(--ring-icon-secondary-color);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={errorMessage:"errorMessage_f07b",title:"title_fea1",description:"description_f1f0",content:"content_af62",icon:"icon_e05e"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/icon/icon.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,'.icon_d5a3 {\n  display: inline-block;\n\n  fill: currentColor;\n}\n\n.glyph_ffd8 {\n  display: inline-flex;\n\n  margin-right: -1px;\n  margin-left: -1px;\n\n  pointer-events: none;\n}\n\n.glyph_ffd8[width="10"] {\n    vertical-align: -1px;\n  }\n\n.glyph_ffd8[width="12"] {\n    vertical-align: -1px;\n  }\n\n/* TODO remove in 7.0 */\n\n.glyph_ffd8[width="14"] {\n    margin-right: -2px;\n    margin-left: 0;\n\n    vertical-align: -3px;\n  }\n\n.glyph_ffd8[width="16"] {\n    vertical-align: -3px;\n  }\n\n.glyph_ffd8[width="20"] {\n    vertical-align: -2px;\n  }\n\n.glyph_ffd8.compatibilityMode_a8ae {\n    width: calc(var(--ring-unit)*2);\n    height: calc(var(--ring-unit)*2);\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n/* HACK: This media query hack makes styles applied for WebKit browsers only */\n/* stylelint-disable-next-line media-feature-name-no-vendor-prefix */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .glyph_ffd8 {\n    width: auto; /* Safari size bug workaround, see https://youtrack.jetbrains.com/issue/RG-1983 */\n  }\n}\n\n.gray_cf30 {\n  color: var(--ring-icon-secondary-color);\n}\n\n.hover_ab0b {\n  color: var(--ring-icon-hover-color);\n}\n\n.green_ea54 {\n  color: var(--ring-icon-success-color);\n}\n\n.magenta_bbdf {\n  color: var(--ring-link-hover-color);\n}\n\n.red_e064 {\n  color: var(--ring-icon-error-color);\n}\n\n.blue_d783 {\n  color: var(--ring-main-color);\n}\n\n.white_d5e6 {\n  color: var(--ring-white-text-color);\n}\n\n.loading_f519 {\n  animation-name: icon-loading_cf30;\n  animation-duration: 1200ms;\n  animation-iteration-count: infinite;\n}\n\n@keyframes icon-loading_cf30 {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.9);\n\n    opacity: 0.5;\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n',"",{version:3,sources:["webpack://./src/icon/icon.css"],names:[],mappings:"AAEA;EACE,qBAAqB;;EAErB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;;EAEpB,kBAAkB;EAClB,iBAAiB;;EAEjB,oBAAoB;AAgCtB;;AA9BE;IACE,oBAAoB;EACtB;;AAEA;IACE,oBAAoB;EACtB;;AAEA,uBAAuB;;AACvB;IACE,kBAAkB;IAClB,cAAc;;IAEd,oBAAoB;EACtB;;AAEA;IACE,oBAAoB;EACtB;;AAEA;IACE,oBAAoB;EACtB;;AAEA;IACE,+BAAiC;IACjC,gCAAkC;IAClC,eAAe;IACf,cAAc;EAChB;;AAGF,8EAA8E;AAC9E,oEAAoE;AACpE;EACE;IACE,WAAW,EAAE,iFAAiF;EAChG;AACF;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,iCAA4B;EAC5B,0BAA0B;EAC1B,mCAAmC;AACrC;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;;IAErB,YAAY;EACd;;EAEA;IACE,mBAAmB;EACrB;AACF",sourcesContent:['@import "../global/variables.css";\n\n.icon {\n  display: inline-block;\n\n  fill: currentColor;\n}\n\n.glyph {\n  display: inline-flex;\n\n  margin-right: -1px;\n  margin-left: -1px;\n\n  pointer-events: none;\n\n  &[width="10"] {\n    vertical-align: -1px;\n  }\n\n  &[width="12"] {\n    vertical-align: -1px;\n  }\n\n  /* TODO remove in 7.0 */\n  &[width="14"] {\n    margin-right: -2px;\n    margin-left: 0;\n\n    vertical-align: -3px;\n  }\n\n  &[width="16"] {\n    vertical-align: -3px;\n  }\n\n  &[width="20"] {\n    vertical-align: -2px;\n  }\n\n  &.compatibilityMode {\n    width: calc(var(--ring-unit) * 2);\n    height: calc(var(--ring-unit) * 2);\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n/* HACK: This media query hack makes styles applied for WebKit browsers only */\n/* stylelint-disable-next-line media-feature-name-no-vendor-prefix */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .glyph {\n    width: auto; /* Safari size bug workaround, see https://youtrack.jetbrains.com/issue/RG-1983 */\n  }\n}\n\n.gray {\n  color: var(--ring-icon-secondary-color);\n}\n\n.hover {\n  color: var(--ring-icon-hover-color);\n}\n\n.green {\n  color: var(--ring-icon-success-color);\n}\n\n.magenta {\n  color: var(--ring-link-hover-color);\n}\n\n.red {\n  color: var(--ring-icon-error-color);\n}\n\n.blue {\n  color: var(--ring-main-color);\n}\n\n.white {\n  color: var(--ring-white-text-color);\n}\n\n.loading {\n  animation-name: icon-loading;\n  animation-duration: 1200ms;\n  animation-iteration-count: infinite;\n}\n\n@keyframes icon-loading {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.9);\n\n    opacity: 0.5;\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={icon:"icon_d5a3",glyph:"glyph_ffd8",compatibilityMode:"compatibilityMode_a8ae",gray:"gray_cf30",hover:"hover_ab0b",green:"green_ea54",magenta:"magenta_bbdf",red:"red_e064",blue:"blue_d783",white:"white_d5e6",loading:"loading_f519","icon-loading":"icon-loading_cf30"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/link/link.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c,\n.withLinks_a3f8 a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (resolution >= 2dppx) {\n\n.link_c73c,\n.withLinks_a3f8 a {\n    text-decoration-thickness: 0.5px;\n}\n  }\n\n.hover_e4ca:is(.link_c73c,.withLinks_a3f8 a) {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.pseudo_cb40:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration: none;\n  }}\n\n:is(.link_c73c,.withLinks_a3f8 a):focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n.link_c73c.active_eef2 {\n  color: inherit;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;;EAEE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EAE7B,aAAa;;EAEb,0BAA0B;EAC1B,8BAA8B;EAC9B,0BAA0B;AAuB5B;;ACpCA,wGAAA;IAAA,gCAAA;;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;ADeE;;AAbF;;IAcI,gCAAgC;AAoBpC;EAnBE;;AAEA;IAEE,+BAA+B;;IAE/B,gBAAgB;;IAEhB,mCAAmC;EACrC;;AAEA,yDAAyD;;AC5B3D,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADiCE;IACE,oDAAoD;EACtD;;AAGF;EACE,cAAc;AAChB;;ACxCA,wGAAA;EAAA,eAAA;CAAA,CAAA;;AD8CA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link,\n.withLinks a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n\n  @media (resolution >= 2dppx) {\n    text-decoration-thickness: 0.5px;\n  }\n\n  &:hover,\n  &.hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  &.pseudo:hover {\n    text-decoration: none;\n  }\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n.link.active {\n  color: inherit;\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",withLinks:"withLinks_a3f8",hover:"hover_e4ca",pseudo:"pseudo_cb40",active:"active_eef2",inherit:"inherit_c3d7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/error-message/error-message.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/error-message/error-message.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/icon/icon.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/icon/icon.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/link/link.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/link/link.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/error-message/error-message.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>error_message_stories});var frown=__webpack_require__("./node_modules/@jetbrains/icons/frown.js"),frown_default=__webpack_require__.n(frown),link_link=__webpack_require__("./src/link/link.tsx"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icon_icon=__webpack_require__("./src/icon/icon.tsx"),icon_constants=__webpack_require__("./src/icon/icon__constants.ts"),data_tests=__webpack_require__("./src/global/data-tests.ts"),error_message=__webpack_require__("./src/error-message/error-message.css"),error_message_default=__webpack_require__.n(error_message),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class ErrorMessage extends react.Component{static propTypes={icon:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().elementType]),code:prop_types_default().string,message:prop_types_default().string,description:prop_types_default().string,children:prop_types_default().node,className:prop_types_default().string,"data-test":prop_types_default().string};render(){const{className,icon,code,message,description,children,"data-test":dataTest}=this.props,classes=classnames_default()(error_message_default().errorMessage,className);return(0,jsx_runtime.jsxs)("div",{className:classes,"data-test":(0,data_tests.A)("ring-error-message",dataTest),children:[icon&&(0,jsx_runtime.jsx)(icon_icon.Ay,{className:error_message_default().icon,glyph:icon,size:icon_constants.o.Size64,suppressSizeWarning:!0}),(0,jsx_runtime.jsxs)("div",{className:error_message_default().content,children:[(0,jsx_runtime.jsxs)("div",{className:error_message_default().title,"data-test":"ring-error-message-title",children:[code&&`${code}:`," ",message]}),description&&(0,jsx_runtime.jsx)("div",{className:error_message_default().description,children:description}),children]})]})}}ErrorMessage.__docgenInfo={description:"@name Error Message",methods:[],displayName:"ErrorMessage",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"",type:{name:"node"}},icon:{required:!1,tsType:{name:"union",raw:"string | IconType | null | undefined",elements:[{name:"string"},{name:"ComponentType",elements:[{name:"SVGAttributes",elements:[{name:"SVGSVGElement"}],raw:"SVGAttributes<SVGSVGElement>"}],raw:"ComponentType<SVGAttributes<SVGSVGElement>>"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"elementType"}]}},code:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},message:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},description:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},className:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},"data-test":{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}}}};const error_message_stories={title:"Components/Error Message",parameters:{notes:"Displays an error message centered both vertically and horizontally inside the parent container."}},basic=()=>(0,jsx_runtime.jsx)("div",{style:{height:"300px"},children:(0,jsx_runtime.jsx)(ErrorMessage,{icon:frown_default(),code:"Disconnected",message:"no answer from server.",description:"Please try again soon.",children:(0,jsx_runtime.jsx)(link_link.A,{href:"/",children:"Go to the home page"})})});basic.storyName="Error Message",basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:'() => <div style={{\n  height: \'300px\'\n}}>\n    <ErrorMessage icon={frownIcon} code="Disconnected" message="no answer from server." description="Please try again soon.">\n      <Link href="/">Go to the home page</Link>\n    </ErrorMessage>\n  </div>',...basic.parameters?.docs?.source}}}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);