import React from 'react';
import { View, Text, Pressable, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginHome = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('LoginPage');
  };

  const handleCadastro = () => {
    navigation.navigate('CadastroPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="red" barStyle="dark" />
      <View style={styles.content}>
        <Text style={styles.text}>Bem-vindo!!</Text>
        
        <View style={styles.containerButton}>
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <View style={styles.buttonSpacer} />
          <Pressable style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastro</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  content: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 80,
  },
  containerButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4C5958',
    width: 280,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonSpacer: {
    height: 10,
  },
});

export default LoginHome;
