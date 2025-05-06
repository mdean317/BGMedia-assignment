'use client'
import { urlFor } from '../../../lib/sanity'
import Link from "next/link";
import Button from '../Button/Button';

export default function ProductCard({ product }) {

  return (

    <article className='w-full justify-self-center flex justify-start align-middle flex-col aspect-square mx-auto hover:bg-gray-800 transition-colors '>
      <h3 className=' text-indigo-600 text-center font-semibold text-2xl mb-4 mt-2'>{product.shortName}</h3>
      <figure className='mx-auto w-4/5'>
        <img className=' aspect-square h-[90%] object-cover justify-self-center mt-2'
          src={urlFor(product.logo).width(300).url()} alt={product.name} />
      </figure>
      <ul className='mx-auto w-[80%] list-disc text-xl text-center pb-2'>
        {product.features.map((feature, index) => (
          <li className='line-clamp-1 w-full' key={index}>{feature}</li>
        ))}
      </ul>
      <Button
        href={`/products/${product.slug.current}`}
        className="bg-blue-600 text-white px-4 py-2 rounded row-start-4 text-xl w-7/12 mx-auto"
        children={`Read More`}
      ></Button>
    </article>
  )
}
