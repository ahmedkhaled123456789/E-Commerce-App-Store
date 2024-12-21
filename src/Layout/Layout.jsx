 import AppRoutes from '../AppRoutes'
import Button from '../components/button/Button';
import Curser from '../components/curser/Curser';
import Head from '../components/header/Head';
import NavBar from '../components/header/NavBar';
import Loading from '../components/loading/Loading';
import Footer from '../components/footer/Footer';
import NewsletterSection from '../components/Home/NewsletterSection/NewsletterSection';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

 const Layout = () => {
  const location = useLocation();
  const [user,setUser] = useState(true);
  useEffect(() => {
    if (location.pathname.startsWith('/login') || location.pathname.startsWith('/register')) {
      setUser(false);
    } else {
      setUser(true);
    }
  }, [location.pathname]);   return (
     <div> 
     
     <Loading/> 
<Button/>
<Curser/>
{user &&
<>
<Head />

<NavBar/>

</>
}
    <AppRoutes/> 
    {user && <>
      <NewsletterSection/>
    <Footer/>
    </>}

     </div>
   )
 }
 
 export default Layout;
 