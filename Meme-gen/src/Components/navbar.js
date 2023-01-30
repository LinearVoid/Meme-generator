import "./navbar.css"
function Navbar(){
    function test(){
        console.log("test")
    }
    return(
        <nav className = "nav">
        <img className = "logo" onPointerEnter={test} src = "https://orig00.deviantart.net/c96c/f/2011/288/8/c/troll_face_sad_by_rober_raik-d4cwjk7.png"></img>
            <a href = ""><h1 className = "title">Meme generator</h1></a>
            
        </nav>
        
    )

}

export default Navbar;