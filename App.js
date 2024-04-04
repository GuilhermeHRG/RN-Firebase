import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import app from './src/data/firebaseConfig';

export default function App() {
  return (
    <View style={styles.container}>
      <Header>
      <Text>...</Text>
      </Header>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
