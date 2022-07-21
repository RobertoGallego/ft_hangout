import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <TouchableOpacity title="Pick an image from camera roll" onPress={pickImage}>
        {image 
          ? <Image source={{ uri: image }} style={{width: 150, height: 150, borderRadius: 150 / 2}}  />
          : <Image 
              source={{
                uri: "https://cdn-icons.flaticon.com/png/512/3899/premium/3899618.png?token=exp=1658327535~hmac=f72ddfcb626533c8ef556869dcc9b6a1",
              }} 
              style={{width: 150, height: 150, borderRadius: 150 / 2}} 
            />
        }
      </TouchableOpacity>
    </View>
  );
}
