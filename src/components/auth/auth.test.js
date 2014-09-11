describe('auth', function () {
  var Auth = require('./auth');
  var AuthRequestBuilder = require('./auth__request-builder');
  var AuthStorage = require('./auth__storage');
  var when = require('when');

  describe('construction', function () {
    it('should require provide config', function () {
      expect(function () {
        return new Auth();
      }).to.throw(Error, 'Config is required');
    });

    it('should require provide server uri', function () {
      expect(function () {
        return new Auth({
          serverUri: null
        });
      }).to.throw(Error, 'Property serverUri is required');

      expect(function () {
        return new Auth({});
      }).to.throw(Error, 'Property serverUri is required');
    });

    it('should fix serverUri', function () {
      expect(new Auth({serverUri: ''}).config.serverUri).to.equal('');
      expect(new Auth({serverUri: 'http://localhost'}).config.serverUri).to.equal('http://localhost/');
      expect(new Auth({serverUri: '.'}).config.serverUri).to.equal('./');
    });

    it('should merge passed config with default config', function () {
      var config = {
        serverUri: 'http://localhost/'
      };
      var auth = new Auth(config);

      auth.config.serverUri.should.equal(config.serverUri);
      auth.config.should.contain.keys(Object.keys(Auth.DEFAULT_CONFIG));
    });

    it('should not redirect on object construction', function () {
      sinon.stub(Auth.prototype, '_redirectCurrentPage');
      new Auth({serverUri: ''});
      Auth.prototype._redirectCurrentPage.should.not.have.been.called;
      Auth.prototype._redirectCurrentPage.restore();
    });

  });

  describe('getValidatedToken', function () {
    var auth = new Auth({
      serverUri: '',
      scopes: ['0-0-0-0-0', 'youtrack'],
      optionalScopes: ['youtrack']
    });

    beforeEach(function () {
      sinon.stub(AuthStorage.prototype, 'getToken');
    });

    afterEach(function () {
      AuthStorage.prototype.getToken.restore();
    });

    it('should resolve access token when it is valid', function () {
      AuthStorage.prototype.getToken.returns(when.resolve({
        access_token: 'token',
        expires: Auth._epoch() + 60 * 60,
        scopes: ['0-0-0-0-0', 'youtrack']
      }));
      return auth._getValidatedToken([Auth._validateExistence, Auth._validateExpiration, auth._validateScopes.bind(auth)]).
        should.eventually.be.equal('token');
    });

    it('should resolve access token when token is given for all required scopes', function () {
      AuthStorage.prototype.getToken.returns(when.resolve({
        access_token: 'token',
        expires: Auth._epoch() + 60 * 60,
        scopes: ['0-0-0-0-0']
      }));
      return auth._getValidatedToken([Auth._validateExistence, Auth._validateExpiration, auth._validateScopes.bind(auth)]).
        should.eventually.be.equal('token');
    });

    it('should reject if access_token is empty', function () {
      AuthStorage.prototype.getToken.returns(when.resolve({
        access_token: null,
        expires: Auth._epoch() + 60 * 60,
        scopes: ['0-0-0-0-0']
      }));
      return auth._getValidatedToken([Auth._validateExistence, Auth._validateExpiration, auth._validateScopes.bind(auth)]).
        otherwise(function (rejection) {
          return rejection;
        }).
        should.eventually.be.deep.equal({ reason: 'Token not found', authRedirect: true });
    });

    it('should reject if there is no token stored', function () {
      AuthStorage.prototype.getToken.returns(when.resolve(null));
      return auth._getValidatedToken([Auth._validateExistence, Auth._validateExpiration, auth._validateScopes.bind(auth)]).
        otherwise(function (rejection) {
          return rejection;
        }).
        should.eventually.be.deep.equal({ reason: 'Token not found', authRedirect: true });
    });

    it('should reject if token is expired', function () {
      AuthStorage.prototype.getToken.returns(when.resolve({
        access_token: 'token',
        expires: Auth._epoch() + 15 * 60,
        scopes: ['0-0-0-0-0']
      }));
      return auth._getValidatedToken([Auth._validateExistence, Auth._validateExpiration, auth._validateScopes.bind(auth)]).
        otherwise(function (rejection) {
          return rejection;
        }).
        should.eventually.be.deep.equal({ reason: 'Token expired', authRedirect: true });
    });

    it('should reject if token scopes don\'t match required scopes', function () {
      AuthStorage.prototype.getToken.returns(when.resolve({
        access_token: 'token',
        expires: Auth._epoch() + 60 * 60,
        scopes: ['youtrack']
      }));
      return auth._getValidatedToken([Auth._validateExistence, Auth._validateExpiration, auth._validateScopes.bind(auth)]).
        otherwise(function (rejection) {
          return rejection;
        }).
        should.eventually.be.deep.equal({ reason: 'Token doesn\'t match required scopes', authRedirect: true });
    });
  });

  describe('validateAgainstUser', function () {
    var auth = new Auth({
      serverUri: '',
      scopes: ['0-0-0-0-0', 'youtrack'],
      optionalScopes: ['youtrack']
    });

    beforeEach(function () {
      sinon.stub(Auth.prototype, 'getSecure');
    });

    afterEach(function () {
      Auth.prototype.getSecure.restore();
    });

    it('should resolve to access token when user is returned', function () {
      var token = { access_token: 'token' };
      Auth.prototype.getSecure.returns(when.resolve({login: 'user'}));
      return auth._validateAgainstUser(token).
        then(function (token) {
          Auth.prototype.getSecure.should.have.been.calledWith(Auth.API_PROFILE_PATH, 'token');
          return token;
        }).
        should.eventually.be.deep.equal(token);
    });

    it('should reject with redirect if 401 response recieved', function () {
      var token = { access_token: 'token' };
      Auth.prototype.getSecure.returns(when.reject({status: 401, responseJSON: {error: 'Problem'}}));
      return auth._validateAgainstUser(token).
        otherwise(function (rejection) {
          return rejection;
        }).
        should.eventually.be.deep.equal({ reason: 'Problem', authRedirect: true });
    });

    it('should reject with redirect if invalid_grant response recieved', function () {
      var token = { access_token: 'token' };
      Auth.prototype.getSecure.returns(when.reject({responseJSON: {error: 'invalid_grant'}}));
      return auth._validateAgainstUser(token).
        otherwise(function (rejection) {
          return rejection;
        }).
        should.eventually.be.deep.equal({ reason: 'invalid_grant', authRedirect: true });
    });

    it('should reject with redirect if invalid_grant response recieved', function () {
      var token = { access_token: 'token' };
      Auth.prototype.getSecure.returns(when.reject({responseJSON: {error: 'invalid_request'}}));
      return auth._validateAgainstUser(token).
        otherwise(function (rejection) {
          return rejection;
        }).
        should.eventually.be.deep.equal({ reason: 'invalid_request', authRedirect: true });
    });
  });

  describe('init', function () {
    var auth = new Auth({
      serverUri: '',
      redirect_uri: 'http://localhost:8080/hub',
      client_id: '1-1-1-1-1',
      scope: ['0-0-0-0-0', 'youtrack'],
      optionalScopes: ['youtrack']
    });

    beforeEach(function () {
      sinon.stub(Auth.prototype, 'getSecure').returns(when({login: 'user'}));
    });

    afterEach(function () {
      Auth.prototype.getSecure.restore();
      return when.join(auth._storage.cleanStates(), auth._storage.wipeToken());
    });

    it('should resolve to undefined if there is a valid token', function () {
      return auth._storage.saveToken({access_token: 'token', expires: Auth._epoch() + 60 * 60, scopes: ['0-0-0-0-0']}).
        then(function () {
          return auth.init();
        }).
        should.eventually.be.undefined;
    });

    it('should fetch auth response from query parameters', function () {
      var AuthResponseParser = require('./auth__response-parser');
      var frozenTime = Auth._epoch();
      sinon.stub(AuthResponseParser.prototype, 'getLocation').returns('http://localhost:8080/hub#access_token=2YotnFZFEjr1zCsicMWpAA&state=xyz&token_type=example&expires_in=3600');
      sinon.stub(Auth, '_epoch').returns(frozenTime);
      return auth._storage.saveState('xyz', {restoreLocation: 'http://localhost:8080/hub/users', scopes: ['0-0-0-0-0']}).
        then(function () {
          return auth.init();
        }).
        then(function (restoreLocation) {
          restoreLocation.should.be.equal('http://localhost:8080/hub/users');
          AuthResponseParser.prototype.getLocation.restore();
          Auth._epoch.restore();
          return auth._storage.getToken();
        }).
        should.eventually.be.deep.equal({
          access_token: '2YotnFZFEjr1zCsicMWpAA',
          scopes: ['0-0-0-0-0'],
          expires: frozenTime + 3600
        });
    });

    it('should redirect to auth when there is no valid token', function () {
      sinon.stub(Auth.prototype, '_redirectCurrentPage');
      sinon.stub(AuthRequestBuilder, '_uuid').returns('unique');

      return auth.init().
        otherwise(function (reject) {
          Auth.prototype._redirectCurrentPage.should.be.calledWith('api/rest/oauth2/auth?response_type=token&' +
            'state=unique&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fhub&client_id=1-1-1-1-1&scope=0-0-0-0-0%20youtrack');
          Auth.prototype._redirectCurrentPage.restore();
          AuthRequestBuilder._uuid.restore();
          return reject.authRedirect;
        }).
        should.eventually.be.true;
    });
  });

  describe('requestToken', function () {

    var auth = new Auth({
      serverUri: '',
      redirect_uri: 'http://localhost:8080/hub',
      client_id: '1-1-1-1-1',
      scope: ['0-0-0-0-0', 'youtrack'],
      optionalScopes: ['youtrack']
    });

    beforeEach(function () {
      sinon.stub(Auth.prototype, '_redirectCurrentPage');
      sinon.stub(AuthRequestBuilder, '_uuid').returns('unique');
      auth._initDeferred = when.defer();
      auth._initDeferred.resolve();
    });

    afterEach(function () {
      AuthRequestBuilder._uuid.restore();
      Auth.prototype._redirectCurrentPage.restore();
      return when.join(auth._storage.cleanStates(), auth._storage.wipeToken());
    });

    it('should resolve to access token if there is a valid one', function () {
      return auth._storage.saveToken({access_token: 'token', expires: Auth._epoch() + 60 * 60, scopes: ['0-0-0-0-0']}).
        then(function () {
          return auth.requestToken();
        }).
        should.eventually.be.equal('token');
    });

    it('should get token in iframe if there is no valid token', function () {
      sinon.stub(Auth.prototype, '_redirectFrame', function () {
        auth._storage.saveToken({access_token: 'token', expires: Auth._epoch() + 60 * 60, scopes: ['0-0-0-0-0']});
      });
      return auth.requestToken().
        then(function (accessToken) {
          Auth.prototype._redirectFrame.getCall(0).args[1].should.be.equal('api/rest/oauth2/auth?response_type=token&' +
            'state=unique&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fhub&client_id=1-1-1-1-1&scope=0-0-0-0-0%20youtrack');
          Auth.prototype._redirectFrame.restore();
          Auth.prototype._redirectCurrentPage.should.not.have.been.called;
          return accessToken;
        }).should.eventually.be.equal('token');
    });

    it('should redirect current page if get token in iframe fails', function () {
      var authURL = 'api/rest/oauth2/auth?response_type=token&' +
        'state=unique&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fhub&client_id=1-1-1-1-1&scope=0-0-0-0-0%20youtrack';
      Auth.REFRESH_POLL_MAX_ATTEMPTS = 5;
      sinon.stub(Auth.prototype, '_redirectFrame');
      return auth.requestToken().
        otherwise(function (reject) {
          Auth.prototype._redirectFrame.getCall(0).args[1].should.be.equal(authURL);
          Auth.prototype._redirectFrame.restore();
          Auth.prototype._redirectCurrentPage.should.have.been.calledWith(authURL);
          return reject.authRedirect;
        }).should.eventually.be.true;
    });
  });

  describe('logout', function() {
    var auth = new Auth({
      serverUri: '',
      redirect_uri: 'http://localhost:8080/hub',
      client_id: '1-1-1-1-1',
      scope: ['0-0-0-0-0', 'youtrack'],
      optionalScopes: ['youtrack']
    });

    beforeEach(function () {
      sinon.stub(Auth.prototype, '_redirectCurrentPage');
      sinon.stub(AuthRequestBuilder, '_uuid').returns('unique');
    });

    afterEach(function () {
      Auth.prototype._redirectCurrentPage.restore();
      AuthRequestBuilder._uuid.restore();
    });

    it('should clear access token and redirect to logout', function () {
      return auth.logout().
        then(function () {
          Auth.prototype._redirectCurrentPage.should.have.been.calledWith('api/rest/oauth2/auth?response_type=token&' +
            'state=unique&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fhub&client_id=1-1-1-1-1&' +
            'scope=0-0-0-0-0%20youtrack&request_credentials=required');
          return auth._storage.getToken();
        }).
        then(function (storedToken) {
          expect(storedToken).to.be.null;
          return auth._storage.getState('unique');
        }).should.eventually.be.deep.equal({
          restoreLocation: window.location.href,
          scopes: ['0-0-0-0-0', 'youtrack']
        });
    });
  });
});