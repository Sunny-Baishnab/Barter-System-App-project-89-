import React ,{Component} from 'react';
import {Text,View} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyBartersScreen from '../screens/MyBartersScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MyReceivedItemsScreen from '../screens/MyReceivedItemsScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator,
        navigationOptions:{
            drawerIcon:<Icon name = "home" type = "fontawesome5"/>
        }
    },
    Settings:{
        screen:SettingScreen,
        navigationOptions:{
            drawerIcon:<Icon name = "cogs" type = "font-awesome"/>
          }
    },
    MyBarters:{
        screen:MyBartersScreen,
        navigationOptions:{
            drawerIcon:<Icon name = "gift" type = "font-awesome"/>
        }
    },
    MyReceivedItems:{
        screen:MyReceivedItemsScreen,
        navigationOptions:{
            drawerIcon:<Icon name = "gift" type = "font-awesome"/>
        }
    },
    Notifications:{
        screen:NotificationsScreen,
        navigationOptions:{
            drawerIcon:<Icon name = "bell" type = "font-awesome"/>
          }
    },
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'

})