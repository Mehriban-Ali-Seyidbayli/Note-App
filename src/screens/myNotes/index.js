import {FlatList, SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import {screenStyles} from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/ui/floatActionButton';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';

const MyNotes = () => {
  return (
    <SafeAreaView style={screenStyles.container}>
      <View style={screenStyles.container}>
        <Header />
        <FlatList
          data={mockData}
          renderItem={({item}) => <NoteCard item={item} />}
          keyExtractor={item => item.id}
        />
        <FloatActionButton />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
