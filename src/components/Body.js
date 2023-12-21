import React from 'react';

const Body=(props)=>{
    return(
        
       <div className="colorCard">
        <div
          style={{
            border:'1px solid rgb(238, 237, 237)',
            width:'60%',
            margin:'20px',
            boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
        <div
        style={{
          height: "150px",
          background: props.colorCode,
          
        }}
        ></div>
        <h2 style={{padding:'10px',marginBottom:'-2px'}}>{props.colorCode}</h2>
        <span class="colorname"
        style={{color:props.colorCode,
                padding:'10px'
         }}
        >{props.colorName}</span>

       </div>
       </div>
      
    )
}

export default Body;