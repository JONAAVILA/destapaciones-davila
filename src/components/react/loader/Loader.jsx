import { tailChase } from 'ldrs'
import './loader.css'

const Loader = ({size})=>{
    tailChase.register()
    return(
        <div className='load_container' >

            <l-tail-chase
                size="40"
                speed="1.75" 
                color="#1565C0" 
            >
            </l-tail-chase>
        </div>
    )
}

export default Loader