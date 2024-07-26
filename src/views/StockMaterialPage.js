import React from 'react';
import {View, StyleSheet} from 'react-native';
import MenuLayout from '../components/MenuLayout';
import {Button} from '@ui-kitten/components';

const StockMaterialPage = () => {
  return (
    <MenuLayout
      title="Stock Material"
      style={{justifyContent: 'space-between'}}>
      <View style={styles.pdfPreview}></View>
      <Button style={styles.button}>Next</Button>
    </MenuLayout>
  );
};

const styles = StyleSheet.create({
  pdfPreview: {
    borderWidth: 1,
    borderColor: 'black',
    height: 300,
    width: '100%',
  },
  button: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});

export default StockMaterialPage;
