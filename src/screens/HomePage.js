import React, { useEffect } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons' 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

function HomeScreen({ navigation, data, setColorsLight, colorsLight, setTranslateApp, translateApp, count, setCount }) {
  const strAscending = [...data].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  )

  const handleChangeColor = () => {
    setColorsLight(!colorsLight)
  }

  const handleTranslateApp = () => {
    setTranslateApp(!translateApp)
  }
  

  const handleBackgroundDate = () => {
    alert(`You was ${count} seconds inactive`)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count])

  return (
    <View style={{ flex: 1 }}>
    <ScrollView keyboardShouldPersistTaps="true" style={{ backgroundColor: colorsLight ? "#CFCFCF" : "#636363"  }}>
        {strAscending.flatMap((contact, index) => {
          return (
            <TouchableOpacity delayPressIn={30} style={{ flex: 1, width: "100%" }} key={index} onPress={() => navigation.navigate('Contact', {contact})}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, 
                backgroundColor: colorsLight
                  ? index % 2 == 1 ? "#F1F1F1": "#CFCFCF"
                  : index % 2 == 1 ? "#6E6E6E": "#636363"
                }}>
                <View style={{ flexDirection: "row"}}>
                  { contact.image.length > 0 
                    ? <Image 
                        source={{
                          uri: contact.image
                        }} 
                        style={{width: 50, height: 50, borderRadius: 50 / 2}} 
                      />
                    : <Image 
                        source={{
                          uri: 'https://cdn-icons.flaticon.com/png/512/3899/premium/3899618.png?token=exp=1658327535~hmac=f72ddfcb626533c8ef556869dcc9b6a1'
                        }} 
                        style={{width: 50, height: 50, borderRadius: 50 / 2}} 
                      />
                  }
                  <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, color: colorsLight ? "#494949" : "#E8E8E8" }} >{contact.name}</Text>
                    <Text style={{ color: colorsLight ? "#494949" : "#E8E8E8" }}>{contact.number}</Text>
                  </View>
                </View>
                <AntDesign name="right" size={24} color={ colorsLight ? "#494949" :"#E8E8E8" } />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', flex: 1, height: 1, backgroundColor: 'grey'}} />
            </TouchableOpacity>
          )
        })}
      
    </ScrollView>
    <View style={{ paddingVertical: 10, backgroundColor: colorsLight ? "#F1F1F1" : '#494949', width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
      <Pressable
          style={{ alignItems: 'center', flex: 1 }}
          onPress={() => { navigation.navigate('NewContact', {})}}
        > 
          <Entypo name="plus" size={24} color={colorsLight ? "#494949" : "white"} />
          <Text style={{ color: colorsLight ? "#494949" : "#fff" }}>{translateApp ? 'Agregar' : 'Add'}</Text>
      </Pressable>
      <Pressable
          style={{ alignItems: 'center', flex: 1 }}
          onPress={handleChangeColor}
        >
          <MaterialCommunityIcons name="theme-light-dark" size={24} color={colorsLight ? "#494949" : "white"} />
          <Text style={{ color: colorsLight ? "#494949" : "#fff" }}>Dark mode</Text>
      </Pressable>
      <Pressable
          style={{ alignItems: 'center', flex: 1 }}
          onPress={handleTranslateApp}
        >
          <Entypo name="language" size={24} color={colorsLight ? "#494949" : "white"} />
          <Text style={{ color: colorsLight ? "#494949" : "#fff" }}>{translateApp ? 'ES' : 'EN'}</Text>
      </Pressable>
      <Pressable
        style={{ alignItems: 'center', flex: 1 }}
        onPress={handleBackgroundDate}
      >
        <Ionicons name="timer-outline" size={24} color={colorsLight ? "#494949" : "white"} />
        <Text style={{ color: colorsLight ? "#494949" : "#fff" }}>Time out</Text>
      </Pressable>
    </View>
  </View>
  );
}

export default HomeScreen