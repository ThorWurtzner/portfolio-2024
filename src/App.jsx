import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import MyWork from './components/MyWork/MyWork'

import {useEffect, useState } from 'react'

import BarLoader from "react-spinners/BarLoader";

export default function App() {

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, [])

  return (
    <>
      {loading && (
        <div className="spinner-container">
          <BarLoader loading={loading} size={300} />
        </div>
      )}

      <div className={`content ${loading ? 'hidden' : 'fade-in'}`}>
        <Header />
        <Introduction />
        <MyWork />
        <Blog />
        <AboutMe />
        <Footer />
      </div>
    </>
  )
}
