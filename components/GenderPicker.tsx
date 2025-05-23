import { Ionicons } from '@expo/vector-icons';
import { Modal, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

export type GenderOption = {
  label: string;
  value: string;
  icon?: string; // เพิ่ม icon prop
};

interface GenderPickerProps {
  value: string;
  onChange: (value: string) => void;
  options?: GenderOption[];
}

const defaultOptions: GenderOption[] = [
  { label: 'เลือกเพศ', value: '' },
  { label: 'ชาย', value: 'male', icon: 'male' },
  { label: 'หญิง', value: 'female', icon: 'female' },
  { label: 'อื่น ๆ', value: 'other' },
];

export default function GenderPicker({ value, onChange, options = defaultOptions }: GenderPickerProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const selected = options.find(opt => opt.value === value);

  return (
    <View style={styles.pickerWrapper}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: 48 }} onPress={() => setModalVisible(true)}>
        {selected?.icon && <Ionicons name={selected.icon as any} size={22} color="#0a7ea4" style={{ marginRight: 8 }} />}
        <Text style={{ fontFamily: 'Prompt-Bold', fontSize: 16, color: value ? '#222' : '#aaa' }}>{selected?.label || 'เลือกเพศ'}</Text>
        <Ionicons name="chevron-down" size={20} color="#0a7ea4" style={{ marginLeft: 'auto' }} />
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.15)' }} activeOpacity={1} onPress={() => setModalVisible(false)}>
          <View style={{ backgroundColor: '#fff', margin: 32, borderRadius: 16, paddingVertical: 8, paddingHorizontal: 0, elevation: 8, top: '30%' }}>
            {options.map(opt => (
              <TouchableOpacity key={opt.value} style={{ flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 0.5, borderBottomColor: '#eee' }} onPress={() => { onChange(opt.value); setModalVisible(false); }}>
                {opt.icon && <Ionicons name={opt.icon as any} size={22} color="#0a7ea4" style={{ marginRight: 12 }} />}
                <Text style={{ fontFamily: 'Prompt-Bold', fontSize: 16, color: opt.value === '' ? '#aaa' : '#222' }}>{opt.label}</Text>
                {value === opt.value && <Ionicons name="checkmark" size={18} color="#0a7ea4" style={{ marginLeft: 'auto' }} />}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerWrapper: {
    borderWidth: 1,
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
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    color: '#222',
  },
});
