import React, { useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import { Message, MessageInput } from '../components';
import chatRoomData from '../assets/dummy-data/Chats';

export default function ChatRoomScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Elon Musk' });
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
