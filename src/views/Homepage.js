import {
  Layout,
  Text,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import globalStyles from '../style/styles';
import RootLayout from '../components/RootLayout';
import Menu from '../components/Menu';

const Homepage = ({navigation}) => {
  const styles = useStyleSheet(globalStyles);
  const theme = useTheme();

  return (
    <RootLayout title={'more'}>
      <Text style={styles.title}>
        <Text
          style={{
            fontFamily: 'Inter-Medium',
            color: theme['color-primary-300'],
          }}>
          Welcome,{'\n'}
        </Text>
        Rachmad
      </Text>
      <Layout style={{ gap: 10 }}>
        <Layout style={{flexDirection: 'row', gap: 10,}}>
          <Menu
            title={'SPP'}
            icon={require('../assets/img/archive.png')}
            onPress={() => navigation.navigate('SPPpage')}
          />
          <Menu
            title={'Approval'}
            icon={require('../assets/img/archive.png')}
            onPress={() => navigation.navigate('ApprovalPage')}
          />
        </Layout>
        <Layout style={{flexDirection: 'row', gap: 10}}>
          <Menu
            title={'Goods Receipt'}
            icon={require('../assets/img/archive.png')}
            onPress={() => navigation.navigate('GoodsReceiptPage')}
          />
          <Menu
            title={'Goods Issue'}
            icon={require('../assets/img/archive.png')}
            onPress={() => navigation.navigate('GoodsIssuePage')}
          />
        </Layout>
        <Menu
          title={'More'}
          icon={require('../assets/img/archive.png')}
          isFull
          onPress={() => navigation.navigate('Morepage')}
        />
      </Layout>
    </RootLayout>
  );
};

export default Homepage;
