import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ActivityIndicator, Button } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'expo-router'
import { createRole } from '@/api/role'; // เพิ่มบรรทัดนี้

const index = () => {
  const [role, setRole] = useState('')
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // เพิ่ม state error

  const handlesaverole = async () => {
    if (!role.trim()) {
      alert('กรุณากรอกข้อมูล');
    } else {
      setLoading(true);
      setError('');
      try {
        await createRole(role);
        setTimeout(() => {
          setLoading(false);
          router.back();
        }, 3000); // เปลี่ยนเป็น 3 วินาที
      } catch (e) {
        setLoading(false);
        setError('เกิดข้อผิดพลาดในการบันทึก');
      }
    }
  }

  return (
    <View style={styles.container}>
      <Modal visible={loading} transparent animationType="fade">
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            animating={true} size="large"
          />
        </View>
      </Modal>
      <Text style={styles.title}>ระดับผู้ใช้งาน</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your role"
        placeholderTextColor="#aaa"
        onChangeText={setRole}
        value={role}
      />
      {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handlesaverole}>
        <Text style={styles.buttonText}>
          บันทึก
        </Text>
      </TouchableOpacity>
      <Button
        title="Clear"
        onPress={() => router.push('/form/user')}
      >
      </Button>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    fontFamily: 'Prompt-Regular',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    height: 50,
  },
  button: {
    backgroundColor: '#0a7ea4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
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
  buttonText: {
    fontFamily: 'Prompt-Regular',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    fontFamily: 'Prompt-Regular',
    fontSize: 15,
    fontWeight: 'bold',
  }
})