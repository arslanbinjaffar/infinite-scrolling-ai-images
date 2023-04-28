import axios from "axios";
const options = {
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '6b6253ef73msh41b25e62f0bc1dfp123147jsna01b49f9d306',
    'X-RapidAPI-Host': 'ai_image-database.p.rapidapi.com'
  }
};
const URL="https://ai_image-database.p.rapidapi.com/images/midjourney"
export const FetchDataFromApi=async()=>{
    try {
        const response = await axios.get(URL,options);
        return response
    } catch (error) {
        console.error(error);
    }
}