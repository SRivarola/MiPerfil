const About = () => {
  return (
    <div className="h-screen pt-[70px] flex flex-col items-center bg-primary dark:bg-secondary">
      <h2 className='text-center mt-8 text-blue text-4xl font-semibold'>Un poco sobre mí</h2>
      <div className="w-[200px] m-6"><hr/></div>
      <div className="relative flex justify-center gap-10">
        <div className='relative w-[40%] flex justify-end items-center'>
          <img className='w-[45%] rounded-[5px] shadow-[0_0_10px_rgba(0,0,0,0.702)] dark:shadow-[0_0_10px_#7e7e7eb3]' src='https://firebasestorage.googleapis.com/v0/b/fixturewolrdcup2022.appspot.com/o/portfolio%2Fperfil2.png?alt=media&token=fc173d04-b8cc-4745-a973-9578e554d5af' alt="foto de perfil"/>
        </div>
        <div className='w-[40%] text-black dark:text-white'>
          <h3 className='font-semibold'>Me dicen Santi,</h3>
          <p className='indent-5 text-justify'>
            Soy una persona <span className="text-blue italic">organizada,</span> con una gran <span className="text-blue italic">motivación</span> y apasionada por el <span className="font-semibold italic">diseño</span> y la <span className="font-semibold italic">tecnología</span>. Emprendo cada desafío con ánimo y ganas de aprender, tomo cada obstáculo como una oportunidad de mejora. Me gusta <span className="text-blue italic">trabajar en equipo</span> y alcanzar metas en común. 
          </p>
          <p className='indent-5 text-justify'>
            Siempre tuve curiosidad por la tecnología. Actualmente me encuentro desarrollando proyectos, en los que pueda aplicar los conocimientos adquiridos y estudiando <span className="font-semibold italic">desarrollo fullstack</span>, donde me encuentro adquiriendo nuevas herramientas dentro de la programación y con muchas ganas de seguir aprendiendo. Mi propósito es desarrollar mi carrera profesional en una empresa donde pueda aplicar mis conocimientos e incrementar mi experiencia en el rubro.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About