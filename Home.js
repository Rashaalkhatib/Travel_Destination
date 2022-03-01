import Header from '/Header';
import Footer from "/Footer";
import tours from "./tours";
import data from './data.json';

function App(){
    
   
    return(
        <>
            <Header />
          
            <Tours tours={data}/>
            <Footer />
        </>
        
    )
}

export default App;
