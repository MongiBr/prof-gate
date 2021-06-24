
import logo from '../../assets/logo.svg'
import '../../styles/navbar.css'

function Header() {
  return (
    <nav class="navbar ">
  <div class="align container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="200" height="60"/>
    </a>
    <div className='items'>
    <button className='btn-teach'>Teach</button>
       <span className='na-link'>Help</span>
       <span className='na-link'>Registration</span>
       <span className='na-link'>Connection</span>
    </div>
  </div>
</nav>
  );
}

export default Header;
