import React from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native'

export const Screen4 = ({ navigation }) => {
  const [num1, setNum1] = React.useState('')
  const [num2, setNum2] = React.useState('')

  const isNum1GreaterOrEqual = () => {
    if (parseFloat(num1) >= parseFloat(num2)) {
      Alert(`${num1} is greater than or equal to ${num2}`)
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Enter first number"
        value={num1}
        onChangeText={text => setNum1(text)}
      />
      <TextInput
        placeholder="Enter second number"
        value={num2}
        onChangeText={text => setNum2(text)}
      />
      <Button title=">=" onPress={isNum1GreaterOrEqual} />
      <Button title="<=" onPress={() => navigation.navigate('Screen5')} />
    </View>
  )
}