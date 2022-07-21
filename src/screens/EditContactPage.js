import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

function EditContactScreen({ navigation, offModal, generateUUID, setData, route, data }) {
  const { contact } = route.params

  useEffect(() => {
    if (contact != undefined) {
      setNewContact((editContact) => ({...editContact, id: contact.id, name: contact.name, lastName: contact.lastName, number: contact.number, email: contact.email, image: contact.image }))
    }
  }, [])

  const [newContact, setNewContact] = useState({
    id: "",
    name: "",
    lastName: "",
    number: "",
    email: "",
    image: "",
  })

  const handleNewContact = () => {
    if (contact != undefined) {
      
      setData(data.filter(item => item.id !== contact.id));
      setData(current => [...current, newContact])
      navigation.navigate('Home')
    } else {
      console.log("gg")
      setNewContact((editContact) => ({...editContact, id: generateUUID }))
      setData(current => [...current, newContact])
      navigation.navigate('Home')
    }
  };

  const handleNameChange = (contactName) => {
    setNewContact((editContact) => ({...editContact, name: contactName}))
  }

  const handleGivenNameChange = (contactLastName) => {
    setNewContact((editContact) => ({...editContact, lastName: contactLastName }))
  }

  const handleNumberChange = (contactNumber) => {
    setNewContact((editContact) => ({...editContact, number: contactNumber }))
  }

  const handleEmailChange = (contactEmail) => {
    setNewContact((editContact) => ({...editContact, email: contactEmail }))
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setNewContact((editContact) => ({...editContact, image: result.uri }))
    }
    offModal(false)
  };

  return (
    <ScrollView keyboardShouldPersistTaps="true" style={{ backgroundColor: "#636363" }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <TouchableOpacity title="Pick an image from camera roll" onPress={pickImage}>
          {newContact.image 
            ? <Image source={{ uri: newContact.image  }} style={{width: 150, height: 150, borderRadius: 150 / 2}}  />
            : <Image 
                source={{
                  uri: "https://cdn-icons.flaticon.com/png/512/3899/premium/3899618.png?token=exp=1658327535~hmac=f72ddfcb626533c8ef556869dcc9b6a1",
                }} 
                style={{width: 150, height: 150, borderRadius: 150 / 2}} 
              />
          }
        </TouchableOpacity>
          <View style={{ borderRadius: 6, backgroundColor: '#6E6E6E', marginTop: 20, width: 350, alignItems: 'center', paddingBottom: 20 }}>
            <Text style={{ color: '#fff', fontSize: 18, marginTop: 10 }}>Given Name</Text>
            <TextInput
              placeholder="First name"
              maxLength={20}
              value={newContact.name}
              onChangeText={handleNameChange}
              textAlign="center"
            />
            <View style={{ borderBottomColor: 'grey', width: 300, borderBottomWidth: 1}}/>

            <Text style={{ color: '#fff', fontSize: 18, marginTop: 10 }}>Familly name</Text>
            <TextInput
              placeholder="Last name"
              maxLength={20}
              value={newContact.lastName}
              onChangeText={handleGivenNameChange}
              textAlign="center"
            />
            <View style={{ borderBottomColor: 'grey', width: 300, borderBottomWidth: 1}}/>
            
            <Text style={{ color: '#fff', fontSize: 18, marginTop: 10  }}>Phone number</Text>
            <TextInput
              placeholder="ex: 09 05 45 75 88"
              maxLength={20}
              keyboardType={"numeric"}
              value={newContact.number}
              onChangeText={handleNumberChange}
              textAlign="center"
            />
            <View style={{ borderBottomColor: 'grey', width: 300, borderBottomWidth: 1}}/>

            <Text style={{ color: '#fff', fontSize: 18, marginTop: 10 }}>E-mail</Text>
            <TextInput
              placeholder="Contact email"
              keyboardType={"email-address"}
              maxLength={40}
              value={newContact.email}
              onChangeText={handleEmailChange}
              textAlign="center"
            />
            <View style={{ borderBottomColor: 'grey', width: 300, borderBottomWidth: 1}}/>
          </View>
        </View>
        <TouchableOpacity onPress={handleNewContact} style={{ borderRadius: 6, backgroundColor: '#388514', marginTop: 20, width: 350, alignItems: 'center'  }}>
            <Text style={{ color: '#fff', fontSize: 18, marginVertical: 20 }}>Add contact</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default EditContactScreen