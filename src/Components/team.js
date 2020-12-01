import el from '../Images/team/el.jpg';
import bill from '../Images/team/bill.jpg';
import steve from '../Images/team/steve.jpg';

function PersonCard(props)  {

    return (
        <div className="prsncrd">
            <div className="img_brdr">
                <img src={props.src} alt="person_image" />
            </div>
            <p className="name">{props.name}</p>
            <div className={props.isMain ? "txt_brdr_main" : "txt_brdr"}>
                <p className="task">{props.task}</p>
                <i className="fa fa-facebook-square"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-twitter-square"></i>
            </div>
        </div>
    );
}

export default function Team() {

    return (
        <div id="team" className="team_cont">
            <h2>Meet our <span className="in">Team</span></h2>
            <div className="team_content">  
                <PersonCard src={el} name="Elon Musk" task="CEO & Visionary"/>
                <PersonCard src={bill} name="Bill Gates" task="Director & Philanthropist" />
                <PersonCard src={steve} name="Steve Jobs" task="Director & Creative Genius" isMain="true"/>
            </div>
        </div>
    );
}