import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './styles';
import { PaginationButtonProps } from './props';

export const PaginationButton = ({
  onPress = () => {},
  children,
  isActive = false,
  btnStyle,
  textStyle,
  activeBtnStyle,
  activeTextStyle,
}: PaginationButtonProps) => {
  return (
    <Pressable
      style={[
        styles.button,
        btnStyle,
        isActive ? (activeBtnStyle ? activeBtnStyle : styles.buttonActive) : {},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          textStyle,
          isActive
            ? activeTextStyle
              ? activeTextStyle
              : styles.activeText
            : {},
        ]}>
        {children}
      </Text>
    </Pressable>
  );
};
