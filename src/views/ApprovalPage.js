import React from 'react'
import { View, StyleSheet } from 'react-native'
import MenuLayout from '../components/MenuLayout'
import { Button } from '@ui-kitten/components'

const ApprovalPage = () => {
  return (
    <MenuLayout title='Approval SEM' style={{ justifyContent: 'space-between' }}>
      <View style={styles.pdfPreview}></View>
      <View style={styles.buttonContainer}>
        <Button status='danger' style={styles.button}>Not Approve</Button>
        <Button status='success' style={styles.button}>Approve</Button>
      </View>
    </MenuLayout>
  )
}

const styles = StyleSheet.create({
  pdfPreview: {
    borderWidth: 1,
    borderColor: 'black',
    height: 300,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  button: {
    flex: 1,
  }
})

export default ApprovalPage