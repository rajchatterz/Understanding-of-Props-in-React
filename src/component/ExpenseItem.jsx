import React from "react";

function ExpenseItem(props){
    const month = props.date.toLocaleString('en-us',{month:'long'})
    const Day = props.date.toLocaleString('en-us',{day:'2-digit'})
    const Year = props.date.getFullYear()
    return (

        <div className="border border-gray-500 bg-black rounded-2xl items-center flex justify-evenly w-full">
            <div className="flex flex-col text-white">
                <div>{month}</div>
                <div>{Year} </div>
                <div>{Day}</div>
            </div>
            <div className="flex items-center justify-center gap-20">
                <h2 className="text-white font-black text-2xl">{props.title}</h2>
                <div className="p-4 bg-violet-400 border border-blue-400 rounded-md">${props.amount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem;