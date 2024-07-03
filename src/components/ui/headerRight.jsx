import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Share, More, Document} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <Document size="24" color={AppColors.SECONDARY} />
      <Share size="24" color={AppColors.SECONDARY} />
      <More size="24" color={AppColors.SECONDARY} />
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
});
