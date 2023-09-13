import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface PaginationButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  isActive?: boolean;
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeBtnStyle?: StyleProp<ViewStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
}
