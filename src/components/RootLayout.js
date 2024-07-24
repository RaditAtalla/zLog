import {Image, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWave from './HeaderWave';

const RootLayout = (props) => {
  return (
    <SafeAreaView style={[props.style,{ paddingHorizontal: 15, backgroundColor: 'white', flex: 1 }]}>
      <StatusBar backgroundColor='#1960A7' />
      <HeaderWave /> 
      <Image
        source={require('../assets/img/logo.png')}
        style={{marginBottom: 30, marginTop: 80, resizeMode: 'contain', height: 100, alignSelf: 'center' }}
      />
      {props.children}
    </SafeAreaView>
  );
};

export default RootLayout;
