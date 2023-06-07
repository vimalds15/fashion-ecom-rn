import { StyleSheet, Text, View,Pressable,ToastAndroid } from "react-native";
import React, { useContext } from "react";
import CartContext from "../features/cartContext";
import { addToOrders } from "../features/firebase/order";
import OrderContext from "../features/orderContext";

const TotalSummaryCard = ({totalPrice}) => {
  const {setCartItems}=useContext(CartContext);
  const {setOrderItems} = useContext(OrderContext)

  const placeOrder = async () => {
    const res = await addToOrders();
    if(res.success===true){
      ToastAndroid.show("Order places successfully!!!",ToastAndroid.BOTTOM)
      setCartItems([])
      setOrderItems(res.data)
    }
  }

  return (
    <View className="border border-gray-200 rounded-lg p-6">
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-lg">Total Price:</Text>
        <Text className="font-extrabold text-xl">${totalPrice}</Text>
      </View>
      <Pressable onPress={placeOrder} className="bg-black py-4 rounded-lg mt-6">
        <Text className="font-semibold text-white text-center">Place Order</Text>
      </Pressable>
    </View>
  );
};

export default TotalSummaryCard;

const styles = StyleSheet.create({});
