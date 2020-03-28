import React from 'react'   
import {Text , View , Image , StyleSheet} from 'react-native'


const ResultDetail = ({result}) =>{
    return(
        <View>
            <Image style={styles.imageStyle} source={{uri: result.image_url}} />
            <Text style={styles.nameStyle}>  {result.name} </Text>
            <Text style={styles.statusStyle}> {result.rating} Starts , {result.review_count} Reviews </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle : {
        width : 240,
        height: 130,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 4
    },
    nameStyle : {
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center'
    },
    statusStyle : {
        alignSelf: 'center'
    }
})

export default ResultDetail