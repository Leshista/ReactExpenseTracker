import './ExpenseDate.css';
export default function ExpenseDate(props) {
    let day = props.date.toLocaleString('en-GB', {
        day: 'numeric',
        weekday: 'long',
    });
    let month = props.date.toLocaleString('en-GB', { month: 'long' });
    let year = props.date.toLocaleString('en-GB', { year: 'numeric' });

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}
