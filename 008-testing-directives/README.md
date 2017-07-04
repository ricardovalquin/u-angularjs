# 008 - Testing Directives

The Purpose of this example it's to teach you how to test directives that use Templates Urls, we are going to work with the previous example of [Directives][1] and we are going to cover the following concepts:

*  Karma Preprocessor
*  `$templateCache`

### To Run Tests

* `gulp test` will build the tests of the app.
* coverage test result can be found in: `/coverage/PhantomJs***/index.html`

### To Do

* Use `$templateCache` to cache the card template.
* Test card with empty params
* Test card with fields using `.find`
* Test Controller

### Solution
Basically, to test a directive you need to inject the $compile service from AngularJs   
then, on the test you need to declare a variable just as you put it on the html
for instance, for the card directive, you take the structure from the home.html file and put it in a variable on the test.
All the attributes are linked to the suite.$rootscope.directiveProperties object that was declared previously.
During the test, when you are going to compile the element and assign it to a variable you have to call 
the $compile service that needs an html element and a scope from where he can take the interpolations. 
Once the element is compiled, we execute a digest to say to Karma that the elements can be rendered.
Finally, you got the rendered element with all the bindings interpolated and you can test the rendered values.

for the first test, we test that the directive is rendered without any value passing empty values on the scope linked object
On the second test, the bindings has values and when the $digest is executed we can test that the values are right placed on the rendered directive
As annotation, the $templateCache service is only needed for performance, this is not needed to test a directive,
but is really useful when you have to compile the element too many times and then is a good that allows you to save memory.
The directive controller is tested by it self when the directive is successfully loaded. 





Take a look of the solution [here][2].

[1]:https://github.com/talosdigital/u-angularjs/tree/solved/004-directives/004-directives
[2]:https://github.com/talosdigital/u-angularjs/tree/solved/008-testing-directives/008-testing-directives