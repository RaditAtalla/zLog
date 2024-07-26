import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderWave from './HeaderWave';
import {useNavigation, useTheme} from '@react-navigation/native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';

const MenuLayout = props => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles)

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={theme['color-primary-500']} />
      <View style={{position: 'relative'}}>
        <HeaderWave isMenu backAction={() => navigation.goBack()} />
      </View>

      <View style={{paddingTop: 80, paddingHorizontal: 15, flex: 1}}>
        <Text style={styles.title}>
          {props.title}
          <Text
            style={styles.number}>
            {props.number}
          </Text>
        </Text>
        <View style={[{flex: 1}, props.style]}>{props.children}</View>
      </View>
    </SafeAreaView>
  );
};
const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    marginBottom: 50,
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    color: 'color-primary-400',
    textAlign: 'center',
  },
  number: {
    color: '#898989',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
  },
});

export default MenuLayout;
