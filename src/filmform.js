import React from "react";
import { useState } from "react";

function Filmform(props){
    const [keyWord, setkeyWord] = useState("Jardin") ;
function critere(e){
    console.log(e.target.value)
setkeyWord(e.target.value)

}
return( <div>
    <input type="search" placeholder="Recherchez un film"
    onChange={critere}/>
</div>) ;
}
export default Filmform;