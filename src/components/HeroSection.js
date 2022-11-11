import React from 'react' 
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'; 
import { Context } from 'react';
import { Button } from '../styles/Button'; 
import { GlobalContext } from '../Context';

const HeroSection = () => { 
  const {name,image,text}=GlobalContext();
  return (
    <Wrapper>
        <div className='container grid grid-two-column'> {/*the whole hero section*/} 
            <div className='section-hero-data'>
                <p className='hero-top-data'>THIS IS ME</p> 
                <h1 className='hero-heading'>{name}</h1> 
                <p className='hero-para'> 
                {text}
                </p> 
                <Button className="btn hireme-button">
                <NavLink to="/contact" >Hire Me</NavLink>
            </Button>
                </div>  
            

            <div className='section-hero-image'>{image}</div>
        </div>

    </Wrapper > 
  )
} 
const Wrapper = styled.section` 
padding: 5rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 2.5rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;



export default HeroSection