import Expenses from './components/Expenses/Expenses';

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
            <Expenses expenses={expenses} />
        </div>
    );
}
