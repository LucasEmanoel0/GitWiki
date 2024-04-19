import './button.css'
// eslint-disable-next-line react/prop-types
export default function Button({handleSearchRepos}){
    return(
        <button className='buttonA' onClick={handleSearchRepos}>Buscar</button>
    )
}