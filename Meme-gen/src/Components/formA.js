import "./Forma.css"
import ImgHolder from "./ImgHolder"
import React from"react"

function Forma(){
    let top = ""
    let bottom = ""
    const [topText, setTopText] = React.useState("");
    const [bottomText, setBottomText] = React.useState("");
    function bob(yep){
        console.log("bott text" + bottomText)
        setBottomText(yep)
    }

    function bob2(yep){
        console.log("top text" + topText)
        setTopText(yep)
    }



    return(
        <main className = "outer">
            <form className = "background">

                    <div id = "center">
                        <h1>Enter Top Text</h1>
                        <input   id ="inp" type = "text" onChange={(e) => bob2(e.target.value)}></input>
                    </div>
                    <div id = "center">
                        <h1>Enter Bottom Text</h1>
                        <input id ="inp" type = "text" onChange={(e) => bob(e.target.value)}></input>
                    </div>
                
            </form>
            <ImgHolder topTexto = {topText} bottom = {bottomText}/>
            
        </main>
    )
}

export default Forma;