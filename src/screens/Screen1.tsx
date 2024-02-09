import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, StyleSheet, View } from 'react-native'
import { RootStackParamList } from '../navigation/StackNavigator'
import { styles } from '../theme/appTheme';



interface Props extends StackScreenProps<RootStackParamList, 'Screen1'> {}


export const Screen1 = ({navigation}: Props) => {
  return (

    
    <View style={styles.container}>
        <View>
        <Image
    source={{
        uri: 'https://i.pinimg.com/originals/4f/da/bc/4fdabc3441bd280961783d26ab6d0370.jpg'
    }}
    style={styles.img}/>
<Button title="Chayanne Chiquito" onPress={() => navigation.navigate('Screen2')}/>
<Button title='R6' onPress={()=> navigation.navigate('Screen3')}/>
<Button title='=>' onPress={()=> navigation.navigate('Screen4')}/>
<Button title='<=' onPress={()=> navigation.navigate('Screen5')}/>
</View>
</View>

  )
}
