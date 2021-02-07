import React, {useState} from 'react';
// import * as d3 from "d3";
import './heartcss.css';
import Poem from './poems.js';
function yes(){
    console.log('yes')
}
function no(){
    alert("Ummm you actualy can't click that option....")
}
function Heart(){
    const poem_vis = useState("true")
//     // window.onerror = function() {
//     //     location.reload();
//     // }
//     const margin = {top: 10, right: 10, bottom: 10, left: 10},
// 				docHeight = window.innerHeight - margin.left - margin.right,
// 				docWidth  = window.innerWidth - margin.top - margin.bottom;
			
// 	const minSize = Math.min(500,(docWidth-40),(docHeight-40)),
// 		    width = minSize,
// 		    height = minSize;
//     var x, y;
// 	const data = [];
// 	for (var i = 0; i < 350; i++) {
// 		x = 16 * Math.pow(Math.sin(i),3);
//         y = 13 * Math.cos(i) - 5* Math.cos(2*i) - 2 * Math.cos(3*i) - Math.cos(4*i)
        
//         data[i] = [x,y];
        
// 		}
//     const xScale = d3.scaleLinear()
//         .domain([d3.min(data, function(d) { return d[0]; }), d3.max(data, function(d) { return d[0]; })])
//         .range([ 0, width ]);

//     const yScale = d3.scaleLinear()
//             .domain([d3.min(data, function(d) { return d[1]; }), d3.max(data, function(d) { return d[1]; })])
//             .range([ height, 0 ]);
//     //console.log(data);
//     //Initiate the SVG
//     const chart = d3.select('#chart')
//     .append('svg')
//     .attr('width', docWidth)
//     .attr('height', docHeight)
//     .attr('class', 'chart')
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
//     //Initiate the group that will hold all the dots and lines
//     var svg = chart.append('g')
//     .attr('transform', 'translate(' + (docWidth/2-width/2) + ',' + (docHeight/2-height/2) + ')')
//     .attr('width', width)
//     .attr('height', height); 

//     //Create the dots that make the heart	  
//     svg.append("g").selectAll("circle")
//         .data(data)
//         .enter().append("circle")
//             .attr("cx", function (d,i) { return xScale(d[0]); } )
//             .attr("cy", function (d) { return yScale(d[1]); } )
//             .attr("r", 2);
//     console.log(svg)
//     //Create and draw the path that connects the dots
//     //From: http://stackoverflow.com/questions/13893127/how-to-draw-a-path-smoothly-from-start-point-to-end-point-in-d3-js
//     d3.line()
//             //.interpolate('linear')
//             .x(function(d){ return xScale(d[0]) })
//             .y(function(d){ return yScale(d[1]) });
            
//     // var path = svg.append("g").append("path")
//     //     .attr("d", line(data));
//     // console.log(path.node())
//     // const totalLength = path.node().getTotalLength();	  
//     // path.attr("stroke-dasharray", totalLength + " " + totalLength)
//     // .attr("stroke-dashoffset", totalLength)
//     // .transition()
//     // .duration(12e4).delay(500)
//     // .ease("linear")
//     // .attr("stroke-dashoffset", 0);
    return(
        <div >
            <header className='unselectable'>
                Nikki, will you be my Valentine?
            </header>
            <div classNamee='btn-holder'>
                <button className='btn' onClick={yes}>
                    <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                    <span className='unselectable'>Yes (;</span>
                </button>
                <button className='btn' onClick={no}><svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                    <span className='unselectable'>No );</span>
                </button>
            </div>
            <Poem></Poem>
        </div>
    )


};


export default Heart;