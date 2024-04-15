This is pokemon assignment, built using react native framework

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
To start Metro, run the following command from the _root_ of your React Native project:
# using npm
npm start

## Step 2: Start your Application
Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android
# using npm
npm run android

### For iOS
# using npm
npm run ios

If everything is set up _correctly_, you should see your pokemon running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

### Libraries Used
# Navigation
I've used react navigation to create stack and move between the screens.
https://reactnavigation.org/
# RTK
Instead of using redux and axios I've used RTK to handle both state management and making api calls.
Could've used redux, axios and redux-persist, but RTK comes with the benifit of all three, so decided to 
go with it.
https://redux-toolkit.js.org/rtk-query/overview
# Native Base
To keep consistency we're using Native base throughout the project.
Typography is handled via the theme
https://nativebase.io/
# Config
To keep privacy react native config is used to hide url
https://www.npmjs.com/package/react-native-config
# Icons
React Native vector icons are used to render icons. We're using Font awesome for the assignment
https://github.com/oblador/react-native-vector-icons
# Testing
Using react native testing library and jest, we are test the list component in the project
https://www.npmjs.com/package/@types/jest
https://callstack.github.io/react-native-testing-library/
# Track Player
Found some interesting tracks in the json response and decide to use it as a feature. For the pokemon 
sound we're using react native track player
https://www.npmjs.com/package/react-native-track-player
# Flashlist
Using Shopify Flatlist to implement infinite scroll and high performant list
https://shopify.github.io/flash-list/docs/usage/
# Lodash
To handle string functions and most importantly debounce the search results

## Misc
Used typescript to build this project
Using Skeletons for good user experience

## Project structure
 scr folder on root level to manage everything inside the project
 assets folder handles the fonts and icons used in the project
 components folder manages all the components used by the screens
 screens folder holds the top level screens of the app. In our case the listing and details screen.
 services folder to handle the RTK queries
 store folder to manage the reducers of the app state





