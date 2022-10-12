import React, {useState} from "react";
import List from './List'
import data from './data1'
let App = () =>{
    let [people, setPeople] = useState(data);
    let [status, setStatus] = useState(true);

 let removeFunc = (id) =>{
     let newPeople = people.filter((person)=> person.id !== id)
     setPeople(newPeople);
     console.log('Hiii');
  }

  let myFunction =()=>{
         if (status && people.length >0){
            setPeople([]);
            setStatus(false);
         }

         else{
            setPeople(data);
            setStatus(true);
         }

  }

 


return <>
<main style={{background: "url(./images/bg.jpg)",
                     backgroundPosition:"center",
                     backgroundSize:"cover",
                   
                    

}}>


<img src='./images/logo.png' alt="logo" className="logo"></img>

   
             <section className="container">
                 <h2> <span>  {people.length}</span> {`${people.length === 1? 'Birthday': 'Birthdays'}`} Today</h2>
                 <div className="content">
                         {people.map((person)=>{

                          return <List key={person.id} {...person} removeFunc={removeFunc}></List>

                         })
                         }
                      {/* <button onClick={()=> setPeople([])}>Clear</button> */}
                     

                 </div>
                  <button onClick={myFunction} className={`${people.length === 1?'hide': null }`}>    {`${people.length=== 0? 'Reset':'Remove All' }`}   </button>
                 
             </section>
             

        </main>
        <footer>
                    <p className="footer-p">
        &copy; {new Date().getFullYear()} <span className="date"></span> Birthday Reminder | Designed and Developed By <a href="https://ug.linkedin.com/in/benard-awuko-b20591a3" target="_blank" className="footer-link" rel="noopener noreferrer">Benard Awuko</a>
        
      </p>
       </footer>
</>

}

export default App;