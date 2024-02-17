import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='main'>
      <div className="header">
        <h2>React TODO LIST</h2>
        <button >New Post</button>
      </div>
      <div className='list'>
        <div className='post new'>
          <p className='date'>17.02.2024 15:51</p>
          <p className='text'>Three MAGNEMITE are linked by a strong magnetic force. Earaches will occur if you get too close.</p>
        </div>

        <div className='post pending'>
          <p className='date'>17.02.2024 15:54</p>
          <p className='text'>SEADRA generates whirlpools by spinning its body. The whirlpools are strong enough to swallow even fishing boats. This Pokémon weakens prey with these currents, then swallows it whole. </p>
        </div>

        <div className='post finished'>
          <p className='date'>17.02.2024 15:56</p>
          <p className='text'>RHYDON's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pokémon's hide is extremely tough. Even direct cannon hits don't leave a scratch.</p>
        </div>

      </div>
    </div>
  );
}

export default App;
