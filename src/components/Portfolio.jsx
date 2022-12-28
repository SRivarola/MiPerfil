import { portfolio } from "../data/data"
import './portfolio.css'

const Portfolio = () => {

  const handleNavigate = (route) =>{
    window.open(route, '_blank')
  }

  return (
    <div className="flex flex-col pt-[70px] pb-[100px] items-center bg-primary dark:bg-secondary">
        <h2 className='text-center mt-8 text-blue text-4xl font-semibold'>Portfolio</h2>
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
                  <div className="flex gap-3">
                    <button onClick={() => handleNavigate(item.site)}>Visitar sitio</button>
                    <button onClick={() => handleNavigate(item.repo)}>Ver código</button>
                  </div>
                </div>
                <img src={item.imgPortada} className="product_img" alt="foto del producto"/>
              </div>
            ))
          }
        </div>
    </div>
  )
}
export default Portfolio