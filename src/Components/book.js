import thinking from '../Images/thinking.svg';
import React, {useState, useEffect} from 'react';

var itid;
export default function About() {    
    const[anim_in, setAnim] = useState(["svg", "cta_cont"]);    
    useEffect(() => {
        itid = setTimeout(() => {
            clearTimeout(itid);
            setAnim(["svg animate_in", "cta_cont cta_animate_in"]);
        }, 500);
    }, [])
    return (
        <div id="book">
            <div style={{maxWidth:"1100px", margin:"0 auto"}}>  
                <div className={anim_in[1]}>
                    <div className="cta_txt">Leave your I.T. headache on us.</div>            
                    <div className="cta_btn"><div>Consult Us</div></div>
                </div>          
                <div className={anim_in[0]}>
                    <img src={thinking} alt="svg"/>
                </div>
            </div>
        </div>
    );
}