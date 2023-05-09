(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[6285],{"./node_modules/@jetbrains/icons/close-12px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M5.997 6.784l4.454 4.359.787-.804-4.43-4.336 4.465-4.3-.78-.81-4.49 4.323L1.55.857l-.787.804 4.43 4.336-4.465 4.3.78.81 4.49-4.323z"/></svg>'},"./node_modules/@jetbrains/icons/settings.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M11.5,1.78h-7L1,8l3.5,6.22h7L15,8ZM8,10.7A2.7,2.7,0,1,1,10.7,8,2.7,2.7,0,0,1,8,10.7Z"/></g></svg>'},"./.storybook/react-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node},__WEBPACK_DEFAULT_EXPORT__=()=>reactDecorator},"./src/query-assist/query-assist.examples.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabledOne:()=>disabledOne,hugeOne:()=>hugeOne,noAuth:()=>noAuth,withCustomActions:()=>withCustomActions,withCustomRenderer:()=>withCustomRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_jetbrains_icons_settings__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@jetbrains/icons/settings.js"),_jetbrains_icons_settings__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_jetbrains_icons_settings__WEBPACK_IMPORTED_MODULE_1__),_storybook_hub_config__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./.storybook/hub-config.ts"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/react-decorator.tsx"),_auth_auth__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/auth/auth.ts"),_http_http__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/http/http.ts"),_list_list__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/list/list.tsx"),_icon_icon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/icon/icon.tsx"),_input_input__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/input/input.tsx"),_query_assist__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/query-assist/query-assist.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Query Assist",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_2__.Z)()],parameters:{storySource:{source:"import React, {Component} from 'react';\nimport permissionIcon from '@jetbrains/icons/settings';\n\nimport {Story} from '@storybook/react';\n\nimport hubConfig from '../../.storybook/hub-config';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Auth from '../auth/auth';\nimport HTTP from '../http/http';\nimport List from '../list/list';\nimport Icon from '../icon/icon';\nimport {Size} from '../input/input';\n\nimport QueryAssist, {\n  QueryAssistAttrs,\n  QueryAssistRequestParams,\n  QueryAssistResponse\n} from './query-assist';\nimport {QueryAssistSuggestion} from './query-assist__suggestions';\n\nexport default {\n  title: 'Components/Query Assist',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    component: QueryAssist,\n    framework: 'react'\n  },\n  args: {\n    placeholder: 'placeholder',\n    glass: true,\n    clear: true,\n    hint: 'hint',\n    hintOnSelection: 'hint on selection'\n  }\n};\n\nclass Basic extends Component {\n  constructor(props: QueryAssistAttrs) {\n    super(props);\n    this.auth.init().then(() => this.setState({authReady: true}));\n  }\n\n  state = {authReady: false};\n  auth = new Auth(hubConfig);\n  http = new HTTP(this.auth, this.auth.getAPIPath());\n\n  dataSource = (props: QueryAssistRequestParams) => {\n    const params = {\n      query: {\n        ...props,\n        fields: `query,caret,styleRanges${props.omitSuggestions ? '' : ',suggestions'}`\n      }\n    };\n\n    return this.http.get('users/queryAssist', params);\n  };\n\n  render() {\n    if (!this.state.authReady) {\n      return <span>Loading...</span>;\n    }\n\n    return (\n      <>\n        <QueryAssist\n          {...this.props}\n          dataSource={this.dataSource}\n        />\n        <QueryAssist\n          {...this.props}\n          dataSource={this.dataSource}\n          size={Size.S}\n        />\n      </>\n    );\n  }\n}\nexport const basic: Story<QueryAssistAttrs> = args => <Basic {...args}/>;\n\nbasic.storyName = 'basic';\nbasic.parameters = {hermione: {skip: true}};\nbasic.args = {\n  query: 'test',\n  focus: true,\n  hint: 'lol',\n  hintOnSelection: 'lol selected',\n  popupClassName: 'test',\n  className: 'custom-class'\n};\n\nexport const noAuth: Story<QueryAssistAttrs> = args => <QueryAssist {...args}/>;\n\nnoAuth.storyName = 'no auth';\nnoAuth.args = {\n  dataSource: ({query, caret}) => ({\n    query,\n    caret,\n    styleRanges: [\n      {start: 0, length: 1, style: 'text'},\n      {start: 1, length: 1, style: 'field_value'},\n      {start: 2, length: 1, style: 'field_name'},\n      {start: 3, length: 1, style: 'operator'}\n    ],\n    suggestions: [\n      {\n        prefix: 'login: ',\n        option: 'test',\n        suffix: ' ',\n        description: '1',\n        matchingStart: 0,\n        matchingEnd: query.length,\n        caret: 2,\n        completionStart: 0,\n        completionEnd: query.length,\n        group: 'Logins'\n      },\n      {\n        prefix: 'login: ',\n        option: 'test.1',\n        suffix: ' ',\n        description: '2',\n        matchingStart: 0,\n        matchingEnd: query.length,\n        caret: 2,\n        completionStart: 0,\n        completionEnd: query.length,\n        group: 'Logins'\n      },\n      {\n        prefix: 'name: ',\n        option: 'another',\n        suffix: ' ',\n        description: '2',\n        matchingStart: 0,\n        matchingEnd: query.length,\n        caret: 2,\n        completionStart: 0,\n        completionEnd: query.length,\n        group: 'Names'\n      }\n    ]\n  })\n};\nnoAuth.parameters = {\n  hermione: {\n    actions: [\n      {type: 'capture', name: 'queryAssist', selector: ['[data-test~=ring-query-assist]']},\n      {type: 'click', selector: '[data-test=ring-query-assist-input]'},\n      {type: 'sendKeys', selector: '[data-test=ring-query-assist-input]', value: 'test '},\n      {\n        type: 'capture',\n        name: 'withPopup',\n        selector: ['[data-test~=ring-query-assist]', '[data-test~=ring-query-assist-popup]']\n      }\n    ]\n  }\n};\n\nconst template = (item: QueryAssistSuggestion) =>\n  React.createElement(\n    'span',\n    null,\n    `My name is ${item.description}, my ${item.prefix} is ${item.option}`\n  );\n\nexport const withCustomRenderer: Story<QueryAssistAttrs> = args => <QueryAssist {...args}/>;\n\nwithCustomRenderer.args = {\n  useCustomItemRender: true,\n  dataSource: ({query, caret}) => ({\n    query,\n    caret,\n    styleRanges: [\n      {start: 0, length: 1, style: 'text'},\n      {start: 1, length: 1, style: 'field_value'},\n      {start: 2, length: 1, style: 'field_name'},\n      {start: 3, length: 1, style: 'operator'}\n    ],\n    suggestions: [\n      {\n        prefix: 'login:',\n        option: 'John.Abrams',\n        description: 'John Abrams',\n        group: 'Logins'\n      },\n      {\n        prefix: 'login:',\n        option: 'lenni',\n        description: 'Lenni Joy',\n        group: 'Names'\n      }\n    ].map(i => ({\n      ...i,\n      rgItemType: List.ListProps.Type.CUSTOM,\n      template: template(i),\n      data: i\n    }))\n  })\n};\nwithCustomRenderer.storyName = 'with custom renderer';\nwithCustomRenderer.parameters = {hermione: {skip: true}};\n\nclass QueryAssistExample extends Component {\n  constructor(props: QueryAssistAttrs) {\n    super(props);\n    const auth = new Auth(hubConfig);\n    this.http = new HTTP(auth, auth.getAPIPath());\n    auth.init().then(() => this.setState({authReady: true}));\n  }\n\n  state = {authReady: false};\n  http: HTTP;\n\n  dataSource = (props: QueryAssistRequestParams) => {\n    const params = {\n      query: {\n        ...props,\n        fields: `query,caret,styleRanges${props.omitSuggestions ? '' : ',suggestions'}`\n      }\n    };\n\n    return this.http.get('users/queryAssist', params);\n  };\n\n  render() {\n    if (!this.state.authReady) {\n      return <span>Loading...</span>;\n    }\n\n    return (\n      <QueryAssist\n        {...this.props}\n        dataSource={this.dataSource}\n      />\n    );\n  }\n}\n\nexport const withCustomActions: Story<QueryAssistAttrs> = args => <QueryAssistExample {...args}/>;\n\nwithCustomActions.args = {\n  query: 'test',\n  focus: true,\n  hint: 'lol',\n  hintOnSelection: 'lol selected',\n  popupClassName: 'test',\n  actions: [\n    <Icon glyph={permissionIcon} key=\"custom-action\" style={{color: 'var(--ring-icon-color)'}}/>\n  ]\n};\nwithCustomActions.storyName = 'with custom actions';\nwithCustomActions.parameters = {hermione: {skip: true}};\n\n\nclass HugeOne extends Component {\n  constructor(props: QueryAssistAttrs) {\n    super(props);\n    this.auth.init().then(() => this.setState({authReady: true}));\n  }\n\n  state = {authReady: false};\n  auth = new Auth(hubConfig);\n  http = new HTTP(this.auth, this.auth.getAPIPath());\n\n  dataSource = (props: QueryAssistRequestParams) => {\n    const params = {\n      query: {\n        ...props,\n        fields: `query,caret,styleRanges${props.omitSuggestions ? '' : ',suggestions'}`\n      }\n    };\n\n    return this.http.get('users/queryAssist', params);\n  };\n\n  render() {\n    if (!this.state.authReady) {\n      return <span>Loading...</span>;\n    }\n\n    return (\n      <QueryAssist\n        {...this.props}\n        dataSource={this.dataSource}\n      />\n    );\n  }\n}\nexport const hugeOne: Story<QueryAssistAttrs> = args => <HugeOne {...args}/>;\n\nhugeOne.storyName = 'huge one';\nhugeOne.parameters = {hermione: {skip: true}};\nhugeOne.args = {\n  huge: true,\n  query: 'test',\n  focus: true,\n  hint: 'lol',\n  hintOnSelection: 'lol selected',\n  popupClassName: 'test',\n  className: 'custom-class'\n};\n\n\nclass DisabledOne extends Component {\n  dataSource = () => [] as QueryAssistResponse;\n\n  render() {\n    return (\n      <QueryAssist\n        disabled\n        dataSource={this.dataSource}\n        {...this.props}\n      />\n    );\n  }\n}\nexport const disabledOne: Story<QueryAssistAttrs> = args => <DisabledOne {...args}/>;\n\ndisabledOne.storyName = 'disabled one';\ndisabledOne.parameters = {hermione: {skip: true}};\ndisabledOne.args = {\n  query: ''\n};\n",locationsMap:{basic:{startLoc:{col:46,line:81},endLoc:{col:72,line:81},startBody:{col:46,line:81},endBody:{col:72,line:81}},"no-auth":{startLoc:{col:47,line:94},endLoc:{col:79,line:94},startBody:{col:47,line:94},endBody:{col:79,line:94}},"with-custom-renderer":{startLoc:{col:59,line:169},endLoc:{col:91,line:169},startBody:{col:59,line:169},endBody:{col:91,line:169}},"with-custom-actions":{startLoc:{col:58,line:242},endLoc:{col:97,line:242},startBody:{col:58,line:242},endBody:{col:97,line:242}},"huge-one":{startLoc:{col:48,line:292},endLoc:{col:76,line:292},startBody:{col:48,line:292},endBody:{col:76,line:292}},"disabled-one":{startLoc:{col:52,line:320},endLoc:{col:84,line:320},startBody:{col:52,line:320},endBody:{col:84,line:320}}}},component:_query_assist__WEBPACK_IMPORTED_MODULE_3__.C,framework:"react"},args:{placeholder:"placeholder",glass:!0,clear:!0,hint:"hint",hintOnSelection:"hint on selection"}};class Basic extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.auth.init().then((()=>this.setState({authReady:!0})))}state={authReady:!1};auth=new _auth_auth__WEBPACK_IMPORTED_MODULE_4__.ZP(_storybook_hub_config__WEBPACK_IMPORTED_MODULE_5__.Z);http=new _http_http__WEBPACK_IMPORTED_MODULE_6__.ZP(this.auth,this.auth.getAPIPath());dataSource=props=>{const params={query:{...props,fields:"query,caret,styleRanges"+(props.omitSuggestions?"":",suggestions")}};return this.http.get("users/queryAssist",params)};render(){return this.state.authReady?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_query_assist__WEBPACK_IMPORTED_MODULE_3__.C,_extends({},this.props,{dataSource:this.dataSource})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_query_assist__WEBPACK_IMPORTED_MODULE_3__.C,_extends({},this.props,{dataSource:this.dataSource,size:_input_input__WEBPACK_IMPORTED_MODULE_7__.$u.S}))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Loading...")}}const basic=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Basic,args);basic.storyName="basic",basic.parameters={hermione:{skip:!0}},basic.args={query:"test",focus:!0,hint:"lol",hintOnSelection:"lol selected",popupClassName:"test",className:"custom-class"};const noAuth=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_query_assist__WEBPACK_IMPORTED_MODULE_3__.C,args);noAuth.storyName="no auth",noAuth.args={dataSource:_ref=>{let{query,caret}=_ref;return{query,caret,styleRanges:[{start:0,length:1,style:"text"},{start:1,length:1,style:"field_value"},{start:2,length:1,style:"field_name"},{start:3,length:1,style:"operator"}],suggestions:[{prefix:"login: ",option:"test",suffix:" ",description:"1",matchingStart:0,matchingEnd:query.length,caret:2,completionStart:0,completionEnd:query.length,group:"Logins"},{prefix:"login: ",option:"test.1",suffix:" ",description:"2",matchingStart:0,matchingEnd:query.length,caret:2,completionStart:0,completionEnd:query.length,group:"Logins"},{prefix:"name: ",option:"another",suffix:" ",description:"2",matchingStart:0,matchingEnd:query.length,caret:2,completionStart:0,completionEnd:query.length,group:"Names"}]}}},noAuth.parameters={hermione:{actions:[{type:"capture",name:"queryAssist",selector:["[data-test~=ring-query-assist]"]},{type:"click",selector:"[data-test=ring-query-assist-input]"},{type:"sendKeys",selector:"[data-test=ring-query-assist-input]",value:"test "},{type:"capture",name:"withPopup",selector:["[data-test~=ring-query-assist]","[data-test~=ring-query-assist-popup]"]}]}};const withCustomRenderer=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_query_assist__WEBPACK_IMPORTED_MODULE_3__.C,args);withCustomRenderer.args={useCustomItemRender:!0,dataSource:_ref2=>{let{query,caret}=_ref2;return{query,caret,styleRanges:[{start:0,length:1,style:"text"},{start:1,length:1,style:"field_value"},{start:2,length:1,style:"field_name"},{start:3,length:1,style:"operator"}],suggestions:[{prefix:"login:",option:"John.Abrams",description:"John Abrams",group:"Logins"},{prefix:"login:",option:"lenni",description:"Lenni Joy",group:"Names"}].map((i=>{return{...i,rgItemType:_list_list__WEBPACK_IMPORTED_MODULE_8__.default.ListProps.Type.CUSTOM,template:(item=i,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,`My name is ${item.description}, my ${item.prefix} is ${item.option}`)),data:i};var item}))}}},withCustomRenderer.storyName="with custom renderer",withCustomRenderer.parameters={hermione:{skip:!0}};class QueryAssistExample extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);const auth=new _auth_auth__WEBPACK_IMPORTED_MODULE_4__.ZP(_storybook_hub_config__WEBPACK_IMPORTED_MODULE_5__.Z);this.http=new _http_http__WEBPACK_IMPORTED_MODULE_6__.ZP(auth,auth.getAPIPath()),auth.init().then((()=>this.setState({authReady:!0})))}state={authReady:!1};http;dataSource=props=>{const params={query:{...props,fields:"query,caret,styleRanges"+(props.omitSuggestions?"":",suggestions")}};return this.http.get("users/queryAssist",params)};render(){return this.state.authReady?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_query_assist__WEBPACK_IMPORTED_MODULE_3__.C,_extends({},this.props,{dataSource:this.dataSource})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Loading...")}}const withCustomActions=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(QueryAssistExample,args);withCustomActions.args={query:"test",focus:!0,hint:"lol",hintOnSelection:"lol selected",popupClassName:"test",actions:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_9__.ZP,{glyph:_jetbrains_icons_settings__WEBPACK_IMPORTED_MODULE_1___default(),key:"custom-action",style:{color:"var(--ring-icon-color)"}})]},withCustomActions.storyName="with custom actions",withCustomActions.parameters={hermione:{skip:!0}};class HugeOne extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.auth.init().then((()=>this.setState({authReady:!0})))}state={authReady:!1};auth=new _auth_auth__WEBPACK_IMPORTED_MODULE_4__.ZP(_storybook_hub_config__WEBPACK_IMPORTED_MODULE_5__.Z);http=new _http_http__WEBPACK_IMPORTED_MODULE_6__.ZP(this.auth,this.auth.getAPIPath());dataSource=props=>{const params={query:{...props,fields:"query,caret,styleRanges"+(props.omitSuggestions?"":",suggestions")}};return this.http.get("users/queryAssist",params)};render(){return this.state.authReady?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_query_assist__WEBPACK_IMPORTED_MODULE_3__.C,_extends({},this.props,{dataSource:this.dataSource})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Loading...")}}const hugeOne=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(HugeOne,args);hugeOne.storyName="huge one",hugeOne.parameters={hermione:{skip:!0}},hugeOne.args={huge:!0,query:"test",focus:!0,hint:"lol",hintOnSelection:"lol selected",popupClassName:"test",className:"custom-class"};class DisabledOne extends react__WEBPACK_IMPORTED_MODULE_0__.Component{dataSource=()=>[];render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_query_assist__WEBPACK_IMPORTED_MODULE_3__.C,_extends({disabled:!0,dataSource:this.dataSource},this.props))}}const disabledOne=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisabledOne,args);disabledOne.storyName="disabled one",disabledOne.parameters={hermione:{skip:!0}},disabledOne.args={query:""},basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/query-assist/query-assist.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/query-assist/query-assist.examples.tsx"}),noAuth.__docgenInfo={description:"",methods:[],displayName:"noAuth"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/query-assist/query-assist.examples.tsx"]={name:"noAuth",docgenInfo:noAuth.__docgenInfo,path:"src/query-assist/query-assist.examples.tsx"}),withCustomRenderer.__docgenInfo={description:"",methods:[],displayName:"withCustomRenderer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/query-assist/query-assist.examples.tsx"]={name:"withCustomRenderer",docgenInfo:withCustomRenderer.__docgenInfo,path:"src/query-assist/query-assist.examples.tsx"}),withCustomActions.__docgenInfo={description:"",methods:[],displayName:"withCustomActions"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/query-assist/query-assist.examples.tsx"]={name:"withCustomActions",docgenInfo:withCustomActions.__docgenInfo,path:"src/query-assist/query-assist.examples.tsx"}),hugeOne.__docgenInfo={description:"",methods:[],displayName:"hugeOne"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/query-assist/query-assist.examples.tsx"]={name:"hugeOne",docgenInfo:hugeOne.__docgenInfo,path:"src/query-assist/query-assist.examples.tsx"}),disabledOne.__docgenInfo={description:"",methods:[],displayName:"disabledOne"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/query-assist/query-assist.examples.tsx"]={name:"disabledOne",docgenInfo:disabledOne.__docgenInfo,path:"src/query-assist/query-assist.examples.tsx"})},"./src/caret/caret.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Caret});var _global_dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/global/dom.ts");class Caret{static returnRE=/\r/g;static normalizeNewlines(value){return"string"==typeof value?value.replace(this.returnRE,""):value}target;constructor(target){this.target=target}isContentEditable(){return"true"===this.target.contentEditable}focus(){document.activeElement&&document.activeElement===this.target||this.target.focus()}getAbsolutePosition(node){let _curNode=node,curPos=0;for(;null!=_curNode&&_curNode!==this.target;){for(;_curNode.previousSibling;){var _curNode$previousSibl;curPos+=null!==(_curNode$previousSibl=_curNode.previousSibling.textContent?.length)&&void 0!==_curNode$previousSibl?_curNode$previousSibl:0,_curNode=_curNode.previousSibling}_curNode=_curNode.parentNode}return curPos}getPosition(){let params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.isContentEditable()){params.avoidFocus||this.focus();const selection=window.getSelection();if(!selection?.rangeCount)return 0;const range1=selection.getRangeAt(0),range2=range1.cloneRange();range2.selectNodeContents(this.target),range2.setEnd(range1.endContainer,range1.endOffset);const _curNode=range1.startContainer;if(this.target===_curNode)return 0===range1.startOffset||null==_curNode.textContent?0:_curNode.textContent.length;if(!this.target.contains(_curNode))return-1;if(!_curNode)return"selectionStart"in this.target&&this.target.selectionStart||-1;const curPos=this.getAbsolutePosition(_curNode);if(range1.startContainer===range1.endContainer)return range1.startOffset===range1.endOffset?curPos+range1.startOffset:{startOffset:curPos+range1.startOffset,endOffset:curPos+range1.endOffset,position:range2.toString().length};return{startOffset:curPos+range1.startOffset,endOffset:this.getAbsolutePosition(range1.endContainer)+range1.endOffset,position:range2.toString().length}}return"selectionStart"in this.target&&this.target.selectionStart||-1}getRelativePosition(curNode,position){let curPos=0,_curNode=curNode;if(!_curNode)return{_curNode:this.target,_correctedPosition:position};if(0===position){for(;3!==_curNode.nodeType;)_curNode=_curNode.childNodes[0];return{_curNode,_correctedPosition:position}}let i=-1;if(_curNode&&void 0!==_curNode.nodeType)for(;curPos<position&&3!==_curNode.nodeType&&(i++,null!=_curNode.childNodes[i]);){var _curNode$childNodes$i,_curNode$textContent$;curPos+=null!==(_curNode$childNodes$i=_curNode.childNodes[i].textContent?.length)&&void 0!==_curNode$childNodes$i?_curNode$childNodes$i:0,curPos>=position&&(_curNode=_curNode.childNodes[i],curPos-=null!==(_curNode$textContent$=_curNode.textContent?.length)&&void 0!==_curNode$textContent$?_curNode$textContent$:0,i=-1)}return{_curNode,_correctedPosition:position-curPos}}setPosition(position){const isContentEditable=this.isContentEditable();let correctedPosition,curNode=this.target&&this.target.childNodes[0];if(void 0!==position)if("object"==typeof position){const range=new Range,start=this.getRelativePosition(curNode,position.startOffset);range.setStart(start._curNode,start._correctedPosition);const end=this.getRelativePosition(curNode,position.endOffset);range.setEnd(end._curNode,end._correctedPosition),correctedPosition=range}else if(-1===position){var _value$length;const value=isContentEditable?this.target.textContent:Caret.normalizeNewlines("value"in this.target?this.target.value:void 0);correctedPosition=null!==(_value$length=value?.length)&&void 0!==_value$length?_value$length:0}else{const{_curNode,_correctedPosition}=this.getRelativePosition(curNode,position);curNode=_curNode,correctedPosition=_correctedPosition}if(isContentEditable){this.focus();try{correctedPosition instanceof Range?(window.getSelection()?.removeAllRanges(),window.getSelection()?.addRange(correctedPosition)):window.getSelection()?.collapse(curNode||this.target,correctedPosition)}catch(e){}}else"setSelectionRange"in this.target&&"number"==typeof correctedPosition&&this.target.setSelectionRange(correctedPosition,correctedPosition);return correctedPosition}getOffset(){let range,offset=0;try{range=window.getSelection()?.getRangeAt(0).cloneRange(),range?.setStart(range.startContainer,range.startOffset-1)}catch(e){return offset}return range&&0!==range.endOffset&&""!==range.toString()&&(offset=(0,_global_dom__WEBPACK_IMPORTED_MODULE_0__.Dz)(range).right-(0,_global_dom__WEBPACK_IMPORTED_MODULE_0__.Dz)(this.target).left-(range.startContainer instanceof HTMLElement&&range.startContainer.offsetLeft||0)),offset}}},"./src/global/rerender-hoc.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>rerenderHOC});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_render_adapter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/global/react-render-adapter.ts"),_composeRefs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/global/composeRefs.ts");function rerenderHOC(ComposedComponent){return class Rerenderer extends ComposedComponent{_propsCache=this.props;rerender(){let container,props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},callback=arguments.length>1?arguments[1]:void 0;try{container=this.node?.parentNode}finally{if(!(container&&container instanceof Element))throw new Error(`${this.constructor.name} component isn't mounted`)}this._propsCache=Object.assign({},this.props,this._propsCache,props),this._propsCache.ref=(0,_composeRefs__WEBPACK_IMPORTED_MODULE_1__.Z)(this._propsCache.ref,callback),(0,_react_render_adapter__WEBPACK_IMPORTED_MODULE_2__.sY)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.constructor,this._propsCache),container)}}}},"?4f7e":()=>{}}]);