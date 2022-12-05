import React from "react";

function Comment(props) {

    return <div>
        <div style={{"width" : "10%", "display" : 'inline-block'}}>
            <div style={{"marginTop" : "15px"}}>
                <img src={props.imagePath} width="100px"  style={{"padding" : "10px", "borderRadius" : "50%", "border" : "2px solid aqua"}} />
            </div>
        </div>
        <div style={{"width" : "90%", "display" : 'inline-block'}}>
            <div>
                <p style={{"marginTop" : "1px", "marginBottom" : "5px", "display" : "inline-block", "fontSize" : "18px"}}>{props.name}</p>
                <span style={{"marginTop" : "1px", "marginBottom" : "5px", "marginLeft" : "10px", "fontSize" : "12px"}}>{props.postedAt}</span>
            </div>
            <div>
                <h3 style={{"marginTop" : "1px"}}>
                    {props.comment}
                </h3>
            </div>
        </div>
    </div>
}

export {Comment};