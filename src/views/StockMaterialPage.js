import React from 'react'
import { View, StyleSheet } from 'react-native'
import MenuLayout from '../components/MenuLayout'
import { Button } from '@ui-kitten/components'

const StockMaterialPage = () => {
  return (
    <MenuLayout title='Stock Material' style={{ justifyContent: 'space-between' }}>
      <View style={styles.pdfPreview}></View>
      <Button style={{ alignSelf: 'flex-end', marginBottom: 10 }}>Next</Button>
    </MenuLayout>
  )
}

const styles = StyleSheet.create({
  pdfPreview: {
    borderWidth: 1,
    borderColor: 'black',
    height: 300,
    width: '100%',
  }
})

export default StockMaterialPage