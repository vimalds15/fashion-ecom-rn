import {  Text, View, Image } from "react-native";
import React from "react";
import Bag from "../../assets/bag.png";

const ProductItem = () => {
  return (

    <View  className="bg-white p-2 justify-center items-center rounded-lg w-full mb-4 border border-slate-200" >
    <View className="flex-row justify-center items-center">
      <View className=" items-center justify-center">
        <Image source={Bag} className="rounded-xl h-20 w-20 object-contain" />
      </View>
      <View className="flex-1 w-[100%] p-2">
        <View>
          <Text className="font-bold">Roller Rabbit</Text>
          <Text className="text-xs">Vado Odalle Dress</Text>
        </View>
        <View className="mt-2">
          <Text className="text-xs">Price: $489</Text>
        </View>
      </View>
      </View>
    </View>

  );
};

export default ProductItem;

