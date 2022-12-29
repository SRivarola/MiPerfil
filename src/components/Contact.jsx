import { BsLinkedin, BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"
import { GoMail } from "react-icons/go"
import { AiFillCopy } from "react-icons/ai"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contact = () => {
  
  const MySwal = withReactContent(Swal)

  const handleNavigate = (route) =>{
    window.open(route, '_blank')
  }

  const handleCopy = () => {
    MySwal.fire({
      title: <p>Copiado</p>,
      color: '#000',
      icon: 'success',
      iconColor: '#17962a',
      background: '#fff',
      showConfirmButton: false,
      toast: true,
      timer: '1500',
      timerProgressBar: true,
      position: 'bottom-end',
    })
  }

  return (
    <div className="h-screen flex flex-col pb-[60px] pt-[140px] items-center justify-start gap-16 sm:gap-0 sm:justify-between bg-primary dark:bg-secondary">
      <div>
        <h2 className="text-center text-blue text-2xl sm:text-4xl font-semibold">Contacto</h2>
        <div className="w-[200px] pt-8"><hr/></div>
      </div>
      <div className="flex gap-20 text-black dark:text-primary">
        <motion.button
          className="text-4xl"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.8 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavigate('https://www.linkedin.com/in/santiago-rivarola/')}
        >
          <BsLinkedin />
        </motion.button>
        <motion.button
          className="text-4xl"
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.8 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavigate('https://github.com/SRivarola')}
        >
          <BsGithub />
        </motion.button>
      </div>
      <div className="flex gap-8 items-center justify-center text-4xl text-black dark:text-primary">
          <GoMail />
          <p className="text-xl">srivarola@gmail.com</p>
          <button onClick={handleCopy} className="text-xl">
            <CopyToClipboard text='srivarola@gmail.com'>
              <AiFillCopy />
            </CopyToClipboard>
          </button>
      </div>
    </div>
  )
}
export default Contact