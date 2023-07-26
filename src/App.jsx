import ExpenseItem from "./component/ExpenseItem"


function App() {
  const expense = [
    {
      id: "e1",
      title: "Bike isurance",
      amount: 234,
      data: new Date(2020, 4, 4)
    },
    { id: "e2", title: "Car isurance", amount: 45, data: new Date(2021, 1, 3) },
    {
      id: "e3",
      title: "Car isurance",
      amount: 56,
      data: new Date(2022, 1, 21)
    },
    { id: "e4", title: "Car isurance", amount: 900, data: new Date(2023, 4, 6) }
  ];

  return (
    <div className="h-screen flex flex-col gap-2 bg-gray-700">
      <h1>Lets get started</h1>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].data}/>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].data}/>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].data}/>
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].data}/>
      
    </div>
  )
}

export default App
