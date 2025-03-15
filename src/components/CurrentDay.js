import { useContext } from 'react';
import { CalendarContext } from '../context/CalendarContext';
import { format } from 'date-fns';

const CurrentDay = () => {
  const { selectedDate } = useContext(CalendarContext);

  return (
    <div style={{ backgroundColor: '#4DD0E1', color: '#fff', padding: '20px', fontSize: '24px' }}>
      {format(selectedDate, 'EEEE')} <br />
      {format(selectedDate, 'd')}
    </div>
  );
};

export default CurrentDay;