# 001 - Project File Structure

The Purpose of this example it's to understand how to set up a robust file structure for an Angular Project, [LIFT][1] principles:

* Locating our code is easy
* Identify code at a glance
* Flat structure as long as we can
* Try to stay DRY (Don’t Repeat Yourself)

For More information about Applications Structure [here][2]

### To Do
Perform the following in the current example:
* Create a login page.
* Create a Dashboard page after sign in up.

### Solution

This implementation is based on the Angular style guide [5] by johnpapa.
One of the main changes made here was the creation of a base abstract state for the app
then, all the views that belongs to the app are sub states of this states
container and allows to have common elements (the nested views) without 
duplicating code (using the TDRY concept ). Views as the login page are
not sub states of this one because it not has common components as the other ones.
 

Folder structure:
starting by the app folder, we have the components folder which contains:
  - commons (for shared components between views).
  - constants (for constants like url server, language constants).
  - directives (the directives are not part of any state, they are reusable components that can be used across the whole application)
  - services (the services can be used in any state, then they can not be part of the state itself)
  
after components is the config folder which contains the language configuration for the angular translate module.
in this file you can specify the route for the different translation files that you will use.

finaly, we have the states folder that contains all the diferent states for the application
in this case, we have home and login states, inside their folders you can find all the files that compose an state:
  - the lang folder (wich contains .json files with the translation texts).
  - _stateName.scss (partial scss file for the styles of the view).
  - stateName.controller.js (the controller for the view).
  - stateName.controller.spec.js (unit tests file for the controller).
  - stateName.html (html file for the view of the state).
  - stateName.route.js (route file that specify the url, pre loaded data and resources that the state needs to resolve before render it).
  - stateName.route.js (unit testing for the route file).
  - subStateName folder (if a state have nested states, they have to go here and the files are the same, exept by the route that can be defined on the parent state).
  

If you want to see the solution, click [here][3].

### Next
* [002 - States, views and params][4]

### Solution: 
For the implementation of the abstract states and ui-view concepts the app state was created with two ui-views: navbar and content
and three nested states.

for the ui-views:
 in the navbar ui-view the navigation bar directive is loaded 
  in the content ui-view all the three nested states (home, detail and config) are loaded, depending of the url route.
  
for the abstract and nested states:
  on the route file config for each state (home, detail and config) is declared that each state is child of app when declaring $stateProvider.state('app.stateName', {...})
  

### Next
* [003 - servers and maps][6]

### Solution: 
We implemented the leaflet map service with an event listener to catch the click on the map and get the coordinates.
Then, the WeatherService implementation is in charge to make the communication with the http://api.openweathermap.org/ API and then we are able to get the weather and radiation information about
the selected location.
On the view, there are radio buttons that allows you to choose which environmental variable do you want to know.
Once this variable is selected you can click on the map and be able to get that information.
The controller evaluates which variable you want to know and makes the call to the right API endpoint.
The Service hit the API endpoint and retrieves the data to the controller and the Angular Material $mdDialog service show the results.
 
### Next
* [004 - directives][7] 

### Solution:
For the directives implementation, under components/directives/card-generator is located the files used for the card visualizer directive
This directive works with 6 parameters, which are: icon, textColor, backgroundColor, title, descriptionText, and the last one that is a function: favorite
The directive is setup as an element and all the attributes are mandatory, once you place it and bring all the parameters
is going to render it on the card visualizer.
When you click on the star on the top right corner, the favorite function is going to be trigered and is going to send an object containing
all the variables to be added to the favorites list.

### Next
* [005 - components][8]

 [1]: http://bguiz.github.io/js-standards/angularjs/application-structure-lift-principle/
 [2]: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y150
 [3]: https://github.com/talosdigital/u-angularjs/tree/solved/001-projec-file-structure/001-project-file-structure#solution
 [4]: https://github.com/talosdigital/u-angularjs/tree/master/002-routing-params-views
 [5]: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
 [6]: https://github.com/talosdigital/u-angularjs/blob/master/003-servers-and-maps/README.md
 [7]: https://github.com/talosdigital/u-angularjs/blob/master/004-directives/README.md
 [8]: https://github.com/talosdigital/u-angularjs/blob/master/005-components/README.md