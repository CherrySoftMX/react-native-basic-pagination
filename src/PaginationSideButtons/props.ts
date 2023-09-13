import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface PaginationSideButtonsProps {
  totalPages: number;
  currentPage: number;
  showLastPagesButtons?: boolean;
  handleChangePage: (page: string) => void;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  btnStyle?: StyleProp<ViewStyle>;
}
