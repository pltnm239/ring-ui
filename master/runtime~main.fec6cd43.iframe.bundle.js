(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({89:"highlight-sas",127:"highlight-processing",174:"collapse-collapse-stories",182:"error-bubble-error-bubble-stories",192:"popup-menu-popup-menu-stories",250:"highlight-ada",276:"highlight-go",293:"highlight-julia-repl",302:"auth-dialog-auth-dialog-stories",342:"group-group-stories",358:"highlight-stan",410:"caret-caret-stories",450:"highlight-clojure",462:"highlight-jboss-cli",510:"highlight-cal",515:"highlight-applescript",529:"highlight-reasonml",637:"highlight-mojolicious",714:"highlight-livecodeserver",762:"panel-panel-stories",778:"highlight-n1ql",826:"highlight-elm",827:"highlight-protobuf",830:"loader-screen-loader-screen-stories",833:"highlight-coq",875:"tags-input-tag-input-stories",908:"highlight-node-repl",960:"highlight-vhdl",982:"error-message-error-message-stories",990:"highlight-1c",1001:"highlight-xml",1068:"highlight-r",1074:"alert-service-alert-service-stories",1079:"highlight-q",1110:"loader-loader-stories",1173:"highlight-armasm",1175:"highlight-elixir",1192:"highlight-ini",1251:"highlight-ldif",1258:"highlight-arcade",1367:"highlight-axapta",1382:"highlight-irpf90",1443:"highlight-tcl",1446:"tab-trap-tab-trap-stories",1517:"highlight-awk",1530:"heading-heading-stories",1570:"pager-pager-stories",1609:"global-dom-stories",1647:"highlight-crmsh",1685:"highlight-less",1703:"highlight-yaml",1812:"auth-auth-stories",1863:"highlight-diff",1909:"highlight-ruleslanguage",1940:"highlight-dockerfile",1993:"highlight-perl",1998:"code-code-stories",2068:"highlight-vala",2094:"highlight-scss",2102:"highlight-haxe",2234:"input-input-stories",2262:"text-text-stories",2284:"highlight-aspectj",2358:"highlight-subunit",2370:"highlight-java",2417:"highlight-markdown",2446:"scrollable-section-scrollable-section-stories",2479:"highlight-dsconfig",2495:"highlight-flix",2588:"highlight-lasso",2601:"highlight-monkey",2643:"highlight-cos",2680:"highlight-roboconf",2718:"date-picker-date-picker-stories",2730:"highlight-gams",2774:"highlight-makefile",2793:"highlight-php-template",2809:"highlight-ocaml",2888:"highlight-mel",2890:"breadcrumbs-breadcrumbs-stories",2906:"highlight-arduino",2934:"editable-heading-editable-heading-stories",2954:"dropdown-menu-dropdown-menu-stories",2974:"popup-popup-stories",3019:"highlight-gradle",3020:"highlight-angelscript",3268:"highlight-apache",3277:"highlight-gauss",3284:"highlight-sqf",3291:"highlight-ebnf",3358:"old-browsers-message-old-browsers-message-stories",3366:"analytics-analytics-stories",3400:"highlight-json",3526:"island-island-stories",3560:"highlight-verilog",3632:"highlight-stylus",3686:"highlight-gcode",3697:"highlight-dart",3734:"highlight-php",3750:"highlight-nim",3777:"highlight-properties",3883:"highlight-maxima",3885:"highlight-kotlin",3895:"highlight-abnf",3902:"tag-tag-stories",3926:"highlight-nginx",3948:"highlight-pf",3950:"highlight-xl",3986:"highlight-sml",4014:"avatar-avatar-stories",4026:"highlight-ruby",4138:"highlight-pony",4139:"highlight-swift",4181:"welcome-stories",4200:"highlight-python",4215:"highlight-golo",4258:"dropdown-dropdown-stories",4320:"i18n-i18n-stories",4352:"input-size-input-size-stories",4370:"header-header-stories",4382:"highlight-python-repl",4396:"highlight-bash",4403:"highlight-hy",4436:"highlight-fsharp",4504:"form-form-stories",4508:"highlight-avrasm",4588:"highlight-qml",4684:"highlight-csp",4695:"highlight-css",4728:"select-select-stories",4746:"tooltip-tooltip-stories",4778:"highlight-scilab",4854:"footer-footer-stories",4864:"highlight-crystal",4915:"highlight-erb",4974:"highlight-sql_more",5102:"highlight-accesslog",5106:"loader-inline-loader-inline-stories",5118:"button-set-button-set-stories",5128:"highlight-lua",5153:"highlight-clean",5156:"highlight-puppet",5178:"highlight-latex",5190:"contenteditable-contenteditable-stories",5272:"highlight-gherkin",5314:"global-theme-stories",5317:"highlight-c",5326:"slider-slider-stories",5372:"highlight-mipsasm",5381:"highlight-tap",5403:"highlight-openscad",5411:"highlight-plaintext",5442:"markdown-markdown-stories",5468:"highlight-inform7",5480:"highlight-fortran",5483:"highlight-dns",5517:"highlight-julia",5531:"highlight-erlang-repl",5590:"alert-alert-stories",5666:"checkbox-checkbox-stories",5678:"highlight-leaf",5682:"highlight-mathematica",5779:"highlight-prolog",5823:"highlight-scheme",5834:"highlight-parser3",5846:"table-table-stories",5856:"highlight-haml",5886:"progress-bar-progress-bar-stories",5930:"highlight-smali",6095:"highlight-javascript",6107:"highlight-nix",6173:"highlight-stata",6182:"confirm-service-confirm-service-stories",6236:"tabs-tabs-stories",6290:"radio-radio-stories",6293:"highlight-dts",6384:"button-group-button-group-stories",6423:"highlight-mizar",6460:"grid-grid-stories",6506:"highlight-xquery",6588:"highlight-isbl",6595:"highlight-brainfuck",6622:"highlight-delphi",6631:"highlight-asciidoc",6655:"highlight-vbscript-html",6659:"highlight-excel",6684:"button-toolbar-button-toolbar-stories",6763:"highlight-hsp",6768:"highlight-dos",6775:"highlight-htmlbars",6835:"table-simple-table-stories",6836:"highlight-rust",6894:"highlight-handlebars",6900:"highlight-zephir",6905:"highlight-profile",6906:"highlight-haskell",7009:"highlight-mercury",7060:"dialog-dialog-stories",7156:"highlight-basic",7198:"tags-list-tags-list-stories",7290:"highlight-lisp",7341:"highlight-actionscript",7381:"highlight-smalltalk",7391:"highlight-oxygene",7418:"island-legacy-island-legacy-stories",7457:"highlight-taggerscript",7458:"highlight-http",7486:"highlight-gml",7508:"list-list-stories",7539:"highlight-pgsql",7549:"highlight-llvm",7635:"highlight-vbnet",7803:"highlight-routeros",7833:"highlight-powershell",7854:"data-list-data-list-stories",7861:"highlight-autohotkey",7879:"highlight-typescript",7881:"highlight-twig",7914:"confirm-confirm-stories",8016:"button-button-stories",8022:"storage-storage-stories",8046:"message-message-stories",8106:"highlight-purebasic",8116:"highlight-groovy",8144:"highlight-shell",8156:"toggle-toggle-stories",8172:"highlight-autoit",8184:"query-assist-query-assist-stories",8206:"clipboard-clipboard-stories",8222:"highlight-glsl",8235:"highlight-thrift",8301:"highlight-rib",8323:"highlight-erlang",8445:"icon-icon-stories",8510:"highlight-sql",8515:"highlight-fix",8603:"highlight-lsl",8653:"highlight-x86asm",8712:"http-http-stories",8755:"highlight-step21",8767:"highlight-cmake",8784:"highlight-clojure-repl",8800:"highlight-scala",8835:"highlight-django",8839:"highlight-vbscript",8936:"user-agreement-user-agreement-stories",9114:"highlight-d",9130:"highlight-capnproto",9135:"highlight-c-like",9158:"user-card-user-card-stories",9230:"highlight-vim",9261:"highlight-cpp",9266:"highlight-objectivec",9320:"highlight-bnf",9332:"highlight-moonscript",9338:"highlight-ceylon",9408:"content-layout-content-layout-stories",9495:"highlight-csharp",9531:"highlight-nsis",9540:"link-link-stories",9602:"highlight-dust",9610:"global-variables-stories",9617:"highlight-matlab",9643:"highlight-coffeescript",9665:"highlight-rsl",9861:"highlight-livescript",9918:"highlight-tp",9986:"auth-dialog-service-auth-dialog-service-stories"}[chunkId]||chunkId)+"."+{89:"4105b742",127:"d3606d37",174:"744a749c",182:"2e30dbf5",192:"b616a8da",250:"a33ca3c4",276:"24179b23",293:"81c00351",302:"36703fde",342:"3c2ab6fd",358:"358b8c60",410:"3b318e69",450:"c40e24e2",462:"165989e3",510:"07e60c7a",515:"8de940ce",529:"ebf3b1cc",637:"0686695e",714:"267a5997",762:"41603fe7",778:"cefe2e4e",826:"c6740a97",827:"c1776cdf",830:"98a51b8f",833:"01b24afa",875:"f5dc35c5",908:"8856e934",960:"e7e4e1f7",982:"c918dddd",990:"e7c4ba5d",1001:"245bd644",1068:"7c4e26dc",1074:"980b2586",1079:"a7ff0bfc",1110:"e94f5ce0",1173:"28bd09fe",1175:"69efb736",1192:"a3bbe0df",1251:"e7a292c0",1258:"3cc74ae8",1259:"5eebfc93",1271:"b7d49b93",1357:"ef774158",1367:"73e74531",1382:"8705e8d4",1443:"a523feec",1446:"13049289",1517:"4d3116b3",1530:"3c4efd56",1570:"6db9a4cf",1609:"3a3ba1a8",1647:"f5cfbf10",1685:"248e94d2",1703:"ea7635a9",1812:"16bb5acd",1863:"228477ed",1909:"7e9e4a0a",1940:"a7607581",1972:"2a518bdf",1993:"99d777ae",1998:"8d4d5ef7",2068:"c1248318",2094:"ce6bf856",2102:"837f37ea",2139:"866d490d",2234:"82a76ea0",2262:"b5336a12",2284:"384142e7",2358:"27039563",2370:"94a7c4ed",2412:"64dd31a5",2417:"1f03a799",2433:"75845217",2446:"b0e54c28",2479:"12cf5bb4",2495:"09ebe477",2558:"39d66e18",2588:"d1b3633a",2601:"c2842596",2643:"4f458a12",2680:"3dabcad1",2718:"869f4d24",2720:"96084824",2730:"b1141d10",2741:"8390b459",2774:"28d38bde",2793:"b690d743",2809:"81d91d26",2888:"3eae5d58",2890:"b86e546e",2906:"f8d4581f",2934:"606202e5",2954:"4dd36b18",2974:"b10a3a9c",3019:"7b98c5d4",3020:"be993150",3258:"4ea08866",3268:"d9ab46a5",3277:"4208edeb",3284:"ee5cbca4",3291:"69fc1259",3302:"43048866",3358:"4ce90116",3366:"a4a2f56b",3400:"02f6adaa",3463:"849502d9",3526:"ab1f4a56",3560:"bbd778e8",3632:"1c9b48ff",3686:"b882ae2b",3691:"ed2de7c8",3697:"bc9bce90",3734:"cfd156ea",3750:"3bcc9d2f",3777:"22a851ff",3883:"dc4b0947",3885:"4e5f907a",3895:"b832d2d9",3902:"0256e6e7",3926:"83247e5e",3948:"d856e165",3950:"0c4377fd",3986:"d3ba9a83",4014:"b1aac715",4026:"9f0988fd",4138:"93891111",4139:"bfd5b47b",4181:"fcd84e5d",4200:"12272591",4215:"9b83183d",4226:"72f8d59e",4258:"736a402c",4320:"dd56ef34",4352:"ce08dd9c",4370:"b493f246",4382:"6f0db985",4396:"ee23f246",4403:"13eff754",4436:"1dfb1fa8",4504:"b5c7be92",4508:"744d5e28",4588:"92098034",4684:"eb61dcc9",4695:"45278435",4728:"3ca3aa15",4746:"be1316df",4778:"d36a1241",4854:"13b9f24b",4864:"862fef5c",4915:"768cf933",4974:"535137be",5102:"a9a27982",5106:"0b034d1a",5118:"29eeaa82",5128:"becb932d",5153:"f013e370",5156:"efd8a97f",5174:"3a16e2c0",5178:"d3d785bb",5190:"a2ac00a4",5272:"fcc37a83",5314:"7e60fcdc",5317:"e9eb039e",5326:"198019fe",5372:"7bde5181",5381:"d922d829",5403:"3b1945b8",5411:"5b650f9c",5442:"8bd01083",5468:"331b0434",5480:"216e26c2",5483:"104578dd",5517:"eee33ed9",5531:"940fc566",5590:"1036145f",5666:"d949aaf9",5678:"de414747",5682:"3c58df3a",5779:"8e2a738a",5792:"b1f456cc",5823:"05389ffe",5834:"660730be",5846:"c227bafd",5848:"3322e6d4",5856:"3f3394d2",5886:"57b02705",5908:"ec0de39c",5930:"ee3cc251",5981:"3087d8d3",6095:"f075b9da",6107:"7223e3d9",6173:"9ce16e5a",6182:"ec8c5ba4",6236:"605c7139",6290:"3d8de0ab",6293:"09c02e98",6384:"ebbf2930",6423:"fefc0e98",6460:"832edf82",6498:"7768c3ed",6506:"9871dcba",6588:"b963d1db",6595:"8dd2811e",6622:"34851f85",6624:"c073f824",6631:"cd36ddfc",6655:"60eeb73b",6659:"1af10272",6684:"ae7be17b",6763:"5260bfc8",6768:"d3bfb99b",6771:"9ed5ab4a",6775:"4e7cc410",6835:"0c49e815",6836:"141e6715",6894:"d76dcd60",6900:"d5bf7ceb",6905:"bd3527c6",6906:"29dcbae8",7009:"5d485c52",7011:"a3fba778",7060:"7a519fff",7156:"d0ccb601",7198:"6b7d3870",7290:"023ddedb",7305:"46d97ab0",7341:"ab3ab1a8",7381:"6f37bee1",7391:"1f961095",7418:"e813ada1",7457:"32ff8a0c",7458:"2ebbbc78",7469:"ef3a7b05",7486:"7afcbc5f",7508:"912d4f04",7539:"47becd12",7549:"1ef121a1",7635:"1dc547fb",7803:"283b62cc",7811:"3163f021",7833:"90d43f27",7849:"a565c5dc",7854:"5b7efafe",7861:"159396d5",7879:"cef00043",7881:"37b7210e",7914:"ddd8e98e",8016:"92b04d93",8022:"6fe14914",8046:"f754e7a1",8106:"3352e9a2",8116:"8d8773e6",8144:"3304197f",8150:"45b5b3d4",8156:"292a1abf",8172:"96f32280",8184:"97fef30b",8206:"3acba056",8222:"7ad79bb4",8235:"8d2b640f",8301:"3e44023f",8323:"c5666e97",8445:"bde45b16",8505:"fa5b5b02",8510:"e2f568e8",8515:"85be9463",8603:"fd06d44c",8609:"8448599f",8613:"f1e8e528",8653:"8016e315",8712:"94299c22",8755:"d2dfc789",8767:"6327cd94",8784:"2ec1e25b",8800:"da4c1954",8835:"9f0abef7",8839:"893c599c",8936:"bd1dd171",9114:"b0616837",9130:"393751e7",9135:"8d347a67",9151:"eb7d3a5c",9158:"cb6390e4",9230:"54db825c",9259:"f9641ff8",9261:"86747195",9266:"30694be3",9320:"e7dcbf4f",9332:"dd6defd9",9338:"4bb2c240",9408:"473a5ae1",9495:"f064efaa",9523:"e94acd8a",9531:"43c38a59",9540:"178c2568",9602:"83dd69aa",9610:"3d250133",9617:"111b7aef",9643:"1797683b",9665:"a8141fa5",9686:"8b1756e9",9750:"2986f1da",9787:"39317e78",9861:"a2b2c08d",9918:"0595b051",9986:"1b92ff38"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@jetbrains/ring-ui:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@jetbrains/ring-ui:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();