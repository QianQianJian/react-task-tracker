import React from "react";
import './style.css';

function Tabledata(){
    return (
        <div>
            <body>
                <h1> Projects </h1>
                
                <table>
                    <tr>
                        <th> Name </th>
                        <th> Details </th>
                        <th> Year </th>
                    </tr>

                    <tr>    
                        <td> <a class = "Senior Capstone" href = "https://zorajiang.weebly.com" target="_blank" > High School Senior Capstone </a> </td>
                        <td> A webpage designed for my high school senior capstone. It shows who I am and What I have gone through to make me a woman of capable. </td>
                        <td> 2018 </td>
                    </tr>

                    <tr>     
                        <td> <a class = "Writing 50E Project" href = "https://docs.google.com/document/d/1PcNs5f4hhmBLKoXvFx7XJ9V_KN5TqfXEBUuAGEVTbKY/edit?usp=sharing" target="_blank"> UCSB Writing 50E Final Project </a> </td>
                        <td> A barttery-charging bike proposal that introdeuces the revolutional idea of bikes which are powered by human-powered mechanical charger and thin-film solar cells. This project was done in a group of four. </td>
                        <td> 2019 </td>
                    </tr>   
                </table>
            </body>
        </div>
    )
}
export default Tabledata;