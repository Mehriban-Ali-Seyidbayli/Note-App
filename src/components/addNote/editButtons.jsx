import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  TextBold,
  TextItalic,
  TextUnderline,
  TextalignCenter,
  TextalignJustifycenter,
} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';

const EditButtons = ({onChangeStyle}) => {
  const Buttons = [
    {
      id: 1,
      value: 'bold',
      icon: <TextBold size="30" color={AppColors.WHITE} />,
    },
    {
      id: 2,
      value: 'italic',
      icon: <TextItalic size="30" color={AppColors.WHITE} />,
    },
    {
      id: 3,
      value: 'underline',
      icon: <TextUnderline size="30" color={AppColors.WHITE} />,
    },

    {
      id: 4,
      value: 'center',
      icon: <TextalignCenter size="30" color={AppColors.WHITE} />,
    },
    {
      id: 5,
      value: 'justify',
      icon: <TextalignJustifycenter size="30" color={AppColors.WHITE} />,
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map((item, index) => (
        <TouchableOpacity onPress={() => onChangeStyle(item.value)} key={index}>
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.GRAY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    paddingVertical: 10,
  },
});
export default EditButtons;
