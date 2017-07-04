# 007 - end to end

This example it's to understand how to create a simple end to end test using protractor. We are going to cover the following subjects:

*  End to end tests
*  Protractor

### To Do
Perform the following in the current example:
* Fill all form filds with right values
* Test the data into the form is the same than data in directive card
* Test favorite list is more than 1 element

### Solution

the implementation for the E2E test is based on two files, the main.po.js which is the one that stores the objects that you need for the tests
like input fields, buttons and so on. And the *.spec.js file which contains the expects for the tests.
for this example we need to take care when select the input fields for colors due to the Angular materia theme that wraps the input in some other elements
the solution for this is to select inner element by xpath and not by the angular model which is perfect for simple text imputs like the title or description.

For the *.spec.js file, there is a function (fillForm) where we send the values to the elements  and this function is called on the test.
once we called fillForm, the expects are evaluated and if them are ok the test pass.

[1]:https://openweathermap.org/api
[2]: http://angular-ui.github.io/ui-leaflet/#!/
[3]: https://material.angularjs.org/latest/
[4]: http://angular-ui.github.io/ui-leaflet/#!/examples/events
[5]: https://openweathermap.org/current
[6]: http://angular-ui.github.io/ui-leaflet/#!/examples/marker
[7]: https://material.angularjs.org/latest/api/service/$mdDialog
[8]: https://openweathermap.org/api/uvi
[9]: https://openweathermap.org/api/pollution/co
