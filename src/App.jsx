import React from 'react'
import NavigationBar from './components/NavigationBar'
import ProductCard from './components/ProductCard'
import ProductSection from './components/ProductSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
    <NavigationBar companyName="S Shoes"/>
    <ProductSection sectionTitle= "Sneakers"/>
    <ProductSection sectionTitle= "Sandals"/>
    <ContactSection/>
    </>
  )
}

export default App