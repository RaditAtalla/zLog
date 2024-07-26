import {
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import RootLayout from '../components/RootLayout';
import Menu from '../components/Menu';

const Homepage = ({navigation}) => {
  const styles = useStyleSheet(themedStyles)

  return (
    <RootLayout title={'more'}>
      <Text style={styles.title}>
        <Text style={styles.subTitle}>Welcome,{'\n'}</Text>
        Rachmad
      </Text>
      <Layout style={{gap: 10}}>
        <Layout style={styles.rowContainer}>
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
        <Layout style={styles.rowContainer}>
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

const themedStyles = StyleService.create({
  title: {
    marginBottom: 50,
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    color: 'color-primary-500',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Inter-Medium',
    color: 'color-primary-300',
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Homepage;
