import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
import favicon from './assets/favicon.png';


const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch', 'Dragon Ball', 'Naruto', 'Scooby Doo',]);
/*     const handleAdd = ()=>{
        setCategorias( [...categorias, 'HunnterxHunter'] );
        setCategorias(cats => [...cats, 'HunnterxHunter']);
    }
 */
    return(
        <>
            <div className='logo'>
                <img className='favicon' src={favicon} alt='logo'/>
                <h1>if Expert App</h1>
            </div>

            <AddCategory setCategorias={ setCategorias }/> 

            <hr/>

                {
                    categorias.map( category => (   
                        
                        <GiftGrid 
                            key={category}
                            category={category}
                        />
                    
                    ))
                }


        </>
    )
}

export default GifExpertApp;