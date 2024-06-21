// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyNotes from '../screens/myNotes';
import {ADDNOTE, MYNOTES, NOTEDETAIL} from '../utils/routes';
import NoteDetail from '../screens/noteDetail';
import AddNote from '../screens/addNote';
import {AppColors} from '../theme/colors';
import HeaderRight from '../components/ui/headerRight';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: AppColors.SECONDARY,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
      <Stack.Screen
        options={{
          headerRight: props => <HeaderRight />,
        }}
        name={ADDNOTE}
        component={AddNote}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
