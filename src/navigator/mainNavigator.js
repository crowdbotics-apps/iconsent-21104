import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile127288Navigator from '../features/UserProfile127288/navigator';
import Settings127287Navigator from '../features/Settings127287/navigator';
import Settings127285Navigator from '../features/Settings127285/navigator';
import SignIn2127283Navigator from '../features/SignIn2127283/navigator';
import Settings127281Navigator from '../features/Settings127281/navigator';
import UserProfile127274Navigator from '../features/UserProfile127274/navigator';
import Settings127273Navigator from '../features/Settings127273/navigator';
import Settings127271Navigator from '../features/Settings127271/navigator';
import SignIn2127269Navigator from '../features/SignIn2127269/navigator';
import Settings127267Navigator from '../features/Settings127267/navigator';
import UserProfile127260Navigator from '../features/UserProfile127260/navigator';
import Settings127259Navigator from '../features/Settings127259/navigator';
import Settings127257Navigator from '../features/Settings127257/navigator';
import SignIn2127255Navigator from '../features/SignIn2127255/navigator';
import Settings127253Navigator from '../features/Settings127253/navigator';
import UserProfile127246Navigator from '../features/UserProfile127246/navigator';
import Settings127245Navigator from '../features/Settings127245/navigator';
import Settings127243Navigator from '../features/Settings127243/navigator';
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
UserProfile127288: { screen: UserProfile127288Navigator },
Settings127287: { screen: Settings127287Navigator },
Settings127285: { screen: Settings127285Navigator },
SignIn2127283: { screen: SignIn2127283Navigator },
Settings127281: { screen: Settings127281Navigator },
UserProfile127274: { screen: UserProfile127274Navigator },
Settings127273: { screen: Settings127273Navigator },
Settings127271: { screen: Settings127271Navigator },
SignIn2127269: { screen: SignIn2127269Navigator },
Settings127267: { screen: Settings127267Navigator },
UserProfile127260: { screen: UserProfile127260Navigator },
Settings127259: { screen: Settings127259Navigator },
Settings127257: { screen: Settings127257Navigator },
SignIn2127255: { screen: SignIn2127255Navigator },
Settings127253: { screen: Settings127253Navigator },
UserProfile127246: { screen: UserProfile127246Navigator },
Settings127245: { screen: Settings127245Navigator },
Settings127243: { screen: Settings127243Navigator },
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
