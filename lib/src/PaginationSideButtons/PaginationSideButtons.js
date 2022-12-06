import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { PaginationButton } from '../PaginationButton';
export const PaginationSideButtons = ({ totalPages, currentPage, children, showLastPagesButtons = false, handleChangePage, }) => {
    return (<View style={styles.container}>
      {showLastPagesButtons && (<PaginationButton onPress={() => handleChangePage('1')}>
          {'<<'}
        </PaginationButton>)}
      <PaginationButton onPress={() => currentPage > 1 && handleChangePage(`${currentPage - 1}`)}>
        {'<'}
      </PaginationButton>
      {children}
      <PaginationButton onPress={() => currentPage < totalPages && handleChangePage(`${currentPage + 1}`)}>
        {'>'}
      </PaginationButton>
      {showLastPagesButtons && (<PaginationButton onPress={() => handleChangePage(`${totalPages}`)}>
          {'>>'}
        </PaginationButton>)}
    </View>);
};
