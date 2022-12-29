import { IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoJavascript, IoLogoReact, IoLogoGithub } from "react-icons/io5"
import { SiTailwindcss } from "react-icons/si";

const Main = () => {
  return (
    <main className="h-screen w-screen flex flex-col justify-center text-secondary gap-10 pt-[70px] dark:bg-secondary dark:text-white">
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between mx-5 sm:mx-[150px]'>
            <div className='flex flex-col sm:gap-8 font-semibold text-xl text-center sm:text-left sm:text-4xl justify-center sm:w-[50%]'>
                <div className="flex flex-row justify-center sm:flex-col sm:gap-8">
                  <p>¡Hola!</p>
                  <p className="ml-3 sm:ml-0">Soy <span className="text-blue">Santiago,</span></p>
                </div>
                <p>Frontend React Dev.</p>
            </div>
            <div className="sm:w-[50%] relative flex items-center justify-center">
              <img 
                className="relative w-[350px] rounded-tl-[25%] rounded-br-[25%] rounded-tr-[10%] rounded-bl-[10%] shadow-[0_0_10px_rgba(0,0,0,0.702)] dark:shadow-[0_0_10px_#7e7e7eb3]"
                src='https://firebasestorage.googleapis.com/v0/b/fixturewolrdcup2022.appspot.com/o/portfolio%2Fperfil.png?alt=media&token=9b05bd5a-3ed5-448e-beb4-272377e92869' alt="foto de perfil" 
              />
            </div>
        </div>
        <div className="flex gap-5 sm:gap-8 text-4xl mx-5 sm:mx-[150px]">
           <IoLogoHtml5 color="#ff4940" />
           <IoLogoCss3 color="#1f79ff"/>
           <IoLogoSass color="#d950b3"/>
           <IoLogoJavascript color="#d7d447"/>
           <IoLogoReact color="#5fb9ff"/>
           <SiTailwindcss color="#38a8ff"/>
           <IoLogoGithub />
        </div>
    </main>
  )
}
export default Main