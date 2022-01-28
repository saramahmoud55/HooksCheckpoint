import React from "react";
import { useNavigate } from 'react-router-dom';

export default function MovieDetails({props}) {
    const navigate = useNavigate();
    return (
        <div>
           <div>
           </div>
         <button className="btn btn-primary" onClick={()=>navigate(-1)}>Back To Home</button>
        </div>
    )
}