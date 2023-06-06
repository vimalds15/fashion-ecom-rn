import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Bag from "../../assets/bag.png";

const OrderItem = () => {
  return (

    <View  className="bg-white p-2 justify-center items-center rounded-lg w-full mb-2 border border-slate-200" >
    <View className="flex-row justify-center items-center">
      <View className="p-2 items-center justify-center">
        <Image source={Bag} className="rounded-xl h-20 w-20 object-contain" />
      </View>
      <View className="flex-1 flex-row  justify-between items-center w-[100%]  p-4">
        <View>
          <Text className="font-bold">Roller Rabbit</Text>
          <Text className="text-xs">Vado Odalle Dress</Text>
          <Text className="text-xs">Quantity: 1</Text>
          <Text className="text-xs">Size: L</Text>
          <Text className="text-xs">OrderId: #74238974927</Text>
        </View>
        <View className="flex-row  px-3 h-8 justify-center items-center">
          <Text className="font-extrabold">$195.00</Text>
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