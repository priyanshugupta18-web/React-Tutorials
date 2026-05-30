/* What are props, why do we need props?
=> props in JS stands for properties of a component. React is library which supports component based approach means we can create different components and use it multiple times in react but whatif we need values of certain properties at different instances...for dealing with those kind of things we pass props to component at different instance so that can have desired value of components all the time.
*/

import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <Card tittle = "Nike Shoes" description = "This is A1 Branded Nike Shoes"/>
      <Card tittle = "Adidas Shoes" description = "Very Branded, Very stylish"/>
      <Card tittle = "Jordan Shoes" description = "Tough like a Sportsman"/>
    </>
  )
}

export default App
