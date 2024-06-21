import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {screenStyles} from '../../styles/screenStyle';

const AddNote = ({route}) => {
  return (
    <SafeAreaView style={screenStyles.container}>
      <View style={screenStyles.container}>
        <Text>add note</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
