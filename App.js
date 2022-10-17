import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/Logo_zemus.png')}
        style={styles.logo} 
      />
      <Text style={styles.title}>Connexion</Text>
      <Form />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 287,
    height: 216
  },
  title: {
    color: "#3f60a8",
    fontSize: 32,
    marginVertical:40
  }
});
