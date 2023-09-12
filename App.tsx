import * as React from 'react';

import Navigation from './src/navigation';
import {StatusBar, View} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Navigation />
    </>
  );
}
