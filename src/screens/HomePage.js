import * as React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

function isOdd(num) { return num % 2;}

function HomeScreen() {
  const contacts = [
    { 
      id: 1,
      name: "Roberto Gallego",
      number: "0645678957",
      image: "",
    },
    { 
      id: 2,
      name: "Margaux Josso",
      number: "0645678957",
      image: "",
    },
    { 
      id: 3,
      name: "Patricia Riveros",
      number: "0645678957",
      image: "",
    },
    { 
      id: 4,
      name: "Roberto Gallego",
      number: "0645678957",
      image: "",
    },
    { 
      id: 5,
      name: "Margaux Josso",
      number: "0645678957",
      image: "",
    },
    { 
      id: 6,
      name: "Patricia Riveros",
      number: "0645678957",
      image: "",
    },
    { 
      id: 1,
      name: "Roberto Gallego",
      number: "0645678957",
      image: "",
    },
    { 
      id: 2,
      name: "Margaux Josso",
      number: "0645678957",
      image: "",
    },
    { 
      id: 3,
      name: "Patricia Riveros",
      number: "0645678957",
      image: "",
    },
    { 
      id: 4,
      name: "Roberto Gallego",
      number: "0645678957",
      image: "",
    },
    { 
      id: 5,
      name: "Margaux Josso",
      number: "0645678957",
      image: "",
    },
    { 
      id: 6,
      name: "Patricia Riveros",
      number: "0645678957",
      image: "",
    },
  ]

  const strAscending = [...contacts].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  )

  return (
    <ScrollView style={{ backgroundColor: "#636363" }}>
      {strAscending.map((contact, index) => {
        return (
          <View style={{ flex: 1, width: "100%" }} index={contact.id}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, backgroundColor: index % 2 == 1 ? "#6E6E6E": "#636363" }}>
              <View style={{ flexDirection: "row"}}>
                <Image 
                source={{
                  uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
                }} 
                style={{width: 50, height: 50, borderRadius: 50 / 2}} 
                />
                <View style={{ paddingHorizontal: 20 }}>
                  <Text style={{ fontSize: 20, color: "#E8E8E8" }} >{contact.name}</Text>
                  <Text style={{ color: "#E8E8E8" }}>{contact.number}</Text>
                </View>
              </View>
              <AntDesign name="right" size={24} color="#E8E8E8" />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1, height: 1, backgroundColor: 'grey'}} />
          </View>
        )
      })}
    </ScrollView>
  );
}

export default HomeScreen