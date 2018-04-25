# React and Protected Routes

Simple solution to force users to log in before they can see other pages/routes defined in React Router.

Back-end fakes a lot of information here. Normally, we would be using actual sessions and database information, but for the sake of this demo, the session and user credentials have been hard-coded.

In summary, App.js on the front-end redirects users to the Login route/component if the authentication state is false. When App is mounted, though, an Ajax request is made to check with the back-end if a session exists. If so, the authentication state is set to true, which causes the Redirect component to be removed.