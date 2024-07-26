import React from 'react';
import {View, StyleSheet} from 'react-native';
import MenuLayout from '../components/MenuLayout';
import CustomInput from '../components/CustomInput';
import {Button} from '@ui-kitten/components';

const GoodsReceiptPage = ({navigation}) => {
  return (
    <MenuLayout
      title={'Goods Receipt'}
      style={{justifyContent: 'space-between'}}>
      <View style={{gap: 5}}>
        <CustomInput
          label={'Tanggal barang masuk:'}
          placeholder={'Tanggal barang masuk...'}
          required
        />
        <CustomInput
          label={'Nomor surat jalan:'}
          placeholder={'Nomor surat jalan...'}
          required
        />
        <CustomInput
          label={'Nama vendor:'}
          placeholder={'Nama vendor...'}
          required
        />
        <CustomInput
          label={'Nama Pengantar:'}
          placeholder={'Nama Pengantar...'}
          required
        />
      </View>
      <Button
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('AddGoodsReceiptPage')}>
        Next
      </Button>
    </MenuLayout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});

export default GoodsReceiptPage;
