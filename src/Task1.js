import React from "react";
import { Link } from "react-router-dom";


const Task1 = () => {
    return (
        <div>
            <div width="20%">
                <ul>
                    <li>
                        <Link to="/task1/listing">CRUD OPERATION</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Task1;