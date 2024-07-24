import {
  Button,
  Layout,
  Select,
  SelectItem,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { StatusBar } from 'react-native'
import globalStyles from '../style/styles';
import RootLayout from '../components/RootLayout';
import CustomInput from '../components/CustomInput';
import Dropdown from '../components/Dropdown';
const Loginpage = ({navigation}) => {
  const styles = useStyleSheet(globalStyles);

  return (
    <RootLayout>
      <Layout>
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
        style={{position: 'absolute', bottom: 20, width: '100%', left: 15}}>
        Next
      </Button>
    </RootLayout>
  );
};

const data = [
  {
    value: 1,
    label: 'PM',
  },
  {
    value: 2,
    label: 'PM',
  },
  {
    value: 3,
    label: 'PM',
  },
  {
    value: 4,
    label: 'PM',
  },
  {
    value: 5,
    label: 'PM',
  },
  {
    value: 6,
    label: 'PM',
  },
];

export default Loginpage;
