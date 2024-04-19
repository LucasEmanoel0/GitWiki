import Description from '../infoRepo/Description'
import Link from '../infoRepo/Link'
import Name from '../infoRepo/Name'
import './repo.css'


// eslint-disable-next-line react/prop-types
export default function Repo({name,description,link}){

    function handleRemove(ev){
        let repo = ev.target.parentNode
        repo.remove()
        
    }



    return(
        <div className='ContainerRepo'>
            <Name name = {name}></Name>
            <Description description = {description}></Description>
            <Link color = 'green' name= 'ver repositorio'link={link}></Link>
            <br></br>
            <Link color = 'red' name= 'remover' handleRemove = {(ev)=>handleRemove(ev)}></Link>
            
           
        </div>
    )
}