import { Text, View, Image,Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import User from "../../assets/user.png";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full p-6 justify-between">
      <View>
      <View className="mt-16 justify-center items-center">
        <View className="border border-slate-200 rounded-lg">
          <Image source={User} className="h-32 w-32 object-cover" />
        </View>
      </View>
        <View className="mt-6">
          <View className="items-center justify-center">
            <Text className="text-lg font-bold">Anto Vimalan</Text>
            <Text className="text-xs, font-bold text-gray-500">workshoplends8@gmail.com</Text>
          </View>
        </View>
        </View>
        <View className="justify-center items-center">
          <Pressable className="bg-black w-full py-4 rounded-lg">
            <Text className="font-bold text-white text-center">Log Out</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
