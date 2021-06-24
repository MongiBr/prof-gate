

import Banner from '../components/banner/banner';
import Bar from '../components/sidebar/sidebar';

import Area from '../components//List-area/requested-area/area';
import Category from '../components/List-area/categories/category';
import Presentation from '../components/presentation/presentation';
import Information from '../components/info/info';


function Home() {
  return (
    <>
     
      <Banner/>
      <Area/>
      <Category/>
      <Presentation />
      <Information/>
      <Bar />
    
      
    </>
  );
}

export default Home;
