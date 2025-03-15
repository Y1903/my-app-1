import Calendar from './components/Calendar';
import CurrentDay from './components/CurrentDay';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <CurrentDay />
      <Calendar />
    </div>
  );
};

export default App;