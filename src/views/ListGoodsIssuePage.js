import React from 'react';
import MenuLayout from '../components/MenuLayout';
import Menu from '../components/Menu';

const ListGoodsIssuePage = ({navigation}) => {
  return (
    <MenuLayout title="Goods Issue">
      <Menu
        isFull
        title={'BPPB'}
        style={{marginBottom: 10}}
        onPress={() => navigation.navigate('PreviewBPPBPage2')}
      />
      <Menu
        isFull
        title={'Download Goods Issue'}
      />
    </MenuLayout>
  );
};

export default ListGoodsIssuePage;
