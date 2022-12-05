import React from 'react';
import { SafeAreaView } from 'react-native';
import Pagination from './src/Pagination/Pagination';

const App = () => {
  return (
    <SafeAreaView>
      <Pagination
        totalItems={100}
        pageSize={5}
        onPageChange={page => console.log(page)}
      />
    </SafeAreaView>
  );
};

export default App;
