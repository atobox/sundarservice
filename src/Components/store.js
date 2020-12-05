import store_img from '../Images/store.svg';
import pendrv from '../Images/prod/pd.jpg';
import hdd from '../Images/prod/exthdd.jpg';

function PrdCard(props) {

    return (
        <div className="prdcrd">
            <img src={props.imgsrc} alt="product_image" />
            <span className="title">{props.title}</span>                        
            <p className="orgprc">&#8377;{props.sellingprice}</p>
            <p className="slprc">&#8377;{props.orginalprice}</p>
            <button><i className="fas fa-shopping-cart" aria-hidden="true" style={{marginRight: "10px"}}></i>
            BUY NOW</button>            
        </div>
    );
}

export default function Store() {

    return (
        <div id="store" className="store_sec">
            <img src={store_img} alt="store_img"/>
            <div className="prd">            
                <PrdCard imgsrc={pendrv} 
                    title="Moric Dual USB 64GB Pen Drive" 
                    description="High performance dual USB type pen drive. Builtin USB Type C and USB 3.0." 
                    orginalprice="999" 
                    sellingprice="599"
                    />
                
                <PrdCard imgsrc={hdd} 
                    title="64GB Pen Drive" 
                    description="High performance dual USB type pen drive. Builtin USB Type C and USB 3.0." 
                    orginalprice="999"
                    sellingprice="599" />                
                
{/*                <PrdCard imgsrc={pendrv} 
                    title="Moric Dual USB 64GB Pen Drive" 
                    description="High performance dual USB type pen drive. Builtin USB Type C and USB 3.0." 
                    orginalprice="999" />
                
                <PrdCard imgsrc={hdd} 
                    title="64GB Pen Drive" 
                    description="High performance dual USB type pen drive. Builtin USB Type C and USB 3.0." 
                    orginalprice="999" />                
*/}
            </div>
        </div>
    );
}