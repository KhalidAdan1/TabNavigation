import { BottomTabNavigationProp, BottomTabNavigatorProps } from "@react-navigation/bottom-tabs"
import { RootParamList } from "../App"
import { View, Text } from "react-native";

 type ProfileProps ={
    navigation: BottomTabNavigationProp<RootParamList,'Profile'>;

 };
const Profile = ({navigation }:ProfileProps)=>{
return (

    <View>
        <Text>
            Profile
        </Text>
    </View>
)
}
export default Profile;