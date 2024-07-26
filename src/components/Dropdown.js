import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dropdown as DropdownList} from 'react-native-element-dropdown';

const Dropdown = ({label, placeholder}) => {
  const data = [
    {
      value: 1,
      label: 'PM',
    },
    {
      value: 2,
      label: 'PM',
    },
    {
      value: 3,
      label: 'PM',
    },
    {
      value: 4,
      label: 'PM',
    },
    {
      value: 5,
      label: 'PM',
    },
    {
      value: 6,
      label: 'PM',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <DropdownList
        data={data}
        labelField={'label'}
        valueField={'value'}
        placeholder={placeholder}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.placeholder}
        containerStyle={[styles.listContainer, {color: 'black'}]}
        style={styles.input}
        itemTextStyle={styles.item}
        fontFamily='Inter-Medium'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    marginBottom: 5,
    color: 'black',
  },
  placeholder: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#979797',
  },
  input: {
    backgroundColor: 'rgba(207, 247, 250, 0.1)',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 12,
    paddingHorizontal: 20,
    color: '#979797',
    minHeight: 40,
    maxHeight: 40,
  },
  item: {
    fontSize: 12,
  }
});

export default Dropdown;
