import React, {useState} from 'react';
// import * as d3 from "d3";
import './heartcss.css';
import Poem from './poems.js';
function yes(){
    console.log(document.getElementsByClassName('poem'))
}
function no(){
    alert("Ummm you actualy can't click that option....")
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function Heart(){
    const poem_vis = useState("true")
    function showPoem(){
        if (poem_vis){document.getElementsByClassName("poem")[0].classList.add("show")}
    }
    return(
        
        <div >
            <header className='unselectable'>
                Nikki, will you be my Valentine?
            </header>
            <div className='btn-holder'>
                <button className='btn' onClick={showPoem}>
                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                    <span className='unselectable'>Yes (;</span>
                </button>
                <button className='btn' onClick={no}><svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                    <span className='unselectable'>No );</span>
                </button>
            </div>
            <Poem rand={getRandomInt(3)} ></Poem>
        </div>
    )


};


export default Heart;