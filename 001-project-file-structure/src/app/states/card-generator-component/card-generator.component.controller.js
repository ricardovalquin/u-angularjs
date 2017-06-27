(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('GeneratorController', GeneratorController);

  /** @ngInject */
  function GeneratorController(SITE_NAME) {
    var vm = this;

    vm.mainTitle = SITE_NAME;
    vm.textColor = '#00a7b5';
    vm.backgroundColor = '#ffffff';
    vm.titleText = 'Put your title here';
    vm.icon = 1;
    vm.descriptionText = 'Your awesome description goes here';

    vm.colorOptions = {options: {
      label: "Choose a color",
      icon: "brush",
      default: "#000",
      genericPalette: false,
      history: false
    }};

    vm.favoriteDesigns = [];
    vm.selectedFavorite = null;

    vm.selectCard = function (obj){
      vm.favoriteDesigns.push(obj);
    };

    vm.loadFavorite = function(obj) {
      vm.selectedFavorite = obj;
      vm.mainTitle = obj.mainTitle;
      vm.textColor = obj.textColor;
      vm.backgroundColor = obj.backgroundColor;
      vm.titleText = obj.titleText;
      vm.icon = obj.icon;
      vm.descriptionText = obj.descriptionText;
    };
  }
})();
