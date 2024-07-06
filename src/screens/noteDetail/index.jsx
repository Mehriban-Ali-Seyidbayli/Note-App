import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {screenStyles} from '../../styles/screenStyle';
import EditButtons from '../../components/addNote/editButtons';
import {AppColors} from '../../theme/colors';
import MyContext from '../../context';

const NoteDetail = ({route}) => {
  const {note} = route?.params;
  const [selectedStyle, setSelectedStyle] = useState(styles.normal);
  const {updateNote} = useContext(MyContext);

  const changeStyleText = style => {
    switch (style) {
      case 'bold':
        setSelectedStyle(styles.bold);
        break;
      case 'italic':
        setSelectedStyle(styles.italic);
        break;
      case 'underline':
        setSelectedStyle(styles.underline);
        break;
      case 'justify':
        setSelectedStyle(styles.justify);
        break;
      case 'center':
        setSelectedStyle(styles.center);
        break;
    }
  };
  useEffect(() => {
    updateNote(note.id, note);
    return () => {
      updateNote(note.id, note);
    };
  }, []);

  return (
    <SafeAreaView style={screenStyles.container}>
      <View style={screenStyles.container}>
        <View>
          <EditButtons onChangeStyle={value => changeStyleText(value)} />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: AppColors.WHITE,
            padding: 10,
          }}>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Heading</Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '500',
                color: AppColors.PRIMARY,
                marginVertical: 10,
              }}>
              {note.title}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Note</Text>
            <Text style={selectedStyle}>{note.description}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  center: {
    textAlign: 'center',
  },
  justify: {
    textAlign: 'justify',
  },
  normal: {},
});
export default NoteDetail;
