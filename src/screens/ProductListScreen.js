import { Pressable, View, ScrollView,Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ProductItem from "../components/ProductItem";

const ProductListScreen = ({ navigation }) => {
    const goBack =() => {
        navigation.goBack()
      }

  useEffect(() => {
    navigation.setOptions({
      headerShown:true,
      headerTitle:"Products",
      headerLeft:()=>(
        <Pressable onPress={goBack} className=" justify-center items-center h-10 w-10 mx-4 rounded-full ">
          <MaterialIcons name="chevron-left" size={34} color={"#111"} />
        </Pressable>
      ),
      headerStyle:{
        backgroundColor:"white",
      },
      headerTitleAlign:"center"
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 w-full px-4 bg-white">
        <ScrollView showsVerticalScrollIndicator={false}>
         <ProductItem />
         <ProductItem />
         <ProductItem />
         <ProductItem />
         <ProductItem />
        </ScrollView>
    
    </SafeAreaView>
  );
};

export default ProductListScreen;


