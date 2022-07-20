import React, { useState } from 'react'
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { Entypo } from '@expo/vector-icons' 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import HomeScreen from './src/screens/HomePage'
import ContactScreen from './src/screens/ContactPage'

const Stack = createNativeStackNavigator()

export default function App() {
  const [contacts, setContacts] = useState([
    { 
      name: "Roberto Gallego",
      number: "0645678957",
      image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    },
    { 
      name: "Margaux Josso",
      number: "0645678957",
      image: "",
    },
    { 
      name: "Patricia Riveros",
      number: "0645678957",
      image: "",
    },
    { 
      name: "Roberto Gallego",
      number: "0645678957",
      image: "",
    },
    // { 
    //   name: "Margaux Josso",
    //   number: "0645678957",
    //   image: "",
    // },
    // { 
    //   name: "Patricia Riveros",
    //   number: "0645678957",
    //   image: "",
    // },
    // { 
    //   name: "Roberto Gallego",
    //   number: "0645678957",
    //   image: "",
    // },
    // { 
    //   name: "Margaux Josso",
    //   number: "0645678957",
    //   image: "",
    // },
    // { 
    //   name: "Patricia Riveros",
    //   number: "0645678957",
    //   image: "",
    // },
    // { 
    //   name: "Roberto Gallego",
    //   number: "0645678957",
    //   image: "",
    // },
    // { 
    //   name: "Margaux Josso",
    //   number: "0645678957",
    //   image: "",
    // },
    // { 
    //   name: "Patricia Riveros",
    //   number: "0645678957",
    //   image: "",
    // },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleNewContact = () => {
    console.log("caca")
    // 👇️ push to end of state array
    setContacts(current => [...current,   
      { 
      name: "Bartolome Gallego",
      number: "0645678957",
      image: "",
      },
    ])

    // 👇️ spread an array into the state array
    // setNames(current => [...current, ...['Carl', 'Delilah']]);

    // 👇️ push to beginning of state array
    // setNames(current => ['Zoey', ...current]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen"
          options={{orientation: 'all'}} 

        screenOptions={{ headerShown: true, orientation: "all" }}
      >
        <Stack.Screen name="Home" options={{
          title: 'Contacts',
          headerStyle: {
            backgroundColor: '#989898',
          },
          headerRight: () => (
            <View >
              <Modal
                onBackdropPress={() => setModalVisible(!modalVisible)}
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View  style={{ backgroundColor: '#989898', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <Pressable
                      style={{ width: 360, paddingVertical: 20, backgroundColor: '#BDBDBD', alignItems: 'center' }}
                      onPress={handleNewContact}
                    > 
                      <Entypo name="plus" size={24} color="black" />
                      <Text>New contact</Text>
                  </Pressable>
                  <Pressable
                      style={{ width: 360, paddingVertical: 20, backgroundColor: '#BABABA', alignItems: 'center' }}
                      onPress={() => console.log("ok")}
                    >
                      <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
                      <Text>Dark mode</Text>
                  </Pressable>
                  <Pressable
                      style={{ width: 360, paddingVertical: 20, backgroundColor: '#BDBDBD', alignItems: 'center' }}
                      onPress={() => console.log("ok")}
                    >
                      <Entypo name="language" size={24} color="black" />
                      <Text>EN - ES</Text>
                  </Pressable>
                  <Pressable
                    style={{ width: 360, paddingVertical: 20, backgroundColor: '#BABABA', alignItems: 'center' }}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <AntDesign name="up" size={24} color="black" />
                    <Text>Hide Modal</Text>
                  </Pressable>
                </View>
              </Modal>
              <Button
                onPress={() => setModalVisible(true)}
                title="Menu"
                color={'#636363'}
              />
              {/* <Pressable
                style={{ backgroundColor: 'red' }}
                onPress={() => setModalVisible(true)}
              >
                <Text>Show Modal</Text>
              </Pressable> */}
            </View>
          ),
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTintColor: '#fff',
        }}>
            {(props) => <HomeScreen {...props} data={contacts} />}
        </Stack.Screen>
        <Stack.Screen name="Contact" component={ContactScreen} options={{
          title: 'Contact',
          headerStyle: {
            backgroundColor: '#989898',
          },
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert('This is a button!')}
          //     title="Modified"
          //     color={'#636363'}
          //   />
          // ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
