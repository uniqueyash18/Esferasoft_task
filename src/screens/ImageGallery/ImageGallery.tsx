import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { requestGalleryPermission } from '@/utils/permission'
import { CameraRoll, PhotoIdentifier } from "@react-native-camera-roll/camera-roll";
import { useDispatch, useSelector } from 'react-redux'
import { resetSelectedImages, setSelectedImages } from '@/redux/imageSlices'
import { RootState } from '@/redux'
import { colors } from '@/utils/colors'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/navigation/types'
import { Paths } from '@/navigation/paths'
import { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

interface Props {
  navigation: StackNavigationProp<RootStackParamList>
}
const ImageGallery: FC<Props> = ({ navigation }) => {
  const [singleSelect, setSingleSelect] = useState(true)
  const [images, setImages] = useState<PhotoIdentifier[]>([])
  const selectedImages = useSelector((state: RootState) => state.images.selectedImages)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      await firebase.auth().signInAnonymously()
      firestore().collection('images');
      const isGranted = await requestGalleryPermission()
      if (isGranted) {
        const images = await getImages()
        setImages(images.edges)
      }
    })()
  }, [])
  const getImages = async () => {
    const images = await CameraRoll.getPhotos({
      first: 100,
      after: undefined,
      assetType: 'Photos',
    })
    return images
  }

  const handleImagePress = (item: any) => {
    if (singleSelect) {
      dispatch(setSelectedImages([item.node.image.uri]))
      return
    } else {
      if (selectedImages.includes(item.node.image.uri)) {
        dispatch(setSelectedImages(selectedImages.filter((image) => image !== item.node.image.uri)))
      } else {
        dispatch(setSelectedImages([...selectedImages, item.node.image.uri]))
      }
    }
  }

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity style={[{ borderWidth: selectedImages.includes(item.node.image.uri) ? 2 : 0, borderColor: colors.yellow }, styles.imageContainer]} onPress={() => handleImagePress(item)}>
        <Image source={{ uri: item?.node?.image?.uri }} style={styles.image} />
      </TouchableOpacity>)
  }

  const handleNext = () => {
    navigation.navigate(Paths.FilterUploadScreen)
  }

  const handleReset = () => {
    dispatch(resetSelectedImages())
    setSelectedImages([])
    setSingleSelect(true)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>ImageGallery</Text>
          <TouchableOpacity style={styles.selectBtn} onPress={() => {
            setSingleSelect(!singleSelect)
            dispatch(resetSelectedImages())
          }}>
            <Text>{singleSelect ? 'Single Select' : 'Multi Select'}</Text>
          </TouchableOpacity>
        </View>
        {/* Gallery */}
        <View style={styles.gallery}>
          <FlatList
            data={images}
            renderItem={renderItem}
            numColumns={3}
            keyExtractor={(item) => item.node.image.uri}
            columnWrapperStyle={styles.columnWrapper}
          />
          {selectedImages?.length > 0 && <View style={styles.footer}>
            <TouchableOpacity style={styles.nextBtn} onPress={() => handleReset()}>
              <Text style={{ ...styles.nextBtnText, color: colors.red }}>Reset Images</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextBtn} onPress={() => handleNext()}>
              <Text style={styles.nextBtnText}>Select {selectedImages?.length > 0 ? selectedImages?.length : ''} Images</Text>
            </TouchableOpacity>
          </View>}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ImageGallery