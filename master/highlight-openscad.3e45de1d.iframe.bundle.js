(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[5403],{"./node_modules/highlight.js/lib/languages/openscad.js":module=>{module.exports=function openscad(hljs){const SPECIAL_VARS={className:"keyword",begin:"\\$(f[asn]|t|vp[rtd]|children)"},NUMBERS={className:"number",begin:"\\b\\d+(\\.\\d+)?(e-?\\d+)?",relevance:0},STRING=hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal:null}),FUNCTIONS={className:"function",beginKeywords:"module function",end:/=|\{/,contains:[{className:"params",begin:"\\(",end:"\\)",contains:["self",NUMBERS,STRING,SPECIAL_VARS,{className:"literal",begin:"false|true|PI|undef"}]},hljs.UNDERSCORE_TITLE_MODE]};return{name:"OpenSCAD",aliases:["scad"],keywords:{keyword:"function module include use for intersection_for if else \\%",literal:"false true PI undef",built_in:"circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"},contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,NUMBERS,{className:"meta",keywords:{"meta-keyword":"include use"},begin:"include|use <",end:">"},STRING,SPECIAL_VARS,{begin:"[*!#%]",relevance:0},FUNCTIONS]}}}}]);