describe('HomeComponentController', function () {
  beforeEach(module('angularEx1'));

  var suite = {};

  beforeEach(inject(function ($injector) {
    suite.$controller = $injector.get('$controller');
    suite.$rootScope = $injector.get('$rootScope');
    suite.$httpBackend = $injector.get('$httpBackend');
    suite.$q = $injector.get('$q');
    suite.mdDialog = $injector.get('$mdDialog');
    suite.siteName = $injector.get('SITE_NAME');
    suite.WeatherService = $injector.get('WeatherService');

    suite.$httpBackend.whenGET(/(.*)\.html/).respond();
    suite.$httpBackend.whenGET(/(.*)\.json/).respond();

    suite.WeatherServiceMock = {
      getWeather: function () {
        return suite.$q.resolve({name: 'some place', weather: [{description: 'some description'}]});
      },
      getRadiation: function () {
        return suite.$q.resolve({data: 'some radiation lvl'});
      }
    };

    suite.vm = suite.$controller('HomeComponentController', {
      $scope: suite.$rootScope,
      $mdDialog: suite.mdDialog,
      SITE_NAME: suite.siteName,
      WeatherService: suite.WeatherServiceMock
    });
  }));

  afterEach(function () {
    suite = {};
  });

  afterAll(function () {
    suite = null;
  });

  describe('click on the map', function () {
    it('when a click on the map is performed and get weather is selected, it should call WeatherService.getWeather', function () {
      spyOn(suite.vm, 'evaluateClick').and.callThrough();
      var args = {
        leafletEvent: {
          latlng: {
            lat: '34.4',
            lon: '62.8'
          }
        }
      };
      suite.vm.evaluateClick(null, args);
      suite.$rootScope.$digest();
      expect(suite.vm.evaluateClick).toHaveBeenCalled();
    });

    it('when a click on the map is performed and get radiation is selected, it should call WeatherService.getRadiation', function () {
      spyOn(suite.vm, 'evaluateClick').and.callThrough();
      suite.vm.weatherVariable = 1;
      var args = {
        leafletEvent: {
          latlng: {
            lat: '34.4',
            lon: '62.8'
          }
        }
      };
      suite.vm.evaluateClick(null, args);
      suite.$rootScope.$digest();
      expect(suite.vm.evaluateClick).toHaveBeenCalled();
    });

  });
});
