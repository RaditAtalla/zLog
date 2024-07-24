import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Loginpage from '../views/Loginpage';
import Homepage from '../views/Homepage';
import Morepage from '../views/Morepage';
import SPPpage from '../views/SPPpage';
import GoodsReceiptPage from '../views/GoodsReceiptPage';
import AddGoodsReceiptPage from '../views/AddGoodsReceiptPage';
import GoodsIssuePage from '../views/GoodsIssuePage';
import BPPBPage from '../views/BPPBPage';
import ListGoodsIssuePage from '../views/ListGoodsIssuePage';
import ListSPPPage from '../views/ListSPPPage';
import PreviewSPPPage from '../views/PreviewSPPPage';
import PreviewBPPBPage from '../views/PreviewBPPBPage';
import InputMaterialKeluarPage from '../views/InputMaterialKeluarPage';
import StockMaterialPage from '../views/StockMaterialPage';
import ListSPPDownloadPage from '../views/ListSPPDownloadPage';
import ListGoodsReceipt from '../views/ListGoodsReceipt';
import PreviewBPPBPage2 from '../views/PreviewBPPBPage2';
import ApprovalPage from '../views/ApprovalPage';

const stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="loginpage" component={Loginpage} />
        <stack.Screen name="Homepage" component={Homepage} />
        <stack.Screen name="Morepage" component={Morepage} />
        <stack.Screen name="SPPpage" component={SPPpage} />
        <stack.Screen name="GoodsReceiptPage" component={GoodsReceiptPage} />
        <stack.Screen
          name="AddGoodsReceiptPage"
          component={AddGoodsReceiptPage}
        />
        <stack.Screen name="GoodsIssuePage" component={GoodsIssuePage} />
        <stack.Screen name="BPPBPage" component={BPPBPage} />
        <stack.Screen
          name="ListGoodsIssuePage"
          component={ListGoodsIssuePage}
        />
        <stack.Screen name="ListSPPPage" component={ListSPPPage} />
        <stack.Screen name="PreviewSPPPage" component={PreviewSPPPage} />
        <stack.Screen name="PreviewBPPBPage" component={PreviewBPPBPage} />
        <stack.Screen
          name="InputMaterialKeluarPage"
          component={InputMaterialKeluarPage}
        />
        <stack.Screen name="StockMaterialPage" component={StockMaterialPage} />
        <stack.Screen
          name="ListSPPDownloadPage"
          component={ListSPPDownloadPage}
        />
        <stack.Screen name="ListGoodsReceipt" component={ListGoodsReceipt} />
        <stack.Screen name="PreviewBPPBPage2" component={PreviewBPPBPage2} />
        <stack.Screen name="ApprovalPage" component={ApprovalPage} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
