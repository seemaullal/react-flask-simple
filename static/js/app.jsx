function ClickableButton(props) {
  // props will be an immutable object
  function alertMessage(event) {
    console.log(event);
    alert("you clicked the button");
  }
  return (
    <button
      className="bold"
      onClick={alertMessage}
      style={{ cursor: "pointer" }}
    >
      {props.message}
    </button>
  );
}
const items = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

// props - immutable and passed to the component
// state - can be changed, causes a re-render when it changes, and can be modified
// React built-in functions called Hooks
// 1) React.useState - to control state
// 2) React.useEffect - manage side effects
// making AJAX calls
function List() {
  //   const listItems = [];
  //   for (const item of items) {
  //     listItems.push(<li key={item.id}>{item.title}</li>)
  //   }
  const [numberSecondsElapsed, setNumberSecondsElapsed] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => {
      setNumberSecondsElapsed(numberSecondsElapsed + 1);
    }, 1000);
  }, []); // 2nd argument is the dependencies -
  // it will always run the initial render
  // on subsequent renders it will only run if the dependencies have changed
  // passing an empty list will only be called when the component is 1st mounted
  return (
    <ul>
      {<li>{numberSecondsElapsed}</li>}
      {items.map(
        ({ id, title, completed }) => !completed && <div key={id}>{title}</div>
      )}
    </ul>
  );
}

const { BrowserRouter } = ReactRouterDOM
function App() {
  return (
    <BrowserRouter>
      <nav>
        <p>
          <ReactRouterDOM.Link to="/sharkwords">Sharkwords</ReactRouterDOM.Link>
        </p>
        <p>
          <ReactRouterDOM.Link to="/button">Click Button</ReactRouterDOM.Link>
        </p>
      </nav>
      <ReactRouterDOM.Switch>
        <ReactRouterDOM.Route path="/list">
          <List />
        </ReactRouterDOM.Route>
        <ReactRouterDOM.Route path="/button">
          <ClickableButton message="Hello" />
        </ReactRouterDOM.Route>
        <ReactRouterDOM.Route path="/">
          <div>This page is not found :(</div>
        </ReactRouterDOM.Route>
      </ReactRouterDOM.Switch>
    </BrowserRouter>
  );
}

// React Router
ReactDOM.render(<App />, document.getElementById("root"));

// document.querySelector can be used for tags, classes (.) , and ids (#)
