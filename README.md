# The project 'Меsto' (eng. 'The place')

This is a gallery of thousands of picturesque areas our planet has. So, this is an example of photo desk realization, where users can sign in, upload the photo, delete his ones, like or dislike them. And all of them is with server connection.

## Functions

On this site the user can:

* like the places' cards;
* change the text in the profile lines "name" and "about yourself" or the photo;
* add and delete cards to the project;
* interact with the form without a mouse - a keyboard is enough;
* open any existing or added card for viewing on the full screen.

## Technology Stack

1. React hooks, functional components. Implementation of popups, cards rendering and the Context of the one user are done via ` React.useState ` ` React.useRef ` ` React.useEffect ` and one HOC (higher-order component) via ` React.memo `

2. The Fetch API provides each user's action: 

    * update profile data, 
    * add cards and delete the only users' ones,
    * like / dislike photos.
  Thanks to the study platform server. 
  
3. The project is responsive for different screen resolutions due to grids and flexboxes. Also the technology used:
```
@media screen and (max-width: XXXpx) {
  /* some props */
}
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

* `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

* `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

* `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

* `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
