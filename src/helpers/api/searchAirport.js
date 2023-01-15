import axios from "axios";
import { getToken } from "../../utils/tokenStore";



export const searchAirport =  async(loc) => {

    var data = {
        "keyword": loc
    };

    var config = {
        method: 'post',
        url: 'http://10.0.2.2:3005/api/booking/airport/search/name',
        headers: {
            'Authorization': "Bearer " + await getToken(),
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        const res = await axios(config)
        // console.log(JSON.stringify(res.data.result.airports));
        return JSON.stringify(res.data.result.airports)

    }

    catch (error) {
        console.log(error)
    };
}