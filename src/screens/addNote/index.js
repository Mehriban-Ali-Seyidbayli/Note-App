import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const AddNote = () => {
  return (
    <View style={styles.container}>
      <Text>AddNote</Text>
    </View>
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
