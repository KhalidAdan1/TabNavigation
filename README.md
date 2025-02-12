# React Native Tab Navigation Guide

## Overview
This guide covers implementing bottom tab navigation in React Native using `@react-navigation/bottom-tabs`. Bottom tabs provide an easy way to switch between different screens or views in your application.

## Installation

```bash
# Install necessary dependencies
npm install @react-navigation/native @react-navigation/bottom-tabs
npm install react-native-safe-area-context react-native-screens
```

## Project Structure
```
/src
├── Components/
│   ├── Home.tsx
│   ├── Profile.tsx
│   └── Settings.tsx
└── App.tsx
```

## Basic Implementation

### 1. Set Up TabNavigator

```typescript

const Tab = createBottomTabNavigator<RootParamList>();
export type RootParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export default function App() {
  return (
<NavigationContainer>
<Tab.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false, 
      }}>
<Tab.Screen name='Home' component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}/>
<Tab.Screen name='Profile' component={Profile} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }} />
<Tab.Screen name='Settings' component={Settings} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}/>
</Tab.Navigator>
</NavigationContainer>
```

### 2. Create Screen Components

```typescript
// components/Home.tsx
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
```








## Common Props

- `tabBarStyle`: Style object for the tab bar
- `tabBarActiveTintColor`: Color for active tab
- `tabBarInactiveTintColor`: Color for inactive tabs
- `tabBarLabel`: Custom label text
- `tabBarIcon`: Custom icon component
- `headerShown`: Show/hide header

## Best Practices

1. **Type Safety**
   - Define types for navigation parameters
   - Use TypeScript for better development experience

2. **Performance**
   - Avoid heavy computations in tab bar components
   - Use memo for tab bar icons if needed

3. **Styling**
   - Keep consistent spacing and colors
   - Consider safe area insets
   - Test on different screen sizes

4. **Accessibility**
   - Provide meaningful labels
   - Ensure adequate touch targets
   - Consider color contrast

## Common Issues and Solutions

1. **Tab Bar Not Showing**
   ```typescript

   screenOptions={{
     tabBarVisible: true
   }}
   ```

2. **Icon Alignment**
   ```typescript
   
   tabBarIcon: ({ color, size }) => (
     <View style={{ alignItems: 'center' }}>
       <Icon name="home" size={size} color={color} />
     </View>
   )
   ```

## Example Usage with Parameters

```typescript
// Define types with parameters
type RootTabParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: { theme?: string };
};

// Navigate with parameters
navigation.navigate('Profile', { userId: '123' });

// Access parameters in screen
const Profile = ({ route }) => {
  const { userId } = route.params;
  return (
    <View>
      <Text>Profile ID: {userId}</Text>
    </View>
  );
};
```

