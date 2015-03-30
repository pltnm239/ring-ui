
var map = require('mout/array/map');
var Select = require('select/select');
var React = require('react');

var isArray = require('mout/lang/isArray');

/**
 * @name Select-ng.
 * @description Angular wrapper for React select
 * @example
 *
<example name="Select-ng">
  <file name="index.html">
    <div ng-app="test" ng-controller="testCtrl as ctrl">
      <rg-select ng-model="ctrl.selectedItem" options="ctrl.options" key-field="id" label-field="text" label="Select item"></rg-select>
      <div>Selected item: {{ctrl.selectedItem | json}}</div>
    </div>
  </file>
  <file name="index.js" webpack="true">
    require('angular/angular.min.js');
    require('select-ng/select-ng');

    angular.module('test', ['Ring.select']).controller('testCtrl', function() {
      var ctrl = this;

      ctrl.options = [
        {id: 1, text: '11111'},
        {id: 2, text: '22222'},
        {id: 3, text: '33333'}
      ];

      ctrl.selectedItem = ctrl.options[1];
    });
  </file>
</example>

 <example name="Select-ng-promise">
   <file name="index.html">
     <h4>Getting items from promise on click with external filtering. (Filter value should be equal to label, not just part)</h4>
     <div ng-app="test" ng-controller="testCtrl as ctrl">
      <rg-select ng-model="ctrl.selectedItem" options="ctrl.getItems" label="Select item" external-filter="true"></rg-select>
      <div>Selected item: {{ctrl.selectedItem | json}}</div>
     </div>
   </file>
   <file name="index.js" webpack="true">
     require('angular/angular.min.js');
     require('select-ng/select-ng');

     angular.module('test', ['Ring.select']).controller('testCtrl', function($timeout, $q) {
          var ctrl = this;

          ctrl.options = [
            {key: 1, label: '11111'},
            {key: 2, label: '22222'},
            {key: 3, label: '33333'}
          ];

          ctrl.selectedItem = ctrl.options[1];

          ctrl.getItems = function(query){
            var defer = $q.defer();
            $timeout(function(){
              defer.resolve(ctrl.options.filter(function(op) {
                 return query ? op.label === query : true;
              }));
            }, 1000);
            return defer.promise;
          };
      });
   </file>
 </example>

  <example name="Select-ng-dropdown">
    <file name="index.html">
      <h4>Select-ng as dropdown</h4>
      <div ng-app="test" ng-controller="testCtrl as ctrl">
        <button rg-select options="ctrl.options" type="dropdown" filter="true" on-select="ctrl.onSelect">Click Me &#9660;</button>
        <ol><li ng-repeat="click in ctrl.clicks track by $index">{{click.label}}</li></ol>
      </div>
    </file>
    <file name="index.js" webpack="true">
      require('angular/angular.min.js');
      require('select-ng/select-ng');

      angular.module('test', ['Ring.select']).controller('testCtrl', function() {
      var ctrl = this;

      ctrl.clicks = [];

      ctrl.options = [
        {key: 1, label: '11111'},
        {key: 2, label: '22222'},
        {key: 3, label: '33333'}
      ];

      ctrl.onSelect = function(item) {
          ctrl.clicks.push(item);
      };

    });
    </file>
  </example>

  <example name="Select-ng-multiple">
    <file name="index.html">
      <h4>Multiple select</h4>
      <div ng-app="test" ng-controller="testCtrl as ctrl">
        <rg-select ng-model="ctrl.selectedItems" options="ctrl.options" label="Select item" config="ctrl.selectConfig"></rg-select>
        <div>Selected items: {{ctrl.selectedItems | json}}</div>
        <button ng-click="ctrl.selectedItems.splice(0, 1)">Deselect first item</button>
        <button ng-click="ctrl.options.splice(0, 1)">Remove first option</button>
      </div>
    </file>
    <file name="index.js" webpack="true">
      require('angular/angular.min.js');
      require('select-ng/select-ng');

      angular.module('test', ['Ring.select']).controller('testCtrl', function() {
      var ctrl = this;

      ctrl.selectConfig = {
        multiple: true,
      };

      ctrl.options = [
        {key: 1, label: '11111'},
        {key: 2, label: '22222'},
        {key: 3, label: '33333'},
        {key: 4, label: '4444444'},
        {key: 5, label: '5555'}
      ];

      ctrl.selectedItems = [ctrl.options[1], ctrl.options[2]];
    });
    </file>
  </example>
*/
/* global angular: false */
angular.module('Ring.select', [])
  .directive('rgSelect', function () {
    var defaultKey = 'key';
    var defaultLabel = 'label';
    var defaultSelectedLabel = 'selectedLabel';

    var types = {
      input: Select.Type.INPUT,
      button: Select.Type.BUTTON,
      dropdown: Select.Type.CUSTOM
    };

    return {
      restrict: 'EA',
      scope: {
        ngModel: '=',
        type: '@',
        options: '=',
        externalFilter: '=',
        filter: '=?',
        onSelect: '=',
        label: '@',
        labelField: '@',
        selectedLabelField: '@',
        keyField: '@',
        selectedFormatter: '=',
        config: '=?'
      },
      bindToController: true,
      controllerAs: 'selectCtrl',
      require: ['?ngModel', 'rgSelect'],
      link: function (scope, iElement, iAttrs, ctrls) {
        var ngModelCtrl = ctrls[0];
        var rgSelectCtrl = ctrls[1];

        rgSelectCtrl.setNgModelCtrl(ngModelCtrl);
      },
      controller: function ($q, $scope, $element) {
        /*eslint-disable consistent-this*/
        var ctrl = this;
        /*eslint-enable consistent-this*/
        var element = $element[0];

        /**
         * Properties
         */
        ctrl.selectInstance = null;
        ctrl.ngModelCtrl = null;
        ctrl.query = null;

        ctrl.setNgModelCtrl = function(ngModelCtrl) {
          ctrl.ngModelCtrl = ngModelCtrl;
        };

        ctrl.syncSelectToNgModel = function (selectedValue) {
          if (ctrl.ngModelCtrl) {
            if (isArray(selectedValue)) {
              ctrl.ngModelCtrl.$setViewValue(selectedValue.map(function (val) {
                return val.originalModel;
              }));
            } else {
              ctrl.ngModelCtrl.$setViewValue(selectedValue.originalModel);
            }
          }
        };

        ctrl.convertNgModelToSelect = function(model) {
          var convertItem = function (item) {
            return angular.extend({
              key: item[ctrl.keyField || defaultKey],
              label: item[ctrl.labelField || defaultLabel],
              selectedLabel: ctrl.selectedFormatter ? ctrl.selectedFormatter(item) : item[ctrl.selectedLabelField || defaultSelectedLabel],
              originalModel: item
            }, item);
          };

          if (model) {
            if (isArray(model)) {
              return model.map(convertItem);
            } else {
              return convertItem(model);
            }
          }
        };

        ctrl.getOptions = function (query) {
          var result;
          if (angular.isFunction(ctrl.options)) {
            result = ctrl.options(query);
          } else {
            result = ctrl.options;
          }
          return $q.when(result);
        };

        ctrl.loadOptionsToSelect = function(query) {
          ctrl.selectInstance.setProps({
            loading: true
          });

          ctrl.getOptions(query).then(function (results) {
            ctrl.selectInstance.setProps({
              data: map(results.data || results, ctrl.convertNgModelToSelect)
            });
          }).catch(function () {
            //todo: catch error
          }).finally(function () {
            ctrl.selectInstance.setProps({
              loading: false
            });
          });
        };

        function setSelectModel(newValue) {
          ctrl.selectInstance.setProps({
            selected: newValue ? ctrl.convertNgModelToSelect(newValue) : newValue
          });
        }

        function syncNgModelToSelect() {
          $scope.$watch(function () {
            if (ctrl.ngModelCtrl) {
              return ctrl.ngModelCtrl.$modelValue;
            }
            return null;
          }, setSelectModel, true);
        }

        function attachDropdownIfNeeded() {
          if (ctrl.type === 'dropdown') {
            element.addEventListener('click', function () {
              ctrl.selectInstance._showPopup();
            });
          }
        }

        function getSelectType() {
          return types[ctrl.type] || types.button;
        }

        function activate() {
          /**
           * Provide specific filter function if externalFilter enabled
           */
          if (ctrl.externalFilter) {
            ctrl.filter = {fn: function () {
              return true;
            }};
          }

          ctrl.config = angular.extend({}, {
            selected: ctrl.convertNgModelToSelect(ctrl.ngModel),
            label: ctrl.label,
            filter: ctrl.filter,
            type: getSelectType(),
            targetElement: ctrl.type === 'dropdown' ? $element[0] : null,
            onOpen: function () {
              $scope.$evalAsync(function () {
                ctrl.loadOptionsToSelect();
                if (ctrl.onOpen){
                  ctrl.onOpen();
                }
              });
            },
            onSelect: function (item) {
              $scope.$evalAsync(function () {
                if (ctrl.onSelect) {
                  ctrl.onSelect(item);
                }
              });
            },
            onChange: function (selected) {
              $scope.$evalAsync(function () {
                ctrl.syncSelectToNgModel(selected);
              });
            },
            onFilter: function (query) {
              $scope.$evalAsync(function () {
                ctrl.query = query;
                if (ctrl.externalFilter) {
                  ctrl.loadOptionsToSelect(query);
                }
                if (ctrl.onFilter) {
                  ctrl.onFilter(query);
                }
              });
            }
          }, ctrl.config || {});

          /**
           * Render select in appended div to save any exist content of directive
           */
          var container = document.createElement('span');
          element.appendChild(container);

          ctrl.selectInstance = React.renderComponent(new Select(ctrl.config), container);
          syncNgModelToSelect();
          attachDropdownIfNeeded();
        }
        activate();
      }
    };
  });
