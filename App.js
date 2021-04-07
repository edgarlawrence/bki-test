import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import Add from './components/Add';
import ViewFiles from './components/ViewFiles';

const navigator = createStackNavigator(
  {
    AddFiles: Add,
    HomeScreen: Home,
    ViewFilesss: ViewFiles
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
