import Vegan from '../components/Vegan'
import Popular from '../components/Popular'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <motion.div
      animate={{opacity:1}}
       initial={{opacity:0}}
       exit={{opacity:0}}
       transition={{duration: 0.4}}
     >
      <Vegan/>
      <Popular/>
    </motion.div>
  )
}

export default Home