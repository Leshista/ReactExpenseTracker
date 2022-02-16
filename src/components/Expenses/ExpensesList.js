import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.items.length > 0) {
        return (
            <ul className="expenses__list">
                {props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </ul>
        );
    } else {
        return (
            <h2 className="expenses-list__fallback">
                There's nothing here yet, folks!
            </h2>
        );
    }
};

export default ExpensesList;
