
import HomeScreen from "./screens/HomeScreen";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const AppNavigator = createStackNavigator({

  Home: {
    screen: HomeScreen,
  }
},{
   defaultNavigationOptions : {
  title: '',
  headerStyle: {
    backgroundColor: '#192A56',
    height:60
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }}}
);

export default createAppContainer(AppNavigator);
