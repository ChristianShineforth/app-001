import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native';
import App from './App'; // Make sure this path points to your main app component
import { name as appName } from './app.json';

// Register the main application component
AppRegistry.registerComponent(appName, () => App);

// Get the application element to render
const appEntry = AppRegistry.getApplication(appName);

// Render the application to the root element
ReactDOM.render(appEntry, document.getElementById('root'));
