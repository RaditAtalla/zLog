import React from 'react';
import {View, StyleSheet} from 'react-native';
import MenuLayout from '../components/MenuLayout';
import CustomInput from '../components/CustomInput';
import {Button} from '@ui-kitten/components';

const BPPBPage = ({navigation}) => {
  return (
    <MenuLayout
      title="BPPB"
      number="#1"
      style={{justifyContent: 'space-between'}}>
      <View>
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
        <CustomInput
          label={'Lokasi pekerja:'}
          placeholder={'Lokasi pekerjaan...'}
          required
        />
        <CustomInput
          label={'Nama pekerja:'}
          placeholder={'Nama pekerja...'}
          required
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          appearance="outline"
          onPress={() => navigation.navigate('PreviewBPPBPage')}>
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
});

export default BPPBPage;
