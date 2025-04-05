
import React,{useEffect, useState} from "react";

const ThemeToggle:React.FC=() => {
    const[darkMode,setDarkMode] = useState(true);

    useEffect(() =>{
        if(darkMode){
            document.body.style.background ="#1e1e1e"; //Dark mode background
            document.body.style.color = "white"; //Dark mode text color
        } else{
            document.body.style.background = "#ffffff"; //Light mode background
            document.body.style.color = "black"; //Dark mode text color
        }
        const header =document.getElementById("app-header");
        const filterContainer = document.querySelector(".filters"); //Entire filters div
        const filters = document.querySelectorAll(".filters label"); // Individual Labels

        if(header){
            header.style.color = darkMode ? "white" : "black";
        }

        if(filterContainer){
            (filterContainer as HTMLElement).style.background =darkMode ? "#292929":"#ddd";
        }
        filters.forEach((filter) =>{
            (filter as HTMLElement).style.color =darkMode ? "white" : "#333"

        });
        },[darkMode]
    );
    return(
        <button className="theme-toggle"onClick={() =>setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode":"Dark Mode"}
        </button>
    );
};

export default ThemeToggle;






{/*import React,{useState} from "react";
const ThemeToggle:React.FC=()=>{
    const[darkMode,setDarkMode]=useState(false);
    return(
        <button onClick = {()=>setDarkMode(!darkMode)}>
            {darkMode?"LightMode":"DarkMode"}
        </button>
    
    );
};

export default ThemeToggle;
*/}