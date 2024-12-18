 import AppRoutes from '../AppRoutes'
import Button from '../components/button/Button';
import Curser from '../components/curser/Curser';
import Head from '../components/header/Head';
import NavBar from '../components/header/NavBar';
import Loading from '../components/loading/Loading';
import Footer from '../components/footer/Footer';
import NewsletterSection from '../components/Home/NewsletterSection/NewsletterSection';

 const Layout = () => {
   return (
     <div> 
     
     <Loading/> 
<Button/>
<Curser/>
<Head/>
<NavBar/>
    <AppRoutes/> 
    <NewsletterSection/>
 
    <Footer/>
     </div>
   )
 }
 
 export default Layout;
 