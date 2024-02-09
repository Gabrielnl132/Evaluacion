import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { RootStackParamList } from '../navigation/StackNavigator'
import { Button, Image, View } from 'react-native'
import { styles } from '../theme/appTheme'


export const Screen3 = () => {
  return (
    <View style={styles.img}>
      <Image
        source={{
          uri: 'https://www.motociclismo.es/uploads/s1/78/31/16/6/yamaha-yzf-r6-race-2021-04_7_1200x690.jpeg',
        }}
        style={styles.img}
      />
           <Button title='Home' onPress={()=> navigation.navigate('Screen1')}/>
    </View>
  )
}
