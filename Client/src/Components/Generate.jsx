import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

export const Generate = () => {
  const [image,setImage]= useState(assets.sample_img_1);
  const [isImageloaded,setisImageloaded]= useState(null);
  const [Imageloading,setisImageloading]= useState(true);
  const [input,setInput]= useState('');

  const navigate = useNavigate();

  const {generateImage}=useContext(AppContext)

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setisImageloading(true);
    if(input){
      const image= await generateImage(input);
      if(image){
        setisImageloaded(true);
        setImage(image)
      }
    }
    setisImageloading(false);
  }

  return (
<div action=""
  style={{ width: "100%", height: "100vh" }}
  className="d-flex justify-content-center align-items-center"> 
<form
onSubmit={handleSubmit}
  action=""
  style={{ width: "100%", height: "100vh" }}
  className="d-flex  justify-content-center align-items-center"
>      <div className='d-flex text-white mx-auto justify-content-center justify-items-center row text-center align-items-center'>
       
        <div className='d-flex justify-content-center align-items-center'>
          <img width={350} className='mb-3 rounded' style={{border:"1px solid white",boxShadow:"2px 2px 16px "}} src={image} alt="" />
        </div>
        <p className={ !Imageloading ?'d-none':'d-block mb-3'}> loading....</p>
        {!isImageloaded && <div>
          <input onChange={e => setInput(e.target.value)} value={input} style={{border:" 2px solid white "}} type="text" className='rounded-5 p-2 px-5' placeholder='Enter your ideas Here' />
          <button type='submit' className='promtBtn rounded-5'>Generate</button>
        </div>}
        {isImageloaded && <div className='m-3'>
          <div>
          <button onClick={()=>setisImageloaded(false)} className='promtBtn me-2 rounded-5 p-2 px-3'>Generate Another</button>
          <a href={image} download style={{backgroundColor:"white",border:" 2px solid white ",color:"black" ,textDecorationLine:"none"}} className='rounded-5 p-2 px-5'>Download</a>
          </div>
          <div>
          <button onClick={()=>navigate('/pricing')} style={{backgroundColor:"black",border:"2px solid white"}} className='text-white mt-3 rounded-5 p-2 px-3'>Generate Another</button>
          </div>
        </div> }
      </div>
    </form>
</div>
  )
}
