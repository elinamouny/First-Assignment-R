import React, { useEffect, useState } from 'react'
import imgOne from '../../assets/front.jpg'
import imgTwo from '../../assets/black-friday-tag-shirt_23-2148283746.jpg'
import imgThree from '../../assets/clothing-item-with-discount-tag_23-2150222228.jpg'
import imgFour from '../../assets/minimal-clothing-label-fashion-brands_53876-110837.jpg'
import imgFive from '../../assets/mockup-blank-black-t-shirt-blank-label-tag-advertising_74952-872.jpg'
import imgSix from '../../assets/ripped-jean-shorts-with-tag-mockup_53876-65769.jpg'
import Item from './Item'
import Heading from '../Global/Heading'

export default function Portfolio() {

  let [imgs, setImgs] = useState([])

  useEffect(() => {
    setImgs([imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix])
  }, [])


  return (
    <>
      <section className='pt-5 pb-5'>
        <div className="container">
          <div className="text-center">
            <Heading text="portfolio component" textColor="#2c3e50" iconBackGround="#FFF" />
            <div className="row pt-5 g-3">
              {imgs && imgs?.map((e, i) => <Item key={i} img={e} index={i} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
