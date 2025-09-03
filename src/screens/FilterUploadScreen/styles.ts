import { colors } from "@/utils/colors";
import { width } from "@/utils/commonScales";
import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(12),
    gap: moderateScale(12),
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: moderateVerticalScale(12)
  },
  headerTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: 'black',
  },
  imageContainer: {
    width: width - moderateScale(32),
    height: width - moderateScale(32),
    borderRadius: moderateScale(12),
    overflow: 'hidden',
    backgroundColor: colors.greyBackground,
  },
  image: {
    width: width - moderateScale(32),
    height: width - moderateScale(32),
    borderRadius: moderateScale(12),
    resizeMode: 'contain',
  },
  filterItemContainer: {
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(12),
    borderRadius: moderateScale(12),
    backgroundColor: colors.btnGreyBackground,
    marginRight: moderateScale(12),
  },
  filterItemText: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: 'black',
  },
  filterList: {
    marginVertical: moderateVerticalScale(12),
  },
  filterContainer: {
    marginTop: moderateVerticalScale(12),
  },
  uploadBtn: {
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateVerticalScale(8),
    backgroundColor: colors.btnGreyBackground,
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: moderateVerticalScale(12)
  },
  uploadBtnText: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: 'black',
    },
  uploadingContainer: {
    flexDirection: 'row',
    gap: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateVerticalScale(12),
  },
  uploadingText: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: 'black',
  },
  textInput: {
    marginVertical: moderateVerticalScale(12),
    borderWidth: 1,
    borderColor: colors.greyText,
    borderRadius: moderateScale(12),
    color: colors.primary,
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateVerticalScale(8),
    minHeight: moderateVerticalScale(100),
    textAlignVertical: 'top',
  }
});