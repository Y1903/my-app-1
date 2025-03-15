import { useContext } from 'react';
import { CalendarContext } from '../context/CalendarContext';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const Calendar = () => {
  const { selectedDate, setSelectedDate } = useContext(CalendarContext);

  const days = eachDayOfInterval({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date()),
  });

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', color: '#000' }}>
      <h3>{format(new Date(), 'MMMM yyyy')}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px' }}>
        {days.map((day) => (
          <div
            key={day}
            onClick={() => setSelectedDate(day)}
            style={{
              padding: '10px',
              border: selectedDate.toDateString() === day.toDateString() ? '2px solid red' : '1px solid lightgray',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;