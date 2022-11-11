import React, { useEffect } from 'react' 
import HeroSection from '../components/HeroSection' 
import { GlobalContext } from '../Context' 

const Home = () => {   
  const {HomePage}=GlobalContext();
  useEffect(()=>{
        HomePage();
  }); //after the page reloads,empty dependency array means that the callback will run only once at the begenning of the life cycle
 
  // const data={
  //   name:"FLORENCE'S WEBSITE",
  //   image:"IMAGE 1", 
  //   text:"Hi I am a front-end developer and the tech-stacks I use are react,HTML,Javascript and Bootstrap"
  // }  

  return (
     <HeroSection />
  )
}

export default Home