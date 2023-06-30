Following is the checklist and details of features delivered in the app.
I have added some known improvements that can be further made to the project which could not be completed due to time constraint

### Starting the project

- As project is made React Native 0.72, please make sure you have latest Node version
- Clone the repo
- run "yarn" or "npm i" in project drectory
- run "cd ios && pod install" in project drectory
- run "npx react-native run-ios" or "yarn ios" for iOS app
- run "npx react-native run-android" or "yarn android" for Android app

### Tasks Completed

- Project is built using React Native CLI
- Application is connected with **Dogs REST API Layer** at `https://dog.ceo/api/breed/hound/images/ using **React Query** and **Axios** to retrieve dog images
- Custom hook is written for API layer access with Base URL defined in .env file
- Gallery component is implemented on main screen to list down all images from API
- Modal component is implemented on tap any image from gallery
- Comments scrolling section is added below image in modal with vaildations
- Comments Add/Edit input field is added below Comments section in modal with validations
- Add, Delete and Edit a comment functionalities have been added onclick of respective icons
- Redux Toolkit has been configured and CRUD operations for comments was functional with it
- Responsive helper utilities have been written to ensure responsive behaviour of app devices across all devices

### Bonus improvements

- Data is Memoized using useMemo hook where needed to improve performance of the app and avoind re-rendering
- Unit Tests are added for components and redux slice crucial for comments crud functionality used in the app

### Known improvements areas

- Splash screen and app Logo was not added due to time constraint
- DETOX for writing e2e tests for different user journeys i.e Open image, add/delete/edit a comment on an image.
- I covered generic scenarios that i could think of while writing unit tests on granular component level, however there might be some cases where we can write more for better coverage on
  Unit/integrations tests
- Delete comment confirmation popup can be added on press of the delete icon
- Toast messages on success/error of any operation performed can be added
- UI/UX was kept very basic due to time constraint, however we can improve by adding transitions and fonts and sounds on actions in the app
- Redux store is not persisted on purpose to have a fresh experience everytime we land in the app.
  We can persist the redux store if we want to keep the data on app kill.

Thanks for your time to review
Looking forward for the feedback
Gohar
