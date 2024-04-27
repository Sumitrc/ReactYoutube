import axios from 'axios';

const key = 'AIzaSyDiLestwoWSOqI4aBofwVclpDJ_OjTDgI0';
 
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        maxResults:5,
        key :key
        
    }
});