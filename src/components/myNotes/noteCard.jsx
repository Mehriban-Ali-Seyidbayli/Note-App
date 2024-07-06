import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {AppColors} from '../../theme/colors';
import {Edit2, Trash} from 'iconsax-react-native';
import {NoteCardStyle} from '../../styles/myNoteStyles';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE, NOTEDETAIL} from '../../utils/routes';
import MyContext from '../../context';

const NoteCard = ({item, deleteItem, updateItem}) => {
  const navigation = useNavigation();
  const {deleteNote} = useContext(MyContext);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTEDETAIL, {note: item})}
      style={NoteCardStyle.container}>
      <View style={NoteCardStyle.bubleContainer}>
        <View
          style={
            item.read ? NoteCardStyle.buble : NoteCardStyle.bubleRead
          }></View>
      </View>
      <View style={NoteCardStyle.noteContainer}>
        <Text style={NoteCardStyle.title}>{item.title}</Text>
        <Text style={NoteCardStyle.description}>{item.description}</Text>
        <Text style={NoteCardStyle.date}>{item.date}</Text>
      </View>
      <TouchableOpacity
        onPress={() => deleteNote(item.id)}
        style={NoteCardStyle.trashButtonContainer}>
        <Trash size="23" variant="Bold" color={AppColors.RED} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ADDNOTE, {note: item, type: 'update'})
        }
        style={NoteCardStyle.trashButtonContainer}>
        <Edit2 size="23" variant="Bold" color={AppColors.SECONDARY} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteCard;
