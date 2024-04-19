import './infoRepo.css'

// eslint-disable-next-line react/prop-types
export default function Link({color,name,link,handleRemove}){


     
    return(
    <a href={link} className= {`link${color}`} target='_blank' onClick={handleRemove}>{name}</a>
    )
}