import React from 'react';
import {View} from 'react-native';
import MenuLayout from '../components/MenuLayout';
import CustomInput from '../components/CustomInput';
import {Button} from '@ui-kitten/components';

const AddGoodsReceiptPage = ({ navigation }) => {
  return (
    <MenuLayout
      title={'Goods Receipt'}
      number={'#1'}
      style={{justifyContent: 'space-between'}}>
      <View style={{ gap: 5 }}>
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginBottom: 10,
        }}>
        <Button
          appearance="outline"
          style={{marginRight: 10}}
          onPress={() => navigation.goBack('')}>
          Finish
        </Button>
        <Button>Next</Button>
      </View>
    </MenuLayout>
  );
};

export default AddGoodsReceiptPage;
