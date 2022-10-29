import React from 'react'
import {client} from '../lib/client';
import { Product,FooterBanner,HeroBanner,Productp } from '../components'
 const Home = ({products,products2,bannerData}) => {
  return (
  
<>
<HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
<div className='products-heading'>
  <h2>Home & Kitchen </h2>
</div>
<div className='products-container'>
  {products?.map((product)=>
  <Product key={product._id} product={product}/>)}
  </div>
  <div className='products-heading'>
  <h2>Pet Supplies</h2>
</div>
  <div className='products-container'>

  {products2?.map((product2)=><Productp key={product2._id} product2={product2}/>)}
</div>

<FooterBanner footerBanner={bannerData && bannerData[0]} />
</>
  )}
  export const getServerSideProps = async()=>{
    const query='*[_type == "product"]';
    const products = await client.fetch(query);
    const query2='*[_type == "product2"]';
    const products2 = await client.fetch(query2);
    const bannerQuery='*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return{
      props:{products,products2,bannerData}
    }
  }

export default Home;