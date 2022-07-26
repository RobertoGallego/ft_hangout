import React, { useRef, useState, useEffect } from 'react'
import { AppState } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import { Entypo } from '@expo/vector-icons' 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import * as Contacts from 'expo-contacts';

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
    { 
      id: generateUUID(10),
      name: "Rosalie",
      lastName: "Aguillon",
      email: "Rosalie@gmail.com",
      number: "0698472546",
      image: "",
    },
  ]);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      console.error(e)
    }
  }

  const storeContact = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@scontacts', jsonValue)
    } catch (e) {
      console.error(e)
    }
  }

  const [contactsPersist, setContactsPersist] = useState()

  useEffect(() => {
    const getDataContact = async() => {
      try {
        if (AsyncStorage.getItem("@scontacts") === null){
          await AsyncStorage.setItem("@scontacts", contacts)
        }
  
        const getStoredSaved = await AsyncStorage.getItem("@scontacts") || ""
        
        setContactsPersist(getStoredSaved)
      } catch(e) {
        console.error(e)
      }
    }
  }, [])

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [translateApp, setTranslateApp] = useState(false)
  const [colorsLight, setColorsLight] = useState(false)
  const [count, setCount] = useState(0)
  const [timerForBackground, setTimerForBackground] = useState()

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if ( 
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        const getData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            var endDate   = new Date();
            setTimerForBackground((endDate.getTime() - JSON.parse(jsonValue).dateBackground) / 1000)
            // console.log("okaA 2", endDate.getTime() , dataFromStore.dataTimeBackground, seconds )
            // return jsonValue != null ? JSON.parse(jsonValue) : null;
          } catch(e) {
            console.error(e)
          }
        }
        getData()
      }

      else if ( 
        appState.current.match(/active/) &&
        nextAppState === "inactive" || nextAppState === "background"
      ) {
        storeData({ 
          dateBackground: new Date().getTime(), 
        })
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [count]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data[0];
        }
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen"
            options={{orientation: 'all'}} 

          screenOptions={{ headerShown: true, orientation: "all" }}
        >
          <Stack.Screen name="Home" options={({navigation}) => ({
            title: translateApp ? 'Mi lista' : 'My list',
            headerStyle: {
              backgroundColor: colorsLight ? '#F1F1F1' : '#494949',
            },
            headerTitleStyle: {
              fontWeight: 'normal',
            },
            headerTintColor: colorsLight ? '#494949' : '#fff',
            headerRight: () => (
              <Text style={{ color: '#fff', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', fontSize: 18 }}>{contacts.length} {translateApp ? 'Contactos' : 'Contacts'}</Text>
            ),
          })}>
              {(props) => <HomeScreen {...props} count={count} setCount={setCount} data={contacts} newData={contactsPersist} setData={setContacts} colorsLight={colorsLight} setColorsLight={setColorsLight} translateApp={translateApp} setTranslateApp={setTranslateApp} timerForBackground={timerForBackground}/>}
          </Stack.Screen>
          <Stack.Screen name="Contact" options={{
            title: translateApp ? 'Contacto' : 'Contact',
            headerStyle: {
              backgroundColor: colorsLight ? '#F1F1F1' : '#494949',
            },
            headerTintColor: colorsLight ? '#494949' : '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}>
            {(props) => <ContactScreen {...props} data={contacts} colorsLight={colorsLight} setData={setContacts} translateApp={translateApp} />}
          </Stack.Screen>
          <Stack.Screen name="NewContact" options={{
            title: translateApp ? 'Mi Contacto' : 'My contact',
            headerStyle: {
              backgroundColor: colorsLight ? '#F1F1F1' : '#494949',
            },
            headerTintColor: colorsLight ? '#494949' : '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}>
            {(props) => <EditContactScreen {...props} data={contacts} setData={setContacts} colorsLight={colorsLight}  generateUUID={generateUUID(10)} translateApp={translateApp} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
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
