(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[516],{"./node_modules/highlight.js/lib/languages/xml.js":module=>{function source(re){return re?"string"==typeof re?re:re.source:null}function lookahead(re){return concat("(?=",re,")")}function concat(...args){return args.map((x=>source(x))).join("")}function either(...args){return"("+args.map((x=>source(x))).join("|")+")"}module.exports=function xml(hljs){const TAG_NAME_RE=concat(/[A-Z_]/,function optional(re){return concat("(",re,")?")}(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),XML_ENTITIES={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},XML_META_KEYWORDS={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},XML_META_PAR_KEYWORDS=hljs.inherit(XML_META_KEYWORDS,{begin:/\(/,end:/\)/}),APOS_META_STRING_MODE=hljs.inherit(hljs.APOS_STRING_MODE,{className:"meta-string"}),QUOTE_META_STRING_MODE=hljs.inherit(hljs.QUOTE_STRING_MODE,{className:"meta-string"}),TAG_INTERNALS={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[XML_ENTITIES]},{begin:/'/,end:/'/,contains:[XML_ENTITIES]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[XML_META_KEYWORDS,QUOTE_META_STRING_MODE,APOS_META_STRING_MODE,XML_META_PAR_KEYWORDS,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[XML_META_KEYWORDS,XML_META_PAR_KEYWORDS,QUOTE_META_STRING_MODE,APOS_META_STRING_MODE]}]}]},hljs.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},XML_ENTITIES,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[TAG_INTERNALS],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[TAG_INTERNALS],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:concat(/</,lookahead(concat(TAG_NAME_RE,either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:TAG_NAME_RE,relevance:0,starts:TAG_INTERNALS}]},{className:"tag",begin:concat(/<\//,lookahead(concat(TAG_NAME_RE,/>/))),contains:[{className:"name",begin:TAG_NAME_RE,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}}}]);