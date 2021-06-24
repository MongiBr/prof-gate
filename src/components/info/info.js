


import banr from '../../assets/img.jpg';
import animt from '../../assets/p2.png';
import './info.css'

function Information() {
  return (
     
      <div className='container-info'>
      <div class="info "
      style={{ 
      backgroundImage: `url(${banr})`,
      overflow: 'hidden'
        }}
      >
  
         <img src={animt} className='left-info' width='550px' height='600px' />
        <div className='cards-info'>
            <div className='container-block'>
            <div className='card-info'>
               
                  <div className='algn'>
                
                       <div className='number'>
                         +200
                       </div>
                  
                 
                  </div>
              
              </div>
                  <div className='content-info'>
 
                        <span className='title-info1'>Language</span>

                  </div>
                  </div>
           
              
              <div className='container-block'>
            <div className='card-info'>
               
                  <div className='algn'>
                
                       <div className='number'>
                         +80
                       </div>
                  
                 
                  </div>
              
              </div>
                  <div className='content-info'>
 
                        <span className='title-info'>professor</span>

                  </div>
                  </div>
           
              
              <div className='container-block'>
            <div className='card-info'>
               
                  <div className='algn'>
                
                       <div className='number'>
                         +20
                       </div>
                  
                 
                  </div>
              
              </div>
                  <div className='content-info'>
 
                        <span className='title-info'>specialty</span>

                  </div>
                  </div>
           


          
      
        </div>
          </div>
          </div>
  );
}

export default Information;
