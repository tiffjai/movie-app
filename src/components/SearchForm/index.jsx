import React, { useState, useEffect } from 'react';
import ShowCard from '../ShowCard';
import ShowList from "../ShowList";
import { useShow } from '../contexts';
export default function SearchPage() {
    const [inputText, setInputText] = useState('');
    const [searchString, setSearchString] = useState('Gossip Girl');
    const {setShowData} = useShow();

    function handleInput(e) {
        const inputValue = e.target.value;
        setInputText(inputValue);
    }

    function handleSubmit(e) {
        e.preventDefault();  
        setSearchString(inputText);
        setInputText("");
    }

    useEffect(() => {
        async function searchAPI() {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
            const rawData = await response.json();
            const data = rawData.map(s => s.show);
            console.log(data);
            setShowData(data);
        }

        searchAPI();
    }, [searchString]);

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder={searchString}type="text" onChange={handleInput} value={inputText} />
            <button type="submit">Search</button>
        </form>
        <ShowList  />
        </>
    );
}
