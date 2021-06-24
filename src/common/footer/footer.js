
import logo from '../../assets/logo2.png'
import map from '../../assets/map.png'

import './footer.css'
import { ReactComponent as Address } from '../../assets/place.svg';
import { ReactComponent as IconMail } from '../../assets/mail.svg';
import { ReactComponent as IconPhone } from '../../assets/phone.svg';






function Footer() {

 

  return (
    <div class="footer ">
      <div className='container-footer'>
        <img src={logo}  width='230px' height='70px'/>
        <div className='menu'> <span className='title-f'>MENU</span>
          <div className='link-footer'>Help</div>
          <div className='link-footer'>Organisation</div>
           <div className='link-footer'>Connection</div>
        </div>

        <div className='menu-block'>
           <div className='menu'> <span className='title-f'>CONTACT</span>
          <div className='link-footer'><IconPhone className='size-ico'/> 23 254 845 / 25 689 254</div>
          <div className='link-footer'><IconMail className='size-ico'/> profgate@gmail.com</div>
           
          </div>
          
          <div className='menu'> <span className='title-f'>PLACE</span>
          <div className='link-footer'><Address className='size-ico'/> 23 254 845 / 25 689 254</div>
          
           
        </div>
      </div>
         
        <div>
         <img src={map}  width='200px' height='150px'/>
         </div>
      </div>
      <div className='copyright'>
            copyright © ProfGate 2021
      </div>
    </div>
  );
}

export default Footer;
