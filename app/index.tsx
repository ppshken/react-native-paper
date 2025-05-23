import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [require, setRequire] = useState(false);

  const users = [
    {
      id: 1,
      username: 'admin',
      password: '1234',
      name: 'John Doe',
      email: 'kensaohin@gmail.com',
      phone: '0123456789',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 2,
      username: 'kenzanaqq',
      password: '654312',
      name: 'Pongpat Saohin',
      email: 'kensaohin@gmail.com',
      phone: '0123456789',
      image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
    }
  ]

  // ฟังก์ชั่นเช็ค session ถ้ามี session ให้ redirect ไปที่หน้า home
  useEffect(() => {
    const checkSession = async () => {
      const session = await AsyncStorage.getItem('userSession');
      if (session) {
        router.replace('/(tabs)/home');
        //router.replace('/form/role');
      }
    };
    checkSession();
  }, []);

  // ฟังก์ชั่น Login 
  const handleLogin = async () => {
    setRequire(true);
    if (!username.trim() || !password.trim()) {
      return;
    }
    // ตรวจสอบ username และ password จาก users
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      setLoading(true);
      await AsyncStorage.setItem('userSession', JSON.stringify({ user_id: foundUser.id }));
      setTimeout(() => {
        setLoading(false);
        router.replace('/(tabs)/home');
        setUsername('');
        setPassword('');
      }, 2000);
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <LinearGradient colors={['#0a7ea4', '#67c6e3']} style={styles.gradient}>
      <Modal visible={loading} transparent animationType="fade">
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            animating={true} size="large"
          />
          <Text style={styles.loaderText}>กำลังเข้าสู่ระบบ...</Text>
        </View>
      </Modal>
      <View style={styles.card}>
        <Ionicons name="person-circle-outline" size={72} color="#0a7ea4" style={styles.icon} />
        <Text style={styles.title}>เข้าสู่ระบบ</Text>
        <TextInput
          style={styles.input}
          placeholder="ชื่อผู้ใช้"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholderTextColor="#aaa"
        />
        {require && !username.trim() && (
          <Text style={{ color: 'red', alignSelf: 'flex-start', marginLeft: 4, marginBottom: 15, fontFamily: 'Prompt-Regular' }}>กรุณากรอก Username!</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="รหัสผ่าน"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#aaa"
        />
        {require && !password.trim() && (
          <Text style={{ color: 'red', alignSelf: 'flex-start', marginLeft: 4, marginBottom: 15, fontFamily: 'Prompt-Regular' }}>กรุณากรอก Password!</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.85}>
          <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    maxWidth: 350,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  icon: {
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 28,
    color: '#0a7ea4',
    fontFamily: 'Prompt-Bold',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: '#f7fafd',
    color: '#222',
    fontFamily: 'Prompt-Regular',
  },
  button: {
    width: '100%',
    backgroundColor: '#0a7ea4',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
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
  loaderContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    marginTop: 16,
    color: '#0a7ea4',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Prompt-Bold',
  },
});
