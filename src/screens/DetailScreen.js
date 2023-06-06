import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DetailImage from "../../assets/detail.png";

const sizes = ["S", "M", "L", "XL", "XXL"];

const DetailScreen = ({navigation}) => {
  
  const goBack =() => {
    navigation.goBack()
  }

  return (
    <View className="h-full bg-white">
      <View className=" bg-black w-full">
        <Pressable onPress={goBack} className="mt-8 absolute z-10 top-4 justify-center items-center h-10 w-10 mx-4 rounded-full bg-black">
          <MaterialIcons name="chevron-left" size={34} color={"#fff"} />
        </Pressable>
          <Image source={DetailImage} className="object-cover w-full" />
      </View>

      <View className="rounded-[30px]  bg-white mt-[-20px] p-5">
        <View>
        <View className="flex-row justify-between">
            <View>
                <Text className="font-extrabold text-lg">Roller Rabbit</Text>
                <Text className="text-xs text-gray-500">Vado Odelle Dress</Text>
            </View>
            <View>
                <View className="flex-row px-3 py-1  justify-center items-center bg-gray-200 rounded-3xl">
                <Pressable className="mr-4">
                    <Text className="font-semibold">-</Text>
                </Pressable>
                <Text >1</Text>
                <Pressable className="ml-4">
                    <Text>+</Text>
                </Pressable>
                </View>
            </View>
        </View>
        <View className="mt-6">
          <Text className="font-extrabold mb-3">Size</Text>
          <View className="flex-row justify-evenly">
          {sizes.map((size) => (
            <View className="justify-center items-center rounded-full w-10 h-10 bg-white border border-gray-300">
                <Text>{size}</Text>
            </View>
          ))}
          </View>
        </View>
        <View className="mt-6">
          <Text className="font-extrabold mb-3">Description</Text>
          <Text className="text-gray-500 text-xs">
            Get a little lift from these Sam Edelman sandals featuring ruched
            straps and leather lace-up ties, while a braided jute sole makes a
            fresh statement for summer
          </Text>
        </View>
        </View>
      </View>
    <View className="absolute bottom-4 left-0 w-full px-4">
      <View className="flex-row justify-between items-center mt-8">
        <View >
          <Text className="text-gray-500 mb-[-4px]">Total Price</Text>
          <Text className="font-bold text-lg">$198.00</Text>
        </View>
        <Pressable className="items-center bg-black px-6 py-3 rounded-3xl">
          <Text className="text-white font-semibold">Add to Cart</Text>
        </Pressable>
      </View>
      </View>
    </View>
  );
};

export default DetailScreen;

