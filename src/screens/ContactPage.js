import * as React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

function ContactScreen({ route }) {
  const { contact } = route.params;

  return (
    <ScrollView keyboardShouldPersistTaps="true" style={{ backgroundColor: "#636363" }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <Image 
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }} 
            style={{width: 150, height: 150, borderRadius: 150 / 2}} 
          />
          <View style={{ borderRadius: 6, backgroundColor: '#6E6E6E', marginTop: 20, width: 350, alignItems: 'center'  }}>
            <Text style={{ color: '#fff', fontSize: 25, marginTop: 10 }}>{contact.name}</Text>
            <Text style={{ color: '#fff', fontSize: 15, marginTop: 10 }}>E-mail</Text>
            <Text style={{ color: '#fff', fontSize: 15 }}>margauxjosso25@gmail.com</Text>
            <Text style={{ color: '#fff', fontSize: 15, marginTop: 10  }}>Phone number</Text>
            <Text style={{ color: '#fff', fontSize: 25, marginBottom: 10 }}>{contact.number}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-evenly", width: "100%", paddingTop: 20 }}>
          <TouchableOpacity onPress={() => alert('This is a button!')} style={{ justifyContent: 'center', marginHorizontal: 5, backgroundColor: '#388514', borderRadius: 6, paddingVertical: 10, paddingHorizontal: 12, flex: 1 }}>
            <Ionicons name="call" size={24} style={{ color: '#fff', alignSelf: "center", marginBottom: 6 }}/>
            <Text style={{ color: '#fff', alignSelf: "center" }}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('This is a button!')} style={{ justifyContent: 'center', backgroundColor: '#6E6E6E', borderRadius: 6, paddingVertical: 10, paddingHorizontal: 12, flex: 1 }}>
            <AntDesign name="message1" size={24} style={{ color: '#fff', alignSelf: "center", marginBottom: 6 }}/>
            <Text style={{ color: '#fff', alignSelf: "center" }}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('This is a button!')} style={{ justifyContent: 'center', marginHorizontal: 5, backgroundColor: '#6E6E6E', borderRadius: 6, paddingVertical: 10, paddingHorizontal: 12, flex: 1 }}>
            <Feather name="video" size={24} style={{ color: '#fff', alignSelf: "center", marginBottom: 6 }}/>
            <Text style={{ color: '#fff', alignSelf: "center" }}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('This is a button!')} style={{ justifyContent: 'center', marginRight: 5, backgroundColor: '#6E6E6E', borderRadius: 6, paddingVertical: 10, paddingHorizontal: 12, flex: 1 }}>
            <MaterialIcons name="alternate-email" size={24} style={{ color: '#fff', alignSelf: "center", marginBottom: 6 }}/>
            <Text style={{ color: '#fff', alignSelf: "center" }}>E-mail</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ borderRadius: 6, backgroundColor: '#6E6E6E', marginTop: 20, width: 350, alignItems: 'center'  }}>
            <Text style={{ color: '#fff', fontSize: 15, marginVertical: 10 }}>Edit contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 6, backgroundColor: '#C01B0E', marginTop: 5, width: 350, alignItems: 'center'  }}>
            <Text style={{ color: '#fff', fontSize: 15, marginVertical: 10 }}>Delete contact</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ContactScreen