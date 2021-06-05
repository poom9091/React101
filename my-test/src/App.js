import Expenseltem from "./components/Expenseltem.js";
import "./App.css";

function App() {
  const expense = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2.28) },
    { title: "Toilet Paper", amount: 25, date: new Date(2021, 2.28) },
    { title: "Lamp", amount: 100, date: new Date(2021, 2.28) },
  ];
  return (
    <div>
      <h1> Let Start !</h1>
      <Expenseltem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <Expenseltem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <Expenseltem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
    </div>
  );
}

export default App;
