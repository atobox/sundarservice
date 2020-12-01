import abt_img from '../Images/aboutus.jpg'

export default function About() {

    return (
        <div className="abt_sec" id="about">
            <div style={{width:"1000px", margin:"0 auto", height: "320px"}}>
                <img src={abt_img} alt="abt_img" />
                <div className="abt_art">                
                    <span className="abt_qstn">Who we are and why should you <span className="in">care</span>?</span><br/>
                    <span className="abt_ans">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </span>
                </div>
            </div>
        </div>
    );
}