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
import EditContactScreen from './src/screens/EditContactPage'

const Stack = createNativeStackNavigator()

export default function App() {
  const [contacts, setContacts] = useState([
    { 
      id: generateUUID(10),
      name: "Roberto",
      lastName: "Gallego",
      email: "Roberto@gmail.com",
      number: "0645678957",
      image: "",
    },
    { 
      id: generateUUID(10),
      name: "Margaux",
      lastName: "Josso",
      email: "Margaux@gmail.com",
      number: "0645678957",
      image: "",
    },
    { 
      id: generateUUID(10),
      name: "Patricia",
      lastName: "Riveros",
      email: "Patricia@gmail.com",
      number: "0645678957",
      image: "",
    },
    { 
      id: generateUUID(10),
      name: "Bartolome",
      lastName: "Gallego",
      email: "Bartolome@gmail.com",
      number: "0645678957",
      image: "",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen"
            options={{orientation: 'all'}} 

          screenOptions={{ headerShown: true, orientation: "all" }}
        >
          <Stack.Screen name="Home" options={({navigation}) => ({
            title: 'Contacts',
            headerStyle: {
              backgroundColor: '#989898',
            },
            // headerRight: () => (
            //   <View >
            //     <Modal
            //       animationType="fade"
            //       hardwareAccelerated={true}
            //       transparent={true}
            //       visible={modalVisible}
            //       onRequestClose={() => {
            //         setModalVisible(!modalVisible);
            //       }}
            //     >
            //       <View  style={{ backgroundColor: '#989898', alignItems: 'center', justifyContent: 'flex-start' }}>
            //         <Pressable
            //             style={{ width: 360, paddingVertical: 20, backgroundColor: '#BDBDBD', alignItems: 'center' }}
            //             onPress={() => { setModalVisible(false), navigation.navigate('NewContact', {})}}
            //           > 
            //             <Entypo name="plus" size={24} color="black" />
            //             <Text>New contact</Text>
            //         </Pressable>
            //         <Pressable
            //             style={{ width: 360, paddingVertical: 20, backgroundColor: '#BABABA', alignItems: 'center' }}
            //             onPress={() => console.log("ok")}
            //           >
            //             <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
            //             <Text>Dark mode</Text>
            //         </Pressable>
            //         <Pressable
            //             style={{ width: 360, paddingVertical: 20, backgroundColor: '#BDBDBD', alignItems: 'center' }}
            //             onPress={() => console.log("ok")}
            //           >
            //             <Entypo name="language" size={24} color="black" />
            //             <Text>EN - ES</Text>
            //         </Pressable>
            //         <Pressable
            //           style={{ width: 360, paddingVertical: 20, backgroundColor: '#BABABA', alignItems: 'center' }}
            //           onPress={() => setModalVisible(!modalVisible)}
            //         >
            //           <AntDesign name="up" size={24} color="black" />
            //           <Text>Hide Modal</Text>
            //         </Pressable>
            //       </View>
            //     </Modal>
            //     <Button
            //       onPress={() => setModalVisible(true)}
            //       title="Menu"
            //       color={'#636363'}
            //     />
            //   </View>
            // ),
            headerTitleStyle: {
              fontWeight: 'normal',
            },
            headerTintColor: '#fff',
          })}>
              {(props) => <HomeScreen {...props} data={contacts} setData={setContacts} />}
          </Stack.Screen>
          <Stack.Screen name="Contact" options={{
            title: 'Contact',
            headerStyle: {
              backgroundColor: '#989898',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}>
            {(props) => <ContactScreen {...props} data={contacts} setData={setContacts} />}
          </Stack.Screen>
          <Stack.Screen name="NewContact" options={{
            title: 'New Contact',
            headerStyle: {
              backgroundColor: '#989898',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}>
            {(props) => <EditContactScreen {...props} data={contacts} setData={setContacts} generateUUID={generateUUID(10)} offModal={setModalVisible}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    {/* <View>
      <Text style={{ color: '#fff', fontSize: 15, marginTop: 10 }}>E-mail</Text>
    </View> */}
    </View>
  )
}

function generateUUID(digits) {
  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
  let uuid = [];
  for (let i = 0; i < digits; i++) {
      uuid.push(str[Math.floor(Math.random() * str.length)]);
  }
  return uuid.join('');
}
