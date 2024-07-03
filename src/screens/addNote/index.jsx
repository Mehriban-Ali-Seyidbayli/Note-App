import {View, SafeAreaView, TextInput, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import {screenStyles} from '../../styles/screenStyle';
import Button from '../../components/ui/button';
import {AppColors} from '../../theme/colors';
import {getRandomNumber} from '../../utils/functions';
import MyContext from '../../context';

const AddNote = ({route}) => {
  const {addNote, updateNote} = useContext(MyContext);
  const {note} = route?.params;
  const {type} = route?.params;

  const [description, setDescription] = useState(note?.description);
  const [title, setTitle] = useState(note?.title);
  const [titleRequired, setTitleRequired] = useState(false);
  const [descriptionRequired, setDescriptionRequired] = useState(false);

  const saveNote = () => {
    if (!title) setTitleRequired(true);
    if (!description) setDescriptionRequired(true);
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: getRandomNumber(1, 100),
        title: title,
        description: description,
        date: '12:30',
      };
      addNote(form);
    }
  };

  const updatedNote = () => {
    if (!title) setTitleRequired(true);
    if (!description) setDescriptionRequired(true);
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: note.id,
        title: title,
        description: description,
        date: '12:30',
      };
      updateNote(note.id, form);
    }
  };
  return (
    <SafeAreaView style={screenStyles.container}>
      <View style={screenStyles.container}>
        <View style={{flex: 1, padding: 5}}>
          <Text style={{fontWeight: '500', fontSize: 18, marginVertical: 10}}>
            Title
          </Text>
          <TextInput
            style={{
              backgroundColor: AppColors.WHITE,
              padding: 5,
              borderRadius: 5,
              height: 50,
            }}
            placeholder="Type your note's title.."
            value={title}
            onChangeText={text => setTitle(text)}
          />
          {titleRequired && (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                marginVertical: 10,
                color: AppColors.RED,
              }}>
              This field is required!
            </Text>
          )}
          <Text style={{fontWeight: '500', fontSize: 18, marginVertical: 10}}>
            Description
          </Text>
          <TextInput
            style={{
              backgroundColor: AppColors.WHITE,
              padding: 5,
              borderRadius: 5,
              height: 90,
            }}
            placeholder="Type your note.."
            value={description}
            onChangeText={text => setDescription(text)}
          />
          {descriptionRequired && (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                marginVertical: 10,
                color: AppColors.RED,
              }}>
              This field is required!
            </Text>
          )}
        </View>
        <View>
          <Button
            onPress={type == 'update' ? updatedNote : saveNote}
            title={type == 'update' ? 'Save changes' : 'Save'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
