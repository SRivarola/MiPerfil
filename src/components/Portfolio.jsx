import { useEffect, useState } from "react"
import { portfolio } from "../data/data"
import { motion } from "framer-motion"
import './portfolio.css'

const Portfolio = () => {

  const [matches, setMatches] = useState(false)
  const mql = window.matchMedia('(max-width:768px)')
  
  const handleNavigate = (route) =>{
    window.open(route, '_blank')
  }

  const onHandlerChange = (e) => {
    setMatches(mql.matches)
  }

  useEffect(() => {
    mql.addEventListener('change', onHandlerChange)
    return () => {
      mql.removeEventListener('change', onHandlerChange)
    };
  }, []);

  return (
    <div className="flex flex-col pt-[70px] pb-[100px] items-center bg-primary dark:bg-secondary">
        <h2 className='text-center mt-8 text-blue text-2xl sm:text-4xl font-semibold'>Portfolio</h2>
        <div className="w-[200px] m-6"><hr/></div>
        <div className="flex flex-col items-center gap-10">
          {
            portfolio.map(item => (
              <div key={item.id} className="cards" >
                <div className="circle" style={{'--clr': item.color}}>
                  <img src={item.imgLogo} className="logo_" alt="logo del producto"/>
                </div>
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <div className="flex justify-between gap-3">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.5 },
                        color: `${item.color}`
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleNavigate(item.site)}
                    >
                      Visitar sitio
                    </motion.button>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.5 },
                        color: `${item.color}`
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleNavigate(item.repo)}
                    >
                      Ver código
                    </motion.button>
                  </div>
                </div>
                <img src={matches ? item.imgWide : item.imgPortada} className="product_img" alt="foto del producto"/>
                </div>
            ))
          }
        </div>
    </div>
  )
}
export default Portfolio