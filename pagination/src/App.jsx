import React, { useState } from 'react'
import image1 from "./assets/image1.png"
import image2 from "./assets/image2.png"
import image3 from "./assets/image3.png"
import image4 from "./assets/image4.png"
import image5 from "./assets/image5.png"
import image6 from "./assets/image6.png"



const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [image, setImage] = useState(image1)
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ]
  const handlePreviousPagination = (e) => {
    if (currentIndex == 0) {
      setCurrentIndex(images.length - 1)
    }
    else {
      setCurrentIndex(currentIndex - 1)
    }
  }
  const handleNextPagination = () => {
    if (currentIndex == images.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }

  }
  const handleClick = (index) => {
    console.log(index);
    console.log(index.target);
    // console.log(index.target.innerText);
    setCurrentIndex(index.target.innerText)
  }
  return (
    <>
      <div className='h-96 w-96'>

        <img src={images[currentIndex]} alt="" />
      </div>
      <div>
        <button onClick={handlePreviousPagination}>Previous</button>

        {
          images.map((_, index) => { return <button key={index} onClick={(e) => handleClick(e)}>{index + 1}</button> })
        }


        <button onClick={handleNextPagination}>Next</button>

      </div>
    </>

  )
}

export default App
