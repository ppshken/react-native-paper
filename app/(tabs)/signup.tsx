import Checkbox from 'expo-checkbox';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#fff' }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Create an account to get started</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={[styles.input, name && styles.inputActive]}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="name@email.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.checkboxRow}>
          <Checkbox value={agree} onValueChange={setAgree} color={agree ? '#0a7ea4' : undefined} />
          <Text style={styles.checkboxText}>
            I've read and agree with the{' '}
            <Text style={styles.link} onPress={() => {}}>Terms and Conditions</Text>
            {' '}and the{' '}
            <Text style={styles.link} onPress={() => {}}>Privacy Policy</Text>.
          </Text>
        </View>
        <TouchableOpacity style={[styles.signupBtn, !agree && { opacity: 0.5 }]} disabled={!agree} onPress={() => {router.push('/')}}>
          <Text style={styles.signupBtnText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#111',
  },
  subtitle: {
    color: '#888',
    marginBottom: 24,
    fontSize: 15,
  },
  label: {
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
    marginTop: 12,
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 48,
    fontSize: 16,
    backgroundColor: '#f7fafd',
    color: '#222',
    marginBottom: 10,
  },
  inputActive: {
    borderColor: '#0a7ea4',
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  eyeBtn: {
    padding: 8,
    marginLeft: 2,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },
  checkboxText: {
    marginLeft: 8,
    color: '#222',
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 14,
  },
  link: {
    color: '#0a7ea4',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  signupBtn: {
    backgroundColor: '#0a7ea4',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 8,
  },
  signupBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
