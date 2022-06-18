
// import '../components/GeekSquad/geekcss.css'
import Mapcompo from '../components/GeekSquad/Mapcompo'
// import MapPart from './Mapcompo'
import UpperPart from '../components/GeekSquad/UpperPart'
import Gridcompo from "../components/GeekSquad/Gridcompo"
import Lastgreek from '../components/GeekSquad/Lastgreek'

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