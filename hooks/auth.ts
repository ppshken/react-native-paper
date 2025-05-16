import AsyncStorage from '@react-native-async-storage/async-storage';

// ฟังก์ชันตรวจสอบ session
export async function checkSession() {
  const session = await AsyncStorage.getItem('userSession');
  if (session) {
    const user = JSON.parse(session);
    return user;
  }
  return null;
}
