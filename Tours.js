
const tours= (props) =>{
    return(
        <>
        {
            props.tours.map(tour => {
                return(
                    <div>
                        <img src={tour.image} alt="" />
                        <h3>{r=tour.name}</h3>
 <Routes>
        <Route path="<Tour/ tour={tour} >" element={<Home />} 
        <
     
    </Routes>
                       
                    </div>
                )
                
            })
        }
        </>
        
        
    )
};

export default tours;
