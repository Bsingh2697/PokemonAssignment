import React from 'react';
import { NativeBaseProvider, Box } from "native-base";
import { theme } from './src/assets/fontconfig';
import { Provider } from 'react-redux';
import { store } from './src/store';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
