import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {screenWidth} from '../utils/constants';

export const NoteCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    padding: 10,
    margin: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row',
  },
  bubleContainer: {flex: 1},
  buble: {
    width: screenWidth * 0.035,
    height: screenWidth * 0.035,
    backgroundColor: AppColors.GRAY,
    borderRadius: 100,
    marginTop: 4,
  },
  bubleRead: {
    width: screenWidth * 0.035,
    height: screenWidth * 0.035,
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 100,
    marginTop: 4,
  },
  noteContainer: {flex: 10},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.SECONDARY,
  },
  description: {fontSize: 14, color: AppColors.GRAY, marginVertical: 5},
  date: {fontSize: 14, color: AppColors.GRAY, marginVertical: 5},
  trashButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
