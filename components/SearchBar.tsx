import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props{
  placeholder: string;
  onPress?: () => void;
  onChangeText?:(text:string) => void;
  value?: string;
}
const SearchBar = ({value,onChangeText,placeholder, onPress}:Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4 border'>
      <Image source={icons.search}
        className='w-5 h-5'
        resizeMode='contain'
        tintColor="#AB8BFF"
      />
      <TextInput 
        placeholder={placeholder}
        onPress={onPress}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#A8B5DB"
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar