import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import NewExpenseButton from "./NewExpenseButton";

const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);
  const openFormHandler = () => {
    setOpenForm((prevOpenStatus) => !prevOpenStatus);
  };

  const saveExpenseHandler = (enteredExpense) => {
    const expenseData = { ...enteredExpense, id: Math.random().toString() };
    props.onExpenseUpdate(expenseData);
  };
  return (
    <div className="new-expense">
      {!openForm ? (
        <NewExpenseButton onOpenForm={openFormHandler} />
      ) : (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCloseForm={openFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
