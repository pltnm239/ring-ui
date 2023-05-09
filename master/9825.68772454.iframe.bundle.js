"use strict";(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[9825],{"./src/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@jetbrains/icons/chevron-10px.js"),_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_2__),_icon_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/icon/icon__constants.ts"),_icon_icon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/icon/icon.tsx"),_link_clickableLink__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/link/clickableLink.tsx"),_global_controls_height__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/controls-height.tsx"),_button_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/button/button.css"),_button_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_3__),_button_classes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/button/button__classes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Button extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,danger:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,delayed:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,loader:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,primary:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,short:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,text:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,inline:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,dropdown:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,href:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,target:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,icon:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType]),iconSize:prop_types__WEBPACK_IMPORTED_MODULE_4___default().number,iconClassName:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,iconSuppressSizeWarning:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func};static IconSize=_icon_icon__WEBPACK_IMPORTED_MODULE_5__.$;static contextType=_global_controls_height__WEBPACK_IMPORTED_MODULE_6__.pS;buttonRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();render(){const{active,danger,delayed,loader,primary,short,text,inline,dropdown,height=this.context,icon,iconSize,iconClassName,iconSuppressSizeWarning,className,children,...props}=this.props,classes=(0,_button_classes__WEBPACK_IMPORTED_MODULE_7__.y)({className,active,danger,delayed,icon,loader,primary,short,text,inline,height}),content=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_button_css__WEBPACK_IMPORTED_MODULE_3___default().content},icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_css__WEBPACK_IMPORTED_MODULE_3___default().icon,iconClassName)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_8__.ZP,{glyph:icon,size:iconSize,loading:loader,suppressSizeWarning:iconSuppressSizeWarning})),children&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,children),dropdown&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_8__.ZP,{glyph:_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_2___default(),className:_button_css__WEBPACK_IMPORTED_MODULE_3___default().dropdownIcon})),commonProps={tabIndex:loader?-1:0,...props,className:classes,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,loader&&!text&&!icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_button_css__WEBPACK_IMPORTED_MODULE_3___default().loaderBackground}),content)};return null!=commonProps.href?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_link_clickableLink__WEBPACK_IMPORTED_MODULE_9__.Z,commonProps):react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({ref:this.buttonRef,type:"button"},commonProps))}}Button.__docgenInfo={description:"A component for displaying variously styled buttons.",methods:[],displayName:"Button",props:{active:{type:{name:"bool"},required:!1,description:""},danger:{type:{name:"bool"},required:!1,description:""},delayed:{type:{name:"bool"},required:!1,description:""},loader:{type:{name:"bool"},required:!1,description:""},primary:{type:{name:"bool"},required:!1,description:""},short:{type:{name:"bool"},required:!1,description:""},text:{type:{name:"bool"},required:!1,description:""},inline:{type:{name:"bool"},required:!1,description:""},dropdown:{type:{name:"bool"},required:!1,description:""},href:{type:{name:"string"},required:!1,description:""},target:{type:{name:"string"},required:!1,description:""},icon:{type:{name:"union",value:[{name:"string"},{name:"elementType"}]},required:!1,description:""},iconSize:{type:{name:"number"},required:!1,description:""},iconClassName:{type:{name:"string"},required:!1,description:""},iconSuppressSizeWarning:{type:{name:"bool"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},onClick:{type:{name:"func"},required:!1,description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/button.tsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/button/button.tsx"})},"./src/global/memoize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function memoize(fn){const primitiveCache=new Map,objectCache=new WeakMap;return function memoized(arg){const key=null!=arg?arg:"__singleValue__",cache=key instanceof Object?objectCache:primitiveCache,cached=cache.get(key);if(null!=cached)return cached;const value=fn(arg);return cache.set(key,value),value}}__webpack_require__.d(__webpack_exports__,{Z:()=>memoize})},"./src/icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>Icon});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),browser=__webpack_require__("./node_modules/util-deprecate/browser.js"),browser_default=__webpack_require__.n(browser),icon_constants=__webpack_require__("./src/icon/icon__constants.ts"),icon=__webpack_require__("./src/icon/icon.css"),icon_default=__webpack_require__.n(icon);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function extractSVGProps(svgNode){const map=svgNode.attributes;return map.length>0?function serializeAttrs(map){const res={};for(let i=0;i<map.length;i++){const key=map[i].name;let prop=key;"class"===key?prop="className":key.startsWith("data-")||(prop=key.replace(/[-|:]([a-z])/g,(g=>g[1].toUpperCase()))),res[prop]=map[i].value}return res}(map):null}const getSVGFromSource=(0,__webpack_require__("./src/global/memoize.ts").Z)((src=>{const svgContainer=document.createElement("div");svgContainer.innerHTML=src;const svg=svgContainer.firstElementChild;return svg.remove?svg.remove():svgContainer.removeChild(svg),{props:extractSVGProps(svg),html:svg.innerHTML}}));function isCompatibilityMode(iconSrc){const hasWidth=/width="[\d\.]+"/gi.test(iconSrc),hasHeight=/height="[\d\.]+"/gi.test(iconSrc);return!hasWidth||!hasHeight}function IconSVG(_ref){let{src,className,...rest}=_ref;const glyphClasses=classnames_default()(icon_default().glyph,{[icon_default().compatibilityMode]:isCompatibilityMode(src)},className),{props,html}=getSVGFromSource(src);return react.createElement("svg",_extends({},props,rest,{className:glyphClasses,dangerouslySetInnerHTML:{__html:html}}))}IconSVG.propTypes={className:prop_types_default().string,src:prop_types_default().string.isRequired,style:prop_types_default().object},IconSVG.__docgenInfo={description:"",methods:[],displayName:"IconSVG",props:{className:{type:{name:"string"},required:!1,description:""},src:{type:{name:"string"},required:!0,description:"",tsType:{name:"string"}},style:{type:{name:"object"},required:!1,description:""}},composes:["SVGAttributes"]};const icon_svg=(0,react.memo)(IconSVG);function icon_extends(){return icon_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},icon_extends.apply(this,arguments)}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon__svg.tsx"]={name:"IconSVG",docgenInfo:IconSVG.__docgenInfo,path:"src/icon/icon__svg.tsx"});const warnSize=browser_default()((()=>{}),"`size`, `width` and `height` props are not recommended to use in Ring UI `Icon` component. The intrinsic sizes of SVG icon (`width` and `height` SVG attributes) are used instead.\n\nWe strongly recommend to use icons handcrafted for particular sizes. If your icon doesn't exist in the desired size, please ask your designer to draw one. \"Responsive\" checkmark should be unchecked when exporting icon.'");class Icon extends react.PureComponent{static propTypes={className:prop_types_default().string,color:prop_types_default().string,glyph:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().elementType]).isRequired,height:prop_types_default().number,size:prop_types_default().number,width:prop_types_default().number,loading:prop_types_default().bool,suppressSizeWarning:prop_types_default().bool};static defaultProps={className:"",color:icon_constants.I.DEFAULT,glyph:""};static Color=icon_constants.I;static Size=icon_constants.$;warnSize(){this.props.suppressSizeWarning||warnSize()}getStyle(){const{size,width,height}=this.props;return width||height?(this.warnSize(),{width,height}):size?(this.warnSize(),{width:size,height:size}):void 0}render(){const{className,size,color,loading,glyph:Glyph,width,height,suppressSizeWarning,...restProps}=this.props;if(!Glyph)return null;const classes=classnames_default()(icon_default().icon,{[icon_default()[color]]:!!color,[icon_default().loading]:loading},className);return react.createElement("span",icon_extends({},restProps,{className:classes}),"string"==typeof Glyph?react.createElement(icon_svg,{src:Glyph,style:this.getStyle()}):react.createElement(Glyph,{className:icon_default().glyph,style:this.getStyle()}))}}Icon.__docgenInfo={description:"",methods:[{name:"warnSize",docblock:null,modifiers:[],params:[],returns:null},{name:"getStyle",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Icon",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},color:{defaultValue:{value:"Color.DEFAULT",computed:!0},type:{name:"string"},required:!1,description:"",tsType:{name:"Color"}},glyph:{defaultValue:{value:"''",computed:!1},type:{name:"union",value:[{name:"string"},{name:"elementType"}]},required:!1,description:"",tsType:{name:"union",raw:"string | IconType | null",elements:[{name:"string"},{name:"ComponentType",elements:[{name:"SVGAttributes",elements:[{name:"SVGSVGElement"}],raw:"SVGAttributes<SVGSVGElement>"}],raw:"ComponentType<SVGAttributes<SVGSVGElement>>"},{name:"null"}]}},height:{type:{name:"number"},required:!1,description:"",tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}},size:{type:{name:"number"},required:!1,description:"",tsType:{name:"union",raw:"Size | number | null | undefined",elements:[{name:"Size"},{name:"number"},{name:"null"},{name:"undefined"}]}},width:{type:{name:"number"},required:!1,description:"",tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}},loading:{type:{name:"bool"},required:!1,description:"",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}},suppressSizeWarning:{type:{name:"bool"},required:!1,description:"",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}}},composes:["HTMLAttributes"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx"]={name:"Icon",docgenInfo:Icon.__docgenInfo,path:"src/icon/icon.tsx"})},"./src/link/clickableLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ClickableLink});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class ClickableLink extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onPlainLeftClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onConditionalClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired};onClick=e=>{const{onClick,onConditionalClick,onPlainLeftClick}=this.props,isPlainLeft=(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e);onClick&&onClick(e),onConditionalClick&&onConditionalClick(isPlainLeft,e),onPlainLeftClick&&isPlainLeft&&(e.preventDefault(),onPlainLeftClick(e))};render(){const{onConditionalClick,onPlainLeftClick,activeClassName,href,children,...restProps}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_extends({href},restProps,{onClick:this.onClick}),children)}}ClickableLink.__docgenInfo={description:"",methods:[{name:"onClick",docblock:null,modifiers:[],params:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]}}],returns:null}],displayName:"ClickableLink",props:{onClick:{type:{name:"func"},required:!1,description:""},onPlainLeftClick:{type:{name:"func"},required:!1,description:"",tsType:{name:"union",raw:"((e: React.MouseEvent<HTMLAnchorElement>) => void) | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]}},onConditionalClick:{type:{name:"func"},required:!1,description:"",tsType:{name:"union",raw:"| ((isPlainLeft: boolean, e: React.MouseEvent<HTMLAnchorElement>) => void)\n| null\n| undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]}},activeClassName:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},href:{type:{name:"string"},required:!0,description:""},children:{type:{name:"node"},required:!0,description:""},disabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""}},composes:["AnchorHTMLAttributes"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/link/clickableLink.tsx"]={name:"ClickableLink",docgenInfo:ClickableLink.__docgenInfo,path:"src/link/clickableLink.tsx"})}}]);