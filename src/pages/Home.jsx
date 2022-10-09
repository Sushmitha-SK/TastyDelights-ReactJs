import React from 'react'
import '../pages/Home.css'
import HomeImg from '../images/background.png'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import Category from '../components/Category'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <span>welcome foodies</span>
          <h3>different spices for the different tastes 😋</h3>
          <p>A vast collection of the tastiest foods. These dishes contain the ultimate comfort food.</p>
        </div>
        <div className="image">
          <img src={HomeImg} alt="" className="home-img" />
        </div>
      </section>
      <Category />
      <Veggie />
      <Popular />
      <Footer />
    </>

  )
}

export default Home