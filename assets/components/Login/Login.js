import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const handleLogin = async () => {
    if (email.includes('@ifpr') && password!='') {
      // Simulação de login bem-sucedido
      console.log('Usuário logado com sucesso:', email);

      // Exibir o toasty de confirmação
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: `${email} logado`,
      });

      // Navegar para o ChatScreen
      navigation.navigate('ChatScreen');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'campo e-mail deve conter "@ifpr" e senha não ser vazia',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4C5958',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 280,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginPage;
