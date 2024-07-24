import {
  Layout,
  StyleService,
  Text,
} from '@ui-kitten/components';
import { TextInput } from 'react-native'

const CustomInput = ({label, placeholder, keyboardType, required}) => {
  return (
    <Layout>
      <Text style={Styles.label}>{label}{required ? <Text style={{ color: 'red' }}>*</Text> : null}</Text>
      <TextInput
        style={Styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </Layout>
  );
};

const Styles = StyleService.create({
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
  label: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    marginBottom: 5,
  },
});

export default CustomInput;
