import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import PickupCard from '../components/PickupCard'


const Pickups = () => {

    const [pickups, setPickups] = useState()

    useEffect(() => {
        const fetchPickups = async () => {
            const response = await fetch(`http://10.10.4.114:5173/api/pickup/`)
            const data = await response.json()
            setPickups(data)
        }

        fetchPickups();
    }, [])

  return (
    <View style={ { paddingHorizontal: 20, paddingVertical: 20 }  }>
        {pickups && pickups.map(d => {
            return <PickupCard address={d.address} pincode={d.pincode} key={d._id}/>
        }) }
    </View>
  )
}

export default Pickups

