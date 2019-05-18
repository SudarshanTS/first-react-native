import LoginContainer from "./modules/Login/container";
import SignUp from "./modules/Login/components/SignUp";
import Icon from "@expo/vector-icons/Ionicons";
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";
import { Home } from "./modules/Home/container";

const AppSwitchNavigator = createStackNavigator({
    Login: LoginContainer,
    SignUp: SignUp,
    Home: Home,
});

export default createAppContainer(AppSwitchNavigator);