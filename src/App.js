import React from 'react'
import {Article,Brand,Cta,Feature,NavBar} from './components';
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from './containers';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App