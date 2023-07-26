
import NewExpense from "./component/NewExpense";


function App() {
  const expense = [
    {
      id: "e1",
      title: "Bike isurance",
      amount: 234,
      data: new Date(2020, 4, 4)
    },
    { id: "e2", title: "Jet isurance", amount: 45, data: new Date(2021, 1, 3) },
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
        <NewExpense items = {expense}/>
    </div>
  )
}

export default App
