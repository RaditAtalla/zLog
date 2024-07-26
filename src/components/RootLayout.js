import {Image, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderWave from './HeaderWave';
import {StyleService, useTheme} from '@ui-kitten/components';

const RootLayout = props => {
  const theme = useTheme();
  return (
    <SafeAreaView style={[props.style, styles.container]}>
      <StatusBar backgroundColor={theme['color-primary-500']} />
      <HeaderWave />
      <Image source={require('../assets/img/logo.png')} style={styles.logo} />
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleService.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {
    marginBottom: 30,
    marginTop: 80,
    resizeMode: 'contain',
    height: 100,
    alignSelf: 'center',
  },
});

export default RootLayout;
