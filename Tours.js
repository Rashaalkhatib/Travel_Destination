
const tours= (props) =>{
    return(
        <>
        {
            props.tours.map(tour => {
                return(
                    <div>
                        <img src={tour.image} alt="" />
                        <h3>{r=tour.name}</h3>
                       
                    </div>
                )
                
            })
        }
        </>
        
        
    )
};

export default tours;
