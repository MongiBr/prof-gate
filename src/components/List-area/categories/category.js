
import { ReactComponent as Music } from '../../../assets/music.svg';
import { ReactComponent as Language } from '../../../assets/language.svg';
import { ReactComponent as Computer } from '../../../assets/computer.svg';
import back from '../../../assets/image.png';
import bg from '../../../assets/p4.png';
import '../../../styles/listCard.css'

function Category() {
  return (
    <div class="category ">
          <img className='bg2' src={bg}/>
        <div className='title2'>
            
            <span className='center'>Our Categories</span>
        </div>

      <div className='cards'>
        <span className='back-area'>&lt;</span>
            <div className='card-area'>
                <div className='cardbody'>
                  <div className='algn'>
                    <div className='block'>
                       <div className='icon'>
                          <Music className='icon2-size'/>
                       </div>
                      <div className='contenta'>
 
                        <span className='heading'>Music</span>

                      </div>
                      </div>
                  </div>
                </div>
            </div>
            <div className='card-area'>
                <div className='cardbody'>
                  <div className='algn'>
                    <div className='block'>
                       <div className='icon'>
                          <Language className='icon2-size'/>
                       </div>
                      <div className='contenta'>
 
                        <span className='heading'>Language</span>

                      </div>
                      </div>
                  </div>
                </div>
            </div>
            <div className='card-area'>
                <div className='cardbody'>
                  <div className='algn'>
                    <div className='block'>
                       <div className='icon'>
                          <Computer className='icon2-size'/>
                       </div>
                      <div className='contenta'>
 
                        <span className='heading'>Computer</span>

                      </div>
                      </div>
                  </div>
                </div>
            </div>
            <div className='card-area'>
                <div className='cardbody'>
                  <div className='algn'>
                    <div className='block'>
                       <div className='icon'>
                          <Music className='icon2-size'/>
                       </div>
                      <div className='contenta'>
 
                        <span className='heading'>Music</span>

                      </div>
                      </div>
                  </div>
                </div>
            </div>


          <span className='c-area'>&gt;</span>
      
        </div>
    </div>
  );
}

export default Category;
