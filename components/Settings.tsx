
import { View , Text } from "react-native";
import { RootParamList } from "../App"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type SettingsProps ={
    navigation : BottomTabNavigationProp<RootParamList, 'Settings'>;

}
const Settings = ( {navigation}: SettingsProps)=>{

return (

    <View>
        <Text>
            Settings
        </Text>
    </View>
)
}


export default Settings;