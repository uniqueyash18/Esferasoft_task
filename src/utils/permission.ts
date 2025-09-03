import { Platform } from "react-native";
import { request, PERMISSIONS, RESULTS } from "react-native-permissions";

export const requestGalleryPermission = async () => {
    if (Platform.OS === 'ios') {
        const status = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        return status === RESULTS.GRANTED || status === RESULTS.LIMITED
    }

    if (Platform.OS === 'android' && Platform.Version >= 33) {
        const status = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
        return status === RESULTS.GRANTED
    } else {
        const status = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        return status === RESULTS.GRANTED
    }
}