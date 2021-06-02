import React from 'react'
import { useFethImages } from '../hooks/useFethImages';
import Card from './Card';
import Form from './Form';
import Loading from './Loading'


const Cards = () => {

    const [images, loading, handleSubmit] = useFethImages();

    return (
        <>

        <Form handleSubmit = {handleSubmit}/>

            <hr />

            {loading && <Loading/> }


            <div className="row">
            {
                images.map((img) => {
                    return <div className="col" key={img.id}>
                        <Card  img={img.urls.regular} />
                    </div>
                })
            }

            </div>

            
        </>
    )
}

export default Cards;
