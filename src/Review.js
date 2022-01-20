import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index, setIndex] = useState(0)
  const{name, job,image,text} = people[index]
  // console.log(name, job,image,text);
  const checkNum = (number) =>{
    if (number > people.length -1) {
      return 0
    }
    else if (number < 0) {
      return people.length -1
    } else {
      return number
    }
  }
  
  const prevFunc = () =>{
    setIndex(prevIndex => checkNum(prevIndex - 1))
  }

  const nextFunc = () =>{
    setIndex(prevIndex => checkNum(prevIndex + 1))
  }

  const randomFunc = () =>{
    let randomNum = Math.floor(Math.random() * people.length)
    if (randomNum == index) {
      return index + 1
    } 
    setIndex(checkNum(randomNum))
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
            <FaQuoteRight/>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <h4 className='job'>{job}</h4>
      <h4 className='info'>{text}</h4>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevFunc}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextFunc}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn' onClick={randomFunc}>
          surprise me
      </button>
    </article>
  // <h2>review component</h2>
  );
};

export default Review;
