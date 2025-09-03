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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateVerticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical:moderateVerticalScale(12)
  },
  headerTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: 'black',
  },
  selectBtn: {
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateVerticalScale(4),
    backgroundColor: colors.btnGreyBackground,
    borderRadius: moderateScale(12),
  },
  gallery: {
    flex: 1,
    marginTop: moderateVerticalScale(24),
  },
  image: {
    width: width / 3 - moderateScale(16),
    height: width / 3 - moderateScale(26),
    borderRadius: moderateScale(12),
    resizeMode: 'contain',
  },
  imageContainer: {
    borderRadius: moderateScale(12),
    overflow: 'hidden',
    backgroundColor: colors.greyBackground,
  },
  columnWrapper: {
    gap: moderateScale(6),
  },
  nextBtn: {
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(8),
    borderWidth: 1,
    backgroundColor: colors.greyBackground,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  nextBtnText: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: 'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: moderateScale(12),
    marginBottom: moderateVerticalScale(12)
  },
});