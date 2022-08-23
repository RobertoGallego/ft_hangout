import React, { useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import * as SMS from 'expo-sms'
import {Linking} from 'react-native'
import * as Contacts from 'expo-contacts';

function ContactScreen({ route, data, setData, navigation, colorsLight, translateApp }) {
  const { contact } = route.params;

  const [smsAvailable, setSmsAvailable] = React.useState(false);

    
  

  const onComposeSms = React.useCallback(async () => {
    if (smsAvailable) {
      await SMS.sendSMSAsync(
        contact.number,
        'This is my message',
      );
    }
  }, [smsAvailable]);

  React.useEffect(() => {

    const getSMS = async () => {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        console.log(isAvailable)
        // do your SMS stuff here
      } else {
        // misfortune... there's no SMS available on this device
      }
      // SMS.isAvailableAsync().then(setSmsAvailable);
    }

    getSMS()

  }, []);

  const addContact = {
    [Contacts.Fields.FirstName]: 'Nathaly',
    [Contacts.Fields.LastName]: 'Gallego',
    [Contacts.Fields.PhoneNumbers]: [
      {
          number: '(81) 8420-0123',
          isPrimary: true,
          digits: `8184200123`,
          countryCode: '+52',
          id: `JJJ-UNIQUE`,
          label: `JJJ`,
      },
    ],
    [Contacts.Fields.Emails]: 'Nathaly@example.com',
  };
  
  useEffect(() => {
    // (async () => {
    //   const { status } = await Contacts.requestPermissionsAsync();
    //   if (status === 'granted') {
    //     const contactId = await Contacts.addContactAsync(addContact);
    //     console.log(contactId)
    //   }
    // })();
  }, []);


  const removeContact = () => {
    setData(data.filter(item => item.id !== contact.id))
    navigation.navigate('Home')
  }

  const editContact = () => {
    navigation.navigate('NewContact', {contact})
  }

  

  return (
    <ScrollView keyboardShouldPersistTaps="true" style={{ backgroundColor: colorsLight ? "#CFCFCF" : "#636363" }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          { contact.image.length > 0 
            ? <Image 
                source={{
                  uri: contact.image
                }} 
                style={{width: 150, height: 150, borderRadius: 150 / 2}} 
              />
            : <Image 
                source={{
                  uri: 'https://cdn-icons.flaticon.com/png/512/3899/premium/3899618.png?token=exp=1658327535~hmac=f72ddfcb626533c8ef556869dcc9b6a1'
                }} 
                style={{width: 150, height: 150, borderRadius: 150 / 2}} 
              />
          }
          <View style={{ borderRadius: 6, backgroundColor: colorsLight ? "#F1F1F1" : "#6E6E6E", marginTop: 20, width: 350, alignItems: 'center'  }}>
            <Text style={{ color: colorsLight ? '#494949' : '#fff', fontSize: 25, marginTop: 10 }}>{contact.name + " " + contact.lastName}</Text>
            <Text style={{ color: colorsLight ? '#494949' : '#fff', fontSize: 15, marginTop: 10  }}>{translateApp ? 'Numero de telefono' : 'Phone number'}</Text>
            <Text style={{ color: colorsLight ? '#494949' : '#fff', fontSize: 25 }}>{contact.number}</Text>
            <Text style={{ color: colorsLight ? '#494949' : '#fff', fontSize: 15, marginTop: 10 }}>E-mail</Text>
            <Text style={{ color: colorsLight ? '#494949' : '#fff', fontSize: 15, marginBottom: 10 }}>{contact.email}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-evenly", width: "100%", paddingTop: 20 }}>
          <TouchableOpacity onPress={() => {Linking.openURL(`tel:${contact.number}`)}} style={{ justifyContent: 'center', marginHorizontal: 5, backgroundColor: '#388514', borderRadius: 6, paddingVertical: 10, paddingHorizontal: 12, flex: 1 }}>
            <Ionicons name="call" size={24} style={{ color: '#fff', alignSelf: "center", marginBottom: 6 }}/>
            <Text style={{ color: '#fff', alignSelf: "center" }}>{translateApp ? 'Llamada' : 'Call'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {Linking.openURL(`sms://${contact.number}`)}} style={{ justifyContent: 'center', backgroundColor: colorsLight ? "#F1F1F1" : '#6E6E6E', borderRadius: 6, paddingVertical: 10, paddingHorizontal: 12, flex: 1 }}>
            <AntDesign name="message1" size={24} style={{ color: colorsLight ? '#494949' : '#fff', alignSelf: "center", marginBottom: 6 }}/>
            <Text style={{ color: colorsLight ? '#494949' : '#fff', alignSelf: "center" }}>{translateApp ? 'Mensaje' : 'Message'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(`whatsapp://send?phone=${contact.number}`)} style={{ justifyContent: 'center', marginHorizontal: 5, backgroundColor: colorsLight ? "#F1F1F1" : '#6E6E6E', borderRadius: 6, paddingVertical: 10, paddingHorizontal: 12, flex: 1 }}>
            <Feather name="video" size={24} style={{ color: colorsLight ? '#494949' : '#fff', alignSelf: "center", marginBottom: 6 }}/>
            <Text style={{ color: colorsLight ? '#494949' : '#fff', alignSelf: "center" }}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(`mailto:${contact.email}`)} style={{ justifyContent: 'center', marginRight: 5, backgroundColor: colorsLight ? "#F1F1F1" : '#6E6E6E', borderRadius: 6, paddingVertical: 10, paddingHorizontal: 12, flex: 1 }}>
            <MaterialIcons name="alternate-email" size={24} style={{ color: colorsLight ? '#494949' : '#fff', alignSelf: "center", marginBottom: 6 }}/>
            <Text style={{ color: colorsLight ? '#494949' : '#fff', alignSelf: "center" }}>E-mail</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={editContact} style={{ borderRadius: 6, backgroundColor: colorsLight ? "#F1F1F1" : '#6E6E6E', marginTop: 20, width: 350, alignItems: 'center'  }}>
            <Text style={{ color: colorsLight ? '#494949' : '#fff', fontSize: 15, marginVertical: 10 }}>{translateApp ? 'Editar contacto' : 'Edit contact'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeContact} style={{ borderRadius: 6, backgroundColor: '#C01B0E', marginTop: 5, width: 350, alignItems: 'center'  }}>
            <Text style={{ color: '#fff', fontSize: 15, marginVertical: 10 }}>{translateApp ? 'Borrar contacto' : 'Delete contact'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ContactScreen