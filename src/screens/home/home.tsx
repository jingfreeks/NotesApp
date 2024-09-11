import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from './component';
import {NotesList} from './constant';

const Home = () => {
  const renderItem = ({item}: any) => {
    return <ListItem title={item.title} body={item.body} date={item.date} />;
  };
  return (
    <View>
      <Text>home</Text>
      <FlatList
        data={NotesList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Home;
