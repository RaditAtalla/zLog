import {useTheme} from '@ui-kitten/components';
import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

const Menu = ({ title, icon = '', style, isFull, onPress, size }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{
        borderWidth: 1,
        borderColor: theme['color-primary-500'],
        borderRadius: 5,
        minWidth: 160,
        maxWidth: '100%',
        minHeight: size == 'small' ? 40 : 76,
        maxHeight: size == 'small' ? 40 : 76,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(207, 247, 250, 0.1)',
      }, style]}>
      <Image
        source={icon}
        style={{height: 24, resizeMode: 'contain', marginRight: 10}}
      />
      <Text
        style={{fontFamily: 'Inter-Medium', color: theme['color-primary-500']}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Menu;
