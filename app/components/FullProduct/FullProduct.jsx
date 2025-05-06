'use client'
import { urlFor } from '../../../lib/sanity'
import Button from '../Button/Button';

export default function ProductCard({ product }) {

  return (
    <article className='w-[90%] flex flex-col mx-auto'>
      <h2 className=' text-blue-600 text-center font-semibold text-3xl mb-8 mt-2'>{product.name}</h2>
      <Button
        href={product.learnMoreUrl}
        className="rounded-full mx-auto text-xl font-bold mb-6"
        children={`Buy the ${product.shortName}`}
        external={true}
      ></Button>
      <div className='flex flex-row items-start gap-4'>
        <figure className="w-full max-w-[300px] aspect-square shrink-0 mb-4">
          <img className='w-full max-w-[400px] aspect-square object-cover'
            src={urlFor(product.logo).width(300).url()} alt={product.name} />
        </figure>
        <p className='text-2xl text-gray-300'>{product.description}</p>
      </div>
      <ul className='w-9/12 text-left mx-auto mt-4 text-xl list-disc'>
        {product.allFeatures.map((feature, index) => (
          <li className='mb-3'key={index}>{feature}</li>
        ))}
      </ul>
      <Button
        href={product.learnMoreUrl}
        className="rounded-full mx-auto text-xl font-bold mt-2 mb-6"
        children={`Buy the ${product.shortName}`}
        external={true}
      ></Button>
    </article>

  )

}
