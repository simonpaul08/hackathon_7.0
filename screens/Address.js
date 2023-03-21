import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useData } from '../context/DataContext'

const Address = ({ navigation }) => {
  const [pincode, setPincode] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")

  const { userId } = useData()

  const handleAddressSubmit = async () => {
    try {

      const response = await fetch('http://10.10.4.114:5173/api/pickup', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pincode,
          address,
          phone, 
          userId
        })
      })

      const data = await response.json()
      navigation.navigate('Home')

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.innerContainer}>

      </View>
      <ScrollView style={styles.form}>
        <View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Pincode</Text>
            <TextInput style={styles.formInput} keyboardType="numeric" value={pincode} onChangeText={(value) => setPincode(value)} />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Address</Text>
            <TextInput style={styles.formInput} value={address} onChangeText={(value) => setAddress(value)} />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Phone Number</Text>
            <TextInput style={styles.formInput} maxLength={10} keyboardType="numeric" value={phone} onChangeText={(value) => setPhone(value)} />
          </View>
        </View>
        <View style={[styles.view]}>
          <Pressable style={[styles.btn]} onPress={handleAddressSubmit} >
            <Text style={styles.btnText}>Continue</Text>
          </Pressable>
        </View>
      </ScrollView>



    </View>
  )
}

export default Address

const styles = StyleSheet.create({
  innerContainer: {
    height: 250,
  },
  form: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 25,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formGroup: {
    marginBottom: 12,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 9,
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
  },
  btn: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#539165',
    borderRadius: 30,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  btnDisabled: {
    backgroundColor: '#ddd'
  }
})