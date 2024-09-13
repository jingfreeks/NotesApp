import React, {useCallback, Suspense} from 'react';
import {View, FlatList} from 'react-native';
import {FAB} from 'react-native-elements';
import {List} from './component';
import {Text} from '@/component';
import {NotesList} from './constant';
import {UseHomeHooks} from './hooks';

const Home = () => {
  const {handleCreateNotes, isLoading, isSuccess, isError, error, notes} =
    UseHomeHooks();
  const renderItem = useCallback(({item}: any) => {
    return (
      <View style={{flex: 1}}>
        <List notesId={item} />
      </View>
    );
  }, []);

  const Loading = () => {
    return <Text TextMode="Title">Loading</Text>;
  };
  if (isLoading) {
    return <Loading />;
  }
  console.log('notes', isSuccess, isLoading);
  if (isSuccess) {
    return (
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: '#ffff',
          flex: 1,
        }}>
        <FlatList
          data={notes?.ids}
          extraData={notes?.ids}
          renderItem={renderItem}
          keyExtractor={item => item}
        />

        <FAB
          title="Create Note"
          placement="right"
          color={'grey'}
          size="large"
          onPress={handleCreateNotes}
        />
      </View>
    );
  }
};

export default Home;
