import { useState } from "react";
import Input from "../input/Input";
import './main.css'
import Button from "../button/Button";
import api from '../../services/api'
import Repo from "../sectionRepo/Repo";

export default function Main(){

    const [repos,setRepos] = useState([])
    const [name,setName] = useState("")

   async function  handleSearchRepo(){
        const {data} = await api.get(`repos/${name}`)
        if(data.id){
            setRepos(prev=>[...prev,data])
            console.log(repos)
        }
        else{
            alert("repositorio nao existe")
        }
    }

    return( 
        <>
        <section className="Search">
         <div className="ContainerInput">
            <Input name = {name} setName = {setName}></Input>
        </div>
        <Button handleSearchRepos={handleSearchRepo}></Button>
        </section>
        {repos.map((repo)=>{
            return(
                <Repo key={repo.id} name={repo.name} description={repo.fullname} link={repo.html_url} id={repo.id}></Repo>
            )
        })}
        </>
        
       
    )
}