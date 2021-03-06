import React from "react";
import SearchContext from "../providers/search/search";
import { useSearchAPI } from '../hooks/useSearchAPI';

export const SearchWrapper = ({children}) => {
    const [search, response] = useSearchAPI();

    return (<SearchContext.Provider value={ {search, videos: response} }>{
        children
    }</SearchContext.Provider>);
}