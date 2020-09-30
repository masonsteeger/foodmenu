class App extends React.Component {
  render = () => {
    return(
      <div>
      <Nav />
        <h2>Create Food Item</h2>
      </div>
    )
  }
}

class Nav extends React.Component {
  render = () => {
    return <div>
    <ul id="ulNav">
      <li><a id ="title" href="#">Mason's Tavern</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Create</a></li>
    </ul>
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
