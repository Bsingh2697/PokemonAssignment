/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NativeBaseProvider, Box } from "native-base";
import { theme } from './src/assets/fontconfig';

function App(): React.JSX.Element {

  return (
    <NativeBaseProvider theme={theme}>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}

export default App;
