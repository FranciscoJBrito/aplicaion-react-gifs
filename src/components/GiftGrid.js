import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';




export const GiftGrid = ( {category} ) => {

    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <br/>
            <h3 className='h3'>{ category }</h3>

            {loading && <p className='loader animate__animated animate__flash'>Cargando...</p>}

            <div className='grid'>
            { 
                images.map( img => ( 
                    <GifGridItem 
                        key ={img.id}
                        { ...img }
                    />
                ) )
            }

            </div>
        </>
        
    )
}
