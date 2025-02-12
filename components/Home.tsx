import { SafeAreaView,Text } from "react-native"
import { RootParamList } from "../App";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type HomeProps = {
    navigation: BottomTabNavigationProp<RootParamList, 'Home'>;
  };
const Home=({ navigation }:HomeProps) => {

    return(

        <SafeAreaView>
            <Text>
                Home 
            </Text>
        </SafeAreaView>

    );

    
};
export default Home;