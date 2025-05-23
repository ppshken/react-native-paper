import GenderPicker from '@/components/GenderPicker';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ProfileFormScreen() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@email.com');
  const [selectedValue, setSelectedValue] = useState('option1');
  const [gender, setGender] = useState('');

  // mockup data
  const genderOptions = [
    { label: 'เลือกเพศ', value: '', icon: 'help-circle-outline' },
    { label: 'ชาย', value: 'male', icon: 'male' },
    { label: 'หญิง', value: 'female', icon: 'female' },
    { label: 'กระเทย', value: 'katoey', icon: 'transgender-outline' },
    { label: 'ไม่ระบุ', value: 'none', icon: 'remove-circle-outline' },
  ];

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
          <Text style={styles.label}>เพศ</Text>
          <GenderPicker value={gender} onChange={setGender} options={genderOptions} />
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
    width: '95%',
    maxWidth: 380,
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 32,
    shadowColor: '#0a7ea4',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.13,
    shadowRadius: 16,
    elevation: 8,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: '#0a7ea4',
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 14,
    letterSpacing: 0.2,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#e0e0e0',
    borderWidth: 1.5,
    borderRadius: 12,
    marginBottom: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#f7fafd',
    color: '#222',
    fontFamily: 'Prompt-Regular',
    shadowColor: '#0a7ea4',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
  },
  pickerWrapper: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    backgroundColor: '#f7fafd',
    marginBottom: 18,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    paddingHorizontal: 10,
    height: 48,
    borderWidth: 0,
    fontFamily: 'Prompt-Regular',
    
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 16,
    borderRadius: 12,
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
    fontFamily: 'Prompt-Bold',
  },
});
