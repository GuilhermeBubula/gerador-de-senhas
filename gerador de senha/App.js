import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [password, setPassword] = useState('');

  const generatePassword = (level) => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    let passwordLength = 0;

    switch (level) {
      case 'low':
        characters = lowerCase;
        passwordLength = 6; // 6 caracteres para nível baixo
        break;
      case 'medium':
        characters = lowerCase + upperCase + numbers;
        passwordLength = 8; // 8 caracteres para nível médio
        break;
      case 'high':
        characters = lowerCase + upperCase + numbers + specialChars;
        passwordLength = 12; // 12 caracteres para nível alto
        break;
      default:
        return;
    }

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.password}>Senha Gerada: {password}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Gerar Senha Baixa" onPress={() => generatePassword('low')} />
        <Button title="Gerar Senha Média" onPress={() => generatePassword('medium')} />
        <Button title="Gerar Senha Alta" onPress={() => generatePassword('high')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  password: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default App;