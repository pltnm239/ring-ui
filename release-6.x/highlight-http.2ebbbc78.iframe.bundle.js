(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[7458],{"./node_modules/highlight.js/lib/languages/http.js":module=>{function concat(...args){return args.map((x=>function source(re){return re?"string"==typeof re?re:re.source:null}(x))).join("")}module.exports=function http(hljs){const VERSION="HTTP/(2|1\\.[01])",HEADER={className:"attribute",begin:concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},HEADERS_AND_BODY=[HEADER,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+VERSION+" \\d{3})",end:/$/,contains:[{className:"meta",begin:VERSION},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:HEADERS_AND_BODY}},{begin:"(?=^[A-Z]+ (.*?) "+VERSION+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:VERSION},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:HEADERS_AND_BODY}},hljs.inherit(HEADER,{relevance:0})]}}}}]);