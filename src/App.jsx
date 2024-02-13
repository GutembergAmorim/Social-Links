import photo from "./assets/photo.svg"

function App() {
  

  return (
    <>
    <div className="h-screen w-full m-0 p-0 bg-[#141414] justify-center items-center flex ">
      <div className='rounded-2xl p-6 bg-[#1f1f1f] flex flex-col items-center text-[#ffffff] font-bold'>
        <div className="p-4">
          <img className='size-20 rounded-full' src={photo} alt="MinhaFoto" />
        </div>
        <div className="text-center">
          <h1 className='font-bold'>Gutemberg Amorim</h1>
          <p className="text-[#c5f82a] text-sm">Ceará, Brazil</p>
        </div>
        <div className="items-center pt-3 pb-3 font-normal text-xs">
          <p className="">"React developer and Software engineer"</p>
        </div>
        <div className='flex flex-col gap-3 text-sm w-full text-center'>
          <a className="bg-[#333333] rounded-md p-2" href="https://www.frontendmentor.io/profile/GutembergAmorim">Frontend Mentor</a>
          <a className="bg-[#333333] rounded-md p-2 " href="https://github.com/">GitHub</a>
          <a className="bg-[#333333] rounded-md p-2 " href="https://www.linkedin.com/in/gutembergamorim/">Linkedln</a>
          <a className="bg-[#333333] rounded-md p-2" href="https://www.instagram.com/gutem_88/">Instagram</a>
        </div>
      </div>   
      
    </div>
    </>
  )
}

export default App
