import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ListDeleteAction from '../components/ListDeleteAction';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
const initialMessages = [
  {
    id: 1,
    title: 'T1',
    desc: 'D1',
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    desc: 'D2',
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    desc: 'D3',
    image: require('../assets/jacket.jpg'),
  },
];
const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = message => {
    // Delete the msg from the messages
    const newMessages = messages.filter(msg => msg.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={msg => msg.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.desc}
            image={item.image}
            onPress={() => console.log('message selcted', item)}
            renderRightActions={() => (
              <ListDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              desc: 'D2',
              image: require('../assets/jacket.jpg'),
            },
          ]);
        }}></FlatList>
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
