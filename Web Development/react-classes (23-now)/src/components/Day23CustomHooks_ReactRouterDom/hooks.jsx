import React, { useCallback, useEffect, useState } from "react";

export const useUnsplash = (secret, query) => {
    const [images, setImages] = useState(``);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const url = `https://source.unsplash.com/weekly?${query}`;

    useEffect(() => {
        setImages(url)
        console.log(images);
    }, [query]);
    
    return [images,error, loading];
}

const Todos = (props) => {
    const [query, setQuery] = useState('animals');
    const [images, error, loading] = useUnsplash('secret', query)
    return (
        <div>
            <h1>Sample</h1>
            <ul>
                <li>Animals <button onClick={() => setQuery('animals') }>Change</button> </li>
                <li>Flowers <button onClick={() => setQuery('cherryblossoms') }>Change</button> </li>
            </ul>
            <br /><br />
            <div>
                <img src={images} style={{width:"100%"}} alt={query} />
            </div>
        </div>
    )
}

export default Todos;