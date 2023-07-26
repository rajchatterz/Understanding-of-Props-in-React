import React from "react";
import ExpenseItem from "./ExpenseItem";
function NewExpense(props){
    return(
        <>
            <ExpenseItem title={props.items[0].title} data={props.items[0].data} amount={props.items[0].amount}/>
            <ExpenseItem title={props.items[1].title} data={props.items[1].data} amount={props.items[1].amount}/>
            <ExpenseItem title={props.items[2].title} data={props.items[2].data} amount={props.items[2].amount}/>
            <ExpenseItem title={props.items[3].title} data={props.items[3].data} amount={props.items[3].amount}/>
            
        </>
    )
}
export default NewExpense;