import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { RootStackParamList } from '../navigation/StackNavigator'
import { Button, Image, View } from 'react-native'
import { styles } from '../theme/appTheme'


export const Screen2 = () => {
  return (
    <View style={styles.img}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/b5/2a/19/b52a199a2ad77ba3c83b73db91851223.jpg',
        }}
        style={styles.img}
      />
      <Button title='Home' onPress={()=> navigation.navigate('Screen1')}/>
    </View>
  )
}
