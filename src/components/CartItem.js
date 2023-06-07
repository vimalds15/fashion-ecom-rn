import { StyleSheet, Text, View, Image, Pressable,ToastAndroid } from "react-native";
import React, { useContext } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { removeItemById } from "../features/firebase/cart";
import CartContext from "../features/cartContext";

const CartItem = ({title,image,price,brand,qty,id}) => {
  const {setCartItems} = useContext(CartContext)


  const removeItem = async() =>{
    const res = await removeItemById(id)
    if(res.success===true){
      ToastAndroid.show("Removed Successfully",ToastAndroid.BOTTOM)
      setCartItems(res.data)
    }
  }

  return (
    <View >
    <View className="flex-row">
      <View className="p-2">
        <Image source={{uri:image}} className="rounded-xl h-20 w-20 object-contain" />
      </View>
      <View className="flex-1 flex-row  justify-between items-center w-[100%]  px-4">
        <View className="w-[50%]">
          <Text className="font-bold" numberOfLines={1}>{title}</Text>
          <Text className="text-xs">{brand}</Text>
          <Text className="font-extrabold">Qty: {qty}</Text>
          <Text className="font-extrabold">${price}</Text>
        </View>
        <View className="flex-row  px-3 h-8 justify-center items-center bg-gray-200  rounded-3xl">
          <Pressable onPress={removeItem} className="mr-2 flex-row">
            <MaterialIcons name="delete-outline" size={20} />
           <Text>Remove</Text>
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
