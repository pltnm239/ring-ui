require.config({
  baseUrl: 'blocks',
  paths: {
    'ring'       : '../bundles/ring',
    'jquery'     : '../shims/jquery/jquery',
    'jquery.scrollTo': '../components/jquery.scrollTo/jquery.scrollTo',
    'jquery-caret': '../components/jquery-caret/jquery.caret',
    'jquery.actual':'../components/jquery.actual/jquery.actual',
    'handlebars' : '../components/handlebars/handlebars.runtime',
    'codemirror' : '../components/codemirror/lib/codemirror',
    'json'       : '../components/json2/json2',
    'jso'        : '../components/jso/jso',
    'raphael'    : '../components/raphael/raphael-min',
    'mousetrap'  : '../components/mousetrap/mousetrap'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'handlebars': {
      init: function(){
        /* globals Handlebars */
        return Handlebars;
      }
    },
    'jso': {
      deps: ['jquery'],
      exports: 'jso_configure',
      init: function(){
        /* jshint camelcase:false */
        /* globals jso_configure, jso_ensureTokens, jso_getToken, jso_wipe, jso_registerRedirectHandler, jso_registerStorageHandler, jso_authrequest */
        return {
          configure: jso_configure,
          ensure: jso_ensureTokens,
          getToken: jso_getToken,
          setRedirect: jso_registerRedirectHandler,
          registerStorageHandler: jso_registerStorageHandler,
          authRequest: jso_authrequest,
          wipe: jso_wipe
        };
      }
    },
    'jquery-caret': {
      deps:['jquery']
    },
    'jquery.scrollTo': {
      deps:['jquery']
    },
    'codemirror': {
      'exports': 'CodeMirror'
    },
    'raphael': {
      'exports': 'Raphael'
    }
  }
});
