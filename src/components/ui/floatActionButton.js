import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import {screenWidth} from '../../utils/constants';
import {Add} from 'iconsax-react-native';

const FloatActionButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Add size="50" color={AppColors.WHITE} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 1000,
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
  },
});

export default FloatActionButton;
