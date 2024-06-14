(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[4746],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./src/tooltip/tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Tooltip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_popup_popup__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/popup/popup.tsx"),_global_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/global/dom.ts"),_global_data_tests__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/global/data-tests.ts"),_global_schedule_raf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/schedule-raf.ts"),_tooltip_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/tooltip/tooltip.css"),_tooltip_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_tooltip_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const scheduleScroll=(0,_global_schedule_raf__WEBPACK_IMPORTED_MODULE_4__.A)(),TooltipContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);class Tooltip extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={delay:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number,selfOverflowOnly:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,popupProps:prop_types__WEBPACK_IMPORTED_MODULE_5___default().object,title:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_5___default().string};static defaultProps={title:"",selfOverflowOnly:!1,popupProps:{}};state={showPopup:!1,showNestedPopup:!1};componentDidMount(){this.props.title&&this.addListeners()}componentDidUpdate(prevProps){!prevProps.title&&this.props.title?this.addListeners():prevProps.title&&!this.props.title&&this.listeners.removeAll()}componentWillUnmount(){clearTimeout(this.timeout),this.listeners.removeAll()}static PopupProps=_popup_popup__WEBPACK_IMPORTED_MODULE_6__.Ay.PopupProps;static contextType=TooltipContext;timeout;listeners=new _global_dom__WEBPACK_IMPORTED_MODULE_7__.qR;containerNode;containerRef=el=>{this.containerNode=el};tryToShowPopup=()=>{const{delay,title}=this.props;title&&(delay?this.timeout=window.setTimeout(this.showPopup,delay):this.showPopup())};showPopup=()=>{if(this.props.selfOverflowOnly){const{containerNode}=this;if(!containerNode)return;if(0===containerNode.clientWidth&&0===containerNode.clientHeight)return;if(containerNode.scrollWidth<=containerNode.clientWidth&&containerNode.scrollHeight<=containerNode.clientHeight)return}this.context?.onNestedTooltipShow(),this.setState({showPopup:!0})};hidePopup=()=>{clearTimeout(this.timeout),this.context?.onNestedTooltipHide(),this.setState({showPopup:!1})};addListeners(){null!=this.containerNode&&(this.listeners.add(this.containerNode,"mouseover",this.tryToShowPopup),this.listeners.add(this.containerNode,"mouseout",this.hidePopup)),this.listeners.add(document,"scroll",(()=>scheduleScroll(this.hidePopup)),{passive:!0})}popup;popupRef=el=>{this.popup=el};onNestedTooltipShow=()=>{this.setState({showNestedPopup:!0})};onNestedTooltipHide=()=>{this.setState({showNestedPopup:!1})};render(){const{children,"data-test":dataTest,title,delay,selfOverflowOnly,popupProps,long,...restProps}=this.props,ariaProps="string"==typeof title&&title?{"aria-label":title,role:"tooltip"}:{},{onNestedTooltipShow,onNestedTooltipHide}=this;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TooltipContext.Provider,{value:{onNestedTooltipShow,onNestedTooltipHide},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{...ariaProps,...restProps,ref:this.containerRef,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_8__.A)("ring-tooltip",dataTest),"data-test-title":"string"==typeof title?title:void 0,children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_popup_popup__WEBPACK_IMPORTED_MODULE_6__.Ay,{trapFocus:!1,hidden:!this.state.showPopup||this.state.showNestedPopup,onCloseAttempt:this.hidePopup,maxHeight:400,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_tooltip_css__WEBPACK_IMPORTED_MODULE_2___default().tooltip,{[_tooltip_css__WEBPACK_IMPORTED_MODULE_2___default().long]:long}),attached:!1,top:4,dontCloseOnAnchorClick:!0,ref:this.popupRef,...popupProps,children:title})]})})}}Tooltip.__docgenInfo={description:"@name Tooltip",methods:[{name:"containerRef",docblock:null,modifiers:[],params:[{name:"el",optional:!1,type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null},{name:"tryToShowPopup",docblock:null,modifiers:[],params:[],returns:null},{name:"showPopup",docblock:null,modifiers:[],params:[],returns:null},{name:"hidePopup",docblock:null,modifiers:[],params:[],returns:null},{name:"addListeners",docblock:null,modifiers:[],params:[],returns:null},{name:"popupRef",docblock:null,modifiers:[],params:[{name:"el",optional:!1,type:{name:"union",raw:"Popup | null",elements:[{name:"Popup"},{name:"null"}]}}],returns:null},{name:"onNestedTooltipShow",docblock:null,modifiers:[],params:[],returns:null},{name:"onNestedTooltipHide",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Tooltip",props:{delay:{required:!1,tsType:{name:"union",raw:"number | null | undefined",elements:[{name:"number"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"number"}},selfOverflowOnly:{required:!1,tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},popupProps:{required:!1,tsType:{name:"union",raw:"Partial<PopupAttrs> | null | undefined",elements:[{name:"Partial",elements:[{name:"JSX.LibraryManagedAttributes",elements:[{name:"Popup"},{name:"PopupProps"}],raw:"JSX.LibraryManagedAttributes<typeof Popup, PopupProps>"}],raw:"Partial<PopupAttrs>"},{name:"null"},{name:"undefined"}]},description:"",defaultValue:{value:"{}",computed:!1},type:{name:"object"}},title:{required:!1,tsType:{name:"union",raw:"ReactNode | null | undefined",elements:[{name:"ReactNode"},{name:"null"},{name:"undefined"}]},description:"",defaultValue:{value:"''",computed:!1},type:{name:"node"}},"data-test":{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},long:{required:!1,tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]},description:""},children:{description:"",type:{name:"node"},required:!1}},composes:["Omit"]}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/tooltip/tooltip.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".tooltip_bbe9 {\n  max-width: calc(var(--ring-unit)*50);\n  padding: var(--ring-unit);\n\n  text-align: left;\n\n  color: var(--ring-text-color);\n}\n\n.long_c327 {\n  padding: var(--ring-unit) calc(var(--ring-unit)*1.5);\n\n  font-size: var(--ring-font-size-smaller);\n  line-height: var(--ring-line-height-lowest);\n}\n","",{version:3,sources:["webpack://./src/tooltip/tooltip.css"],names:[],mappings:"AAEA;EACE,oCAAsC;EACtC,yBAAyB;;EAEzB,gBAAgB;;EAEhB,6BAA6B;AAC/B;;AAEA;EACE,oDAAsD;;EAEtD,wCAAwC;EACxC,2CAA2C;AAC7C",sourcesContent:['@import "../global/variables.css";\n\n.tooltip {\n  max-width: calc(var(--ring-unit) * 50);\n  padding: var(--ring-unit);\n\n  text-align: left;\n\n  color: var(--ring-text-color);\n}\n\n.long {\n  padding: var(--ring-unit) calc(var(--ring-unit) * 1.5);\n\n  font-size: var(--ring-font-size-smaller);\n  line-height: var(--ring-line-height-lowest);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={tooltip:"tooltip_bbe9",long:"long_c327"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/tooltip/tooltip.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/tooltip/tooltip.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/tooltip/tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__,displayedWhenNecessary:()=>displayedWhenNecessary,nested:()=>nested});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_button_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/button/button.tsx"),_tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/tooltip/tooltip.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tooltip",parameters:{notes:"Displays a tooltip.",zeplinLink:"https://app.zeplin.io/project/5afd8f5511c2d1c625752bb0/screen/6193bc71cc9f8daafc0afcfa"}},basic=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{paddingBottom:"100px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tooltip__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Explanation",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button_button__WEBPACK_IMPORTED_MODULE_3__.Ay,{id:"button-with-tooltip",children:"Button that requires an explanation"})})});basic.storyName="basic",basic.parameters={screenshots:{actions:[{type:"mouseEvent",selector:"[data-test~=ring-tooltip]",eventname:"mouseover"},{type:"wait",delay:500},{type:"capture",name:"",selector:"#storybook-root"}]}};const displayedWhenNecessary=()=>{const loremIpsum="Lorem ipsum dolor sit amet, vitae alienum prodesset vis ei, quando nullam oportere sea eu, vim an labore diceret docendi. Vim ne illud iusto feugait, sea laudem prompta accommodare eu, vidit noster efficiantur est id. Ex vide tollit necessitatibus est, eum no quas dicunt. Luptatum singulis usu ne, cu sit populo semper civibus. Tamquam dolorem qui ea, nec no dolor vidisse conceptam, an est ponderum eloquentiam.";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{paddingBottom:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tooltip__WEBPACK_IMPORTED_MODULE_2__.A,{long:!0,title:loremIpsum,selfOverflowOnly:!0,className:"lorem-ipsum__text",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:"Tooltip won't be displayed:"})," ",loremIpsum]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{paddingBottom:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tooltip__WEBPACK_IMPORTED_MODULE_2__.A,{long:!0,title:loremIpsum,selfOverflowOnly:!0,style:{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},className:"lorem-ipsum__text_overflow",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:"Tooltip will be displayed:"})," ",loremIpsum]})})]})};displayedWhenNecessary.storyName="displayed when necessary",displayedWhenNecessary.parameters={screenshots:{actions:[{type:"mouseEvent",selector:".lorem-ipsum__text",eventname:"mouseover"},{type:"capture",name:"full text element",selector:"#storybook-root"},{type:"mouseEvent",selector:".lorem-ipsum__text_overflow",eventname:"mouseover"},{type:"capture",name:"cut text element",selector:"#storybook-root"}]}};const nested=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{paddingBottom:"100px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tooltip__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Explanation",children:["Some text with an explanation.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tooltip__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Nested Explanation",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:" Some text inside with a separate explanation. "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tooltip__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Nested Nested Explanation",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button_button__WEBPACK_IMPORTED_MODULE_3__.Ay,{id:"button-with-tooltip",children:"Inline button that requires an explanation too"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:" Some text inside with a separate explanation. "})]}),"Some text with an explanation."]})});nested.storyName="nested",nested.parameters={screenshots:{actions:[{type:"mouseEvent",selector:"[data-test~=ring-tooltip]",eventname:"mouseover"},{type:"wait",delay:500},{type:"capture",name:"",selector:"#storybook-root"}]}},basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:'() => <div style={{\n  paddingBottom: \'100px\'\n}}>\n    <Tooltip title="Explanation">\n      <Button id="button-with-tooltip">Button that requires an explanation</Button>\n    </Tooltip>\n  </div>',...basic.parameters?.docs?.source}}},displayedWhenNecessary.parameters={...displayedWhenNecessary.parameters,docs:{...displayedWhenNecessary.parameters?.docs,source:{originalSource:"() => {\n  const loremIpsum = 'Lorem ipsum dolor sit amet, vitae alienum prodesset vis ei, quando nullam ' + 'oportere sea eu, vim an labore diceret docendi. Vim ne illud iusto feugait, ' + 'sea laudem prompta accommodare eu, vidit noster efficiantur est id. Ex vide ' + 'tollit necessitatibus est, eum no quas dicunt. Luptatum singulis usu ne, cu ' + 'sit populo semper civibus. Tamquam dolorem qui ea, nec no dolor vidisse conceptam, ' + 'an est ponderum eloquentiam.';\n  const overflowStyles: CSSProperties = {\n    display: 'block',\n    overflow: 'hidden',\n    textOverflow: 'ellipsis',\n    whiteSpace: 'nowrap'\n  };\n  return <Fragment>\n      <div style={{\n      paddingBottom: '200px'\n    }}>\n        <Tooltip long title={loremIpsum} selfOverflowOnly className=\"lorem-ipsum__text\">\n          <b>{\"Tooltip won't be displayed:\"}</b> {loremIpsum}\n        </Tooltip>\n      </div>\n      <div style={{\n      paddingBottom: '200px'\n    }}>\n        <Tooltip long title={loremIpsum} selfOverflowOnly style={overflowStyles} className=\"lorem-ipsum__text_overflow\">\n          <b>Tooltip will be displayed:</b> {loremIpsum}\n        </Tooltip>\n      </div>\n    </Fragment>;\n}",...displayedWhenNecessary.parameters?.docs?.source}}},nested.parameters={...nested.parameters,docs:{...nested.parameters?.docs,source:{originalSource:'() => <div style={{\n  paddingBottom: \'100px\'\n}}>\n    <Tooltip title="Explanation">\n      Some text with an explanation.\n\n      <Tooltip title="Nested Explanation">\n        <strong> Some text inside with a separate explanation. </strong>\n\n        <Tooltip title="Nested Nested Explanation">\n          <Button id="button-with-tooltip">Inline button that requires an explanation too</Button>\n        </Tooltip>\n\n        <strong> Some text inside with a separate explanation. </strong>\n      </Tooltip>\n\n      Some text with an explanation.\n    </Tooltip>\n  </div>',...nested.parameters?.docs?.source}}}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);