(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[5906],{"./src/control-help/control-help.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>ControlHelp});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_control_help_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/control-help/control-help.css"),_control_help_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_control_help_css__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ControlHelp({className,...restProps}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,_control_help_css__WEBPACK_IMPORTED_MODULE_1___default().help),...restProps})}ControlHelp.__docgenInfo={description:"",methods:[],displayName:"ControlHelp"}},"./src/dropdown-menu/dropdown-menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_list_list__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/list/list.tsx"),_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/dropdown/dropdown.tsx"),_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/popup-menu/popup-menu.tsx"),_global_get_uid__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/global/get-uid.ts"),_dropdown_anchor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/dropdown/anchor.tsx"),_global_typescript_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/global/typescript-utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{children,...dropdownPropTypes}=_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.A.propTypes||{},{id:idPropType,data:dataPropType,ariaLabel:ariaLabelPropType,onSelect:onSelectPropType}=_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_3__.A.propTypes||{};function DropdownAnchorWrapper({anchor,pinned,active,activeListItemId,listId,...restProps}){const anchorAriaProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...listId?{"aria-haspopup":!0}:{},...activeListItemId?{"aria-activedescendant":activeListItemId,"aria-owns":listId}:{},...active?{"aria-expanded":!0}:{}})),[active,activeListItemId,listId]),anchorProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({active,pinned,...restProps,...anchorAriaProps})),[pinned,active,restProps,anchorAriaProps]),anchorComponentProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...anchorProps,pinned:`${anchorProps.pinned}`})),[anchorProps]);return"string"==typeof anchor?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_dropdown_anchor__WEBPACK_IMPORTED_MODULE_4__.A,{...anchorComponentProps,children:anchor}):"function"==typeof anchor?anchor({active,pinned,...restProps},anchorAriaProps):(0,_global_typescript_utils__WEBPACK_IMPORTED_MODULE_5__.c)(anchor)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...anchorAriaProps,children:anchor}):(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(anchor,"string"==typeof anchor.type?anchorAriaProps:anchorComponentProps)}DropdownAnchorWrapper.propTypes={anchor:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().node,prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,prop_types__WEBPACK_IMPORTED_MODULE_6___default().func]).isRequired,pinned:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,active:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,activeListItemId:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,listId:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string};const DropdownMenu=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function DropdownMenu({id,anchor,ariaLabel,data,onSelect,menuProps,...restDropdownProps},forwardedRef){const listId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>id||(0,_global_get_uid__WEBPACK_IMPORTED_MODULE_7__.A)("dropdown-menu-list")),[id]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_list_list__WEBPACK_IMPORTED_MODULE_8__.h.Provider,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.A,{anchor:({pinned,active,...restAnchorProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_list_list__WEBPACK_IMPORTED_MODULE_8__.h.ValueContext.Consumer,{children:activeItemId=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DropdownAnchorWrapper,{anchor,pinned,active,activeListItemId:activeItemId,listId,...restAnchorProps})}),...restDropdownProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_3__.A,{ref:forwardedRef,id:listId,ariaLabel:ariaLabel||"Dropdown menu",closeOnSelect:!0,activateFirstItem:!0,data,onSelect,...menuProps})})})}));DropdownMenu.propTypes={id:idPropType,data:dataPropType,ariaLabel:ariaLabelPropType,onSelect:onSelectPropType,menuProps:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object,...dropdownPropTypes};const __WEBPACK_DEFAULT_EXPORT__=Object.assign(DropdownMenu,{ListProps:_list_list__WEBPACK_IMPORTED_MODULE_8__.A.ListProps});DropdownMenu.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{anchor:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactNodeArray | string\n| ((props: AnchorProps, ariaProps: HTMLAttributes<HTMLElement>) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"ReactNodeArray"},{name:"string"},{name:"unknown"}]},description:""},data:{required:!1,tsType:{name:"union",raw:"readonly ListDataItem<T>[] | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"",type:{name:"custom",raw:"data: dataPropType"}},ariaLabel:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"custom",raw:"ariaLabel: ariaLabelPropType"}},onSelect:{required:!1,tsType:{name:"union",raw:"((\n  item: ListDataItem<T>,\n  event: Event | SyntheticEvent,\n  params?: SelectHandlerParams,\n) => void) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"",type:{name:"custom",raw:"onSelect: onSelectPropType"}},menuProps:{required:!1,tsType:{name:"union",raw:"PopupMenuAttrs<T> | null | undefined",elements:[{name:"JSX.LibraryManagedAttributes",elements:[{name:"PopupMenu"},{name:"PopupMenuProps",elements:[{name:"T"}],raw:"PopupMenuProps<T>"}],raw:"JSX.LibraryManagedAttributes<typeof PopupMenu, PopupMenuProps<T>>"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"object"}},id:{description:"",type:{name:"custom",raw:"id: idPropType"},required:!1}},composes:["Omit"]}},"./src/dropdown/anchor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@jetbrains/icons/chevron-10px.js"),_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1__),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),_icon_icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/icon/icon.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/button/button.tsx"),_dropdown_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/dropdown/dropdown.css"),_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_dropdown_css__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Anchor=({children,className,...restProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_button_button__WEBPACK_IMPORTED_MODULE_5__.Ay,{"data-test-ring-dropdown-anchor":!0,text:!0,className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default().anchor,className),...restProps,children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon_icon__WEBPACK_IMPORTED_MODULE_6__.Ay,{glyph:_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1___default(),className:_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default().chevron})]});Anchor.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Anchor);Anchor.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{children:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1}}}},"./src/dropdown/dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Dropdown});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/global/data-tests.ts"),_global_typescript_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/typescript-utils.ts"),_anchor__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/dropdown/anchor.tsx"),_dropdown_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/dropdown/dropdown.css"),_dropdown_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_dropdown_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");class Dropdown extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={anchor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().func]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().element,prop_types__WEBPACK_IMPORTED_MODULE_4___default().func]).isRequired,initShown:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,clickMode:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,hoverMode:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,hoverShowTimeOut:prop_types__WEBPACK_IMPORTED_MODULE_4___default().number,hoverHideTimeOut:prop_types__WEBPACK_IMPORTED_MODULE_4___default().number,disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,onShow:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,onHide:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,onMouseEnter:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,onMouseLeave:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_4___default().string};static defaultProps={initShown:!1,clickMode:!0,hoverMode:!1,hoverShowTimeOut:300,hoverHideTimeOut:600,disabled:!1,onShow:()=>{},onHide:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{}};state={show:this.props.initShown,pinned:!1};onClick=()=>{if(this.props.disabled)return;const{show,pinned}=this.state;let nextPinned=pinned;if(this.props.hoverMode)if(pinned)nextPinned=!1;else if(nextPinned=!0,show)return void this.setState({pinned:!0});this._toggle(!show,nextPinned)};onChildCloseAttempt=()=>{let nextPinned=this.state.pinned;this.props.hoverMode&&(nextPinned=!1),this._toggle(!1,nextPinned)};hoverTimer;onMouseEnter=event=>{this.props.disabled||(this._clearTimer(),this.props.onMouseEnter?.(event),this.hoverTimer=window.setTimeout((()=>{this.state.show||this._toggle(!0)}),this.props.hoverShowTimeOut))};onMouseLeave=event=>{this.props.disabled||(this.props.onMouseLeave?.(event),this.state.pinned||(this._clearTimer(),this.hoverTimer=window.setTimeout((()=>{this.state.show&&this._toggle(!1)}),this.props.hoverHideTimeOut)))};handlePopupInteraction=()=>{this.setState((({pinned})=>pinned?null:{pinned:!0}))};toggle(show=!this.state.show){this._toggle(show)}_toggle(show,pinned=this.state.pinned){this.setState({show,pinned},(()=>show?this.props.onShow():this.props.onHide()))}_clearTimer(){this.hoverTimer&&(clearTimeout(this.hoverTimer),this.hoverTimer=null)}render(){const{show,pinned}=this.state,{initShown,onShow,onHide,hoverShowTimeOut,hoverHideTimeOut,children,anchor,className,activeClassName,hoverMode,clickMode,"data-test":dataTest,disabled,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_dropdown_css__WEBPACK_IMPORTED_MODULE_2___default().dropdown,className,{[null!=activeClassName?activeClassName:""]:null!=activeClassName&&show});let anchorElement;const active=hoverMode?pinned:show;switch(typeof anchor){case"string":anchorElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_anchor__WEBPACK_IMPORTED_MODULE_5__.A,{active,children:anchor});break;case"function":anchorElement=anchor({active:show,pinned});break;default:anchorElement=(0,_global_typescript_utils__WEBPACK_IMPORTED_MODULE_6__.c)(anchor)||"string"==typeof anchor.type?anchor:(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(anchor,{active})}const childProps={hidden:!show,onCloseAttempt:this.onChildCloseAttempt,onMouseDown:hoverMode?this.handlePopupInteraction:void 0,onContextMenu:hoverMode?this.handlePopupInteraction:void 0,dontCloseOnAnchorClick:!0};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_7__.A)("ring-dropdown",dataTest),...restProps,onClick:clickMode?this.onClick:void 0,role:"presentation",onMouseEnter:hoverMode?this.onMouseEnter:void 0,onMouseLeave:hoverMode?this.onMouseLeave:void 0,className:classes,children:[anchorElement,"function"==typeof children?children(childProps):(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,childProps)]})}}Dropdown.__docgenInfo={description:"@name Dropdown",methods:[{name:"onClick",docblock:null,modifiers:[],params:[],returns:null},{name:"onChildCloseAttempt",docblock:null,modifiers:[],params:[],returns:null},{name:"onMouseEnter",docblock:null,modifiers:[],params:[{name:"event",optional:!1,type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}],alias:"React.MouseEvent"}}],returns:null},{name:"onMouseLeave",docblock:null,modifiers:[],params:[{name:"event",optional:!1,type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}],alias:"React.MouseEvent"}}],returns:null},{name:"handlePopupInteraction",docblock:null,modifiers:[],params:[],returns:null},{name:"toggle",docblock:null,modifiers:[],params:[{name:"show",optional:!0,type:null}],returns:null},{name:"_toggle",docblock:null,modifiers:[],params:[{name:"show",optional:!1,type:{name:"boolean"}},{name:"pinned",optional:!0,type:null}],returns:null},{name:"_clearTimer",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Dropdown",props:{anchor:{required:!0,tsType:{name:"union",raw:"ReactElement | readonly ReactElement[] | string | ((props: AnchorProps) => ReactNode)",elements:[{name:"ReactElement"},{name:"unknown"},{name:"string"},{name:"unknown"}]},description:"Can be string, React element, or a function accepting an object with {active, pinned} properties and returning a React element\nReact element should render some interactive HTML element like `button` or `a`",type:{name:"union",value:[{name:"node"},{name:"func"}]}},children:{required:!0,tsType:{name:"union",raw:"ReactElement<PopupAttrs> | ((props: Omit<PopupAttrs, 'children'>) => ReactNode)",elements:[{name:"ReactElement",elements:[{name:"JSX.LibraryManagedAttributes",elements:[{name:"Popup"},{name:"PopupProps"}],raw:"JSX.LibraryManagedAttributes<typeof Popup, PopupProps>"}],raw:"ReactElement<PopupAttrs>"},{name:"unknown"}]},description:"",type:{name:"union",value:[{name:"element"},{name:"func"}]}},initShown:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},disabled:{required:!1,tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},clickMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},hoverMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},hoverShowTimeOut:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1},type:{name:"number"}},hoverHideTimeOut:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"600",computed:!1},type:{name:"number"}},onShow:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},onHide:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},activeClassName:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},"data-test":{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},onMouseEnter:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onMouseLeave:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},className:{description:"",type:{name:"string"},required:!1}},composes:["Omit"]}},"./src/global/composeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>createComposedRef});var memoize_one__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/memoize-one/dist/memoize-one.esm.js");function composeRefs(...refs){return value=>refs.forEach((ref=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}function createComposedRef(){return(0,memoize_one__WEBPACK_IMPORTED_MODULE_0__.A)(composeRefs)}},"./src/global/prop-types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>refObject});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const refObject=value=>prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({current:value})},"./src/global/typescript-utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>isArray,z:()=>isTruthy});const isArray=arg=>Array.isArray(arg),isTruthy=arg=>Boolean(arg)},"./src/popup-menu/popup-menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>PopupMenu,D:()=>ListProps});var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_popup_popup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/popup/popup.tsx"),_list_list__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/list/list.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{children,...popupPropTypes}=_popup_popup__WEBPACK_IMPORTED_MODULE_1__.Ay.propTypes||{};class PopupMenu extends _popup_popup__WEBPACK_IMPORTED_MODULE_1__.Ay{static isItemType=_list_list__WEBPACK_IMPORTED_MODULE_2__.A.isItemType;static ListProps=_list_list__WEBPACK_IMPORTED_MODULE_2__.A.ListProps;static defaultProps={..._list_list__WEBPACK_IMPORTED_MODULE_2__.A.defaultProps,..._popup_popup__WEBPACK_IMPORTED_MODULE_1__.Ay.defaultProps,renderOptimization:!1,closeOnSelect:!1};onSelect=(item,event)=>{this.props.closeOnSelect&&this._onCloseAttempt(event),this.props.onSelect(item,event)};list;listRef=el=>{this.list=el};getInternalContent(){const{className,...props}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_list_list__WEBPACK_IMPORTED_MODULE_2__.A,{ref:this.listRef,...props,maxHeight:this.popup&&parseFloat(this.popup.style.maxHeight),shortcuts:this.shouldUseShortcuts(),onSelect:this.onSelect})})}}PopupMenu.propTypes={...popupPropTypes,..._list_list__WEBPACK_IMPORTED_MODULE_2__.A.propTypes,maxHeight:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,prop_types__WEBPACK_IMPORTED_MODULE_3___default().number]),closeOnSelect:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};const{ListProps}=_list_list__WEBPACK_IMPORTED_MODULE_2__.A},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/control-help/control-help.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".help_cb69 {\n  color: var(--ring-secondary-color);\n\n  font-size: var(--ring-font-size-smaller);\n  line-height: var(--ring-line-height-lowest);\n}\n","",{version:3,sources:["webpack://./src/control-help/control-help.css"],names:[],mappings:"AAEA;EACE,kCAAkC;;EAElC,wCAAwC;EACxC,2CAA2C;AAC7C",sourcesContent:['@import "../global/variables.css";\n\n.help {\n  color: var(--ring-secondary-color);\n\n  font-size: var(--ring-font-size-smaller);\n  line-height: var(--ring-line-height-lowest);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={help:"help_cb69"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/dropdown/dropdown.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".dropdown_c237 {\n  display: inline-block;\n}\n\n.anchor_dff2.anchor_dff2 {\n  margin: 0 -3px;\n  padding: 0 3px;\n\n  font: inherit;\n}\n\n.chevron_a400 {\n  margin-left: 2px;\n\n  line-height: normal;\n}\n","",{version:3,sources:["webpack://./src/dropdown/dropdown.css"],names:[],mappings:"AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,cAAc;;EAEd,aAAa;AACf;;AAEA;EACE,gBAAgB;;EAEhB,mBAAmB;AACrB",sourcesContent:['@import "../global/variables.css";\n\n.dropdown {\n  display: inline-block;\n}\n\n.anchor.anchor {\n  margin: 0 -3px;\n  padding: 0 3px;\n\n  font: inherit;\n}\n\n.chevron {\n  margin-left: 2px;\n\n  line-height: normal;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dropdown:"dropdown_c237",anchor:"anchor_dff2",chevron:"chevron_a400"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/control-help/control-help.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/control-help/control-help.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/dropdown/dropdown.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/dropdown/dropdown.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);