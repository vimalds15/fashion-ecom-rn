import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Bag from "../../assets/bag.png";

const CartItem = () => {
  return (
    <View >
    <View className="flex-row">
      <View className="p-2">
        <Image source={Bag} className="rounded-xl h-20 w-20 object-contain" />
      </View>
      <View className="flex-1 flex-row  justify-between items-center w-[100%]  p-4">
        <View>
          <Text className="font-bold">The Marc Jacobs</Text>
          <Text className="text-xs">Traveler Tote</Text>
          <Text className="font-extrabold">$195.00</Text>
        </View>
        <View className="flex-row  px-3 h-8 justify-center items-center bg-gray-200  rounded-3xl">
          <Pressable className="mr-4">
            <Text className="font-semibold">-</Text>
          </Pressable>
          <Text>1</Text>
          <Pressable className="ml-4">
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
      </View>
      <View className="my-1 border border-gray-200 " />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
