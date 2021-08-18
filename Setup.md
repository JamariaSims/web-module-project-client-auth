Login page
-Should save the returned token to localStorage
-Use history objects to navigate to your FriendsList route
-Loading spinner while request is happening

App
-Create a `<PrivateRoute />` to protect your other routes
-Should check localStorage for a token
-Create a protected route for your friends list

FriendsList Component
-Rendered with `<ProtectedRoute />`
-Create a list of your friends that you get from the API

Adding New Friends
-Create a form
-Make a POST request to add a friend to the database
-Each `friend` item that is in the `friends` array should have the following format:
{
id: 1
name: 'Joe',
age: 24,
email: 'joe@lambdaschool.com',
}

Components
-Login Form
-Update
-Creating User
-Delete User

  * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'lambda', password: 'school' }`
  * **[POST]** * to `/api/logout`: removes a token from active use. Returns the inactive token. 
  * **[GET]** to `/api/friends`: returns the list of friends.
  * **[GET]** to `/api/friends/123`: returns the friend with the id passed as part of the URL (123 in example).
  * **[POST]** * to `/api/friends`: Adds in a new friend.

Stretch
-Style the friends list and the input field and make everything look nice.
-Expand the number of properties that you put on each friend object. Feel free to remove the dummy data on the server or modify it in any way.
