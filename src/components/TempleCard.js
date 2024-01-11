import { useState } from "react";
function TempleCard({temple,index}){
    let [collapsed,setCollapsed]=useState(true);
    return <div key={index} className={`temple-card ${collapsed ? 'h-36':'h-auto'}`}>
    <div className="flex items-center">
        <img className="w-20 h-20" src={temple.img}/>
        <h1 className="text-xl font-bold ml-4">{temple.name}</h1>
    </div>
    <p>{temple.description}</p>
    <span onClick={()=>{setCollapsed(a => !a)}} className={`p-0.5 absolute bottom-0 right-0 cursor-pointer ${collapsed?'bg-black text-white':'text-black'}`}>{`Read ${collapsed?'More':'Less'}`}</span>
</div>
}
export default TempleCard;