import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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

  // ดึงข้อมูลผู้ใช้จาก session
  useEffect(() => {
    const fetchUser = async () => {
      const session = await AsyncStorage.getItem('userSession');
      if (session) {
        const { user_id } = JSON.parse(session);
        const foundUser = users.find(u => u.id === user_id);
        if (foundUser) {
          setUsername(foundUser.username);
          setPassword(foundUser.password); // ตัวอย่าง: เปลี่ยนเป็น email หรือข้อมูลอื่นที่ต้องการแสดง
          setEmail(foundUser.email);
          setPhone(foundUser.phone);
          setName(foundUser.name);
          setImage(foundUser.image); 
        }
      }
    };
    fetchUser();
  }, []);

  // ออกจากระบบ
  const handleLogout = async () => {
    setLoading(true);
    await AsyncStorage.removeItem('userSession');
    setTimeout(() => {
      setLoading(false);
      router.replace('/');
    }, 2000);

  };

  return (
    <View style={styles.container}>
      <Modal visible={loading} transparent animationType="fade">
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0a7ea4" />
          <Text style={styles.loaderText}>กำลังออกจากระบบ</Text>
        </View>
      </Modal>
      <View style={styles.header}>
        <Image
          source={{ uri: image }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{username}</Text>
        <Text style={styles.email}>{password}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.email}>{phone}</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.row} activeOpacity={0.8} onPress={() => router.push('/profile-form')}>
          <Ionicons name="person-outline" size={24} color="#0a7ea4" style={styles.icon} />
          <Text style={styles.rowText}>ข้อมูลส่วนตัว</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} activeOpacity={0.8}>
          <Ionicons name="settings-outline" size={24} color="#0a7ea4" style={styles.icon} />
          <Text style={styles.rowText}>ตั้งค่า</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} activeOpacity={0.8}>
          <Ionicons name="help-circle-outline" size={24} color="#0a7ea4" style={styles.icon} />
          <Text style={styles.rowText}>ช่วยเหลือ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.row, styles.logout]} activeOpacity={0.8} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#e74c3c" style={styles.icon} />
          <Text style={[styles.rowText, { color: '#e74c3c' }]}>ออกจากระบบ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafd',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#0a7ea4',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#e0f7fa',
  },
  section: {
    marginTop: 8,
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 2,
  },
  icon: {
    marginRight: 16,
  },
  rowText: {
    fontSize: 18,
    color: '#222',
    fontWeight: '500',
  },
  logout: {
    backgroundColor: '#fff0f0',
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
  },
});
