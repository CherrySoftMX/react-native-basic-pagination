import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { PaginationButton } from '../PaginationButton';
import { PaginationSideButtonsProps } from './props';

export const PaginationSideButtons = ({
  totalPages,
  currentPage,
  children,
  showLastPagesButtons = false,
  handleChangePage,
  containerStyle,
  textStyle,
  btnStyle,
}: PaginationSideButtonsProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {showLastPagesButtons && (
        <PaginationButton
          textStyle={textStyle}
          btnStyle={btnStyle}
          onPress={() => handleChangePage('1')}>
          {'<<'}
        </PaginationButton>
      )}
      <PaginationButton
        textStyle={textStyle}
        btnStyle={btnStyle}
        onPress={() =>
          currentPage > 1 && handleChangePage(`${currentPage - 1}`)
        }>
        {'<'}
      </PaginationButton>
      {children}
      <PaginationButton
        textStyle={textStyle}
        btnStyle={btnStyle}
        onPress={() =>
          currentPage < totalPages && handleChangePage(`${currentPage + 1}`)
        }>
        {'>'}
      </PaginationButton>
      {showLastPagesButtons && (
        <PaginationButton
          textStyle={textStyle}
          btnStyle={btnStyle}
          onPress={() => handleChangePage(`${totalPages}`)}>
          {'>>'}
        </PaginationButton>
      )}
    </View>
  );
};
