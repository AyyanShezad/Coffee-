import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity,ImageBackground } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firbase';
import { getAuth } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handleButtonPress = () => {
    navigation.replace("login");
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered successfully:', user);
      Alert.alert('Success', 'User registered successfully!');
      navigation.replace('Home');
    } catch (error) {
      console.error('Error registering user:', error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View className='flex-1 flex-row  w-max justify-center  m-0 p-0 '>
      <ImageBackground
        source={require("../Images/Background.jpg")}
       resizeMode="cover"
        className='flex-1 justify-center' 
      >
        <View className="flex-1 justify-center items-center  w-max ">
       <View className='my-5 p-5 space-y-4 '>
        <TextInput
          value={email}
          onChangeText={handleEmailChange}
          className='w-72 h-11 border-2  border-slate-500 rounded-xl placeholder-slate-600 bg-gray-400 opacity-60 text-black py-2 pl-9 pr-3 placeholder:text-base placeholder:font-bold '
          placeholder="Email"
        />
        <TextInput
          value={password}
          onChangeText={handlePasswordChange}
          className='w-72 h-11 border-2  border-slate-500 rounded-xl placeholder-slate-600 placeholder-opacity-5  py-2 pl-9 pr-3 placeholder:text-base placeholder:font-bold text-black '
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} className='w-20 h-9 border-2 rounded-xl justify-center items-center bg-blue-400 border-slate-700 '>
        <Text className=' text-base font-semibold italic text-gray-800 opacity-30' >Sign Up</Text>
      </TouchableOpacity> 
      <Text className='text-lg font-bold text-slate-950 m-3 justify-center items-center'>If you have an existing account</Text>
          <TouchableOpacity onPress={handleButtonPress} className='w-16 h-9 border-2 rounded-xl justify-center items-center bg-blue-400 border-slate-700'>
            <Text className=' text-base font-semibold italic text-gray-800 opacity-30'>Login</Text>
          </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};



export default SignUpScreen;