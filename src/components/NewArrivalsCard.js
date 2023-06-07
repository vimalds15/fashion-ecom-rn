import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Bag from "../../assets/bag.png"

const NewArrivalsCard = ({title,brand,price,image}) => {
  return (
    <View className="max-w-[150px] justify-center items-center overflow-hidden mr-6">
      <Image source={{uri:image}} className="rounded-xl  h-36 w-32" />
      <View className="mt-2 justify-center items-center">
      <Text className="font-bold">{title}</Text>
      <Text className="text-xs">{brand}</Text>
      <Text className="font-extrabold">${price}</Text>
      </View>
    </View>
  )
}

export default NewArrivalsCard

const styles = StyleSheet.create({})