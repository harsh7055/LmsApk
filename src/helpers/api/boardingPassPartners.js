import axios from "axios";
import { getToken } from "../../utils/tokenStore";



export const boardingPassPartners =  async() => {

    var data = JSON.stringify({
        "from": "KOS",
        "to": "PEN"
      });

    var config = {
        method: 'post',
        url: 'http://10.0.2.2:3005/api/booking/lounges/search/airport',
        headers: {
            'Authorization': "Bearer " + await getToken(),
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        const res = await axios(config)
        // console.log(JSON.stringify(res.data.result.lounges[0].lounges) + "API END CALL");
        return JSON.stringify(res)

    }

    catch (error) {
        console.log(error)
    };
}