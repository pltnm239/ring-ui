(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[5178],{"./node_modules/highlight.js/lib/languages/latex.js":module=>{module.exports=function latex(hljs){const DOUBLE_CARET_VARIANTS=[{begin:/\^{6}[0-9a-f]{6}/},{begin:/\^{5}[0-9a-f]{5}/},{begin:/\^{4}[0-9a-f]{4}/},{begin:/\^{3}[0-9a-f]{3}/},{begin:/\^{2}[0-9a-f]{2}/},{begin:/\^{2}[\u0000-\u007f]/}],EVERYTHING_BUT_VERBATIM=[{className:"keyword",begin:/\\/,relevance:0,contains:[{endsParent:!0,begin:function either(...args){return"("+args.map((x=>function source(re){return re?"string"==typeof re?re:re.source:null}(x))).join("|")+")"}(...["(?:NeedsTeXFormat|RequirePackage|GetIdInfo)","Provides(?:Expl)?(?:Package|Class|File)","(?:DeclareOption|ProcessOptions)","(?:documentclass|usepackage|input|include)","makeat(?:letter|other)","ExplSyntax(?:On|Off)","(?:new|renew|provide)?command","(?:re)newenvironment","(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand","(?:New|Renew|Provide|Declare)DocumentEnvironment","(?:(?:e|g|x)?def|let)","(?:begin|end)","(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)","caption","(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)","(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)","(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)","(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)","(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)","(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)"].map((word=>word+"(?![a-zA-Z@:_])")))},{endsParent:!0,begin:new RegExp(["(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*","[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}","[qs]__?[a-zA-Z](?:_?[a-zA-Z])+","use(?:_i)?:[a-zA-Z]*","(?:else|fi|or):","(?:if|cs|exp):w","(?:hbox|vbox):n","::[a-zA-Z]_unbraced","::[a-zA-Z:]"].map((pattern=>pattern+"(?![a-zA-Z:_])")).join("|"))},{endsParent:!0,variants:DOUBLE_CARET_VARIANTS},{endsParent:!0,relevance:0,variants:[{begin:/[a-zA-Z@]+/},{begin:/[^a-zA-Z@]?/}]}]},{className:"params",relevance:0,begin:/#+\d?/},{variants:DOUBLE_CARET_VARIANTS},{className:"built_in",relevance:0,begin:/[$&^_]/},{className:"meta",begin:"% !TeX",end:"$",relevance:10},hljs.COMMENT("%","$",{relevance:0})],BRACE_GROUP_NO_VERBATIM={begin:/\{/,end:/\}/,relevance:0,contains:["self",...EVERYTHING_BUT_VERBATIM]},ARGUMENT_BRACES=hljs.inherit(BRACE_GROUP_NO_VERBATIM,{relevance:0,endsParent:!0,contains:[BRACE_GROUP_NO_VERBATIM,...EVERYTHING_BUT_VERBATIM]}),ARGUMENT_BRACKETS={begin:/\[/,end:/\]/,endsParent:!0,relevance:0,contains:[BRACE_GROUP_NO_VERBATIM,...EVERYTHING_BUT_VERBATIM]},SPACE_GOBBLER={begin:/\s+/,relevance:0},ARGUMENT_M=[ARGUMENT_BRACES],ARGUMENT_O=[ARGUMENT_BRACKETS],ARGUMENT_AND_THEN=function(arg,starts_mode){return{contains:[SPACE_GOBBLER],starts:{relevance:0,contains:arg,starts:starts_mode}}},CSNAME=function(csname,starts_mode){return{begin:"\\\\"+csname+"(?![a-zA-Z@:_])",keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\"+csname},relevance:0,contains:[SPACE_GOBBLER],starts:starts_mode}},BEGIN_ENV=function(envname,starts_mode){return hljs.inherit({begin:"\\\\begin(?=[ \t]*(\\r?\\n[ \t]*)?\\{"+envname+"\\})",keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\begin"},relevance:0},ARGUMENT_AND_THEN(ARGUMENT_M,starts_mode))},VERBATIM_DELIMITED_EQUAL=(innerName="string")=>hljs.END_SAME_AS_BEGIN({className:innerName,begin:/(.|\r?\n)/,end:/(.|\r?\n)/,excludeBegin:!0,excludeEnd:!0,endsParent:!0}),VERBATIM_DELIMITED_ENV=function(envname){return{className:"string",end:"(?=\\\\end\\{"+envname+"\\})"}},VERBATIM_DELIMITED_BRACES=(innerName="string")=>({relevance:0,begin:/\{/,starts:{endsParent:!0,contains:[{className:innerName,end:/(?=\})/,endsParent:!0,contains:[{begin:/\{/,end:/\}/,relevance:0,contains:["self"]}]}]}});return{name:"LaTeX",aliases:["tex"],contains:[...[...["verb","lstinline"].map((csname=>CSNAME(csname,{contains:[VERBATIM_DELIMITED_EQUAL()]}))),CSNAME("mint",ARGUMENT_AND_THEN(ARGUMENT_M,{contains:[VERBATIM_DELIMITED_EQUAL()]})),CSNAME("mintinline",ARGUMENT_AND_THEN(ARGUMENT_M,{contains:[VERBATIM_DELIMITED_BRACES(),VERBATIM_DELIMITED_EQUAL()]})),CSNAME("url",{contains:[VERBATIM_DELIMITED_BRACES("link"),VERBATIM_DELIMITED_BRACES("link")]}),CSNAME("hyperref",{contains:[VERBATIM_DELIMITED_BRACES("link")]}),CSNAME("href",ARGUMENT_AND_THEN(ARGUMENT_O,{contains:[VERBATIM_DELIMITED_BRACES("link")]})),...[].concat(...["","\\*"].map((suffix=>[BEGIN_ENV("verbatim"+suffix,VERBATIM_DELIMITED_ENV("verbatim"+suffix)),BEGIN_ENV("filecontents"+suffix,ARGUMENT_AND_THEN(ARGUMENT_M,VERBATIM_DELIMITED_ENV("filecontents"+suffix))),...["","B","L"].map((prefix=>BEGIN_ENV(prefix+"Verbatim"+suffix,ARGUMENT_AND_THEN(ARGUMENT_O,VERBATIM_DELIMITED_ENV(prefix+"Verbatim"+suffix)))))]))),BEGIN_ENV("minted",ARGUMENT_AND_THEN(ARGUMENT_O,ARGUMENT_AND_THEN(ARGUMENT_M,VERBATIM_DELIMITED_ENV("minted"))))],...EVERYTHING_BUT_VERBATIM]}}}}]);