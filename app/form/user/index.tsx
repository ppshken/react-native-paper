import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function ProfileFormScreen() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@email.com');
  const [gender, setGender] = useState('');
  const [value, setValue] = useState(null);

  // mockup data
  const data = [
    { label: 'ชาย', value: 'male' },
    { label: 'หญิง', value: 'female' },
    { label: 'กระเทย', value: 'katoey' },
    { label: 'ไม่ระบุ', value: 'none' },
  ];

  const handleSave = () => {
    // ตัวอย่าง: บันทึกข้อมูล
    alert('บันทึกข้อมูลสำเร็จ!');
  };

  const renderItem = (item: { label: string; value: string }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value}
      </View>
    );
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
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="เลือกเพศ"
            searchPlaceholder="ค้นหา..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
            renderItem={renderItem}
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
  dropdown: {
    height: 50,
    backgroundColor: '#f7fafd',
    borderRadius: 12,
    padding: 12,
    borderColor: '#e0e0e0',
    borderWidth: 2,
    elevation: 2,
    fontFamily: 'Prompt-Regular',
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Prompt-Regular',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Prompt-Regular',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 5,
    fontFamily: 'Prompt-Regular',
  },
});
