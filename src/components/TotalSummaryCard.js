import { StyleSheet, Text, View,Pressable } from "react-native";
import React from "react";

const TotalSummaryCard = () => {
  return (
    <View className="border border-gray-200 rounded-lg p-6">
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-lg">Total Price:</Text>
        <Text className="font-extrabold text-xl">$483</Text>
      </View>
      <Pressable className="bg-black py-4 rounded-lg mt-6">
        <Text className="font-semibold text-white text-center">Proceed to Checkout</Text>
      </Pressable>
    </View>
  );
};

export default TotalSummaryCard;

const styles = StyleSheet.create({});
