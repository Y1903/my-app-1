import { createContext, useState } from 'react';

export const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <CalendarContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </CalendarContext.Provider>
  );
};