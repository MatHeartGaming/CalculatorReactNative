/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { styles } from './config/theme/app-theme';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={/*isDarkMode ? */'light-content' /*: 'dark-content'*/}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <CalculatorScreen />
    </View>
  );
}

export default App;
