import './alert.css'

const Alert = ({children,handleAlert})=>{
    return(
        <div className='box_alert' >
            <svg  
                width="24"  
                height="24"  
                viewBox="0 0 24 24"  
                fill="none"  
                className='cross_alert'
                onClick={handleAlert}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
            </svg>
            <p>{children}</p>
        </div>
    )
}

export default Alert