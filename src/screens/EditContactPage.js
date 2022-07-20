import * as React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

function EditContactScreen({ route }) {
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