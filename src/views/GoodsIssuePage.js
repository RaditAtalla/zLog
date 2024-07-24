import React from 'react'
import Menu from '../components/Menu'
import MenuLayout from '../components/MenuLayout'

const GoodsIssuePage = ({ navigation }) => {
  return (
    <MenuLayout title='Goods Issue'>
      <Menu isFull title={'BPPB'} onPress={() => navigation.navigate('BPPBPage')} style={{ marginBottom: 10 }} />
      <Menu isFull title={'Input material keluar'} onPress={() => navigation.navigate('InputMaterialKeluarPage')} />
    </MenuLayout>
  )
}

export default GoodsIssuePage