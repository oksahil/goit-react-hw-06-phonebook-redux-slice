import { ThreeDots } from 'react-loader-spinner'


const Loader= ()=> {
    return(
        <ThreeDots  
            height="80" 
            width="80" 
            radius="9"
            color="rgba(69, 8, 125, 0.5)" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{
                justifyContent:"center"
            }}
            wrapperClassName=""
            visible={true}
           
        />
    )
}

export default Loader;

