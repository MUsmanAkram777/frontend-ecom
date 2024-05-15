import React from 'react'
import ProductCardV1 from './ProductCardV1'
import ProductCardV2 from './ProductCardV2'

function ProductList({view}) {
  return (
    <div className={
        view == 'grid' ? 'mx-auto grid w-full max-w-[1300px] items-center space-y-4 px-8 py-10 md:grid-cols-2 md:gap-3 md:space-y-0 lg:grid-cols-4' :
        'mx-auto grid w-full max-w-[1300px] items-center space-y-4 px-8 py-10 md:grid-cols-2 md:gap-3 md:space-y-0 lg:grid-cols-2'
    }>
        {Array.from({ length: 8 }).map((_, i) => (
            view == 'grid' ? <ProductCardV1 key={i}/> : <ProductCardV2 key={i}/>
        ))}
    </div>
  )
}

export default ProductList