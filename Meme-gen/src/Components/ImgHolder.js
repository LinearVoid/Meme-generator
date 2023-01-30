import "./ImgHolder.css"
import data from "./data.js"
import React from "react"
function ImgHolder(){
    const [counter,counterUp] = React.useState(0)
    let leng = data.memes.length
    let image = data.memes[counter].url 
    let isHappy = true;
    console.log(leng)

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

    return(
    <div className = "outside">
        <div className = "cent">
            <button onClick = {Imago}>Next Meme</button>
            <button onClick = {Imagl}>Last Meme</button>
        </div>
        <div className = "memeHolder">
            <p className = "memeTexttop">test</p>
            <img src = {image} ></img>
            <p className = "memeTextbottom">l</p>
        </div>
        
        <p>{isHappy? "Yes":"No"}</p>
        
    </div>

)

}

export default ImgHolder;