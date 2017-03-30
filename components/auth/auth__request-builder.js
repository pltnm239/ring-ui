import uuid from 'simply-uuid';

import {encodeURL} from '../global/url';

export default class AuthRequestBuilder {
  /**
   * @param {{
   *   authorization: string,
   *   redirect_uri: string?,
   *   request_credentials: string?,
   *   client_id: string?,
   *   scopes: string[]
   * }} config
   * @param {AuthStorage} storage
   */
  constructor(config, storage) {
    this.config = config;
    this.storage = storage;
  }

  /**
   * @return {string} random string used for state
   */
  static _uuid = uuid.generate;

  /**
   * Save state and build an auth server redirect URL.
   *
   * @param {object=} extraParams additional query parameters for auth request
   * @param {object=} extraState additional state parameters to save
   * @return {Promise.<string>} promise that is resolved to authURL
   */
  prepareAuthRequest(extraParams, extraState) {
    const stateId = AuthRequestBuilder._uuid();
    const scopes = this.config.scopes.map(scope => encodeURIComponent(scope));

    /* eslint-disable camelcase */
    const request = Object.assign({
      response_type: 'token',
      state: stateId,
      redirect_uri: this.config.redirect_uri,
      request_credentials: this.config.request_credentials,
      client_id: this.config.client_id,
      scope: scopes.join(' ')
    }, extraParams || {});
    /* eslint-enable camelcase */

    const authURL = encodeURL(this.config.authorization, request);

    const state = Object.assign({
      restoreLocation: window.location.href,
      scopes: this.config.scopes
    }, extraState || {});

    return this._saveState(stateId, state).then(() => ({
      url: authURL,
      stateId
    }));
  }

  /**
   * @param {string} id
   * @param {StoredState} storedState
   * @return {Promise}
   * @private
   */
  _saveState(id, storedState) {
    return this.storage.saveState(id, storedState);
  }
}
