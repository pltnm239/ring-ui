(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[1754],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./node_modules/@jetbrains/icons/close.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><polygon points="13.63 3.65 12.35 2.38 8 6.73 3.64 2.38 2.37 3.65 6.72 8.01 2.38 12.35 3.65 13.63 8 9.28 12.35 13.64 13.63 12.36 9.27 8.01 13.63 3.65"/></g></svg>'},"./.storybook/react-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node},__WEBPACK_DEFAULT_EXPORT__=()=>reactDecorator},"./src/confirm/confirm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{confirm:()=>confirm,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/button.tsx"),_confirm__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/confirm/confirm.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Confirm",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import React from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Button from '../button/button';\n\nimport Confirm from './confirm';\n\nexport default {\n  title: 'Components/Confirm',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'A component that shows a confirmation dialog.',\n    hermione: {captureSelector: '*[data-test~=ring-dialog]'},\n    a11y: {element: '#storybook-root,*[data-test~=ring-dialog]'}\n  }\n};\n\ninterface ConfirmArgs {\n  onConfirm: () => void\n  onCancel: () => void\n}\nexport const confirm = ({onConfirm, onCancel}: ConfirmArgs) => {\n  class ConfirmDemo extends React.Component {\n    state = {\n      confirm: {\n        show: true,\n        text: 'Do you really wish to proceed?',\n        description: 'A description of an action that is about to take place.',\n        inProgress: false,\n        onConfirm: () => {},\n        onReject: () => {}\n      }\n    };\n\n    componentDidMount() {\n      this.showConfirm();\n    }\n\n    hideConfirm = () => {\n      this.setState({confirm: {show: false}});\n    };\n\n    showConfirm = () =>\n      new Promise<void>((resolve, reject) => {\n        this.setState({\n          confirm: {\n            show: true,\n            text: 'Do you really wish to proceed?',\n            description: 'A description of an action that is about to take place.',\n            onConfirm: () => {\n              this.hideConfirm();\n              resolve();\n            },\n            onReject: () => {\n              this.hideConfirm();\n              reject();\n            }\n          }\n        });\n      }).\n        then(onConfirm).\n        catch(onCancel);\n\n    showWithAnotherText = () =>\n      new Promise<void>((resolve, reject) => {\n        this.setState({\n          confirm: {\n            show: true,\n            text: 'There is another question',\n            onConfirm: () => {\n              this.hideConfirm();\n              resolve();\n            },\n            onReject: () => {\n              this.hideConfirm();\n              reject();\n            }\n          }\n        });\n      }).\n        then(onConfirm).\n        catch(onCancel);\n\n    render() {\n      return (\n        <div>\n          <Button onClick={this.showConfirm}>Show confirm</Button>\n          <Button onClick={this.showWithAnotherText}>Show another message</Button>\n          <Confirm\n            show={this.state.confirm.show}\n            text={this.state.confirm.text}\n            description={this.state.confirm.description}\n            inProgress={this.state.confirm.inProgress}\n            confirmLabel=\"OK\"\n            rejectLabel=\"Cancel\"\n            onConfirm={this.state.confirm.onConfirm}\n            onReject={this.state.confirm.onReject}\n          />\n        </div>\n      );\n    }\n  }\n\n  return <ConfirmDemo/>;\n};\n\nconfirm.argTypes = {onConfirm: {}, onCancel: {}};\n",locationsMap:{confirm:{startLoc:{col:23,line:24},endLoc:{col:1,line:107},startBody:{col:23,line:24},endBody:{col:1,line:107}}}},notes:"A component that shows a confirmation dialog.",hermione:{captureSelector:"*[data-test~=ring-dialog]"},a11y:{element:"#storybook-root,*[data-test~=ring-dialog]"}}},confirm=_ref=>{let{onConfirm,onCancel}=_ref;class ConfirmDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={confirm:{show:!0,text:"Do you really wish to proceed?",description:"A description of an action that is about to take place.",inProgress:!1,onConfirm:()=>{},onReject:()=>{}}};componentDidMount(){this.showConfirm()}hideConfirm=()=>{this.setState({confirm:{show:!1}})};showConfirm=()=>new Promise(((resolve,reject)=>{this.setState({confirm:{show:!0,text:"Do you really wish to proceed?",description:"A description of an action that is about to take place.",onConfirm:()=>{this.hideConfirm(),resolve()},onReject:()=>{this.hideConfirm(),reject()}}})})).then(onConfirm).catch(onCancel);showWithAnotherText=()=>new Promise(((resolve,reject)=>{this.setState({confirm:{show:!0,text:"There is another question",onConfirm:()=>{this.hideConfirm(),resolve()},onReject:()=>{this.hideConfirm(),reject()}}})})).then(onConfirm).catch(onCancel);render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_2__.ZP,{onClick:this.showConfirm},"Show confirm"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_2__.ZP,{onClick:this.showWithAnotherText},"Show another message"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_confirm__WEBPACK_IMPORTED_MODULE_3__.Z,{show:this.state.confirm.show,text:this.state.confirm.text,description:this.state.confirm.description,inProgress:this.state.confirm.inProgress,confirmLabel:"OK",rejectLabel:"Cancel",onConfirm:this.state.confirm.onConfirm,onReject:this.state.confirm.onReject}))}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConfirmDemo,null)};confirm.argTypes={onConfirm:{},onCancel:{}},confirm.__docgenInfo={description:"",methods:[],displayName:"confirm",props:{onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/confirm/confirm.stories.tsx"]={name:"confirm",docgenInfo:confirm.__docgenInfo,path:"src/confirm/confirm.stories.tsx"})},"./src/confirm/confirm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Confirm});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/dialog/dialog.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/button/button.tsx"),_island_island__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/island/header.tsx"),_island_island__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/island/content.tsx"),_panel_panel__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/panel/panel.tsx"),_confirm_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/confirm/confirm.css"),_confirm_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_confirm_css__WEBPACK_IMPORTED_MODULE_1__);class Confirm extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,description:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,show:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,rejectOnEsc:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,inProgress:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,cancelIsDefault:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,confirmLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,rejectLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onConfirm:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,onReject:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func};static defaultProps={text:null,description:null,show:!1,rejectOnEsc:!0,inProgress:!1,cancelIsDefault:!1,confirmLabel:"OK",rejectLabel:"Cancel",onConfirm:()=>{},onReject:()=>{}};onEscPress=()=>{this.props.rejectOnEsc&&this.props.onReject()};render(){const{show,className,inProgress,cancelIsDefault,text,description,confirmLabel,rejectLabel,onConfirm,onReject}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{label:text||("string"==typeof description?description:void 0),className,onEscPress:this.onEscPress,show,trapFocus:!0,"data-test":"ring-confirm"},text&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island_island__WEBPACK_IMPORTED_MODULE_4__.Z,null,text),description&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island_island__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_confirm_css__WEBPACK_IMPORTED_MODULE_1___default().description},description)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_panel_panel__WEBPACK_IMPORTED_MODULE_6__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.ZP,{"data-test":"confirm-ok-button",primary:!cancelIsDefault,loader:inProgress,disabled:inProgress,onClick:onConfirm},confirmLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.ZP,{"data-test":"confirm-reject-button",onClick:onReject,disabled:inProgress,primary:cancelIsDefault},rejectLabel)))}}Confirm.__docgenInfo={description:"@name Confirm",methods:[{name:"onEscPress",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Confirm",props:{text:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"",tsType:{name:"string"}},description:{defaultValue:{value:"null",computed:!1},type:{name:"node"},required:!1,description:"",tsType:{name:"ReactNode"}},show:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},rejectOnEsc:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},inProgress:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},cancelIsDefault:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},confirmLabel:{defaultValue:{value:"'OK'",computed:!1},type:{name:"string"},required:!1,description:"",tsType:{name:"string"}},rejectLabel:{defaultValue:{value:"'Cancel'",computed:!1},type:{name:"string"},required:!1,description:"",tsType:{name:"string"}},onConfirm:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"unknown"}},onReject:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"unknown"}},className:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/confirm/confirm.tsx"]={name:"Confirm",docgenInfo:Confirm.__docgenInfo,path:"src/confirm/confirm.tsx"})},"./src/island/header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_linear_function__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/linear-function.ts"),_island_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/island/island.css"),_island_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_island_css__WEBPACK_IMPORTED_MODULE_2__),_adaptive_island_hoc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/island/adaptive-island-hoc.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Start={FONT_SIZE:24,LINE_HEIGHT:28,PADDING_TOP:24,PADDING_BOTTOM:0,X:0,Y:0,SPACING:0},End={FONT_SIZE:13,LINE_HEIGHT:20,PADDING_TOP:16,PADDING_BOTTOM:8,X:.4,Y:.1,SPACING:1.09};class Header extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,border:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,wrapWithTitle:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,phase:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number};static defaultProps={wrapWithTitle:!0};style(name){var _this$props$phase;return(0,_global_linear_function__WEBPACK_IMPORTED_MODULE_4__.e)(Start[name],End[name],null!==(_this$props$phase=this.props.phase)&&void 0!==_this$props$phase?_this$props$phase:0)}render(){const{children,className,wrapWithTitle,border,phase,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_island_css__WEBPACK_IMPORTED_MODULE_2___default().header,className,{[_island_css__WEBPACK_IMPORTED_MODULE_2___default().withBottomBorder]:border||null!=phase&&phase>=.5}),headerStyle=null!=phase?{lineHeight:`${this.style("LINE_HEIGHT")}px`,paddingTop:this.style("PADDING_TOP"),paddingBottom:this.style("PADDING_BOTTOM")}:void 0,scaleFont=null!=phase&&this.style("FONT_SIZE")/Start.FONT_SIZE,titleStyle=null!=phase&&phase<1?{fontSize:Start.FONT_SIZE,transform:`translate(${this.style("X")}px, ${this.style("Y")}px) scale(${scaleFont})`,letterSpacing:this.style("SPACING")}:void 0;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},restProps,{"data-test":"ring-island-header",className:classes,style:headerStyle}),wrapWithTitle&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:_island_css__WEBPACK_IMPORTED_MODULE_2___default().title,style:titleStyle},children),!wrapWithTitle&&children)}}const HeaderWrapper=props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_adaptive_island_hoc__WEBPACK_IMPORTED_MODULE_5__.PN.Consumer,null,(phase=>{const addProps=null!=phase?{phase}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header,_extends({},props,addProps))}));HeaderWrapper.__docgenInfo={description:"",methods:[],displayName:"HeaderWrapper",props:{wrapWithTitle:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},border:{required:!1,tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]},description:""},phase:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""}},composes:["HTMLAttributes"]};const __WEBPACK_DEFAULT_EXPORT__=HeaderWrapper;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/island/header.tsx"]={name:"HeaderWrapper",docgenInfo:HeaderWrapper.__docgenInfo,path:"src/island/header.tsx"})},"./src/panel/panel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Panel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_panel_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/panel/panel.css"),_panel_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_panel_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Panel extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node};render(){const{className,children,...props}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_panel_css__WEBPACK_IMPORTED_MODULE_2___default().panel,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},props,{className:classes}),children)}}Panel.__docgenInfo={description:"@name Panel",methods:[],displayName:"Panel",props:{className:{type:{name:"string"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/panel.tsx"]={name:"Panel",docgenInfo:Panel.__docgenInfo,path:"src/panel/panel.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/confirm/confirm.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".description_bc09 {\n  margin-top: 8px;\n\n  font-size: var(--ring-font-size);\n}\n","",{version:3,sources:["webpack://./src/confirm/confirm.css"],names:[],mappings:"AAIA;EACE,eAAgB;;EAEhB,gCAAgC;AAClC",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n.description {\n  margin-top: unit;\n\n  font-size: var(--ring-font-size);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit}`,description:"description_bc09"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/panel/panel.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/dialog/dialog.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".panel_ce91 { /* TODO: Invert dependency using :externals CSS Modules selector */\n\n  position: relative;\n\n  margin-top: 16px;\n  padding: 16px 32px 32px;\n\n  border-top: 1px solid var(--ring-popup-border-color);\n}\n\n.panel_ce91:empty {\n    display: none;\n  }\n\n.panel_ce91 > button:not(:last-child) {\n    margin-right: 8px;\n  }\n","",{version:3,sources:["webpack://./src/panel/panel.css"],names:[],mappings:"AAIA,cAC+C,kEAAkE;;EAE/G,kBAAkB;;EAElB,gBAA0B;EAC1B,uBAAqD;;EAErD,oDAAoD;AAStD;;AAPE;IACE,aAAa;EACf;;AAEA;IACE,iBAAkB;EACpB",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n.panel {\n  composes: panel from "../dialog/dialog.css"; /* TODO: Invert dependency using :externals CSS Modules selector */\n\n  position: relative;\n\n  margin-top: calc(unit * 2);\n  padding: calc(unit * 2) calc(unit * 4) calc(unit * 4);\n\n  border-top: 1px solid var(--ring-popup-border-color);\n\n  &:empty {\n    display: none;\n  }\n\n  & > button:not(:last-child) {\n    margin-right: unit;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit}`,panel:`panel_ce91 ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.panel}`};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/confirm/confirm.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/confirm/confirm.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/panel/panel.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/panel/panel.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);