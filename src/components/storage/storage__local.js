'use strict';

var when = require('when');

var safePromise = function (resolver) {
  return when.promise(resolver).
    otherwise(function (e) {
      if (e && e.name === 'NS_ERROR_FILE_CORRUPTED') {
        window.alert('Sorry, it looks like your browser storage has been corrupted. ' +
          'Please clear your storage by going to Tools -> Clear Recent History -> Cookies' +
          ' and set time range to "Everything". This will remove the corrupted browser storage across all sites.');
      }
      return when.reject(e);
    });
};

/**
 * @return {LocalStorage}
 * @constructor
 */
var LocalStorage = function () {
  if (!(this instanceof LocalStorage)) {
    return new LocalStorage();
  }
};

/**
 * @param {string} name
 * @return {Promise}
 */
LocalStorage.prototype.get = function (name) {
  return safePromise(function (resolve, reject) {
    var item = JSON.parse(localStorage.getItem(name));

    if (item) {
      resolve(item);
    } else {
      reject(new Error('There is no item "' + name + '"'));
    }
  });
};

/**
 * @param {string} name
 * @param {object} value
 * @return {Promise}
 */
LocalStorage.prototype.set = function (name, value) {
  return safePromise(function (resolve) {
    localStorage.setItem(name, JSON.stringify(value));
    resolve(value);
  });
};

/**
 * @param {string} name
 * @return {Promise}
 */
LocalStorage.prototype.remove = function (name) {
  return safePromise(function (resolve, reject) {
    if (localStorage.hasOwnProperty(name)) {
      localStorage.removeItem(name);
      resolve();
    } else {
      reject(new Error('There is no item "' + name + '"'));
    }
  });
};

/**
 * @param callback
 * @return {Promise}
 */
LocalStorage.prototype.each = function (callback) {
  return safePromise(function (resolve, reject) {
    var count = 0;
    for (var item in localStorage) {
      if (localStorage.hasOwnProperty(item)) {
        count++;
        callback(item, JSON.parse(localStorage.getItem(item)));
      }
    }

    if (count) {
      resolve(count);
    } else {
      reject(new Error('There is no items'));
    }
  });
};

module.exports = LocalStorage;