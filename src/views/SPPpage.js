import {View} from 'react-native';
import MenuLayout from '../components/MenuLayout';
import CustomInput from '../components/CustomInput';
import FileInput from '../components/FileInput';
import {Button} from '@ui-kitten/components';

const SPPpage = ({navigation}) => {
  return (
    <MenuLayout title={'SPP'} number={'#1'}>
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
      <FileInput
        label={'Contoh gambar (opsional):'}
        placeholder={'Input gambar'}
      />
      <CustomInput
        label={'Lokasi proyek:'}
        placeholder={'Lokasi pekerjaan...'}
        required
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 20,
        }}>
        <Button
          appearance="outline"
          style={{marginRight: 10}}
          onPress={() => navigation.navigate('PreviewSPPPage')}>
          Finish
        </Button>
        <Button>Next</Button>
      </View>
    </MenuLayout>
  );
};

export default SPPpage;
