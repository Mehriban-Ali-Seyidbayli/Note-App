import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {screenHeight} from '../../utils/constants';
import {MYNOTES} from '../../utils/routes';
import {AppColors} from '../../theme/colors';
import {HambergerMenu, SearchNormal1, More} from 'iconsax-react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Text style={{fontSize: 35, color: AppColors.SECONDARY}}>
          {MYNOTES}
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            padding: 15,
            flex: 1,
            justifyContent: 'center',
          }}>
          <HambergerMenu size="32" color={AppColors.SECONDARY} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 15,
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <SearchNormal1
            size="24"
            color={AppColors.SECONDARY}
            style={{marginRight: 10}}
          />
          <More size="24" color={AppColors.SECONDARY} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight * 0.2,
    padding: 10,
  },
});
