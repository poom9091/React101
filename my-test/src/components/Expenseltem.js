import './Expenseltem.css'
import ExpenselDate from'./ExpenselDate'
function Expenseltem(props){
    
    return(
        <div className="expense-item">
            <ExpenselDate date={props.date}/>
            <div className="expense-item__description"> 
                <h2> {props.title} </h2>
                <div className=" expense-item__price"> {props.amount}</div>
            </div>
        </div>
    );
};

export default Expenseltem;