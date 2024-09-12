import React from 'react';
import {View, FlatList} from 'react-native';
import {FAB} from 'react-native-elements';
import {ListItem} from './component';
import {NotesList} from './constant';
import {UseHomeHooks} from './hooks'

const Home = () => {
  const {handleCreateNotes}=UseHomeHooks()
  const renderItem = ({item}: any) => {
    return <ListItem title={item.title} body={item.body} date={item.date} />;
  };
  return (
    <View style={{flex:1,marginLeft: 10, marginRight: 10, backgroundColor: '#ffff'}}>
     
      <FlatList
        data={NotesList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
       <FAB title="Create Note" placement="right" color={'grey'} size="large" onPress={handleCreateNotes}/>
    </View>
  );
};

export default Home;
