(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[5779],{"./node_modules/highlight.js/lib/languages/prolog.js":module=>{module.exports=function prolog(hljs){const PARENTED={begin:/\(/,end:/\)/,relevance:0},LIST={begin:/\[/,end:/\]/},LINE_COMMENT={className:"comment",begin:/%/,end:/$/,contains:[hljs.PHRASAL_WORDS_MODE]},BACKTICK_STRING={className:"string",begin:/`/,end:/`/,contains:[hljs.BACKSLASH_ESCAPE]},inner=[{begin:/[a-z][A-Za-z0-9_]*/,relevance:0},{className:"symbol",variants:[{begin:/[A-Z][a-zA-Z0-9_]*/},{begin:/_[A-Za-z0-9_]*/}],relevance:0},PARENTED,{begin:/:-/},LIST,LINE_COMMENT,hljs.C_BLOCK_COMMENT_MODE,hljs.QUOTE_STRING_MODE,hljs.APOS_STRING_MODE,BACKTICK_STRING,{className:"string",begin:/0'(\\'|.)/},{className:"string",begin:/0'\\s/},hljs.C_NUMBER_MODE];return PARENTED.contains=inner,LIST.contains=inner,{name:"Prolog",contains:inner.concat([{begin:/\.$/}])}}}}]);