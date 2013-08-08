/* jshint camelcase:false */
define(['jquery', 'jso', 'global/global__modules', 'global/global__views'], function ($, jso, Module, View) {
  'use strict';

  var serverUrl;
  var provider = 'hub';
  var jsoConfig = {};

  var get = function(url, callback) {
    return $.oajax({url: serverUrl + url,
      jso_provider: provider,
      //TODO: use string scopes instead of ids
      jso_scopes: jsoConfig[provider].scope,
      jso_allowia: true,
      dataType: 'json',
      success: callback
    });
  };

  var convertServices = function(services) {
    var items = [];

    for (var i = 0; i < services.length; ++i) {
      var service = services[i];
      items.push({
        label: service.name,
        url: service.homeUrl
      });
    }

    return items;
  };

  var init = function (config) {
    var dfd = $.Deferred();
    serverUrl = config.serverUri;

    if (!serverUrl) {
      Module.util.log('Server URI is not defined!');
    } else {
      serverUrl = serverUrl.replace(/\/+$/, '');
    }

    jsoConfig[provider] = $.extend({
        authorization: serverUrl + '/rest/oauth2/auth'
      }, {
        client_id: config.clientId,
        redirect_uri: config.redirectUri,
        scope: config.scope
      }
    );

    jso.configure(jsoConfig, null, dfd.resolve.bind(dfd));

    var header = Module.get('header');

    $.when(
      get('/rest/services'),
      get('/rest/users/me'),
      header.on('init')
    ).then(function(services, me) {
      var update;

      if (services && services[0] && services[0].services) {
        update = {};
        update['services'] = convertServices(services[0].services);
      }

      var user = header.get('view');
      if (user && me && me[0]) {
        update = update || {};
        update['user'] = me[0];
      }

      if (update) {
        View.update('header', '.', update);
      }

      dfd.resolve();
    });

    return dfd;
  };

  var getToken = function() {
    var token = jso.getToken(provider);

    if (token === null) {
      var ensure = {};
      ensure[provider] = jsoConfig[provider].scope;
      jso.ensure(ensure);
    } else {
      return token;
    }
  };

  var module = 'auth';
  Module.add(module, {
    init: init,
    ajax: get,
    getToken: {
      method: getToken,
      override: true
    }
  });
});