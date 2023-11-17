import logo from './logo.svg';
import "./App.css"
function User({name,pic}){
    return(
        <section>
            <img className="user-profile-pic" src={pic} alt={name}></img>
            <h2 className="user-name">
                <h3>
                Hello , <span className="user-first-name">{name}</span>
                </h3>
            </h2>
        </section>
    )
}
function App2(){
    const users =[
        {
            name :"Cat",
            pic:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/76/76dbefc4fa6076fb8d1b51e8bd1c379efbf4573e_full.jpg",
        },
        {
            name:"Dog",
            pic:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/77/772d4fd150e182d7e7ef0982631b746c0b72d9a6_full.jpg",
        },
        {
            name:"C",
            pic:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/76/76dbefc4fa6076fb8d1b51e8bd1c379efbf4573e_full.jpg",
        },
        {
            name:"D",
            pic:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/76/76dbefc4fa6076fb8d1b51e8bd1c379efbf4573e_full.jpg",
        },
    ];
    return (
        <div className="App">
            {users.map((usr) =>(
                <User name={usr.name} pic={usr.pic}/>
            ))}
        </div>
    )
}
export default App2