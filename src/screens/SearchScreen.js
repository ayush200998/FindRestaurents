import React, { useState , useEffect } from 'react'
import {Text , View , StyleSheet , ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () =>{
    const [term , setTerm] = useState('')
    const [SearchApi , results] = useResults() 

    const filterResultsByPrice = (price) =>{
       return results.filter((result) =>{
            return result.price === price
        })
    }

    return(
        <View style={{flex: 1 }}>
            <SearchBar 
             term={term} 
             onTermChange={(newTerm) => setTerm(newTerm)} 
             onTermSubmit={() => SearchApi(term)}
            />
            <Text style={styles.resultFoundStyle}> We Found {results.length} Results </Text>
            <ScrollView>
                <ResultsList
                 results={filterResultsByPrice('$')} 
                 title="Cost Effective"
                  
                />
                <ResultsList 
                 results={filterResultsByPrice('$$')} 
                 title="Bit Pricer " 
                 
                />
                <ResultsList
                 results={filterResultsByPrice('$$$')}
                 title="Big Spender" 
                 
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    resultFoundStyle :{
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 4
    }
})

export default SearchScreen
