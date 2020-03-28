import yelp from '../api/yelp'
import {useEffect , useState} from 'react'

export default () =>{
    const [results , setResults] = useState([])

    const SearchApi = async (searchTerm) =>{
        // console.log("Only")
       let response = await yelp.get('/search' , {
           params : {
               limit : 50,
               term: searchTerm,
               location: 'san jose'
           }
       })
        if(response){
            setResults(response.data.businesses)
        }else{
            console.log("Error")
        }
    }

    useEffect(() =>{
        SearchApi('pasta')
    }, [])

        return [SearchApi , results]
}
