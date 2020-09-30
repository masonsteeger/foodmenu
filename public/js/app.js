class Menu extends React.Component {
  state = {
    name: '',
    course: '',
    price: '',
    image: '',
    description: '',
    foods: []
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDeafault()
    axios.post('/foods', this.state).then(response => {
      this.setState({
        name: '',
        course: '',
        price: '',
        image: '',
        description: '',
        foods: response.data
      })
    })
  }

  render = () => {
    return(
      <div className="menu-container">
        <div className="new-container">
          <h2>Add A Dish</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Dish Name:</label><br/>
            <input type="text" onChange={this.handleChange} id="name" /><br/>
            <label htmlFor="course">Course:</label><br/>
            <input type="text" onChange={this.handleChange} id="course" /><br/>
            <label htmlFor="price">Price:</label><br/>
            <input type="number" onChange={this.handleChange} id="price" /><br/>
            <label htmlFor="image">Image Link:</label><br/>
            <input type="text" onChange={this.handleChange} id="image" /><br/>
            <label htmlFor="description">Description:</label><br/>
            <input type="text" onChange={this.handleChange} /><br/>
            <input type="submit" value="Add Dish" />
          </form>
        </div>
      </div>

    )
  }
}


class App extends React.Component {
  render = () => {
    return(
      <div className="app-container">
        <Nav />
        <Menu />
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
