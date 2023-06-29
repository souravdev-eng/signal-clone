import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, View, useWindowDimensions } from 'react-native';

import { HomeScreen, ChatRoomScreen } from '../screens';
import { RootStackParamList } from '../types';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerTitle: HomeHeader }} />
      <Stack.Screen
        name='ChatRoom'
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

const HomeHeader = (props: any) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{ flex: 1, textAlign: 'center', marginLeft: 50, fontWeight: 'bold' }}>
        Signal
      </Text>
      <Feather name='camera' size={24} color='black' style={{ marginHorizontal: 10 }} />
      <Feather name='edit-2' size={24} color='black' style={{ marginHorizontal: 10 }} />
    </View>
  );
};

const ChatRoomHeader = (props: any) => {
  const { width } = useWindowDimensions();
  console.log(props);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width / 1.2,
        paddingHorizontal: 6,
        paddingVertical: 10,
        alignItems: 'center',
      }}
    >
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{ flex: 1, marginLeft: 10, fontWeight: 'bold' }}>{props.children}</Text>
      <Feather name='camera' size={24} color='black' style={{ marginHorizontal: 8 }} />
      <Feather name='edit-2' size={24} color='black' style={{ marginHorizontal: 8 }} />
    </View>
  );
};
