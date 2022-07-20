import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'

function HomeScreen({ navigation, data }) {

  const strAscending = [...data].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  )

  return (
    <ScrollView keyboardShouldPersistTaps="true" style={{ backgroundColor: "#636363" }}>
      {strAscending.flatMap((contact, index) => {
        console.log(contact.image.length)
        return (
          <TouchableOpacity delayPressIn={30} style={{ flex: 1, width: "100%" }} key={index} onPress={() => navigation.navigate('Contact', {contact})}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, backgroundColor: index % 2 == 1 ? "#6E6E6E": "#636363" }}>
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
                  <Text style={{ fontSize: 20, color: "#E8E8E8" }} >{contact.name}</Text>
                  <Text style={{ color: "#E8E8E8" }}>{contact.number}</Text>
                </View>
              </View>
              <AntDesign name="right" size={24} color="#E8E8E8" />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1, height: 1, backgroundColor: 'grey'}} />
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  );
}

export default HomeScreen