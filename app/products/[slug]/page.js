import FullProduct from '../../components/FullProduct/FullProduct';
import { client } from '../../../lib/sanity'
import NavBar from '../../components/NavBar/NavBar';

export async function generateMetadata({ params }) {
  const product = await client.fetch(`*[_type == "FullProduct" && slug.current == $slug][0]`, {
    slug: params.slug,
  })
}

export default async function FullProductPage({ params }) {


  const product = await client.fetch(
    `*[_type == "FullProduct" && slug.current == $slug][0]`,
    { slug: params.slug }
  )

  if (!product) {
    return <h2>Product not found</h2>
  }

  return (
    <>
    <header>
      <NavBar> </NavBar>
    </header>
    <FullProduct product={product} />
    </>

  )
}