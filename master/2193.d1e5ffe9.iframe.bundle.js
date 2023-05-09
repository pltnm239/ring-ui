(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[2193],{"./.storybook/react-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node},__WEBPACK_DEFAULT_EXPORT__=()=>reactDecorator},"./src/dropdown-menu/dropdown-menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_list_list__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/list/list.tsx"),_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/dropdown/dropdown.tsx"),_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/popup-menu/popup-menu.tsx"),_global_get_uid__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/get-uid.ts"),_dropdown_anchor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/dropdown/anchor.tsx"),_global_typescript_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/typescript-utils.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const{children,...dropdownPropTypes}=_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__.Z.propTypes||{},{id:idPropType,data:dataPropType,ariaLabel:ariaLabelPropType,onSelect:onSelectPropType}=_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_2__.default.propTypes||{};function DropdownAnchorWrapper(_ref){let{anchor,pinned,active,activeListItemId,listId,...restProps}=_ref;const anchorAriaProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...listId?{"aria-haspopup":!0}:{},...activeListItemId?{"aria-activedescendant":activeListItemId,"aria-owns":listId}:{},...active?{"aria-expanded":!0}:{}})),[active,activeListItemId,listId]),anchorProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({active,pinned,...restProps,...anchorAriaProps})),[pinned,active,restProps,anchorAriaProps]),anchorComponentProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...anchorProps,pinned:`${anchorProps.pinned}`})),[anchorProps]);return"string"==typeof anchor?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown_anchor__WEBPACK_IMPORTED_MODULE_3__.Z,anchorComponentProps,anchor):"function"==typeof anchor?anchor({active,pinned,...restProps},anchorAriaProps):(0,_global_typescript_utils__WEBPACK_IMPORTED_MODULE_4__.k)(anchor)?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",anchorAriaProps,anchor):(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(anchor,"string"==typeof anchor.type?anchorAriaProps:anchorComponentProps)}DropdownAnchorWrapper.propTypes={anchor:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,prop_types__WEBPACK_IMPORTED_MODULE_5___default().func]).isRequired,pinned:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,active:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,activeListItemId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,listId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string};const DropdownMenu=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function DropdownMenu(_ref2,forwardedRef){let{id,anchor,ariaLabel,data,onSelect,menuProps,...restDropdownProps}=_ref2;const listId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>id||(0,_global_get_uid__WEBPACK_IMPORTED_MODULE_6__.Z)("dropdown-menu-list")),[id]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_list__WEBPACK_IMPORTED_MODULE_7__.t.Provider,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__.Z,_extends({anchor:_ref3=>{let{pinned,active,...restAnchorProps}=_ref3;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_list__WEBPACK_IMPORTED_MODULE_7__.t.ValueContext.Consumer,null,(activeItemId=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownAnchorWrapper,_extends({anchor,pinned,active,activeListItemId:activeItemId,listId},restAnchorProps))))}},restDropdownProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_2__.default,_extends({ref:forwardedRef,id:listId,ariaLabel:ariaLabel||"Dropdown menu",closeOnSelect:!0,activateFirstItem:!0,data,onSelect},menuProps))))}));DropdownMenu.propTypes={id:idPropType,data:dataPropType,ariaLabel:ariaLabelPropType,onSelect:onSelectPropType,menuProps:prop_types__WEBPACK_IMPORTED_MODULE_5___default().object,...dropdownPropTypes};const __WEBPACK_DEFAULT_EXPORT__=Object.assign(DropdownMenu,{ListProps:_list_list__WEBPACK_IMPORTED_MODULE_7__.default.ListProps})},"./src/dropdown/anchor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@jetbrains/icons/chevron-10px.js"),_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1__),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),_icon_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/icon/icon.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/button/button.tsx"),_dropdown_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/dropdown/dropdown.css"),_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_dropdown_css__WEBPACK_IMPORTED_MODULE_3__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Anchor=_ref=>{let{children,className,...restProps}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_4__.ZP,_extends({"data-test-ring-dropdown-anchor":!0,text:!0,className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default().anchor,className)},restProps),children,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_5__.ZP,{glyph:_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1___default(),className:_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default().chevron}))};Anchor.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string},Anchor.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{children:{type:{name:"node"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Anchor);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/anchor.tsx"]={name:"Anchor",docgenInfo:Anchor.__docgenInfo,path:"src/dropdown/anchor.tsx"})},"./src/dropdown/dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Dropdown});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/data-tests.ts"),_global_typescript_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/global/typescript-utils.ts"),_anchor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/dropdown/anchor.tsx"),_dropdown_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/dropdown/dropdown.css"),_dropdown_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_dropdown_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Dropdown extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={anchor:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().element,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]).isRequired,initShown:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,clickMode:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,hoverMode:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,hoverShowTimeOut:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,hoverHideTimeOut:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,onShow:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onHide:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onMouseEnter:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onMouseLeave:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};static defaultProps={initShown:!1,clickMode:!0,hoverMode:!1,hoverShowTimeOut:300,hoverHideTimeOut:600,disabled:!1,onShow:()=>{},onHide:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{}};state={show:this.props.initShown,pinned:!1};onClick=()=>{if(this.props.disabled)return;const{show,pinned}=this.state;let nextPinned=pinned;if(this.props.hoverMode)if(pinned)nextPinned=!1;else if(nextPinned=!0,show)return void this.setState({pinned:!0});this._toggle(!show,nextPinned)};onChildCloseAttempt=()=>{let nextPinned=this.state.pinned;this.props.hoverMode&&(nextPinned=!1),this._toggle(!1,nextPinned)};hoverTimer;onMouseEnter=event=>{this.props.disabled||(this._clearTimer(),this.props.onMouseEnter?.(event),this.hoverTimer=window.setTimeout((()=>{this.state.show||this._toggle(!0)}),this.props.hoverShowTimeOut))};onMouseLeave=event=>{this.props.disabled||(this.props.onMouseLeave?.(event),this.state.pinned||(this._clearTimer(),this.hoverTimer=window.setTimeout((()=>{this.state.show&&this._toggle(!1)}),this.props.hoverHideTimeOut)))};handlePopupInteraction=()=>{this.setState((_ref=>{let{pinned}=_ref;return pinned?null:{pinned:!0}}))};toggle(){let show=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.show;this._toggle(show)}_toggle(show){let pinned=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.pinned;this.setState({show,pinned},(()=>show?this.props.onShow():this.props.onHide()))}_clearTimer(){this.hoverTimer&&(clearTimeout(this.hoverTimer),this.hoverTimer=null)}render(){const{show,pinned}=this.state,{initShown,onShow,onHide,hoverShowTimeOut,hoverHideTimeOut,children,anchor,className,activeClassName,hoverMode,clickMode,"data-test":dataTest,disabled,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_dropdown_css__WEBPACK_IMPORTED_MODULE_2___default().dropdown,className,{[null!=activeClassName?activeClassName:""]:null!=activeClassName&&show});let anchorElement;const active=hoverMode?pinned:show;switch(typeof anchor){case"string":anchorElement=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_anchor__WEBPACK_IMPORTED_MODULE_4__.Z,{active},anchor);break;case"function":anchorElement=anchor({active:show,pinned});break;default:anchorElement=(0,_global_typescript_utils__WEBPACK_IMPORTED_MODULE_5__.k)(anchor)||"string"==typeof anchor.type?anchor:(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(anchor,{active})}const childProps={hidden:!show,onCloseAttempt:this.onChildCloseAttempt,onMouseDown:hoverMode?this.handlePopupInteraction:void 0,onContextMenu:hoverMode?this.handlePopupInteraction:void 0,dontCloseOnAnchorClick:!0};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_6__.Z)("ring-dropdown",dataTest)},restProps,{onClick:clickMode?this.onClick:void 0,role:"presentation",onMouseEnter:hoverMode?this.onMouseEnter:void 0,onMouseLeave:hoverMode?this.onMouseLeave:void 0,className:classes}),anchorElement,"function"==typeof children?children(childProps):(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,childProps))}}Dropdown.__docgenInfo={description:"@name Dropdown",methods:[{name:"onClick",docblock:null,modifiers:[],params:[],returns:null},{name:"onChildCloseAttempt",docblock:null,modifiers:[],params:[],returns:null},{name:"onMouseEnter",docblock:null,modifiers:[],params:[{name:"event",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]}}],returns:null},{name:"onMouseLeave",docblock:null,modifiers:[],params:[{name:"event",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]}}],returns:null},{name:"handlePopupInteraction",docblock:null,modifiers:[],params:[],returns:null},{name:"toggle",docblock:null,modifiers:[],params:[{name:"show",type:null}],returns:null},{name:"_toggle",docblock:null,modifiers:[],params:[{name:"show",type:{name:"boolean"}},{name:"pinned",type:null}],returns:null},{name:"_clearTimer",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Dropdown",props:{initShown:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},clickMode:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},hoverMode:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},hoverShowTimeOut:{defaultValue:{value:"300",computed:!1},type:{name:"number"},required:!1,description:"",tsType:{name:"number"}},hoverHideTimeOut:{defaultValue:{value:"600",computed:!1},type:{name:"number"},required:!1,description:"",tsType:{name:"number"}},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}},onShow:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"unknown"}},onHide:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"unknown"}},onMouseEnter:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},onMouseLeave:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},anchor:{type:{name:"union",value:[{name:"node"},{name:"func"}]},required:!0,description:"Can be string, React element, or a function accepting an object with {active, pinned} properties and returning a React element\nReact element should render some interactive HTML element like `button` or `a`",tsType:{name:"union",raw:"ReactElement | readonly ReactElement[] | string | ((props: AnchorProps) => ReactNode)",elements:[{name:"ReactElement"},{name:"unknown"},{name:"string"},{name:"unknown"}]}},children:{type:{name:"union",value:[{name:"element"},{name:"func"}]},required:!0,description:"",tsType:{name:"union",raw:"ReactElement<PopupAttrs> | ((props: Omit<PopupAttrs, 'children'>) => ReactNode)",elements:[{name:"ReactElement",elements:[{name:"PopupAttrs"}],raw:"ReactElement<PopupAttrs>"},{name:"unknown"}]}},className:{type:{name:"string"},required:!1,description:""},activeClassName:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},"data-test":{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}}},composes:["Omit"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.tsx"]={name:"Dropdown",docgenInfo:Dropdown.__docgenInfo,path:"src/dropdown/dropdown.tsx"})},"./src/global/typescript-utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>isTruthy,k:()=>isArray});const isArray=arg=>Array.isArray(arg),isTruthy=arg=>Boolean(arg)},"./src/popup-menu/popup-menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>ListProps,default:()=>PopupMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_popup_popup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/popup/popup.tsx"),_list_list__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/list/list.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const{children,...popupPropTypes}=_popup_popup__WEBPACK_IMPORTED_MODULE_1__.default.propTypes||{};class PopupMenu extends _popup_popup__WEBPACK_IMPORTED_MODULE_1__.default{static isItemType=_list_list__WEBPACK_IMPORTED_MODULE_2__.default.isItemType;static ListProps=_list_list__WEBPACK_IMPORTED_MODULE_2__.default.ListProps;static defaultProps={..._list_list__WEBPACK_IMPORTED_MODULE_2__.default.defaultProps,..._popup_popup__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps,renderOptimization:!1,closeOnSelect:!1};onSelect=(item,event)=>{this.props.closeOnSelect&&this._onCloseAttempt(event),this.props.onSelect(item,event)};list;listRef=el=>{this.list=el};getInternalContent(){const{className,...props}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_list__WEBPACK_IMPORTED_MODULE_2__.default,_extends({ref:this.listRef},props,{maxHeight:this.popup&&parseFloat(this.popup.style.maxHeight),shortcuts:this.shouldUseShortcuts(),onSelect:this.onSelect})))}}PopupMenu.propTypes={...popupPropTypes,..._list_list__WEBPACK_IMPORTED_MODULE_2__.default.propTypes,closeOnSelect:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};const{ListProps}=_list_list__WEBPACK_IMPORTED_MODULE_2__.default},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/dropdown/dropdown.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".dropdown_c237 {\n  display: inline-block;\n}\n\n.anchor_dff2.anchor_dff2 {\n  margin: 0 -3px;\n  padding: 0 3px;\n\n  font: inherit;\n}\n\n.chevron_a400 {\n  margin-left: 2px;\n\n  line-height: normal;\n}\n","",{version:3,sources:["webpack://./src/dropdown/dropdown.css"],names:[],mappings:"AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,cAAc;;EAEd,aAAa;AACf;;AAEA;EACE,gBAAgB;;EAEhB,mBAAmB;AACrB",sourcesContent:['@import "../global/variables.css";\n\n.dropdown {\n  display: inline-block;\n}\n\n.anchor.anchor {\n  margin: 0 -3px;\n  padding: 0 3px;\n\n  font: inherit;\n}\n\n.chevron {\n  margin-left: 2px;\n\n  line-height: normal;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dropdown:"dropdown_c237",anchor:"anchor_dff2",chevron:"chevron_a400"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/dropdown/dropdown.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/dropdown/dropdown.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);