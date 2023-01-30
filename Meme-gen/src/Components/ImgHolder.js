import "./ImgHolder.css"
import data from "./data.js"
import React from "react"
import exportAsImage from "../utils/exportasImage";


import { useRef } from "react";

function ImgHolder(props){
    const exportRef = useRef();
    const [counter,counterUp] = React.useState(0)
    let leng = data.memes.length
    let image = data.memes[counter].url 
    let isHappy = true;
    console.log(leng)
    let topTexto = props.topTexto
    let bottText = props.bottom
    function Imago(){
        
        if(counter>=leng-1){
            counterUp(0)
            
        }
        else{
            counterUp(counter=>counter+1)
            console.log(counter)
            
        }
        
    }
    function Imagl(){
        if(counter<=0){
            counterUp(leng-1)
        }
        else{
            counterUp(counter=>counter-1)
        }
        
    }

    function downloader(){
        exportAsImage(exportRef.current, "coolmemo")
    }
    return(
    <div className = "outside">
        
        
            <div ref={exportRef} className = "memeHolder">
                <p className = "memeTexttop">{topTexto}</p>
                <img id = "imgo"crossOrigin="true"  src = {image} ></img>
                <p className = "memeTextbottom">{bottText}</p>
            </div>
            <div className = "cent">
            <div id= "flex-items" onClick = {Imago}>Next Meme</div>
            <div id= "flex-items" onClick = {Imagl}>Last Meme</div>
        </div>
        
        <div id= "flex-items" onClick = {downloader} className = "divButton">Click me to Save meme</div>
        <p>{counter } of { leng-1 }</p>
        
    </div>

)

}

export default ImgHolder;