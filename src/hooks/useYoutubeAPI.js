import { useEffect, useState } from "react";

export const useYoutubeAPI = () => {
  /*global gapi*/
  /*eslint no-undef: "error"*/
  const [client, setClient] = useState(null);

  const start = () => {
    gapi.client.init({ 'apiKey': 'AIzaSyAbByaoXDXOsn-9cH0zqFZfMbyMPUvWvqg', });
    setClient(gapi.client);
  }

  useEffect(() => { gapi.load('client', start); });
  
  return [client];
}