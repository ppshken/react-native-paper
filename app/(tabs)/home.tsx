import { checkSession } from '@/hooks/auth';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BANNER_IMAGES = [
  require('@/assets/images/partial-react-logo.png'),
  require('@/assets/images/partial-react-logo.png'),
  require('@/assets/images/partial-react-logo.png'),
  require('@/assets/images/partial-react-logo.png'),
  require('@/assets/images/partial-react-logo.png'),
];

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const router = useRouter();
  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerScrollRef = useRef(null);
  const bannerWidth = Dimensions.get('window').width;

  useEffect(() => {
    const fetchUser = async () => {
      const user = await checkSession();
      if (user) {
        setUsername(user.username);
      }
    };
    fetchUser();
  }, []);

  // ฟังก์ชันตรวจสอบ session ถ้าไม่มี session ให้ redirect ไปที่หน้า login
  useEffect(() => {
    const checkUserSession = async () => {
      const user = await checkSession();
      if (!user) {
        router.replace('/'); // กลับไปหน้า Login ถ้าไม่มี session
      }
    };
    checkUserSession();
  }, []);

  const handleSubmit = () => {
  // ตรวจสอบข้อมูลฟอร์ม
  alert(`ข้อความที่กรอก: ${text}`);
  setText(''); // ล้างข้อความหลังจากส่ง
  };

  const onBannerScroll = (e: any) => {
    const idx = Math.round(e.nativeEvent.contentOffset.x / bannerWidth);
    setBannerIndex(idx);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f6f8fc' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.banner}>
          <ScrollView
            ref={bannerScrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onBannerScroll}
            scrollEventThrottle={16}
            style={{ width: bannerWidth }}
          >
            {BANNER_IMAGES.map((img, i) => (
              <View key={i} style={{ width: bannerWidth, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={img} style={styles.bannerImg} resizeMode="contain" />
              </View>
            ))}
          </ScrollView>
          <View style={styles.dotsRow}>
            {BANNER_IMAGES.map((_, i) => (
              <View key={i} style={[styles.dot, i === bannerIndex && styles.dotActive]} />
            ))}
          </View>
        </View>
        {/* Section: Perfect for you */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Perfect for you</Text>
          <TouchableOpacity><Text style={styles.seeMore}>See more</Text></TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.cardImg} />
            <Text style={styles.cardName}>Amazing T-shirt</Text>
            <Text style={styles.cardPrice}>€ 12.00</Text>
          </View>
          <View style={styles.card}>
            <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.cardImg} />
            <Text style={styles.cardName}>Fabulous Pants</Text>
            <Text style={styles.cardPrice}>€ 15.00</Text>
          </View>
        </View>
        {/* Section: For this summer */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>For this summer</Text>
          <TouchableOpacity><Text style={styles.seeMore}>See more</Text></TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.cardImg} />
          </View>
          <View style={styles.card}>
            <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.cardImg} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0a7ea4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 54,
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    backgroundColor: '#0a7ea4',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  banner: {
    backgroundColor: '#eaf2fb',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  bannerImg: {
    width: 90,
    height: 60,
    marginBottom: 12,
    alignSelf: 'center',
    opacity: 0.5,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#dbe7f3',
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: '#0a7ea4',
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 8,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  seeMore: {
    color: '#0a7ea4',
    fontWeight: 'bold',
    fontSize: 13,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#eaf2fb',
    borderRadius: 16,
    width: '48%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  cardImg: {
    width: 48,
    height: 36,
    marginBottom: 10,
    opacity: 0.5,
  },
  cardName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
    marginBottom: 2,
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0a7ea4',
  },
});
