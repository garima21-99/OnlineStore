import React,{useState}from 'react'

import Shops from "./Shops"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWindowClose } from '@fortawesome/free-solid-svg-icons'
const initialList=Shops;

const ShopeList = () => {
   
    const [search,setSearch] = useState("")
    
    const [city,setCity]=useState("")
    
   
    const [Shops,setShops]=useState(initialList)
    
    function filterItem(category){
    
 const updatedList = Shops.filter((curElem)=>{ return curElem.category===category;});
 setShops(updatedList);


    };
    function handleRemove(id)
    {
        const newList = Shops.filter((curElem)=> curElem.id !== id)
        setShops(newList);
        
    }
   
    return (
        <>
            <nav className="navbar">
            <ul className="shop-category" type="none">
            <li className="Shophub"><span>O </span>nline <span>S</span>tore </li>
            <li className="shop"><button className="nav-link"  onClick={()=>filterItem("Grocery")}>Grocery </button></li>
            <li className="shop"><button className="nav-link"  onClick={()=>filterItem("Bakery")}>Baker</button> </li>
            <li className="shop"><button  className="nav-link"  onClick={()=>filterItem("Chemist")}>Chemist</button></li>
            <li className="shop"><button className="nav-link"  onClick={()=>filterItem("Stationary")}>Stationary </button></li>
            </ul>
        </nav>
        <form>
            <div className="filter-container">
                <div className="Area-category-container">

            <label id="area"for="Area">Choose Your Area:</label>
            <input type="text"  name="name" className="category-field" onChange={(event)=>{setCity(event.target.value)}}/>
               
                <label id="area"for="Category">Category:</label>
                <input name="name" type="text" className="category-field" onChange={(event)=>{setSearch(event.target.value)}}/>
              
            
            </div>
            
            
            <div className="date-container">
                <label id="date" for="Opening Date">Opening Date:</label>
                <input  className="opening-date" type="date" id="OPEN-DATE" name="Opening-Date"/>
                <label id="date" for="Closing Date">Closing Date:</label>
                <input  className="closing-date" type="date" id="CLOSE-DATE" name="Closing-Date"/>
            
             </div>
             </div>
            </form>
        <div className="shops">
            {
                 Shops.filter((curElem)=>{
                    if(city==="")
                return curElem
                    else if (curElem.area.toLowerCase().includes(city.toLowerCase()))
                     {
                         
                           return curElem
                          
                           
                           
                    }
                
                }).filter((curElem)=>{
                    if(search==="")
                return curElem
                    else if (curElem.category.toLowerCase().includes(search.toLowerCase()))
                     {
                         
                           return curElem
                          
                           
                           
                    }
                
                }).map((curElem)=>{
                    return(
                        <>
                      
                         <div key={curElem.id} className="shoplist-container">
                         <FontAwesomeIcon className="close-btn" icon={faWindowClose } 
        onClick={()=>handleRemove(curElem.id)}>
             </FontAwesomeIcon>
            <h3 className="Shop-name">{curElem.name}</h3>
           
            <h4 className="shop-category">{curElem.category}</h4>
            <h5 className="area"> {curElem.area}</h5>
       
                <div className="date">Open:{curElem.openingdate}</div>
                <div className="date">Close:{curElem.clossingdate}</div>
             
            
                
                

        </div>
       
                        </>

                    )
                })
            }
       
        </div>
            
        </>
    )
}

export default ShopeList
