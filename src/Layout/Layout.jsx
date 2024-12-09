 import AppRoutes from '../AppRoutes'
import Button from '../components/button/Button';
import Curser from '../components/curser/Curser';
import Head from '../components/header/Head';
import NavBar from '../components/header/NavBar';
import Loading from '../components/loading/Loading';
 
 const Layout = () => {
   return (
     <div> 
     <Loading/> 
<Button/>
<Curser/>
<Head/>
<NavBar/>
    <AppRoutes/>  
     </div>
   )
 }
 
 export default Layout;
 