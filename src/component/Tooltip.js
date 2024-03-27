
import { useAuthValue } from '../context';
import './Tooltip.css';

//tooltip component
const Tooltip=({position})=>{

  const {showDiv,hideDiv,isVisible}=useAuthValue();
  return(
    //container of the button and tooltip
    <div className="tootltip-container" >
      <button onMouseEnter={showDiv} onMouseLeave={hideDiv}> Hover Me</button>
      {/* the tooltip will be shown in the specific position (top, bottom, left or right) if visible is true then show the tooltip */}
      {isVisible && (
        <div className={`tooltip ${position}`}>
          <span>Thank you for hovering. I am a Tooltip !!</span>
        </div>
      )}
    </div>
  )
}

export  default Tooltip;