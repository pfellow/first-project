import "./NewExpenseButton.css";

const NewExpenseButton = (props) => {
  return (
    <div>
      <button className="new-expense-btn" onClick={props.onOpenForm}>
        Add expense
      </button>
    </div>
  );
};

export default NewExpenseButton;
