
import { ReactComponent as Search } from '../../../assets/search2.svg';
import back from '../../../assets/image2.jpg';
import back2 from '../../../assets/image3.jpg';
import back3 from '../../../assets/image4.jpg';
import back4 from '../../../assets/image5.jpg';
import bg from '../../../assets/p3.png';
import '../../../styles/listCard.css'

function Area() {
  return (
    <div class="area ">
        <img className='bg' src={bg}/>
        <div className='title'>
            
            <span className='center'>THE MOST REQUESTED AREA</span>
        </div>

      <div className='cards'>
        <span className='back-area'>&lt;</span>
            <div className='card-area' style={{ 
      backgroundImage: `url(${back})`,
      overflow: 'hidden'
    }}>
                <div className='cardbody'>
                  <div className='algn'>
                    <div className='block'>
                       <div className='icon'>
                          <Search className='icon-size'/>
                       </div>
                      <div className='contenta'>
 
                        <span className='heading'>Personal development</span>

                      </div>
                      </div>
                  </div>
                </div>
            </div>


             <div className='card-area' style={{ 
      backgroundImage: `url(${back2})`,
      overflow: 'hidden'
    }}>
                <div className='cardbody'>
                  <div className='algn'>
                    <div className='block'>
                       <div className='titleD'>
                           <span className='heading'>Digital</span>
                       </div>
                    
 
                         <p className='paragh'>Lorem Ipsum has been the industry's standard dummy and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>

                     
                      </div>
                  </div>
                </div>
            </div>

              <div className='card-area' style={{ 
      backgroundImage: `url(${back3})`,
      overflow: 'hidden'
    }}>
                <div className='cardbody'>
                  <div className='algn'>
                    <div className='block'>
                       <div className='titleD'>
                           <span className='heading'>Sport</span>
                       </div>
                    
 
                         <p className='paragh'>Lorem Ipsum has been the industry's standard dummy and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>

                     
                      </div>
                  </div>
                </div>
            </div>


              <div className='card-area' style={{ 
      backgroundImage: `url(${back4})`,
      overflow: 'hidden'
    }}>
                <div className='cardbody'>
                  <div className='algn'>
                    <div className='block'>
                       <div className='titleD'>
                           <span className='heading'>Languages</span>
                       </div>
                    
 
                         <p className='paragh'>Lorem Ipsum has been the industry's standard dummy and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>

                     
                      </div>
                  </div>
                </div>
            </div>

        <span className='c-area'>&gt;</span>
      
        </div>
    </div>
  );
}

export default Area;
