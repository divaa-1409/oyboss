import React from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import HCategory from '../components/HCategory'
import HCProduct from '../components/HCProduct'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products.jsx'
import Slider from '../components/Slider'
const Home = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <HCategory />
      <Categories />
      <HCProduct />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home