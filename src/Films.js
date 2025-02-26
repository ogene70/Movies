import React,{useState,useEffect,StyleHTMLAttributes} from "react";
function Films(){

const [listeFilms, setFilms] = useState([]) ;//stockage des données
const [keyWord, setkeyWord] = useState("voiture") ;//definition des mots clefs


    const apiKey = "74f62967e1525b5b18ada01dc9f61467";
    const url ="https://api.themoviedb.org/3/search/movie?api_key=" +apiKey +"&language=fr-FR&page=1&query=";
    const fetchOptions = { method: "GET" };

    const bstyle = {
        padding:'0.5em',
        backgroundColor:'black',
        color:'white',
        hoverflowX:'hidden'
       
    };
    const image={
        width:'35vw',   
        heigth:'100%',     
        aspectRatio:'2/2',
        objectFit:'contain'
    }
    const row={
        display:'flex',
        flexDirection:'row',
        overflowX:'scroll',
        overflowY:'hidden',
        scrollbarWidth:'none',
        

    }


    function critere(e){
        if (e.target.value=="") {
            setkeyWord('voiture')
        } else {
            setkeyWord(e.target.value)
        console.log(keyWord)
        }
        
    }

    useEffect(() => {
    fetch(url + keyWord, fetchOptions)
    .then((response) => {
    return response.json();
    })
    .then((dataJSON) => {
    console.log(dataJSON);
    let data=dataJSON.results
    setFilms(data)
    })
    .catch((error) => {
    console.log(error);
    })
    }, [keyWord]);




    return (
    <div style={bstyle}>
        <div>
            <input type="search" placeholder="Recherchez un film"
            onChange={critere}/>
        </div>
        <h1>Bienvenu sur notre plateforme de streaming</h1>
         <h2>Nos films</h2>
            <ul style={row}>
                { listeFilms.map((f) => (
                <li>
                    <img style={image} src={`https://image.tmdb.org/t/p/w500/${f.poster_path}`} />
                    <h3>{f.title}</h3> 
                </li>))
                }
            </ul>

    </div>)
}
export default Films;