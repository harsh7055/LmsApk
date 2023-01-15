import axios from "axios";
import { setToken } from "../../utils/tokenStore";


export const loginUser=()=> {
    var data = JSON.stringify({
    "loginName": "harnoor",
    "password": "CSit@8991"
    });

var config = {
  method: 'post',
  url: 'https://dev-us-lms-backendapi.plaza-network.com/api/fe/v1/user/login',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': '__cf_bm=orfGpWjLCVmcbdNK3bcUyACyPX.8xEfCv9UwlE45c68-1673434858-0-AdHdeEE4BiU0ynlnt42a1Wj7knuH9yj0ekzBtn4M+ihONr5DOqDcXgXN04+nMznOOMCPr6FD6ts0W2pTt6igibY='
  },
  data : data
};

axios(config)
.then(function (response) {
  // console.log(response.data.token);
setToken(response.data.token);
})
.catch(function (error) {
  console.log(error);
});


}