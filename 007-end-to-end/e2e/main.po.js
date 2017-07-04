/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  //constructor elements
  this.icon = element(by.xpath('//*[@id="site"]/section/main/section/div/form/md-content/div[1]/div/button[2]/md-icon'));
  this.title = element(by.model('homeCtrl.card.title'));
  this.description = element(by.model('homeCtrl.card.description'));
  this.backgroundColor = element(by.xpath('//*[@id="input_0"]'));
  this.textColor = element(by.xpath('//*[@id="input_1"]'));

  //rendered elements
  this.cardElement = element(by.xpath('//*[@id="card"]'));
  this.renderedIcon = element(by.xpath('//*[@id="card"]/md-card-title/md-card-title-text/span/md-icon'));
  this.renderedTitle = element(by.css('#cardTitle'));
  this.renderedDescription = element(by.css('#cardDescription'));
  this.favoriteBtn = element(by.css('#favoriteBtn'));
  this.favoritesList = element.all(by.xpath('//*[@id="site"]/section/main/section/div/div/md-list-item'));
};

module.exports = new MainPage();
