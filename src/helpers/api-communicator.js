import axios from 'axios'
export const loginUser = async(email,password)=>{
    const res =await axios.post('/user/login',{email,password})
    console.log(res,'response')
    if(res.status!==200){
        throw new Error("Unable to login")
    }

    const data = await res.data
    return data
}