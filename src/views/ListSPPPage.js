import React from 'react'
import { Text, StyleSheet, View, ScrollView, FlatList } from 'react-native'
import MenuLayout from '../components/MenuLayout'
import Menu from '../components/Menu'
import { Button, Icon } from '@ui-kitten/components'

const ListSPPPage = ({navigation}) => {
  return (
    <MenuLayout title='List SPP' style={{ justifyContent: 'space-between' }}>
      <ScrollView>
        <Text style={styles.date}>Juli 2024</Text>
        <View style={styles.menuContainer}>
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} onPress={() => navigation.navigate('ListSPPDownloadPage')} />
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
        </View>
        <Text style={styles.date}>Agustus 2024</Text>
        <View style={styles.menuContainer}>
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
        </View>
        <Text style={styles.date}>Juli 2024</Text>
        <View style={styles.menuContainer}>
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
          <Menu title={'SPP 001'} isFull size={'small'} style={styles.menu} />
        </View>
      </ScrollView>
      <FlatList />
      <Button accessoryLeft={<Icon name='download-outline' fill='white' />}>Download All</Button>
    </MenuLayout>
  )
}

const styles = StyleSheet.create({
  date: {
    fontSize: 20,
    fontFamily: 'Inter-Medium',
    color: '#6FB5E4',
    marginBottom: 10,
  },
  menu: {
    marginBottom: 5,
  },
  menuContainer: {
    marginBottom: 10,
  }
})

export default ListSPPPage