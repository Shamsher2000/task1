

-----to run the project----
### `npm run start`


------to run for development
### `npm run dev`
---------login api which return JWT token on succesful registraion
http://localhost:4000/api/v1/users/login
use this json format to send request

{
    "email": "check123@gmail.com",
    "password":"mobile"
}

---------register user-------------
http://localhost:4000/api/v1/users/new
use this json format to send request
{
    "name": "1rewth",
    "email": "check153@gmail.com",
    "contact": 789443,
    "password": "mobile"
}

-----get user detail with given JWT token using this API (id  should be jwt token generated during login and register) ----
http://localhost:4000/api/v1/users/:id

here id is JWT token genearte on succesful registration and login


Along with this i have added api to delete and update users with there object id of MONGOBD


--- api to update user details using put request here id is object id of MONGOBD------
http://localhost:4000/api/v1/users/:id



--- api to delete user using delete request here id is object id of MONGOBD------
http://localhost:4000/api/v1/users/:id#   t a s k 1  
 #   t a s k 1  
 