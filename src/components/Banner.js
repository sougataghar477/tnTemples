import ReactModal from 'react-modal';
import {useState} from 'react';
function Banner(){
    let [modalOpen,setModalopen]=useState(false);
    return  <> <div className="banner lg:hidden">
        <img onClick={()=>{setModalopen(true)}}  className="play-btn mt-24" src="https://static.consciousplanet.org/static/assets/img/play-icon.svg"/>
         
            <p className="text-white text-4xl text-center">Free Tamil Nadu's temples</p>
            <p className="text-white text-center">Show your support to</p>
            <p className="yellow text-2xl text-center font-bold">#FreeTNTemples</p>
            <a href="" className="support-btn">Click Here To Support</a>
            <p className="text-white text-center">OR</p>
            <a href="tel:+918300083000" className="support-btn flex"><img width={32} src="https://static.consciousplanet.org/static/assets/img/phone.svg"/>83000 83000</a>
         
        </div>
        <div className="hidden banner-desktop lg:block container p-32 mx-auto relative">
            <div className="container-2">
        <p className="text-white text-6xl  ">Free Tamil Nadu's Temples</p>
        <p className="text-white text-2xl">Show your support to</p>
        <p className="yellow text-4xl font-bold">#FreeTNTemples</p>
        <a className="support-btn support-btn-desk">Click Here To Support</a>
            </div>
            <img  onClick={()=>{setModalopen(true)}} className="play-btn-desk absolute" src="https://static.consciousplanet.org/static/assets/img/play-icon.svg"/>
        </div>
        <ReactModal   style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
       
      background: '#000',
       
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
       
    }
  }} isOpen={modalOpen}
  className='grid place-items-center relative'
  >
            <p className='absolute right-2 top-2 text-white' onClick={()=>{setModalopen(false)}}>&#x2716;</p>
            <iframe width="320" height="240" src="https://www.youtube.com/embed/Xq_VOIDREWg" title="Nenju Porukkalaye | The Unbearable Pain... #FreeTNTemples" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </ReactModal>
    </>
}
export default Banner;