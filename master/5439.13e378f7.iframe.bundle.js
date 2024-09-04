(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[5439],{"./src/tag/tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Tag});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@jetbrains/icons/close-12px.js"),_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2__),_icon_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/icon/icon.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/button/button.tsx"),_global_controls_height__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/global/controls-height.tsx"),_tag_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tag/tag.css"),_tag_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_tag_css__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");class Tag extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static defaultProps={onRemove:()=>{},onClick:()=>{},readOnly:!1,disabled:!1,focused:!1,render:props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{type:"button",...props})};state={focused:!1};componentDidUpdate(prevProps){this.props.focused!==prevProps.focused&&this.setState({focused:this.props.focused}),this.state.focused&&this.tagNode?.focus(),this.setDocumentClickListener(this.state.focused)}componentWillUnmount(){this.setDocumentClickListener(!1),this.setState({focused:!1})}onDocumentClick=event=>{this.tagNode&&this.setState({focused:this.tagNode===event.target})};tagNode;tagRef=el=>{this.tagNode=el};setDocumentClickListener(setListener){setListener?document.addEventListener("click",this.onDocumentClick):document.removeEventListener("click",this.onDocumentClick)}renderCustomIcon(){return this.props.rgTagIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon_icon__WEBPACK_IMPORTED_MODULE_5__.Ay,{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().icon,title:this.props.rgTagTitle,glyph:this.props.rgTagIcon}):null}_renderImageElement(avatarSrc){const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()({[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().customIcon]:this.props.icon,[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().avatarIcon]:avatarSrc});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{alt:avatarSrc?"Avatar":"Icon",className:classes,src:avatarSrc||this.props.icon})}renderImage(){return this.props.icon&&!this.props.avatar?this._renderImageElement():null}renderAvatar(){return this.props.avatar?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().avatarContainer,children:this._renderImageElement(this.props.avatar)}):null}renderRemoveIcon(){return this.props.readOnly?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_button_button__WEBPACK_IMPORTED_MODULE_6__.Ay,{title:"Remove",icon:_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2___default(),"data-test":"ring-tag-remove",className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().remove,iconClassName:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().removeIcon,onClick:this.props.onRemove,style:{"--ring-icon-secondary-color":this.props.textColor},height:_global_controls_height__WEBPACK_IMPORTED_MODULE_7__.sr.M})}render(){const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ring-js-shortcuts",_tag_css__WEBPACK_IMPORTED_MODULE_3___default().tag,{[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().focused]:this.state.focused,[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().disabled]:this.props.disabled,[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().withRemove]:!this.props.readOnly},this.props.className),{backgroundColor,textColor,render}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().container,children:[render({"data-test":"ring-tag",className:classes,ref:this.tagRef,onClick:this.props.onClick,style:{backgroundColor,color:textColor},disabled:this.props.disabled,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[this.renderAvatar(),this.renderCustomIcon(),this.renderImage(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().content,children:this.props.children})]})}),this.renderRemoveIcon()]})}}Tag.__docgenInfo={description:"@name Tag",methods:[{name:"onDocumentClick",docblock:null,modifiers:[],params:[{name:"event",optional:!1,type:{name:"MouseEvent",alias:"MouseEvent"}}],returns:null},{name:"tagRef",docblock:null,modifiers:[],params:[{name:"el",optional:!1,type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null},{name:"setDocumentClickListener",docblock:null,modifiers:[],params:[{name:"setListener",optional:!1,type:{name:"boolean"}}],returns:null},{name:"renderCustomIcon",docblock:null,modifiers:[],params:[],returns:null},{name:"renderImage",docblock:null,modifiers:[],params:[],returns:null},{name:"renderAvatar",docblock:null,modifiers:[],params:[],returns:null},{name:"renderRemoveIcon",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Tag",props:{onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},render:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: TagRenderProps) => ReactNode",signature:{arguments:[{type:{name:"TagRenderProps"},name:"props"}],return:{name:"ReactNode"}}},description:"",defaultValue:{value:'props => <button type="button" {...props}/>',computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:""},rgTagIcon:{required:!1,tsType:{name:"union",raw:"string | IconType | null | undefined",elements:[{name:"string"},{name:"ComponentType",elements:[{name:"SVGAttributes",elements:[{name:"SVGSVGElement"}],raw:"SVGAttributes<SVGSVGElement>"}],raw:"ComponentType<SVGAttributes<SVGSVGElement>>"},{name:"null"},{name:"undefined"}]},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},avatar:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:""},rgTagTitle:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},textColor:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},backgroundColor:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}}},"./src/tags-list/tags-list.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>TagsList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_tag_tag__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tag/tag.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function noop(){}class TagsList extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static defaultProps={customTagComponent:null,canNotBeEmpty:!1,disabled:!1,handleClick:noop,handleRemove:noop};renderTag(tag,focusTag){const TagComponent=this.props.customTagComponent||_tag_tag__WEBPACK_IMPORTED_MODULE_3__.A,readOnly=this.props.disabled||tag.readOnly||this.props.canNotBeEmpty&&1===this.props.tags.length,{tagClassName}=this.props;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagComponent,{...tag,key:tag.key,readOnly,disabled:this.props.disabled||tag.disabled,focused:focusTag,onClick:this.props.handleClick(tag),onRemove:this.props.handleRemove(tag),className:tagClassName},tag.label)}render(){const{children,className,customTagComponent,canNotBeEmpty,handleClick,tagClassName,handleRemove,tags,activeIndex,...props}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ring-js-shortcuts",className),tagsList=(this.props.tags||[]).map(((tag,index)=>this.renderTag(tag,this.props.activeIndex===index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{"data-test":"ring-tags-list",className:classes,...props,children:[tagsList,children]})}}TagsList.__docgenInfo={description:"@name Tags List",methods:[{name:"renderTag",docblock:null,modifiers:[],params:[{name:"tag",optional:!1,type:{name:"T",alias:"T"}},{name:"focusTag",optional:!1,type:{name:"boolean"}}],returns:null}],displayName:"TagsList",props:{tags:{required:!0,tsType:{name:"unknown"},description:""},customTagComponent:{required:!1,tsType:{name:"ComponentType",elements:[{name:"JSX.LibraryManagedAttributes",elements:[{name:"Tag"},{name:"TagProps"}],raw:"JSX.LibraryManagedAttributes<typeof Tag, TagProps>"}],raw:"ComponentType<TagAttrs>"},description:"",defaultValue:{value:"null",computed:!1}},canNotBeEmpty:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(tag: T) => (e: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"T"},name:"tag"}],return:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"e"}],return:{name:"void"}}}}},description:"",defaultValue:{value:"function noop() {}",computed:!1}},handleRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(tag: T) => (e: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"T"},name:"tag"}],return:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"e"}],return:{name:"void"}}}}},description:"",defaultValue:{value:"function noop() {}",computed:!1}},activeIndex:{required:!1,tsType:{name:"union",raw:"number | null | undefined",elements:[{name:"number"},{name:"null"},{name:"undefined"}]},description:""},tagClassName:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:""}},composes:["HTMLAttributes"]}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/tag/tag.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,"@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.tag_ae7d:hover {\n  transition: none;\n\n  background-color: var(--ring-tag-hover-background-color);\n}}\n\n.tag_ae7d {\n\n  position: relative;\n  z-index: 1;\n\n  display: inline-flex;\n\n  box-sizing: border-box;\n  max-width: 100%;\n  height: 20px;\n\n  padding: 0 var(--ring-unit);\n\n  cursor: pointer;\n\n  vertical-align: top;\n\n  color: var(--ring-text-color);\n\n  border: none;\n  border-radius: var(--ring-border-radius);\n\n  font-size: 12px;\n  line-height: var(--ring-line-height);\n}\n\n.tag_ae7d {\n  transition: background-color var(--ring-ease);\n\n  background-color: var(--ring-tag-background-color);\n}\n\n.withRemove_d56a {\n  padding-right: 20px;\n}\n\n.container_a5d8 {\n  position: relative;\n\n  display: inline-block;\n\n  max-width: calc(100% - var(--ring-unit)/2);\n\n  margin-right: calc(var(--ring-unit)/2);\n\n  white-space: nowrap;\n}\n\n.focused_bbe2,\n.tag_ae7d:focus-visible {\n  position: relative;\n\n  outline: none;\n  box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n}\n\n.focused_bbe2,\n.tag_ae7d:focus-visible {\n  transition: none;\n\n  background-color: var(--ring-tag-hover-background-color);\n}\n\n.content_a0ee {\n}\n\n.disabled_ffbd.tag_ae7d {\n  pointer-events: none;\n\n  color: var(--ring-disabled-color);\n  background-color: var(--ring-disabled-background-color);\n}\n\n.remove_eac2 {\n  position: absolute;\n  z-index: 1;\n  top: 2px;\n  right: 0;\n\n  height: auto;\n  padding: 0 calc(var(--ring-unit)/2);\n\n  line-height: calc(var(--ring-unit)*2);\n}\n\n.removeIcon_e2b4.removeIcon_e2b4 {\n  color: var(--ring-icon-secondary-color);\n}\n\n.icon_bb17 {\n  margin-right: calc(var(--ring-unit)/2);\n  margin-left: calc(var(--ring-unit)*-0.5);\n\n  color: var(--ring-icon-secondary-color);\n}\n\n.icon_bb17.icon_bb17 svg {\n    vertical-align: -3.5px;\n  }\n\n.avatarContainer_b363 {\n  display: inline-block;\n  overflow: hidden;\n\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n  margin-right: calc(var(--ring-unit)/2);\n  margin-left: calc(var(--ring-unit)*-1);\n\n  vertical-align: top;\n\n  border-top-left-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n}\n\n.customIcon_dbd7 {\n  max-width: calc(var(--ring-unit)*2);\n  max-height: calc(var(--ring-unit)*2);\n\n  margin-right: calc(var(--ring-unit)/2);\n\n  vertical-align: bottom;\n}\n\n.avatarIcon_c087 {\n  width: 20px;\n\n  margin-right: -4px;\n\n  object-fit: contain;\n  object-position: center;\n}\n","",{version:3,sources:["<no source>","webpack://./src/tag/tag.css"],names:[],mappings:"AAAA,wGAAA;EAAA,iBAAA;;EAAA,yDAAA;CAAA,CAAA;;ACIA;;EAGE,kBAAkB;EAClB,UAAU;;EAEV,oBAAoB;;EAEpB,sBAAsB;EACtB,eAAe;EACf,YAAkB;;EAElB,2BAA2B;;EAE3B,eAAe;;EAEf,mBAAmB;;EAEnB,6BAA6B;;EAE7B,YAAY;EACZ,wCAAwC;;EAExC,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,6CAA6C;;EAE7C,kDAAkD;AACpD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,qBAAqB;;EAErB,0CAA4C;;EAE5C,sCAAwC;;EAExC,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;;EAElB,aAAa;EACb,oDAAoD;AACtD;;AAEA;;EAGE,gBAAgB;;EAEhB,wDAAwD;AAC1D;;AAEA;AAEA;;AAEA;EACE,oBAAoB;;EAEpB,iCAAiC;EACjC,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,QAAQ;;EAER,YAAY;EACZ,mCAAqC;;EAErC,qCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,sCAAwC;EACxC,wCAA0C;;EAE1C,uCAAuC;AAKzC;;AAHE;IACE,sBAAsB;EACxB;;AAGF;EACE,qBAAqB;EACrB,gBAAgB;;EAEhB,sBAAsB;EACtB,WAAiB;EACjB,YAAkB;EAClB,sCAAwC;EACxC,sCAAwC;;EAExC,mBAAmB;;EAEnB,iDAAiD;EACjD,oDAAoD;AACtD;;AAEA;EACE,mCAAqC;EACrC,oCAAsC;;EAEtC,sCAAwC;;EAExC,sBAAsB;AACxB;;AAEA;EACE,WAAiB;;EAEjB,kBAAkB;;EAElB,mBAAmB;EACnB,uBAAuB;AACzB",sourcesContent:[null,'@import "../global/variables.css";\n\n@value max-height: 20px;\n\n.tag {\n  composes: resetButton from "../global/global.css";\n\n  position: relative;\n  z-index: 1;\n\n  display: inline-flex;\n\n  box-sizing: border-box;\n  max-width: 100%;\n  height: max-height;\n\n  padding: 0 var(--ring-unit);\n\n  cursor: pointer;\n\n  vertical-align: top;\n\n  color: var(--ring-text-color);\n\n  border: none;\n  border-radius: var(--ring-border-radius);\n\n  font-size: 12px;\n  line-height: var(--ring-line-height);\n}\n\n.tag {\n  transition: background-color var(--ring-ease);\n\n  background-color: var(--ring-tag-background-color);\n}\n\n.withRemove {\n  padding-right: 20px;\n}\n\n.container {\n  position: relative;\n\n  display: inline-block;\n\n  max-width: calc(100% - var(--ring-unit) / 2);\n\n  margin-right: calc(var(--ring-unit) / 2);\n\n  white-space: nowrap;\n}\n\n.focused,\n.tag:focus-visible {\n  position: relative;\n\n  outline: none;\n  box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n}\n\n.focused,\n.tag:focus-visible,\n.tag:hover {\n  transition: none;\n\n  background-color: var(--ring-tag-hover-background-color);\n}\n\n.content {\n  composes: ellipsis from "../global/global.css";\n}\n\n.disabled.tag {\n  pointer-events: none;\n\n  color: var(--ring-disabled-color);\n  background-color: var(--ring-disabled-background-color);\n}\n\n.remove {\n  position: absolute;\n  z-index: 1;\n  top: 2px;\n  right: 0;\n\n  height: auto;\n  padding: 0 calc(var(--ring-unit) / 2);\n\n  line-height: calc(var(--ring-unit) * 2);\n}\n\n.removeIcon.removeIcon {\n  color: var(--ring-icon-secondary-color);\n}\n\n.icon {\n  margin-right: calc(var(--ring-unit) / 2);\n  margin-left: calc(var(--ring-unit) * -0.5);\n\n  color: var(--ring-icon-secondary-color);\n\n  && svg {\n    vertical-align: -3.5px;\n  }\n}\n\n.avatarContainer {\n  display: inline-block;\n  overflow: hidden;\n\n  box-sizing: border-box;\n  width: max-height;\n  height: max-height;\n  margin-right: calc(var(--ring-unit) / 2);\n  margin-left: calc(var(--ring-unit) * -1);\n\n  vertical-align: top;\n\n  border-top-left-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n}\n\n.customIcon {\n  max-width: calc(var(--ring-unit) * 2);\n  max-height: calc(var(--ring-unit) * 2);\n\n  margin-right: calc(var(--ring-unit) / 2);\n\n  vertical-align: bottom;\n}\n\n.avatarIcon {\n  width: max-height;\n\n  margin-right: -4px;\n\n  object-fit: contain;\n  object-position: center;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"max-height":"20px",tag:`tag_ae7d ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.resetButton}`,withRemove:"withRemove_d56a",container:"container_a5d8",focused:"focused_bbe2",content:`content_a0ee ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.ellipsis}`,disabled:"disabled_ffbd",remove:"remove_eac2",removeIcon:"removeIcon_e2b4",icon:"icon_bb17",avatarContainer:"avatarContainer_b363",customIcon:"customIcon_dbd7",avatarIcon:"avatarIcon_c087"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/tag/tag.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/tag/tag.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);