 import AppRoutes from '../AppRoutes'
import Button from '../components/button/Button';
import Curser from '../components/curser/Curser';
import Head from '../components/header/Head';
import NavBar from '../components/header/NavBar';
import Loading from '../components/loading/Loading';
import Footer from '../components/footer/Footer';
import NewsletterSection from '../components/Home/NewsletterSection/NewsletterSection';

 const Layout = () => {
  const user = false;
   return (
     <div> 
     
     <Loading/> 
<Button/>
<Curser/>
{user && <Head />}
<NavBar/>
    <AppRoutes/> 
    <NewsletterSection/>
 
    {user && <NavBar />}

     </div>
   )
 }
 
 export default Layout;
 