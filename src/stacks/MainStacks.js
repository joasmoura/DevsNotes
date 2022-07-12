import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from '../pages/ListScreen';
import EditNoteScreen from '../pages/EditNoteScreen';

const MainStacks = createStackNavigator();

export default () => (
    <MainStacks.Navigator
        screenOptions={{ 
            headerStyle: {
                backgroundColor: '#222',
            },
            headerTintColor: '#fff',
         }}
    >
        <MainStacks.Screen name="List" component={ListScreen} />
        <MainStacks.Screen name="EditNote" component={EditNoteScreen} />
    </MainStacks.Navigator>
)