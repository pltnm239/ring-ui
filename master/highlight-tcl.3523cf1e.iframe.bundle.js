(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[1443],{"./node_modules/highlight.js/lib/languages/tcl.js":module=>{function concat(...args){return args.map((x=>function source(re){return re?"string"==typeof re?re:re.source:null}(x))).join("")}module.exports=function tcl(hljs){const TCL_IDENT=/[a-zA-Z_][a-zA-Z0-9_]*/,NUMBER={className:"number",variants:[hljs.BINARY_NUMBER_MODE,hljs.C_NUMBER_MODE]};return{name:"Tcl",aliases:["tk"],keywords:"after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while",contains:[hljs.COMMENT(";[ \\t]*#","$"),hljs.COMMENT("^[ \\t]*#","$"),{beginKeywords:"proc",end:"[\\{]",excludeEnd:!0,contains:[{className:"title",begin:"[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",end:"[ \\t\\n\\r]",endsWithParent:!0,excludeEnd:!0}]},{className:"variable",variants:[{begin:concat(/\$/,(re=/::/,concat("(",re,")?")),TCL_IDENT,"(::",TCL_IDENT,")*")},{begin:"\\$\\{(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",end:"\\}",contains:[NUMBER]}]},{className:"string",contains:[hljs.BACKSLASH_ESCAPE],variants:[hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal:null})]},NUMBER]};var re}}}]);