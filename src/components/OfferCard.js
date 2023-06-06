import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import Suit from "../../assets/suit.png";

const OfferCard = () => {
  return (
    <View className="flex-row max-w-[250px] py-2 mr-6 max-h-[160px] overflow-hidden bg-[#c7c7c7] rounded-2xl">
      <View className="px-4 py-2">
        <Text className="font-extrabold text-2xl">50% Off</Text>
        <Text className="text-lg">On everything today</Text>
        <Text className="text-xs my-2">With code: FSCREATION</Text>

        <Pressable className="bg-black w-20 rounded-2xl">
          <Text className="text-white text-xs font-semibold mx-3 my-1">
            Get Now
          </Text>
        </Pressable>
      </View>
      <View>
        <Image source={Suit} className="object-contain h-[150px] w-[55px]" />
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({});
