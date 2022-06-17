
import './geekcss.css'
import Mapcompo from './Mapcompo'
// import MapPart from './Mapcompo'
import UpperPart from './UpperPart'
import Gridcompo from "./Gridcompo"
import Lastgreek from './Lastgreek'

export default function GeekSquad(){

    return (
        <>
            <div className='geekCont'>
                <UpperPart />
                <Mapcompo/>
                <Gridcompo/>
                <Lastgreek/>
            </div>
        </>
    )
}