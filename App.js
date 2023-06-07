import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";
import { useState } from "react";
import { AuthProvider } from "./src/features/authContext";
import { ProductProvider } from "./src/features/productContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [products, setProducts] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  return (
    <AuthProvider value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }} >
      <ProductProvider value={{products,setProducts,currentProduct,setCurrentProduct}}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ProductProvider>
    </AuthProvider>
  );
}
