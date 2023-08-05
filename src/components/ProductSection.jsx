import React from 'react'
import ProductCard from './ProductCard'
import { GiConverseShoe} from 'react-icons/gi'

export default function ProductSection(props) {
  return (
    <div className="container my-5">
        <h2 className='text-center my-5'>
            {props.sectionTitle} <GiConverseShoe size={50} color='blue'/>
        </h2>
        <div className="row gap-5">
            <ProductCard brandName ="indure" collectionName= "winter" categoryName="Female"/>
            <ProductCard brandName ="nike" collectionName= "winter" categoryName="Female"/>
            <ProductCard brandName ="puma" collectionName= "winter" categoryName="Female"/>
            <ProductCard brandName ="indure" collectionName= "winter" categoryName="Female"/>
            <ProductCard brandName ="indure" collectionName= "winter" categoryName="Female"/>
            <ProductCard brandName ="indure" collectionName= "winter" categoryName="Female"/>

        </div>
    </div>
  )
}
