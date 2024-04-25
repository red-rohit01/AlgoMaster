import axios from "axios"

const compile =  async (data)=>{

  try {
    const res = await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/code`,data)
      console.log(res.data)
    return (res.data)
  } catch(err) {
          console.log("error" , err)
    return err
  }


}
export  {compile} 