import React from 'react';
import {View, StyleSheet} from 'react-native';
import MenuLayout from '../components/MenuLayout';
import CustomInput from '../components/CustomInput';
import {Button} from '@ui-kitten/components';

const AddGoodsReceiptPage = ({navigation}) => {
  return (
    <MenuLayout
      title={'Goods Receipt'}
      number={'#1'}
      style={{justifyContent: 'space-between'}}>
      <View style={styles.inputContainer}>
        <CustomInput
          label={'Item material:'}
          placeholder={'Item material...'}
          required
        />
        <CustomInput
          label={'Spesifikasi:'}
          placeholder={'Spesifikasi...'}
          required
        />
        <CustomInput label={'Volume:'} placeholder={'Volume...'} required />
        <CustomInput label={'Satuan:'} placeholder={'Satuan...'} required />
      </View>
      <View style={styles.buttonContainer}>
        <Button appearance="outline" onPress={() => navigation.goBack('')}>
          Finish
        </Button>
        <Button>Next</Button>
      </View>
    </MenuLayout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    gap: 10,
  },
  inputContainer: {
    gap: 5,
  },
});

export default AddGoodsReceiptPage;
