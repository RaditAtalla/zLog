import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderWave from './HeaderWave';
import {useNavigation} from '@react-navigation/native';
import {useStyleSheet} from '@ui-kitten/components';
import globalStyles from '../style/styles';

const MenuLayout = props => {
  const navigation = useNavigation();
  const styles = useStyleSheet(globalStyles);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor='#1960A7' />
      <View style={{position: 'relative'}}>
        <HeaderWave isMenu backAction={() => navigation.goBack()} />
      </View>

      <View style={{ paddingTop: 80, paddingHorizontal: 15, flex: 1 }}>
        <Text style={[styles.pageTitle, {marginBottom: 50}]}>
          {props.title}
          <Text
            style={{color: '#898989', fontSize: 20, fontFamily: 'Inter-Bold'}}>
            {props.number}
          </Text>
        </Text>
        <View style={[{flex: 1}, props.style]}>
          {props.children}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuLayout;
