describe('WeatherService', function () {

  var suite = {};

  beforeEach(module('angularEx1'));

  beforeEach(inject(function ($injector) {
    suite.$httpBackend = $injector.get('$httpBackend');
    suite.$httpBackend.when('GET', /(.*)\.json/).respond();
    suite.$httpBackend.when('GET', /(.*)\.html/).respond();
    suite.$rootScope = $injector.get('$rootScope');

    suite.hostName = $injector.get('WEATHER_HOST');
    suite.apiKey = $injector.get('WEATHER_API_KEY');
    suite.weatherResource = 'data/2.5/weather';
    suite.radiationResource = 'v3/uvi/';

    suite.$httpBackend.flush();
    suite.WeatherService = $injector.get('WeatherService');
    suite.$q = $injector.get('$q');
    suite.$rootScope.$new();

    suite.weatherCoordinatesMock = {
      lat: 5.659718554577286,
      lon: -75.03662109375
    };
    suite.radiationCoordinatesMock = {
      location: "6.25,-74.75"
    }

  }));

  afterEach(function () {
    suite.$httpBackend.verifyNoOutstandingExpectation();
    suite.$httpBackend.verifyNoOutstandingRequest();
    suite = {};
  });

  afterAll(function () {
    suite = null;
  });

  describe('get weather ', function () {
    it('When getWeather is called and the lat or long is missing it should reject the promise', function () {
      var coordinates = {lat: undefined, lon: undefined};
      var promise = suite.WeatherService.getWeather(coordinates);
      promise.then(function (response) {
        expect(response).toBe('Location coordinates are required');
      });
      expect(promise.then).not.toBe(undefined);
    });

    it('When getWeather is called and the lat and long are provided it should call the service', function () {
      var params = {
        APPID: suite.apiKey,
        lat: suite.weatherCoordinatesMock.lat,
        lon: suite.weatherCoordinatesMock.lon
      };

      suite.$httpBackend.expect('GET', suite.hostName + suite.weatherResource + '?APPID=' + params.APPID + '&' +
        'lat=' + params.lat + '&lon=' + params.lon).respond({data: 'some weather'});
      var promise = suite.WeatherService.getWeather(suite.weatherCoordinatesMock);
      suite.$httpBackend.flush();
      promise.then(function (response) {
        expect(response.data).toBe('some weather');
      });
      expect(promise.then).not.toBe(undefined);
    });

  });

  describe('get radiation ', function () {
    it('When getRadiation is called and the lat or long is missing it should reject the promise', function () {
      var coordinates = {location: undefined};
      var promise = suite.WeatherService.getRadiation(coordinates);
      promise.then(function (response) {
        expect(response).toBe('Location coordinates are required');
      });
      expect(promise.then).not.toBe(undefined);
    });

    it('When getRadiation is called and the lat and long are provided it should call the service', function () {

      suite.$httpBackend.expect('GET', suite.hostName + suite.radiationResource + suite.radiationCoordinatesMock.location
      + '/current.json?APPID=' + suite.apiKey).respond({data: 'radiation lvl'});
      var promise = suite.WeatherService.getRadiation(suite.radiationCoordinatesMock);
      suite.$httpBackend.flush();
      promise.then(function (response) {
        expect(response.data).toBe('radiation lvl');
      });
      expect(promise.then).not.toBe(undefined);
    });
  });

});
