import { useState } from "react";

const Home = () => {
    
    const [name,setName] = useState('I');
    const [age,setAge] = useState('You');

    const handleClick = () => {
    //     console.log('Hello, Phalin', e);
        setName('I');
        setAge('You Too')
     }
    // const handleClickAgain = (name,e) => {
    //     // console.log('Hello ' + name,e.target);
        
    // }
    return ( 
        <div className="home">

            <h2>Homepage</h2>
            <p>{name} Loves {age}</p>
            <button onClick={handleClick}>Touch Me</button>
            

        </div>
    );
}

export default Home;