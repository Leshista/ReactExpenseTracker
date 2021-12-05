import ExpenseItem from './components/ExpenseItem';

export default function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            cost: 94.12,
            currency: '$',
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            cost: 799.49,
            currency: '$',
            date: new Date(2021, 2, 12),
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            cost: 294.67,
            currency: '$',
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            cost: 450,
            currency: '$',
            date: new Date(2021, 5, 12),
        },
    ];
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem
                title={expenses[0].title}
                cost={expenses[0].cost}
                currency={expenses[0].currency}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                cost={expenses[1].cost}
                currency={expenses[1].currency}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                cost={expenses[2].cost}
                currency={expenses[2].currency}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3].title}
                cost={expenses[3].cost}
                currency={expenses[3].currency}
                date={expenses[3].date}
            />
        </div>
    );
}
