import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../components/base/header'
// import Community from '../components/Community'

import './../styles/pages/index.scss';

// const imageMode = [
// // filter: invert(0.6) contrast(4);
// // filter: invert(0.3) grayscale(0.8);
// // filter: sepia(0.1) brightness(0.8);
// // filter: invert(0.2) brightness(2) grayscale(0.8);
// // filter: invert(0.3) contrast(4) hue-rotate(30deg) grayscale(0.7);
// // filter: sepia(0.5);
// // filter: grayscale(1);
// // filter: blur(3px);
// ]

// const rdm = (num) => {
//   let _n = Math.random();
//   if (_n > 0) {

//   }
// }

const invert = `invert(${Math.random().toFixed(3)})`
const sepia = `sepia(${Math.random().toFixed(3)})`
const grayscale = `grayscale(${Math.random().toFixed(3)})`
const contrast = `contrast(${Math.random() * 3})`
const brightness = `brightness(${(Math.random() * 3).toFixed(3)})`
const blur = ` blur(${Math.floor(Math.random() * 3).toFixed(3)})`

let cssMode = [invert, sepia, grayscale, contrast, brightness, blur]
cssMode = cssMode.map(item => Math.random() > 0.5 ? item : null)

const HomePage = (props) => {
  const { allImageSharp } = props.data
  const allImages = allImageSharp.edges
  // console.log(allImages)
  const randomImgIndex = Math.floor(Math.random() * allImages.length)
  // console.log(randomImgIndex)
  const filterImg = allImages.filter((item, index) => randomImgIndex === index)[0]

  const nofwlImg = filterImg.node.original.src
  // return item.node.original.src
  // console.log(nofwlImg)
  return (
    <React.Fragment>
      <Helmet>
        <title>nofwl</title>
      </Helmet>
      <div className="nofwl__cool">
        {/* {console.log(props)} */}
        {/* <h1>Home</h1> */}
        <Header />
        <section className="nofwl-awesome" style={{
          backgroundImage: `url(${nofwlImg})`,
          filter: cssMode.join('')
        }} />
        {/* <Community /> */}
      </div>
    </React.Fragment>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    allImageSharp (
      filter: {
        fixed: {
          originalName: {
            regex: "/no_fwl-/"
            # ne: "History of Magic"
          }
        }
      }
    ) {
      edges {
        node {
          id
          original {
            # width
            # height
            src
          }
        }
      }
    }
  }
`