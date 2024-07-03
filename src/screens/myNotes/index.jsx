import {FlatList, SafeAreaView, View, Text, Alert} from 'react-native';
import React, {useContext, useState} from 'react';
import {screenStyles} from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/ui/floatActionButton';
import NoteCard from '../../components/myNotes/noteCard';
import {ADDNOTE} from '../../utils/routes';
import MyContext from '../../context';

const MyNotes = ({navigation}) => {
  const {notes} = useContext(MyContext);
  let note1 = {
    id: 5,
    title: 'Backend Developer',
    description: 'Fifth note description',
    date: '12:20 pm',
  };
  let note2 = {
    id: 6,
    title: 'Frontend Developer',
    description: 'Sixth note description',
    date: '12:20 pm',
  };
  let note3 = {
    id: 7,
    title: 'Mobile Developer',
    description: 'Seventh note description',
    date: '12:20 pm',
  };

  return (
    <SafeAreaView style={screenStyles.container}>
      <View style={screenStyles.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard
              item={item}
              navigation={navigation}
              deleteItem={item => deleteNote(item.id)}
              updateItem={item => updateNote(item.id, note2)}
            />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
