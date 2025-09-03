import { AppDispatch } from "@/redux"
import { setError, setProgress, setStatus } from "@/redux/uploadSlice"
import { Alert } from "react-native"
import storage from "@react-native-firebase/storage"

export const uploadImages = async (
  images: string[],
  metadata: any,
  dispatch: AppDispatch
) => {
  if (images.length === 0) {
    Alert.alert("No images selected")
    return []
  }

  try {
    dispatch(setProgress(0))
    dispatch(setStatus("uploading"))

    const uploadedImages: { downloadUrl: string; metadata: any }[] = []

    for (let i = 0; i < images.length; i++) {
      const uri = images[i]
      const fileName = `${uri.split("/").pop()}_${Date.now()}` || `images_${Date.now()}.jpg`
      const uploadRef = storage().ref(`/images/${fileName}`)

      const task = uploadRef.putFile(uri, { customMetadata: metadata })

      await new Promise<void>((resolve, reject) => {
        task.on(
          "state_changed",
          (snapshot) => {
            const progress =
              ((i + snapshot.bytesTransferred / snapshot.totalBytes) /
                images.length) *
              100
            dispatch(setProgress(progress))
          },
          reject,
          async () => {
            const downloadUrl = await uploadRef.getDownloadURL()
            uploadedImages.push({ downloadUrl, metadata })
            resolve()
          }
        )
      })
    }

    dispatch(setStatus("success"))
    return uploadedImages
  } catch (error: any) {
    dispatch(setStatus("failed"))
    dispatch(setError(error?.message))
    Alert.alert("Error uploading images", error?.message)
    return []
  }
}
