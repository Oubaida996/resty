# Resty  
***A browser based API testing tool***  
Our application will be an API testing tool that can be run in any browser, allowing a user to easily interact with APIs in a familiar interface.  

# PR phase  1
[PR](https://github.com/Oubaida996/resty/pull/1)  

# PR phase 2
[PR](https://github.com/Oubaida996/resty/pull/3)  

# PR phase 3
[PR](https://github.com/Oubaida996/resty/pull/4) 

# PR phase 3
[PR]()

# netlify  
[netlify](https://626a19c39e90780008bedf37--warm-hotteok-09251b.netlify.app/)  
[API LINK](https://reqres.in/)  

## for test  

 (get method)    
 https://reqres.in/api/users  
 

(post method)  
https://reqres.in/api/users  
body 
  

    {"name": "obieda",  
    "job": "leader"}  
    
    
(update method)    
https://reqres.in/api/users/:id    
body  
  

    {"name": "obieda",  
    "job": "leader"}  
    
    
  (delete method)  
  https://reqres.in/api/users/:id  
  
  
# UML  
![UML](./assets/Resty_uml.jpg)  


# Phase 1 Requirements 
 In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner.  
 
 # Phase 2 Requirements 
Extend your React Application so that your functional components are able to manage their own state variables using the useState Hook.
NOTE: It is not a requirement to make the actual API call. That can be mocked with “fake” data

Refactor any components using this.setState to implement the useState react API hook.
Refactor the Form Component to implement user input from form elements, instead of hard coded string values.  

 # Phase 3 Requirements 
In phase 3, we will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service GET requests

The following user stories detail the major functionality for this phase of the project.

As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
As a user, I want to see the results returned from an API request in my browser in a readable format

 # Phase 4 Requirements 
In phase 4,  we will be tracking every API call and storing it in history

The following user stories detail the major functionality for this phase of the project.

As a user, I want to see a list of my previous API calls, so that I can see the results again, quickly.
