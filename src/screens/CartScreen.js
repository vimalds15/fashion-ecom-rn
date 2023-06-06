import { StyleSheet, Text, View, Image,ScrollView,Pressable } from "react-native";
import React, { useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import UserLogo from "../../assets/user.png";
import OfferCard from "../components/OfferCard";
import NewArrivalsCard from "../components/NewArrivalsCard";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "../components/CartItem";
import TotalSummaryCard from "../components/TotalSummaryCard";

const Cart = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 w-full p-5 bg-white">
      <View>
        <Text className="font-bold text-xl">My Cart</Text>
      </View>

        <ScrollView className="mt-4 " showsVerticalScrollIndicator={false}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ScrollView>

        <View>
            <TotalSummaryCard />
        </View>
    
    </SafeAreaView>
  );
};

export default Cart;


