import axios from "axios"

export const makeRequest = async () => {
    const response = await axios.get("http://localhost:3000/pokemon/all")
    console.log(response.data) 
    return response.data
  }