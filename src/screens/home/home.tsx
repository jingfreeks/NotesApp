import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {FAB} from 'react-native-elements';
import {List} from './component';
import {Text, HomeEmptyCard} from '@/component';
import {NotesEmptyContainerStyled} from './styles';
import {SuggestedEmptyIcon} from '@/assets';
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
  console.log('error',error,isLoading,isError)
  if (isLoading || isError) {
    let messages;
    if (error?.status === 403) {
      messages = 'Token Expired you must logout and login it again';
    } else {
      messages = 'No notes data found';
    }
    return (
      <NotesEmptyContainerStyled>
        <HomeEmptyCard imgsource={SuggestedEmptyIcon} message={messages} />
      </NotesEmptyContainerStyled>
    );
  }
 
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
};

export default Home;
