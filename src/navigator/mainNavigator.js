import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn2127241Navigator from '../features/SignIn2127241/navigator';
import Settings127227Navigator from '../features/Settings127227/navigator';
import UserProfile127220Navigator from '../features/UserProfile127220/navigator';
import Settings127219Navigator from '../features/Settings127219/navigator';
import Settings127217Navigator from '../features/Settings127217/navigator';
import SignIn2127215Navigator from '../features/SignIn2127215/navigator';
import Settings127213Navigator from '../features/Settings127213/navigator';
import UserProfile127206Navigator from '../features/UserProfile127206/navigator';
import Settings127205Navigator from '../features/Settings127205/navigator';
import Settings127203Navigator from '../features/Settings127203/navigator';
import SignIn2127201Navigator from '../features/SignIn2127201/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn2127241: { screen: SignIn2127241Navigator },
Settings127227: { screen: Settings127227Navigator },
UserProfile127220: { screen: UserProfile127220Navigator },
Settings127219: { screen: Settings127219Navigator },
Settings127217: { screen: Settings127217Navigator },
SignIn2127215: { screen: SignIn2127215Navigator },
Settings127213: { screen: Settings127213Navigator },
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
