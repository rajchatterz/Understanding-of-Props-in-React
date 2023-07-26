import React from "react";
import Card from "./Card";
import ExpenseDate from "../component/ExpenseDate";
function ExpenseItem(props){
    return (
        <Card className="border border-gray-500 bg-gray-900 rounded-2xl items-center flex justify-evenly ">
            <ExpenseDate date={props.data}/>
            <div className="flex items-center justify-center gap-20">
                <h2 className="text-white font-black text-2xl">{props.title}</h2>
                <div className="p-4 bg-violet-400 border border-blue-400 rounded-md">${props.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem;