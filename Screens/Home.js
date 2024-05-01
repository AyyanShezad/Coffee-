import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center w-max m-0 p-0 ">
      
        <View className="flex-1 flex-wrap  justify-center items-center w-max mt-5 p-0 bg-slate-400">
            <View className='flex-auto  justify-centern items-center m-3 '>
                <Text className=' items-center justify-center italic text-lg mt-8 p-1 font-semibold '>Let's get your day started the delicious way. </Text>
                <Text className='w-32 h-10 items-center justify-center text-2xl mt-3 p-1  block font-bold rounded-lg opacity-70 italic'>Welcome! </Text>
            </View>

          
        </View>
        <View className='flex-1 justify-center items-center p-5 bg-red-700'>
            <View className='flex-1 flex-row justify-center items-center '>
                    <View className='justify-center items-center p-5' >
                        <Text>Offers</Text>
                    </View>
                    <View className='justify-center items-center p-5'>
                        <Text>Menu</Text>
                    </View>
            </View>

        </View>
        <View className='flex-1 bg-slate-500'>
          <Text>Hi</Text>
        </View>
     
    </View>
  );
}
