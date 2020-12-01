import thinking from '../Images/thinking.svg';

export default function About() {    
    return (
        <div id="book">
            <div style={{maxWidth:"1100px", margin:"0 auto"}}>
                <div className="cta_txt">Leave your I.T. headache on us.</div>            
                <div className="cta_btn"><div>Consult Us</div></div>
                <div className="svg">
                    <img src={thinking} alt="svg"/>
                </div>
            </div>
        </div>
    );
}