import { IconByVariant } from '@/components/atoms'
import { RootStackParamList } from '@/navigation/types'
import { RootState } from '@/redux'
import { setProgress, setStatus } from '@/redux/uploadSlice'
import { uploadImages } from '@/services/uploadImages'
import { colors } from '@/utils/colors'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { Alert, FlatList, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Contrast, Grayscale, Invert, Sepia } from 'react-native-color-matrix-image-filters'
import * as Progress from 'react-native-progress'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'

interface Props {
  navigation: StackNavigationProp<RootStackParamList>
}
const FilterUploadScreen: FC<Props> = ({ navigation }) => {
  const selectedImages = useSelector((state: RootState) => state.images.selectedImages)
  const { progress, status } = useSelector((state: RootState) => state.upload)
  const [filterKey, setFilterKey] = useState<string>('original')
  const [description, setDescription] = useState<string>('')
  const dispatch = useDispatch()
  const filters = [
    { key: 'original', label: 'Original', Component: null },
    { key: 'greyscale', label: 'Greyscale', Component: Grayscale },
    { key: 'sepia', label: 'Sepia', Component: Sepia },
    { key: 'invert', label: 'Invert', Component: Invert },
    { key: 'contrast', label: 'Contrast', Component: Contrast }
  ]
  const Component = filters.find((item) => item.key === filterKey)?.Component
  const handleFilterPress = (item: { key: string, label: string, Component: any }) => {
    setFilterKey(item.key)
  }

  const renderItem = ({ item }: { item: string }) => {
    if (Component) {
      return (
        <Component>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        </Component>
      )
    }
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    )
  }
  const renderFilterItem = ({ item }: { item: { key: string, label: string, Component: any } }) => {
    return (
      <TouchableOpacity onPress={() => handleFilterPress(item)} style={[{ ...styles.filterItemContainer }, filterKey === item?.key && { borderWidth: 1, borderColor: colors.primary }]}>
        <Text>{item?.label}</Text>
      </TouchableOpacity>
    )
  }

  const handleUpload = async () => {
    if (description.trim() == '') {
      Alert.alert('Error', 'Please enter a description')
      return
    }
    uploadImages(selectedImages, { description: description, filterKey: filterKey }, dispatch).then((res) => {
      console.log(res, 'resres')
      if (res) {
        navigation.goBack()
        dispatch(setProgress(0))
        dispatch(setStatus('idle'))
      }
    })
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconByVariant path="backIcon" stroke={colors.primary} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>ImageGallery</Text>
            </View>
            {status == 'uploading' &&
              <View style={styles.uploadingContainer}>
                <Text style={styles.uploadingText}>Uploading...</Text>
                <Progress.Bar progress={progress} width={200} />
              </View>
            }
            {/* Image Preview */}
            <View>
              <FlatList
                data={selectedImages}
                horizontal
                renderItem={renderItem}
                keyExtractor={(item) => item}
                pagingEnabled
              />
            </View>
            <TextInput
              style={styles.textInput}
              multiline
              placeholderTextColor={colors.greyText}
              placeholder='Enter Description'
              value={description}
              onChangeText={setDescription}
            />
          </ScrollView>
        </KeyboardAvoidingView>
        <View style={styles.filterContainer}>
          <Text style={styles.headerTitle}>Filter</Text>
          <FlatList
            data={filters}
            renderItem={renderFilterItem}
            keyExtractor={(item) => item?.key}
            horizontal
            style={styles.filterList}
          />
        </View>
        <TouchableOpacity disabled={status == 'uploading'} style={styles.uploadBtn} onPress={() => handleUpload()}>
          <Text style={styles.uploadBtnText}>{status == 'uploading' ? 'Uploading...' : 'Upload Image'}</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView >
  )
}

export default FilterUploadScreen