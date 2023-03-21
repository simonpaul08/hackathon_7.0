import { FlatList, StyleSheet, ScrollView } from 'react-native'
import { useData } from '../context/DataContext'
import Card from './Card'
import Upload from './Upload'

const ListView = () => {

    const { data, setData } = useData()

    const onPressHandler = (id) => {
        setData(data.map(item => {
            if (item.id === id) {
                return { ...item, isSelected: item.isSelected ? false : true }
            }
            return item;
        }))
    }



    return (
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                <Upload />
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <Card item={item.name} price={item.price}  key={item.id} id={item.id} onPress={onPressHandler} isSelected={item.isSelected} />
                    }
                    numColumns={2}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </ScrollView>
    )
}

export default ListView

const style = StyleSheet.create({
    view: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10,
    },
    item: {
        flex: 2,
        borderColor: '#333',
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10,
        paddingHorizontal: 15,
        textAlign: 'center',
        borderRadius: 6,
        paddingVertical: 15,
    }
})