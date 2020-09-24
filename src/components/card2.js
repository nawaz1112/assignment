import React, { useState } from 'react';


function Card2(){
    const [state, setState] = useState("");
    const [refers, setRefers] = useState("");
    const [hdpe, setHdpe] = useState("");
    const [hdnat, setHdnat] = useState("");
    const [dropdown, setDropdown] = useState("");
    const [hdpedropdown, setHdpedropdown] = useState("");
    const [isChecked, setIsChecked] = useState("");
    const [radio, setRadio] = useState("");

    function handleChange(e){
        if(e.target.name === 'weight-data'){            
        setState(e.target.value);
        } else if(e.target.name === 'refers-data'){
            setRefers(e.target.value);
        } else if(e.target.name === 'hdpe-weight-data'){
            setHdpe(e.target.value);
        } else if(e.target.name === 'hdpe-refers-data'){
            setHdnat(e.target.value);
        }
    }

    function onSubmithandler(){
        console.log("clicked")
       const Driver_collection = {
        mixed_paper_weight : state,
        mixed_paper_refs: refers,
        mixed_radio_option: radio,
        mixed_paper_dropdown: dropdown,
        hdpe_weight : hdpe,
        hdpe_refs: hdnat,
        hdpe_radio: isChecked,
        Hdpe_dropdown:hdpedropdown,
       }

       console.log(Driver_collection)
    }

    return(
        <div id="card2">
        <div className="first-line">
            <div>Weight(Tn)</div>
            <div>#Ref</div>
        </div>
        <div className="second-line">
            <span>
                Mixed Paper
            </span>  
            <input className="mb-2" 
            type="text"
            name="weight-data"
            value={state}
            onChange={handleChange}/>
          <input type="text"
          name="refers-data"
           value={refers}
           onChange={handleChange}/><br/>               
        
        </div>
           <div className="third-line">
            <input type="radio"
            checked={radio === 'accept'}
            onChange ={(e)=> {setRadio(e.target.value)}} 
            value="accept"/>
            <label className="mr-4" >Accept</label>
            <input type="radio" 
            name="reject"
            checked={radio === 'reject'}
            onChange ={(e)=> {setRadio(e.target.value)} }
            value="reject"/>
            <label >Reject</label>
            <select className="dropdown"value={dropdown} 
            onChange={(e)=>{setDropdown(e.target.value)}}>
                <option value="paper">Paper</option>
                <option value="plastic">Plastic</option>
            </select>
           </div>        
          <hr/>
        <div className="second-line">
            <span>
                HDPE Natural
            </span>  
            <input className="mb-2" type="text"
             name="hdpe-weight-data"
             value={hdpe}
             onChange={handleChange}/>
          <input type="text"
           name="hdpe-refers-data"
           value={hdnat}
           onChange={handleChange}/><br/>               
        
        </div>
           <div className="third-line">
           <input type="radio"
            checked={isChecked === 'accept1'}
            onChange ={(e)=> {setIsChecked(e.target.value)}} 
            value="accept1"/>
            <label className="mr-4" >Accept</label>
            <input type="radio" 
            name="reject1"
            checked={isChecked === 'reject1'}
            onChange ={(e)=> {setIsChecked(e.target.value)} }
            value="reject1"/>
            <label >Reject</label>           

            <select className="dropdown" value={hdpedropdown} 
            onChange={(e)=>{setHdpedropdown(e.target.value)}}>
                <option value="Product Unavailable">Product Unavailable</option>
                <option value="Contaminated">Contaminated</option>
                <option value="Unsorted waste">Unsorted waste</option>
                <option value="Incorrect description">Incorrect description</option>
                <option value="Incorrect description">Other Issues</option>
            </select>
          </div>        
          <hr/>          
        <div>
            <button type="button" className="mx-auto btn-self"
            onClick={onSubmithandler}>Complete collection</button>
         </div>
        </div>
        
   
    );
}

export default Card2;