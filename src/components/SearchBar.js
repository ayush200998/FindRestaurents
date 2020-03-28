import React from 'react'
import {TextInput , View , StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term , onTermChange , onTermSubmit}) =>{
    return(
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
             style={styles.inputStyle} 
             placeholder="Search here"
             value={term}
             onChangeText={(newText) => onTermChange(newText)}
             onEndEditing={() => onTermSubmit()}
             autoCapitalize= 'none'
             autoCorrect= {false}
             autoFocus= {true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#d6eef8',
        height:45,
        borderRadius: 5,
        marginHorizontal: 12,
        flexDirection: 'row',
        marginTop: 8,
        padding: 5
    },
    inputStyle: {
        flex: 1,
        fontSize: 12,
        marginLeft: 10,
    
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: "center"
    }
})

export default SearchBar

