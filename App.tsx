import React from 'react';
import { NativeBaseProvider } from "native-base";
import { theme } from './src/assets/fontconfig';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { Router } from './src/navigation/Router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {

  return (
  <SafeAreaProvider>
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Router/>
      </NativeBaseProvider>
    </Provider>
    </SafeAreaProvider>
  );
}

export default App;
