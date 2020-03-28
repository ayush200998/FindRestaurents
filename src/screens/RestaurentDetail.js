import React, { useState , useEffect } from 'react'
import {Text , View , StyleSheet , FlatList , Image } from 'react-native'
import yelp from '../api/yelp'

const RestaurentDetail = ( {navigation} ) =>{
    const [result , setResult] = useState(null)
    const id = navigation.getParam('id')
    console.log(result)

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`)
        if(response.data){
            setResult(response.data)  
        }else{
            console.log("Error detected somewhere")
        }
     }

    useEffect(() =>{
        getResult(id)
    } , [])


    if(!result){
        return null
    }
    return(
        <View>
            <Text style={styles.nameStyle}> {result.name} </Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={( {item} ) =>{
                    return <Image style={styles.imageStyle} source={{uri: item}} />
                }}
            />
            <Text style={styles.locationStyle}> Location: {result.location.address1}, </Text>
            <Text style={styles.locationStyle}> City: {result.location.city}.</Text>
            <Text style={styles.contactStyle}> Contact us on {result.phone}</Text>      
        </View>
    )
}

const styles = StyleSheet.create(
    {nameStyle : {
        marginTop: 7,
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    imageStyle : {
        width : 300,
        height: 160,
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 8
    },
    contactStyle : {
        marginTop: 6,
        fontWeight: 'bold',
        fontSize: 18,
        
    },
    locationStyle :{
        fontSize: 18,
        marginVertical: 5
    }
})

export default RestaurentDetail