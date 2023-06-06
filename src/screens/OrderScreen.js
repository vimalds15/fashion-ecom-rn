import { Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderItem from "../components/OrderItem";

const OrderScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 w-full p-5 bg-white">
      <View>
        <Text className="font-bold text-xl">My Orders</Text>
      </View>

        <ScrollView className="mt-4 pt-4 " showsVerticalScrollIndicator={false}>
         <OrderItem />
         <OrderItem />
         <OrderItem />
        </ScrollView>
    
    </SafeAreaView>
  );
};

export default OrderScreen;


