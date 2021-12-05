import './ExpenseItem.css';

export default function ExpenseItem(props) {
    let day = props.date.toLocaleString('en-GB', {
        day: 'numeric',
        weekday: 'long',
    });
    let month = props.date.toLocaleString('en-GB', { month: 'long' });
    let year = props.date.toLocaleString('en-GB', { year: 'numeric' });

    let title = props.title;

    let price = props.cost + ' ' + props.currency;

    return (
        <div className="expense-item">
            <div>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{price}</div>
            </div>
        </div>
    );
}
