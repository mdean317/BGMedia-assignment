'use client'
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import NavBar from '../NavBar/NavBar';
import { client } from '../../../lib/sanity'

export const metadata = {
  title: 'Top 5 Espresso Machines for Home – 2025',
  description: 'Discover affordable espresso machines that deliver café-quality shots without the café price.',
}

export default function Homepage() {

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {

    // 
    const getAllProducts = async () => {
      const products = await client.fetch(`*[_type == "FullProduct"]`)

      setAllProducts(products)
    }

    getAllProducts()

  }, [])

  return (
    <>
    <header>
      <NavBar> </NavBar>
    </header>
      <main className="justify-items-center">
        <article className='w-[60vw] grid'>
          <h1 className='h1-primary'>2025{`'`}s Best Affordable Espresso Machines</h1>
          <p className='p-primary'>Making espresso at home is one of life{`'`}s joys — a bold start to the morning, a lively jolt when the afternoon drags,
            or a smooth little dessert that caps off dinner just right.</p>
            <p className='p-primary'>But finding the right low-cost espresso machine can feel like a fool{`'`}s errand. Budget models promise quality shots
            but fall short on pressure, consistency, or build. The challenge is spotting that finding that rare gem — a machine that{`'`}s affordable, reliable,
            and just smart enough to let you enjoy your coffee ritual smoothly and at ease.</p>
            <p className='p-primary'>So we did the work for you. Here are five low-cost espresso machines to meet all your home espresso needs. </p>
        </article>
        <section className="flex justify-center gap-4 flex-wrap items-start w-full max-w-6xl mx-auto p-4 ">
          {allProducts.map(product => (
            <article key={product._id} className= 'bg-gray-900 flex-col justify-between flex-wrap align-middle m-2.5 w-5/18 aspect-9/10'>
              <ProductCard  product={product}></ProductCard>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
