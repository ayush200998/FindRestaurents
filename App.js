import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
import RestaurentDetail from './src/screens/RestaurentDetail'

const navigator = createStackNavigator({
  Search: SearchScreen,
  RestaurentDetail: RestaurentDetail
},
{
  initailRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator)

