import axios from "axios"


const getQuestions = async (lang)=>{
  try {

    const res = await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/questions/`)
    return (res.data)
  } catch(err) {
    return err
  }


}
export  {getQuestions} 