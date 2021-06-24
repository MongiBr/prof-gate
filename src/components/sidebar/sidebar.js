

import './sidebar.css'
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Linkedin } from '../../assets/linkdin.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';

function Bar() {
  return (
   <div className='bar'>
       <div className='align'>
        <Facebook className='small'/>
        </div>
        <div className='align'>
      <Linkedin className='small'/>
        </div>
        <div className='align'>
      <Twitter className='small'/>
        </div>
        <div className='align'>
          <Instagram className='small'/>
        </div>
      
        
      
        
   </div>
  );
}

export default Bar;
