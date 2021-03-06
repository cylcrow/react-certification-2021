import { useEffect, useState } from "react";
import { useYoutubeAPI } from "./useYoutubeAPI";


export const useSearchAPI = () => {
    const [client] = useYoutubeAPI();
    const [response, setResponse] = useState();

    const search = (query = "") => {
        // console.log(query);
        client
        .request({ 'path': `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&maxResults=12`, })
        .then(
            function(response) { setResponse(response.items); }, 
            function(reason) { console.log("Error:"  + reason.result.error.message ); }
        );
    }

    useEffect(() => {
        if(client){
            search();
        }
    }, [client, search]);

    return [search, response];
}