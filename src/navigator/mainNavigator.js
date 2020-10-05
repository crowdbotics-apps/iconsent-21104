import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile127206Navigator from '../features/UserProfile127206/navigator';
import Settings127205Navigator from '../features/Settings127205/navigator';
import Settings127203Navigator from '../features/Settings127203/navigator';
import SignIn2127201Navigator from '../features/SignIn2127201/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile127206: { screen: UserProfile127206Navigator },
Settings127205: { screen: Settings127205Navigator },
Settings127203: { screen: Settings127203Navigator },
SignIn2127201: { screen: SignIn2127201Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
