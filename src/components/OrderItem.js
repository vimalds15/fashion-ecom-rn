import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const OrderItem = ({orderId,title,image,brand,date,price,qty}) => {
  return (

    <View  className="bg-white justify-center items-center rounded-lg w-full
     mb-2 border border-slate-200" >
    <View className="flex-row justify-center items-center">
      <View className="p-2 items-center justify-center">
        <Image source={{uri:image}} className="rounded-xl h-24 w-24 object-contain" />
      </View>
      <View className="flex-1 flex-row  justify-between items-center w-[100%] pl-2">
        <View>
          <Text className="font-bold">{title}</Text>
          <Text className="text-xs mt-1">{brand}</Text>
          <Text className="text-xs">Quantity: {qty}</Text>
          <Text className="text-xs">Date: {date}</Text>
          <Text className="text-xs">OrderId: <Text className="font-semibold">#{orderId}</Text></Text>
        </View>
        <View className="flex-row  px-3 h-8 justify-center items-center">
          <Text className="font-extrabold">${price}</Text>
        </View>
      </View>
      </View>
    </View>

  );
};

export default OrderItem;

const styles=StyleSheet.create({
    card: {
        
      },
      shadowProp: {
        shadowColor: '#111',
        elevation:6,
        shadowRadius:20
      },
})