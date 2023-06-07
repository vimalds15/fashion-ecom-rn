import { Text, View, Image, ScrollView, Pressable } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import UserLogo from "../../assets/user.png";
import OfferCard from "../components/OfferCard";
import NewArrivalsCard from "../components/NewArrivalsCard";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthenticationModal from "../components/AuthenticationModal";
import AuthContext from "../features/authContext";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { isLoggedIn,currentUser,setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="flex-row px-5 mt-6 justify-between items-center">
          <View className="bg-black rounded-full w-10 h-10 justify-center items-center">
            <MaterialIcons name="menu" size={24} color={"#fff"} />
          </View>
          {isLoggedIn ? (
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>{currentUser.name}</Text>
            </Pressable>
          ) : (
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Image
                source={UserLogo}
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: "#aaaaaa",
                  borderRadius: 50,
                }}
              />
            </Pressable>
          )}
        </View>

        <View className="mt-6 px-5">
          <Text className="font-bold text-2xl">Welcome,</Text>
          <Text className="font-semibold text-xl text-gray-500">
            Our Fashions App
          </Text>
        </View>

        <View className="mt-6 px-5">
          <View className="flex-row bg-gray-200 p-2 px-3 items-center rounded-3xl">
            <View className="">
              <MaterialIcons name="search" size={24} color={"#111"} />
            </View>
            <TextInput
              placeholder="Search..."
              placeholderTextColor={"#666666"}
              className="px-2"
            />
          </View>
        </View>

        <View className="mt-6 p-5">
          <OfferCard />
        </View>
        <View className="mt-4">
          <View className="flex-row justify-between items-center px-5">
            <Text className="text-lg font-extrabold">New Arrivals</Text>
            <Pressable onPress={() => navigation.navigate("productlistscreen")}>
              <Text className="text-xs text-gray-500">View All</Text>
            </Pressable>
          </View>
          <ScrollView
            className="mt-4 ml-5"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Pressable onPress={() => navigation.navigate("detailscreen")}>
              <NewArrivalsCard />
            </Pressable>
            <NewArrivalsCard />
            <NewArrivalsCard />
            <NewArrivalsCard />
            <NewArrivalsCard />
            <NewArrivalsCard />
          </ScrollView>
        </View>
        <AuthenticationModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
