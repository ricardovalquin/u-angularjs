'use strict';

describe('The main view', function () {
  var page;

  function fillForm() {
    page.icon.click();
    page.backgroundColor.sendKeys('red');
    page.textColor.sendKeys('black');
    page.title.sendKeys('card title test');
    page.description.sendKeys('some description');
  }
  function fillForm2() {
    page.icon.click();
    page.backgroundColor.sendKeys('black');
    page.textColor.sendKeys('red');
    page.title.sendKeys('card 2');
    page.description.sendKeys('some description card 2');
  }

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should be right data into directive', function() {
    fillForm();
    expect(page.renderedIcon.getText()).toBe('home');
    expect(page.cardElement.getCssValue('background-color')).toBe('rgba(255, 0, 0, 1)');
    expect(page.renderedTitle.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
    expect(page.renderedTitle.getText()).toBe('card title test');
    expect(page.renderedDescription.getText()).toBe('some description');
    page.favoriteBtn.click();
    fillForm2();
    page.favoriteBtn.click();
    expect(page.favoritesList.count()).toBe(2);
  });

});
