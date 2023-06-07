import { Pressable, View, ScrollView, Text } from "react-native";
import React, { useEffect, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProductItem from "../components/ProductItem";
import ProductContext from "../features/productContext";

const ProductListScreen = ({ navigation }) => {
  const { products, setProducts } = useContext(ProductContext);

  const fetchAllProducts = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Products",
      headerLeft: () => (
        <Pressable
          onPress={goBack}
          className=" justify-center items-center h-10 w-10 mx-4 rounded-full "
        >
          <MaterialIcons name="chevron-left" size={34} color={"#111"} />
        </Pressable>
      ),
      headerStyle: {
        backgroundColor: "white",
      },
      headerTitleAlign: "center",
    }),
      fetchAllProducts();
  }, []);
  return (
    <SafeAreaView className="flex-1 w-full px-4 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {products?.map((product) => (
          <Pressable key={product.id} onPress={() => navigation.navigate("detailscreen",{
            productId:product?.id
          })}>
            <ProductItem
              title={product?.title}
              image={product?.image}
              price={product?.price}
              brand={product?.brand}
            />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductListScreen;
