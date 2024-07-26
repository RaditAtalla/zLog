import {Button, Layout} from '@ui-kitten/components';
import RootLayout from '../components/RootLayout';
import CustomInput from '../components/CustomInput';
import Dropdown from '../components/Dropdown';
import {StyleSheet} from 'react-native';
const Loginpage = ({navigation}) => {
  return (
    <RootLayout>
      <Layout style={{gap: 5}}>
        <CustomInput label={'Nama:'} placeholder={'Nama...'} />
        <CustomInput
          label={'Nomor HP:'}
          placeholder={'Nomor HP...'}
          keyboardType={'numeric'}
        />
        <CustomInput label={'E-Mail:'} placeholder={'E-Mail...'} />
        <CustomInput label={'Nama Proyek:'} placeholder={'Nama Proyek...'} />
        <CustomInput label={'Kode Proyek:'} placeholder={'Kode Proyek...'} />
        <Dropdown label={'Jabatan:'} placeholder={'Jabatan...'} />
      </Layout>

      <Button
        onPress={() => navigation.navigate('Homepage')}
        style={styles.button}>
        Next
      </Button>
    </RootLayout>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 15,
  },
});

export default Loginpage;
