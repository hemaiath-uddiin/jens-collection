import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Product = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/item")
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])  
      const navigate = useNavigate()
    const navigateDetails =(id)=>{ 
            navigate(`/details/${id}`)
    }
 
    return (


        <div className="container mx-auto px-4">
            <div className="grid sm:justify-items-center lg:grid-cols-3  md:grid-cols-2 gap-x-20 gap-y-20">
                {

                    items.map((item,) => {
                        const {_id,img,title,des} = item
                        return (
                            <div  key={_id} class="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src= {img} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">{title}</h2>
                                    <p> {des}</p>
                                    <div class="card-actions justify-end">
                                        <button onClick={()=>{navigateDetails(_id)}}  class="btn btn-primary">More Information</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>





        </div>


    );
};

export default Product;