

import user from '../../assets/img-u.PNG';
import banr from '../../assets/img.jpg';
import leftBg from '../../assets/p1.png';
import './pres.css'





function Presentation() {
  return (
      <div className='wrapper-box'>
      
        <div className='img-back' style={{ 
      backgroundImage: `url(${banr})`,
      overflow: 'hidden'
        }}>
          
        <div className='img-box'> 
            
            </div>
        
      </div>
      <div className='container'>
             
              <div className='cont1'> <img src={user} className='img-pres' width='385px' height='600px'/>
                
                <div  className='taille'>
              <span className='title-pres'>GOALS</span>
              <p className='paragh-pres2'>
                    Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p> 
                  </div>
                </div>    
          
            
                
               <div className='cont2'> <div  className='taille2'>
              <span className='title-pres'>PRESENTATION</span>
              <p className='paragh-pres'>
                   Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p> 
                  </div>
          <img src={banr} className='image1' width='385px' height='500px' />
          </div>
            </div>
        <img src={leftBg} className='left-pres' />
   </div>
  
  );
}

export default Presentation;
