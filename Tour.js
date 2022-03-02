const tour= (props) =>{
    return(
        <>
        {
            props.tour.map(tour => {
                return(
          <div>
                        <img src={tour.image} alt="" />
                        <h3>{tour.name}</h3>
                       
                    </div>
                       
                  
                )
                
            })
        }
        </>
        
        
    )
};

export default tours;
