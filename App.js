import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import {store} from "./src/store";

export default function App() {
  return (
   <Provider store={store}>
    <Navigation/>
   </Provider>
  );
}



