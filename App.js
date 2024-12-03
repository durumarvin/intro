import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onscreen from './screens/OnboardingScreen';
import NumberValidation from './screens/NumberValidation';

export default function App() {
  return (
    <View>
      {/* <Duolingo/> */}
      {/* <Onscreen/> */}
      <NumberValidation/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
