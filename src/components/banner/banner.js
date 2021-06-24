
import { ReactComponent as Address } from '../../assets/adress.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import banr from '../../assets/img.jpg';
import './banner.css'
import SearchBox from '../search-box/search-box';





function Banner() {
  return (
        <div className='bnr' style={{ 
      backgroundImage: `url(${banr})`,
      overflow: 'hidden'
    }}>
        <div className='box-banner'>
            <div className='warpper'>
                <div className='txt'>
                <span className='text'>Develop your skills</span>
                </div>
                  <SearchBox/>
            </div>
        </div>
    </div>
  );
}

export default Banner;
