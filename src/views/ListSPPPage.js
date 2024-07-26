import React from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import MenuLayout from '../components/MenuLayout'
import Menu from '../components/Menu'
import { Button, Icon, StyleService, useStyleSheet } from '@ui-kitten/components'

const ListSPPPage = ({navigation}) => {
  const styles = useStyleSheet(themedStyles)

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

const themedStyles = StyleService.create({
  date: {
    fontSize: 20,
    fontFamily: 'Inter-Medium',
    color: 'color-primar-300',
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