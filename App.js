import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fbScreen from './screens/fbScreen';
import instaScreen from './screens/intaScreen';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      
      <AppContainer/>

    </View>
  );
  }
}
const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: fbScreen},
  Instagram: {screen: instaScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Facebook"){
        return(
          <Image
          source={require("./assets/fb.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Instagram"){
        return(
          <Image
          source={require("./assets/insta.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
