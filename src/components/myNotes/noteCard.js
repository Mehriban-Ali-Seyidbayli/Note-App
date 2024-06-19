import {View, Text} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import {Trash} from 'iconsax-react-native';
import {NoteCardStyle} from '../../styles/myNoteStyles';

const NoteCard = ({item}) => {
  return (
    <View style={NoteCardStyle.container}>
      <View style={NoteCardStyle.bubleContainer}>
        <View style={NoteCardStyle.buble}></View>
      </View>
      <View style={NoteCardStyle.noteContainer}>
        <Text style={NoteCardStyle.title}>{item.title}</Text>
        <Text style={NoteCardStyle.description}>{item.description}</Text>
        <Text style={NoteCardStyle.date}>{item.date}</Text>
      </View>
      <View style={NoteCardStyle.trashButtonContainer}>
        <Trash size="23" variant="Bold" color={AppColors.SECONDARY} />
      </View>
    </View>
  );
};

export default NoteCard;
