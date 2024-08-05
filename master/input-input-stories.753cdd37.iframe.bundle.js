(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[2234],{"./node_modules/@jetbrains/icons/chevron-down.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.942 5.808a.625.625 0 0 0-.884 0L8 8.866 4.942 5.808a.625.625 0 1 0-.884.884l3.5 3.5c.244.244.64.244.884 0l3.5-3.5a.625.625 0 0 0 0-.884Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/close-12px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 12 12"><path fill-rule="evenodd" d="M9.918 2.065a.6.6 0 0 1 .002.849L6.849 5.998 9.924 9.07l-.424.425-.424.424-3.074-3.072-3.07 3.083a.6.6 0 1 1-.85-.847L5.153 6 2.08 2.928a.6.6 0 1 1 .849-.849L6 5.15l3.07-3.082a.6.6 0 0 1 .848-.002ZM9.5 9.495l-.424.425a.6.6 0 1 0 .848-.849l-.424.425Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/search.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.504 6.877a4.627 4.627 0 1 1-9.254 0 4.627 4.627 0 0 1 9.254 0Zm-.937 4.575a5.877 5.877 0 1 1 .884-.884l3.361 3.36a.625.625 0 1 1-.884.884l-3.361-3.36Z" clip-rule="evenodd"/></svg>'},"./src/input/input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,HeightS:()=>HeightS,SelectAll:()=>SelectAll,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_jetbrains_icons_search__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@jetbrains/icons/search.js"),_jetbrains_icons_search__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_jetbrains_icons_search__WEBPACK_IMPORTED_MODULE_1__),_button_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/button/button.tsx"),_global_controls_height__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/global/controls-height.tsx"),_control_label_control_label__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/control-label/control-label.tsx"),_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/input/input.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Input",parameters:{notes:"Text input fields of varying size.",zeplinLink:"https://app.zeplin.io/project/5afd8f5511c2d1c625752bb0/screen/6193bc70ab2b23a8ca449004"}},Basic=()=>{const[clearableInputValue,setClearableInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Default value"),[borderlessInputValue,setBorderlessInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Borderless input");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form",{className:"inputs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Labeled input"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{name:"login",label:"Label and hint",placeholder:"Hint"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Label and value",defaultValue:"Default value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Clearable input",value:clearableInputValue,onChange:e=>setClearableInputValue(e.currentTarget.value),onClear:()=>setClearableInputValue("")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{placeholder:"Hint",label:"Disabled clearable input",defaultValue:"Default value",onClear:()=>{},disabled:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Input with icon",icon:_jetbrains_icons_search__WEBPACK_IMPORTED_MODULE_1___default(),defaultValue:"Default value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{name:"login",label:"Primary label",labelType:_control_label_control_label__WEBPACK_IMPORTED_MODULE_4__.HD.FORM,placeholder:"Hint"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{placeholder:"Hint",value:borderlessInputValue,onChange:e=>setBorderlessInputValue(e.currentTarget.value),onClear:()=>setBorderlessInputValue(""),borderless:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Disabled input",disabled:!0,defaultValue:"Default value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Invalid input",error:"Error description that wraps over lines because of being really long"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Error without description",error:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Input with help",help:"Help text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Short input",size:_input__WEBPACK_IMPORTED_MODULE_3__.or.S}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Long input",size:_input__WEBPACK_IMPORTED_MODULE_3__.or.L}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Autogrowing textarea",multiline:!0,defaultValue:"First line\nSecond line"})]})};Basic.storyName="basic",Basic.parameters={storyStyles:"\n<style>\n  .inputs {\n    display: flex;\n    flex-flow: column wrap;\n    max-height: 100vh;\n    margin-top: 8px;\n    background: var(--ring-content-background-color);\n  }\n\n  .inputs > div {\n    margin: 0 16px 8px;\n  }\n\n  .dark.dark {\n    margin: 0 -16px;\n    padding: 8px 16px;\n  }\n</style>"};const HeightS=()=>{const[clearableInputValue,setClearableInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Default value"),[borderlessInputValue,setBorderlessInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Borderless input");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_global_controls_height__WEBPACK_IMPORTED_MODULE_5__.VJ.Provider,{value:_global_controls_height__WEBPACK_IMPORTED_MODULE_5__.sr.S,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form",{className:"inputs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Labeled input"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{name:"login",label:"Label and hint",placeholder:"Hint"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Label and value",defaultValue:"Default value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Clearable input",value:clearableInputValue,onChange:e=>setClearableInputValue(e.currentTarget.value),onClear:()=>setClearableInputValue("")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{placeholder:"Hint",label:"Disabled clearable input",defaultValue:"Default value",onClear:()=>{},disabled:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Input with icon",icon:_jetbrains_icons_search__WEBPACK_IMPORTED_MODULE_1___default(),defaultValue:"Default value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{name:"login",label:"Primary label",labelType:_control_label_control_label__WEBPACK_IMPORTED_MODULE_4__.HD.FORM,placeholder:"Hint"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{placeholder:"Hint",value:borderlessInputValue,onChange:e=>setBorderlessInputValue(e.currentTarget.value),onClear:()=>setBorderlessInputValue(""),borderless:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Disabled input",disabled:!0,defaultValue:"Default value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Invalid input",error:"Error description that wraps over lines because of being really long"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Error without description",error:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Input with help",help:"Help text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Short input",size:_input__WEBPACK_IMPORTED_MODULE_3__.or.S}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Long input",size:_input__WEBPACK_IMPORTED_MODULE_3__.or.L}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{label:"Autogrowing textarea",multiline:!0,defaultValue:"First line\nSecond line"})]})})};HeightS.parameters=Basic.parameters;const SelectAll=()=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_input__WEBPACK_IMPORTED_MODULE_3__.Ay,{defaultValue:"Value",inputRef:ref,label:"Label"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button_button__WEBPACK_IMPORTED_MODULE_6__.Ay,{style:{marginTop:4},"data-test-select":!0,onClick:function select(){null!=ref.current&&ref.current.select()},children:"Select all"})]})};SelectAll.parameters={screenshots:{actions:[{type:"click",selector:"[data-test-select]"},{type:"capture",selector:"#storybook-root"}]}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'() => {\n  const [clearableInputValue, setClearableInputValue] = useState(\'Default value\');\n  const [borderlessInputValue, setBorderlessInputValue] = useState(\'Borderless input\');\n  return <form className="inputs">\n      <Input label="Labeled input" />\n      <Input name="login" label="Label and hint" placeholder="Hint" />\n      <Input label="Label and value" defaultValue="Default value" />\n      <Input label="Clearable input" value={clearableInputValue} onChange={e => setClearableInputValue(e.currentTarget.value)} onClear={() => setClearableInputValue(\'\')} />\n      <Input placeholder="Hint" label="Disabled clearable input" defaultValue="Default value" onClear={() => {}} disabled />\n      <Input label="Input with icon" icon={searchIcon} defaultValue="Default value" />\n      <Input name="login" label="Primary label" labelType={LabelType.FORM} placeholder="Hint" />\n      <Input placeholder="Hint" value={borderlessInputValue} onChange={e => setBorderlessInputValue(e.currentTarget.value)} onClear={() => setBorderlessInputValue(\'\')} borderless />\n      <Input label="Disabled input" disabled defaultValue="Default value" />\n      <Input label="Invalid input" error="Error description that wraps over lines because of being really long" />\n      <Input label="Error without description" error="" />\n      <Input label="Input with help" help="Help text" />\n      <Input label="Short input" size={Size.S} />\n      <Input label="Long input" size={Size.L} />\n      <Input label="Autogrowing textarea" multiline defaultValue={\'First line\\nSecond line\'} />\n    </form>;\n}',...Basic.parameters?.docs?.source}}},HeightS.parameters={...HeightS.parameters,docs:{...HeightS.parameters?.docs,source:{originalSource:'() => {\n  const [clearableInputValue, setClearableInputValue] = useState(\'Default value\');\n  const [borderlessInputValue, setBorderlessInputValue] = useState(\'Borderless input\');\n  return <ControlsHeightContext.Provider value={ControlsHeight.S}>\n      <form className="inputs">\n        <Input label="Labeled input" />\n        <Input name="login" label="Label and hint" placeholder="Hint" />\n        <Input label="Label and value" defaultValue="Default value" />\n        <Input label="Clearable input" value={clearableInputValue} onChange={e => setClearableInputValue(e.currentTarget.value)} onClear={() => setClearableInputValue(\'\')} />\n        <Input placeholder="Hint" label="Disabled clearable input" defaultValue="Default value" onClear={() => {}} disabled />\n        <Input label="Input with icon" icon={searchIcon} defaultValue="Default value" />\n        <Input name="login" label="Primary label" labelType={LabelType.FORM} placeholder="Hint" />\n        <Input placeholder="Hint" value={borderlessInputValue} onChange={e => setBorderlessInputValue(e.currentTarget.value)} onClear={() => setBorderlessInputValue(\'\')} borderless />\n        <Input label="Disabled input" disabled defaultValue="Default value" />\n        <Input label="Invalid input" error="Error description that wraps over lines because of being really long" />\n        <Input label="Error without description" error="" />\n        <Input label="Input with help" help="Help text" />\n        <Input label="Short input" size={Size.S} />\n        <Input label="Long input" size={Size.L} />\n        <Input label="Autogrowing textarea" multiline defaultValue={\'First line\\nSecond line\'} />\n      </form>\n    </ControlsHeightContext.Provider>;\n}',...HeightS.parameters?.docs?.source}}},SelectAll.parameters={...SelectAll.parameters,docs:{...SelectAll.parameters?.docs,source:{originalSource:'() => {\n  const ref = useRef<HTMLInputElement>(null);\n  function select() {\n    if (ref.current != null) {\n      ref.current.select();\n    }\n  }\n  return <>\n      <Input defaultValue="Value" inputRef={ref} label="Label" />\n      <Button style={{\n      marginTop: 4\n    }} data-test-select onClick={select}>Select all</Button>\n    </>;\n}',...SelectAll.parameters?.docs?.source}}}},"./node_modules/memoize-one/dist/memoize-one.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>memoizeOne});var safeIsNaN=Number.isNaN||function ponyfill(value){return"number"==typeof value&&value!=value};function areInputsEqual(newInputs,lastInputs){if(newInputs.length!==lastInputs.length)return!1;for(var i=0;i<newInputs.length;i++)if(first=newInputs[i],second=lastInputs[i],!(first===second||safeIsNaN(first)&&safeIsNaN(second)))return!1;var first,second;return!0}function memoizeOne(resultFn,isEqual){void 0===isEqual&&(isEqual=areInputsEqual);var cache=null;function memoized(){for(var newArgs=[],_i=0;_i<arguments.length;_i++)newArgs[_i]=arguments[_i];if(cache&&cache.lastThis===this&&isEqual(newArgs,cache.lastArgs))return cache.lastResult;var lastResult=resultFn.apply(this,newArgs);return cache={lastResult,lastArgs:newArgs,lastThis:this},lastResult}return memoized.clear=function clear(){cache=null},memoized}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);