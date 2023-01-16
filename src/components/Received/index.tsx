
import { Infos } from "./styled"


function Received( {response}: any ){

    const keys = Object.keys(response[0])
    const values = Object.values(response[0])

    
    
    return (        
        <Infos>

            <h3>VOCÊ RECEBERÁ:</h3>
            
            {values.map((item, index) => (
                <List keys={keys} values={values} index={index}/> 
            ))}          
            
        
        </Infos>
    )
}

const List = ( props:any ) => {

    

    return (
        <h4 className="slide">{props.keys[props.index] !== "1" ? `Em ${props.keys[props.index]}`: null} {props.keys[props.index] === '1' ? 'Amanhã' : "dias"}: <span>R$ {props.values[props.index]}</span></h4>
    )

}

export default Received