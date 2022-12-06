import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './styles';
export const PaginationButton = ({ onPress = () => { }, children, isActive = false, }) => {
    return (<Pressable style={[styles.button, isActive && styles.buttonActive]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>);
};
