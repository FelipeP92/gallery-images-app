import { useCallback, useEffect, useState } from 'react';

export const useFethImages = () => {

    const [images, setImages] = useState([]);
    const [input, setInput] = useState([]);

    const [loading, setLoading] = useState(true)


    const getImages = useCallback(
        async () => {

            const key = 'client_id=32j3bNHynrW6Ln6CmP5UOBm29TwKbr0vLWr6r4aUOUI';

            let url = `https://api.unsplash.com/photos/?${key}`;

            if (input !== '') {
                url = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`
            }

            setLoading(true)


            const res = await fetch(url);

            const data = await res.json();

            if (data.results) {
                setImages(data.results)
            } else {
                setImages(data);
            }

            setLoading(false)
            
        } , [input])



    useEffect(() => {
        getImages()
    }, [getImages]);



    const handleSubmit = (e) => {
        e.preventDefault();
        const text = (e.target[0].value);

        setInput(text)
    };

    return [images, loading, handleSubmit];

}


