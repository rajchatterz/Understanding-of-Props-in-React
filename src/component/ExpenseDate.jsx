import React from "react"
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-us',{month:'long'})
    const Day = props.date.toLocaleString('en-us',{day:'2-digit'})
    const Year = props.date.getFullYear()
    return (
        <div className="flex flex-col bg-black p-2 border border-white text-white font-bold rounded-md">
        <div className="text-white">{month}</div>
        <div className="text-white">{Day}</div>
        <div className="text-white">{Year}</div>
        </div>
    )
}
export  default ExpenseDate;