
const tours= (props) =>{
    return(
        <>
        {
            props.tours.map(tour => {
                return(
                <Routes>
        <Route path="<Tour/ tour={tour} >" element={<Home />} 
        
     
    </Routes>
                       
                  
                )
                
            })
        }
        </>
        
        
    )
};

export default tours;
