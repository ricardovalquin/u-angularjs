(function () {
  'use strict';

  describe('card directive', function () {
    var suite = {};

    beforeEach(module('angularApp'));

    beforeEach(inject(function ($injector) {
      suite.compile = $injector.get('$compile');
      suite.$rootScope = $injector.get('$rootScope');
      suite.templateCache = $injector.get('$templateCache');
      suite.htmlTemplate = suite.templateCache.get('app/components/card/card.html');
      suite.templateCache.put('app/components/card/card.html', suite.htmlTemplate);
      suite.element = null;
    }));

    afterEach(function () {
      suite.element.remove();
      suite.element = undefined;
      suite.directive = undefined;
    });

    describe('card element rendering', function () {

      it('testing the directive with empty values', function () {
        suite.$rootScope.directiveProperties = {
          title: '',
          description: '',
          background: '',
          textColor: '',
          icon: '',
          favorite: function () {
            return true;
          },
          reservedBy: ''
        };
        suite.directive = '<card title="directiveProperties.title"' +
          'description="directiveProperties.description"' +
          'background="directiveProperties.background"' +
          'text-color="directiveProperties.textColor"' +
          'reserved-by="{{directiveProperties.reservedBy}}"' +
          'cb-favorite="directiveProperties.favorite(title)"' +
          'icon="{{directiveProperties.icon}}">' +
          '</card>';

        spyOn(suite.$rootScope.directiveProperties, 'favorite');

        suite.element = suite.compile(angular.element(suite.directive))(suite.$rootScope);
        suite.$rootScope.$digest();
        expect(suite.element.find('.title').text()).toEqual('');
        expect(suite.element.find('.description').text()).toEqual('');
        expect(suite.element.find('.icon').text()).toEqual('');
        expect(suite.element.find('.reservedBy').text()).toEqual('');
      });

      it('when a $digest() is performed, the directive should be rendered with the given values from the scope', function () {
        suite.$rootScope.directiveProperties = {
          title: 'some title',
          description: 'some test description',
          background: 'red',
          textColor: 'red',
          icon: 'icon',
          favorite: function () {
            return true;
          },
          reservedBy: 'some person'
        };
        suite.directive = '<card title="directiveProperties.title"' +
          'description="directiveProperties.description"' +
          'background="directiveProperties.background"' +
          'text-color="directiveProperties.textColor"' +
          'reserved-by="{{directiveProperties.reservedBy}}"' +
          'cb-favorite="directiveProperties.favorite(title)"' +
          'icon="{{directiveProperties.icon}}">' +
          '</card>';

        spyOn(suite.$rootScope.directiveProperties, 'favorite');

        suite.element = suite.compile(angular.element(suite.directive))(suite.$rootScope);
        suite.$rootScope.$digest();
        expect(suite.element.find('.title').text()).toEqual('some title');
        expect(suite.element.find('.description').text()).toEqual('some test description');
        expect(suite.element.find('.icon').text()).toEqual('icon');
        expect(suite.element.find('.reservedBy').text()).toEqual('some person');
        suite.element.find('.favorite').click();
        expect(suite.$rootScope.directiveProperties.favorite).toHaveBeenCalledWith(suite.$rootScope.directiveProperties.title);
      });

    });

  });
})();
