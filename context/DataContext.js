import React, { createContext, useContext, useEffect, useState } from 'react'


const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
}

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(
        [
            { id: 1, name: "Newspaper", price: 18,isSelected: false },
            { id: 2, name: "Carton", price: 10,  isSelected: false },
            { id: 3, name: "Oil Dada", price: 28,  isSelected: false },
            { id: 4, name: "Notebooks", price: 15,  isSelected: false },
            { id: 5, name: "Office Paper", price: 15,  isSelected: false },
            { id: 6, name: "Magazine", price: 15,  isSelected: false },
            { id: 7, name: "Heavy Iron", price: 27,  isSelected: false },
            { id: 8, name: "Light Iron", price: 23,  isSelected: false },
            { id: 9, name: "Mix Plastic", price: 13,  isSelected: false },
            { id: 10, name: "Milk Pouches", price: 18,  isSelected: false },
            { id: 11, name: "Temple Waste", price: 18,  isSelected: false },
            { id: 12, name: "Plastic Bottles", price: 18, isSelected: false },
        ]
    )
    const [selectedItem, setSelectedItem] = useState(false)
    const [currentUser, setCurrentUser] = useState()
    const [userId, setUserId] = useState('')


    const handleRemove = (id) => {
        setData(data.map(item => {
            if(id === item.id){
                return {...item, isSelected: false}
            }

            return item;
        }))
    }

    const handleLogin = async (username, password) => {
        try{
            const response = await fetch('http://10.10.4.114:5173/api/auth/login', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            const data = await response.json()
            setCurrentUser(data)
            setUserId(data._id)
        }catch(e) {
            console.log(error)
        }
    }

    const logout = () => {
        setCurrentUser()
    }

    useEffect(() => {

        setSelectedItem(false)

        data.map(item => {
            if(item.isSelected){
                setSelectedItem(true)
            }
        })
    
    }, [data])

    

    let value = {
        data,
        setData,
        selectedItem,
        handleRemove,
        handleLogin,
        logout,
        currentUser,
        userId
    }


    return (
        <DataContext.Provider value={value}>
            { children }
        </DataContext.Provider>
    )
}