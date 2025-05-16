import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

// รับ props ทั้งหมดของ TextInput
const Input = (props: TextInputProps) => {
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
          borderRadius: 5,
          fontFamily: 'Prompt-Regular',
        }}
        {...props} // กระจาย prop ทั้งหมดที่รับมาไปยัง TextInput
      />
    </View>
  );
};

export default Input;