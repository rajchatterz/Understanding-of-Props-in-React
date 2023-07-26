function Card(props){
    return (
        <div className="flex w-[100%] border border-white bg-black justify-evenly">
            {props.children}
        </div>
    )
}
export default Card