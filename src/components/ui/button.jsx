import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import {screenWidth} from '../../utils/constants';

const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 6,
    padding: 10,
    paddingVertical: 15,
  },
  title: {
    color: AppColors.WHITE,
    fontSize: 18,
  },
});

export default Button;
