import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ProfileFormScreen() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@email.com');

  const handleSave = () => {
    // ตัวอย่าง: บันทึกข้อมูล
    alert('บันทึกข้อมูลสำเร็จ!');
  };

  return (
    <>
      <Stack.Screen options={{ title: 'แก้ไขข้อมูลส่วนตัว', headerShown: true }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="person-circle-outline" size={72} color="#0a7ea4" style={{ marginBottom: 8 }} />
          <Text style={styles.title}>แก้ไขข้อมูลส่วนตัว</Text>
        </View>
        <View style={styles.formCard}>
          <Text style={styles.label}>ชื่อ-นามสกุล</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="ชื่อ-นามสกุล"
            placeholderTextColor="#aaa"
          />
          <Text style={styles.label}>อีเมล</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="อีเมล"
            keyboardType="email-address"
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.button} onPress={handleSave} activeOpacity={0.85}>
            <Text style={styles.buttonText}>บันทึก</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafd',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a7ea4',
    marginBottom: 4,
  },
  formCard: {
    width: '90%',
    maxWidth: 350,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 6,
  },
  label: {
    fontSize: 16,
    color: '#0a7ea4',
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: '#f7fafd',
    color: '#222',
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 18,
    shadowColor: '#0a7ea4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
