import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// รับ props onPress และ children หรือ title
const Button = ({ onPress, children, title }: { onPress?: () => void; children?: React.ReactNode; title?: string }) => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#0a7ea4',
                    padding: 10,
                    borderRadius: 5,
                    alignItems: 'center',
                }}
                onPress={onPress}
            >
                <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Prompt-Bold' }}>{children || title || 'Click Me'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;