import { Icon } from '@ui-kitten/components';
import React from 'react';
import {View, Dimensions, Image} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const HeaderWave = ({ isMenu, backAction }) => {
  return (
    <View style={{ width: Dimensions.get('window').width, position: 'absolute' }} >
      {isMenu ? 
      <>
      <View style={{ position: 'absolute', zIndex: 3, top: 20, right: 10 }}>
        <Image source={require('../assets/img/logo-white.png')} style={{ resizeMode: 'contain', width: 20, height: 20 }} />
      </View>
      <View style={{ position: 'absolute', zIndex: 3, top: 20, left: 10 }}>
        <Icon name={'arrow-back-outline'} fill='white' onPress={backAction} style={{ width: 20, height: 20 }} />
      </View>
      </>
      :
      null
      }
      <Svg
        width="360"
        height="87"
        viewBox="0 0 360 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M0 -0.200012H360V61.6667L255.36 86.2L130.08 43.5333L0 86.2V-0.200012Z"
          fill="#4990CA"
        />
        <Path
          d="M0 -0.200012H360V42.4192L255.36 59.32L130.08 29.9274L0 59.32V-0.200012Z"
          fill="#1960A7"
        />
      </Svg>
    </View>
  );
};

export default HeaderWave;
