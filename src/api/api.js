import axios from 'axios'

function userRegister(params) {
    

    var reqReg = {
        id :1,
        method:"user.register",
        params:params
    }
    console.log("params:", JSON.stringify(reqReg));

    axios.post("http://localhost/v1/User", reqReg).then(response=>{
        console.log(response.data);
    }).catch(error=>{
       console.warn(error.code);
    })
}


export default {
    userRegister
}