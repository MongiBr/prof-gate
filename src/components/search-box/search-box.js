
import { ReactComponent as Address } from '../../assets/adress.svg';
import { ReactComponent as Search } from '../../assets/search.svg';

import './box.css'





function SearchBox() {
  return (
        
                    <div className='box'>
                        <div className='flx'>
                            <span className="box-input">
                                <Search className='size' />
        
                                <input className="input-search" type="text" placeholder="what subject?" />
                             </span>
                            <span className="box-input">
                                 <Address className='size'/>
                                <input className="input-search"  type="text" placeholder="address" />
                            </span>
                            <button className='btn-search'>Research</button>
                        </div>
                    </div>
       
  );
}

export default SearchBox;
