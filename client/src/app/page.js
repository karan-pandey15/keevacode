 
import Category from "./components/Category/page";
import Banner1 from "./components/homepage/page";
import Footer from "./components/footer/page"; 
import Navbar from "./components/navbar/page";    
export default function Home() {
  return (
    <main>   
      <div>
        <Navbar />
      </div>
    
      <div>
      <Banner1 />
      </div> 
      <div>
        <Category />
      </div> 
      <div>
        <Footer />
      </div>
    </main> 
  );
}
