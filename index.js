
import 'react-native-gesture-handler';
import {enableLatestRenderer} from 'react-native-maps';
import {AppRegistry} from 'react-native';
import App from './src/component/rate_pass';
import {name as appName} from './app.json';
enableLatestRenderer();
AppRegistry.registerComponent(appName, () => App);

