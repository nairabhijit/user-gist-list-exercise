## Functionalities

- User can find the public gists of a Github user
- If the input Github username is invalid, it will throw an error
- If the input Github user doesn't have gists, then it will show a 'No Gists...' component
- At a time only 10 results can be seen on a page, the pagination functionality is being added
- At a time only 3 forks are shown if any for a given gist, as is also stated in a requirement
- The Gist URL is being displayed as a title in absence of a description
- Example - Try with Github username 'tj' or 'ry' and you should be able to see the gists with pagination. Try with Github username 'nairabhijit' and you should see 'No Gists...'
- Have created Personal Access Token in Github, so as to access the APIs, if not used, then we may face API rate limiting issues earlier than expected
- .env file contains the environment variables
- endpoint /users/{user_id} is used to validate the provided Github username,
  endpoint /users/{gist_id}/gists is used to fetch the provided user gists, endpoint /gists/{gist_id}/forks is used to fetch the forks of a particular gist
- The screens are completely responsive
- Have tested with the latest versions of Chrome & Safari, but should work with other browsers too

## Improvements

- Right now each gist fork is being fetched using an API, I suppose that Github does provide the GraphQL APIs as well, this may reduce the network request

## Run Project

In the current project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

You can find the test cases in folder `screens>UserForm>__test__` & `screens>UserGists>__test__`

## This project uses the below technology stack

- reactjs for the frontend development
- typescript for type safety
- bootstrap for CSS utilities & components
- react-testing-library for testing
- BEM(Block Element Modifier) naming convention has been followed for CSS
- SCSS for variables and BEM shortcuts

## Author

Abhijit Nair - nairabhijit6@gmail.com
