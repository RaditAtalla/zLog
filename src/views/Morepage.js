import {View} from 'react-native';
import {Text, StyleService, useStyleSheet} from '@ui-kitten/components';
import RootLayout from '../components/RootLayout';
import Menu from '../components/Menu';

const Morepage = ({navigation}) => {
  const styles = useStyleSheet(themedStyles)

  return (
    <RootLayout>
      <Text style={styles.title}>More</Text>
      <View style={styles.container}>
        <Menu
          title={'Stock Material'}
          onPress={() => navigation.navigate('StockMaterialPage')}
          icon={require('../assets/img/archive.png')}
          isFull
        />
        <Menu
          title={'List SPP'}
          onPress={() => navigation.navigate('ListSPPPage')}
          icon={require('../assets/img/archive.png')}
          isFull
        />
        <Menu
          title={'List Goods Receipts'}
          onPress={() => navigation.navigate('ListGoodsReceipt')}
          icon={require('../assets/img/archive.png')}
          isFull
        />
        <Menu
          title={'List Goods Issue'}
          onPress={() => navigation.navigate('ListGoodsIssuePage')}
          icon={require('../assets/img/archive.png')}
          isFull
        />
      </View>
    </RootLayout>
  );
};

const themedStyles = StyleService.create({
  title: {
    marginBottom: 50,
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    color: 'color-primary-500',
    textAlign: 'center',
  },
  container: {
    gap: 10,
  },
});

export default Morepage;
