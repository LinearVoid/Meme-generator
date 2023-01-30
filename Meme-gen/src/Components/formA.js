import "./Forma.css"
function Forma(){

    function bob(){
        console.log("hello")
    }



    return(
        <main className = "outer">
            <form className = "background">

                    <div id = "center">
                        <h1>Top Text</h1>
                        <input type = "text"></input>
                    </div>
                    <button onClick = {bob}id = "button">Submit</button>
                    <div id = "center">
                        <h1>Bottom Text</h1>
                        <input type = "text"></input>
                    </div>
                
            </form>
            
        </main>
    )
}

export default Forma;