import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
export default function Expenses(props) {
    return (
        <Card className="expenses">
            <h2>Let's get started!</h2>
            <ExpenseItem
                title={props.expenses[0].title}
                cost={props.expenses[0].cost}
                currency={props.expenses[0].currency}
                date={props.expenses[0].date}
            />
            <ExpenseItem
                title={props.expenses[1].title}
                cost={props.expenses[1].cost}
                currency={props.expenses[1].currency}
                date={props.expenses[1].date}
            />
            <ExpenseItem
                title={props.expenses[2].title}
                cost={props.expenses[2].cost}
                currency={props.expenses[2].currency}
                date={props.expenses[2].date}
            />
            <ExpenseItem
                title={props.expenses[3].title}
                cost={props.expenses[3].cost}
                currency={props.expenses[3].currency}
                date={props.expenses[3].date}
            />
        </Card>
    );
}
