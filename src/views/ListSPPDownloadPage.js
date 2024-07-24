import React from 'react';
import {View, StyleSheet} from 'react-native';
import MenuLayout from '../components/MenuLayout';
import {Button, Icon} from '@ui-kitten/components';

const ListSPPDownloadPage = () => {
  return (
    <MenuLayout title="List SPP" style={{justifyContent: 'space-between'}}>
      <View style={styles.pdfPreview}></View>
      <Button style={{marginBottom: 10}} accessoryLeft={<Icon name={'download-outline'} fill='white' />}>Download</Button>
    </MenuLayout>
  );
};

const styles = StyleSheet.create({
  pdfPreview: {
    borderWidth: 1,
    borderColor: 'black',
    height: 300,
    width: '100%',
  }
})

export default ListSPPDownloadPage;
