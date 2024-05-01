import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbase";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleButtonPress = () => {
    navigation.replace("SignUp");
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in successfully:", user);
      Alert.alert("Logged in successfully");
      navigation.replace("Home");
    } catch (error) {
      console.error("Error logging in:", error);
      Alert.alert("Error", error.message);
      // Handle error
    }
  };

  return (
    <View className="flex-1 flex-row  w-max justify-center  m-0 p-0 ">
      <ImageBackground
        source={require("../Images/Background.jpg")}
        resizeMode="cover"
        className="flex-1 justify-center"
      >
        <View className="flex-1 justify-center items-center  w-max ">
          
          <View className="  my-5 p-5 space-y-4 mt-72 ">
            <TextInput
              value={email}
              onChangeText={handleEmailChange}
              placeholder="Email"
              className="w-72 h-11 border-2  border-slate-500 rounded-xl placeholder-slate-600 bg-gray-400 opacity-80   py-2 pl-9 pr-3 placeholder:text-base placeholder:font-bold  text-black"
            />
            <TextInput
              value={password}
              onChangeText={handlePasswordChange}
              className=" w-72 h-11 border-2  border-slate-500 rounded-xl placeholder-slate-600 bg-gray-400  opacity-80 py-2 pl-9 pr-3 placeholder:text-base placeholder:font-bold text-black "
              placeholder="Password"
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            onPress={handleLogin}
            className="w-16 h-9 border-2 rounded-xl justify-center items-center bg-zinc-500 opacity-80 border-slate-700  "
          >
            <Text className=" text-base font-semibold italic text-gray-800 opacity-30 ">
              Login
            </Text>
          </TouchableOpacity>
          <View className="flex-1 flex-row justify-center items-center p-2 mb-60">
            <Text className="text-base text-slate-950 italic">
              If you don't have an account
            </Text>
            <TouchableOpacity
              onPress={handleButtonPress}
              className="w-20 h-9  justify-center items-center "
            >
              <Text className=" text-base font-semibold italic text-blue-500 opacity-70">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
