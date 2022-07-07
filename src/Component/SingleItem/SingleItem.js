import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './singleItem.css'

const SingleItem = ({ children }) => {
  const { id } = useParams()
  const [items, setItem] = useState({})
  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [])
  return (

    <div className="container mx-auto px-4 "> 
           <div className="card lg:card-side bg-base-100 shadow-xl card_wraper">
      <figure><img className='img-fluid' src= {items.img} alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title"> {items.title}</h2>
        <p> {items.des}</p>
        <p> Price: {items.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    
    </div>

  );
};

export default SingleItem;