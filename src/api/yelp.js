import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer 7-MA9C5_0LCdyRPOf6eL3LUe56q2rr-NPf4-pPozfgazJl_NZ_VYPoqjaoSZJUwKB_kBopTsVBl6qCmY1erX5ftqvxEaOzGZoTm1ZQvlAUhDkpQvwxz6vGAhsT57XnYx'
    }
})