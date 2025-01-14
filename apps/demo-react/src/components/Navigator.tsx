import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";
// import { SecondaryScreen } from "./SecondaryScreen";
import { DemoNativescriptCameraPlusScreen } from '../plugin-demos/nativescript-camera-plus';
const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                },
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
            {/* <StackNavigator.Screen
                name="Secondary"
                component={SecondaryScreen}
            /> */}
            <StackNavigator.Screen
                name="camplus"
                component={DemoNativescriptCameraPlusScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
