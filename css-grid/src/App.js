import './App.css';

function App() {
  return (
    <div className="content">
      <h2>Heading 2</h2>
      <form className="content">
        <input className="firstName" type="text" placeholder="firstname" />
        <input className="lastName" type="text" placeholder="lastname" />
        <input className="email" type="text" placeholder="email" />
        <input className="somethin" type="text" placeholder="somethin" />
        <textarea className="message" type="text" placeholder="message" />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default App;
