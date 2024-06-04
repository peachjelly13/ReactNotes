import { useState } from "react";
interface Props{
    items:string[]; // array of strings
    heading:string;
    onSelectItem: (item:string)=>void;
}

function ListGroup({items,heading,onSelectItem}:Props){   
    const [selectedIndex,setSelectedIndex]= useState(-1);
    //EventHandler 
return (
        <>      
    <h1>{heading}</h1>
    <ul className="list-group">
    {items.length === 0 && <p>No Item Found</p>}
    {items.map((item,index)=>
        <li 
        className={selectedIndex===index?"list-group-item active": "list-group-item"} 
        key ={item}
        onClick={
            ()=>
            {
            setSelectedIndex(index)
            onSelectItem(item)}
        }
        >
        {item}
        </li>
    )}
    </ul>
    </>
);
    
}
//fragments
//dynamically rendering data 

export default ListGroup;
//do not forget to put retrun very importnat 

//In JSX we can only use html elemnets or other react components so this 
//items.map(item=><li>{item}</li>) is not allowed in the middle of a JSX component
//so wrap it in braces