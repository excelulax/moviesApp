import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'

export const HomeScreen = () => {
  const d = useMovies();
  console.log(d);
  return (
    <View>
        <Text>Home Screen</Text>
    </View>
  )
}
