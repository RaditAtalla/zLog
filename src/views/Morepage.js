import {
  Button,
  Layout,
  Text,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import {Image} from 'react-native';
import globalStyles from '../style/styles';
import RootLayout from '../components/RootLayout';
import Menu from '../components/Menu';

const Morepage = ({ navigation }) => {
  const styles = useStyleSheet(globalStyles);
  const theme = useTheme();

  return (
    <RootLayout>
      <Text style={styles.title}>More</Text>
      <Menu title={'Stock Material'} onPress={() => navigation.navigate('StockMaterialPage')} icon={require('../assets/img/archive.png')} isFull style={{ marginBottom: 10 }} />
      <Menu title={'List SPP'} onPress={() => navigation.navigate('ListSPPPage')} icon={require('../assets/img/archive.png')} isFull style={{ marginBottom: 10 }} />
      <Menu title={'List Goods Receipts'} onPress={() => navigation.navigate('ListGoodsReceipt')} icon={require('../assets/img/archive.png')} isFull style={{ marginBottom: 10 }} />
      <Menu title={'List Goods Issue'} onPress={() => navigation.navigate('ListGoodsIssuePage')} icon={require('../assets/img/archive.png')} isFull style={{ marginBottom: 10 }} />
    </RootLayout>
  );
};

export default Morepage;
