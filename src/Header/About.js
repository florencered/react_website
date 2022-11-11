import React from 'react'
import HeroSection from '../components/HeroSection' 
import { GlobalContext } from '../Context'
import { useEffect } from 'react' 
import { Context } from 'react'
const About = () => { 
  // const data={
  //   name:"Dhriti Dey" ,
  //   image:'IMAGE 2',
  //   text:"I am a sophomore student studying in VIT Chennai"
  // }  
  const {AboutPage}= GlobalContext(); //acaquiring about page function from global context
//use effect hook to call the hook when it is rendered 
useEffect(() => {
      AboutPage();

},[])

  return (
    <>

    <HeroSection /> 
    </>
  )
}

export default About