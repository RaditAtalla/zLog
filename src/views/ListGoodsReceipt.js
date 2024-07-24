import React from 'react';
import MenuLayout from '../components/MenuLayout';
import Menu from '../components/Menu';

const ListGoodsReceipt = () => {
  return (
    <MenuLayout title="Goods Issue">
      <Menu isFull title={'Download Goods Issue'} />
    </MenuLayout>
  );
};

export default ListGoodsReceipt;
