import "../style/Home.css";
import Buy from "./Buy";

function Homepage() {
    return (
       <div className='Parents'>
            <div className='above-left'>
                 < Buy />
            </div>
            <div className='above-right'>
                 < Buy />
            </div>
            <div className='bottom-left'>
                 < Buy />
            </div>
            <div className='bottom-right'>
                 < Buy />
            </div>
       </div>
    )
}
export default Homepage;