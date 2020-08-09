# Image Gallery

Demo video here: [https://youtu.be/I3hqvtwHa-I](https://youtu.be/I3hqvtwHa-I)

## Notes to Kespry

* This was my first time working with React Hooks, as well as css vars (`var(--color-var)`)
* Due to using hooks for the first time, and not having researched enough, I have not yet written tests for user interaction (see TODO notes below)
* I switched from the built-in testing framework to jest to be able to use snapshots
* Included linting. `npm run lint`
* It was not listed in the requirements to not allow duplicate images in the library, but I chose to make that a feature, which also made development a little easier
* Navigating forward/backwards within the library doesn't have great performance, O(n) runtime. Could be improved, but at the sacrifice of adding more props and complexity to the components. Most galleries I come across are under 100 images, and think that code simplicity is preferable here.

#### Planned Changes/TODO

* Figure out the best way to test hooks and functions defined within functional components
* Bring code coverage up to 90%
* Consider a css library (bootstrap, tailwind, etc). If not, better organize css styles into separate files for maintainability. Alternatively, start using a css-in-js library like Styled Components, or scss with webpack.
* Thumbnail layout isn't ideal because of image sizing/spacing within the parent container. There's a lot of ways to solve this, each with tradeoffs for UX and other screen size optimizations. Would consult with a designer.

---

## Instructions from Kespry

A template built with create-react-app has been provided to you. You can find instructions for running the app in the [environment-instructions](environment-instructions.md) file.

This challenge is intended to take two hours. Focus on writing clean, readable, extensible code.

### Specifications

Build an image gallery.

- A user should be able to add images to the gallery via entering the URL of an image on the web into a text field.
- The gallery should display thumbnails of all images.
- When a thumbnail is clicked, that image should display at a large size below the thumbnails.
- There should be buttons by the large image to display the previous and next image, such that the user can scroll through the gallery without clicking the thumbnails every time.
- The previous and next buttons should loop if the user is on the first or last image.

Add some basic CSS, and add a few tests. You can choose to either use the testing suite included with create-react-app, or you can import any testing suite you like.
