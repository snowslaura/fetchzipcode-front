import axios from 'axios';

export async function fetchCEP(CEP) {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/${CEP}`);
    return response.data;
}


export default fetchCEP;