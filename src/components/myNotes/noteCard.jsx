import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import {Edit2, Trash} from 'iconsax-react-native';
import {NoteCardStyle} from '../../styles/myNoteStyles';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE, NOTEDETAIL} from '../../utils/routes';

const NoteCard = ({item, deleteItem, updateItem}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTEDETAIL, {note: item})}
      style={NoteCardStyle.container}>
      <View style={NoteCardStyle.bubleContainer}>
        <View style={NoteCardStyle.buble}></View>
      </View>
      <View style={NoteCardStyle.noteContainer}>
        <Text style={NoteCardStyle.title}>{item.title}</Text>
        <Text style={NoteCardStyle.description}>{item.description}</Text>
        <Text style={NoteCardStyle.date}>{item.date}</Text>
      </View>
      <TouchableOpacity
        onPress={() => deleteItem(item)}
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
