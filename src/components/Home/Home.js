import React from 'react'
import Howwespend from '../Howwespend/Howwespend';
import Introwhatwedo from '../Whatwedo/Introwhatwedo';
import Issuesweworkon from '../Whatwedo/Issuesweworkon';
import Projectswehavedone from "../Whatwedo/Projectswehavedone"
import Ourapproach from '../Whatwedo/Ourapproach';
import Herobanner from './Herobanner';



const Home = () => {
  return (
    <div>
      <Herobanner />
     <Introwhatwedo />
     <Issuesweworkon />
      <Howwespend />
      <Projectswehavedone />
      <Ourapproach />
    </div>
  )
}

export default Home
