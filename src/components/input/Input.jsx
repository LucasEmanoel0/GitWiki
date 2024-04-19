import './input.css'
// eslint-disable-next-line react/prop-types
export default function Input({name,setName}){
    return(
        <input type="text" className='InputA' value={name} onChange={(event)=>setName(event.target.value)}/>
    )
}