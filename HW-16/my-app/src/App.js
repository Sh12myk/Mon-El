
import './App.css';
import Post from "./Post";

function App() {
  
    const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
    const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
    return ( 
        <div className = "conteiner">
            <Post author = {
                {
                    name: "Anakin skywalker",
                    photo: ANAKIN_IMAGE,
                    nickname: "@dart_vader"
                }
            }
            content = "WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image = { RAY_IMAGE }
            date = { "26 февр." }
            />            
        </div>
    );
  
}

export default App;
