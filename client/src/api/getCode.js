import axios from "axios"


const getcode = async (qN)=>{
  try {

    const res = await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/questions/`+qN)
    return (res.data)
  } catch(err) {
    return err
  }


}
export  {getcode} 