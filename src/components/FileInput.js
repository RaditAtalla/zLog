import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { useStyleSheet, useTheme } from '@ui-kitten/components';


const FileInput = ({label, placeholder, required}) => {
  const theme = useTheme()
  const styles = useStyleSheet(themedStyles)

  const handleClick = () => {
    const pickedFile = DocumentPicker.pickSingle({
      type: [DocumentPicker.types.allFiles],
    });
  };

  return (
    <View>
      <Text style={styles.label}>
        {label}
        {required ? <Text style={{color: theme['color-warning-500']}}>*</Text> : null}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.buttonPlaceholder}>{placeholder}</Text>
        </TouchableOpacity>

        <Text style={styles.buttonText}>Choose file...</Text>
      </View>
    </View>
  );
};

const themedStyles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    marginBottom: 5,
    color: 'black',
  },
  buttonContainer: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(207, 247, 250, 0.1)',
  },
  button: {
    backgroundColor: 'color-primary-500',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 3,
    marginRight: 10,
  },
  buttonPlaceholder: {
    color: 'white',
    fontFamily: 'Inter-Bold',
  },
  buttonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#979797',
  }
});

export default FileInput;
