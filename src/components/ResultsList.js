import React from 'react'
import {Text , View , StyleSheet , FlatList , TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation'
import ResultDetail from '../components/ResultDetail'

const ResultsList = ({title , results , navigation}) =>{
    console.log(results)

    if(!results.length){
        return null
    }
    return (
        <View>
            <Text style={styles.titleStyle}> {title} </Text>
            <FlatList
                data={results}
                horizontal={true}
                keyExtractor={(result) => result.id}
                renderItem= {( { item } ) =>{
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetail' , {id : item.id})}>
                             <ResultDetail result={item} />
                    </TouchableOpacity>
                    )
                    
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle : {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 6
    }
})

export default withNavigation(ResultsList)