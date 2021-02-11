import React from 'react';
import './poem.css';
const poems ={"poems":[{"title":"Love Sonnet XI", "author": "P.Neruda", "lines": `I crave your mouth, your voice, your hair.
Silent and starving, I prowl through the streets.
Bread does not nourish me, dawn disrupts me, all day
I hunt for the liquid measure of your steps.
 
 
I hunger for your sleek laugh,
your hands the color of a savage harvest,
hunger for the pale stones of your fingernails,
I want to eat your skin like a whole almond.
 
 
I want to eat the sunbeam flaring in your lovely body,
the sovereign nose of your arrogant face,
I want to eat the fleeting shade of your lashes,
 
 
and I pace around hungry, sniffing the twilight,
hunting for you, for your hot heart,
like a puma in the barrens of Quitratue.`},
{"title":"Secret Sea", "author": "JP", "lines": `Secret sea, wait to see. 
I miss the sand, beneath my feet.
Secret sea, where lovers meet.
Where love is Heavens' reach.
without such, is not much treat.
`},
{"title":"How Do I Love Thee?", "author": "Elizabeth Barrett Browning", "lines": `How do I love thee? Let me count the ways.
I love thee to the depth and breadth and height
My soul can reach, when feeling out of sight
For the ends of being and ideal grace.
I love thee to the level of every day's
Most quiet need, by sun and candle-light.
I love thee freely, as men strive for right.
I love thee purely, as they turn from praise.
I love thee with the passion put to use
In my old griefs, and with my childhood's faith.
I love thee with a love I seemed to lose
With my lost saints. I love thee with the breath,
Smiles, tears, of all my life; and, if God choose,
I shall but love thee better after death.`}
]






};
export default class Poem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {poem: poems};
      }
    componentDidMount=(e)=>{
        console.log("mounted")
    }
    render(){
        return(
            <div className="poem">
                <div>
                <span className="title">{this.state.poem["poems"][this.props.rand]["title"]}</span>
                <p className='poem-p unselectable'>
                    
                    {this.state.poem["poems"][this.props.rand]["lines"]}
                </p>
                <span className="author">{this.state.poem["poems"][this.props.rand]["author"]}</span>
                </div>
            </div>
            );
    }
};




