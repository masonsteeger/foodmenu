class Menu extends React.Component {
  state = {
    name: '',
    course: '',
    price: '',
    image: '',
    description: '',
    foods: []
  }

  updateFood = event => {
    event.preventDefault()
    const id = event.target.id
    axios.put('/foods/'+id, this.state).then((response) => {
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

  deleteFood = event => {
    axios.delete('/foods/'+ event.target.value).then((response) => {
      this.setState({
        foods: response.data
      })
    })
  }

  componentDidMount = () => {
    axios.get('/foods')
    .then((response) => {
      this.setState({
        foods:response.data
      })
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
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
            <input type="text" onChange={this.handleChange} id="description"/><br/>
            <input type="submit" value="Add Dish" />
          </form>
        </div>
        <div className="foods-container">
          <h2>Menu</h2>
            <ul id="ulMap">
              {this.state.foods.map( food => { return(
                <li id="liMap" key={food._id}>
                <h4>{food.name}</h4>
                <h4>{food.price}</h4>
                <h6>{food.course}</h6>
                <img id="ulImg" src={food.image} alt={food.name} />
                <p>{food.description}</p>
                <button value={food._id} onClick={this.deleteFood}>DELETE</button>
                <details>
                  <summary>Edit Food</summary>
                  <form id={food._id} onSubmit={this.updateFood}>
                    <label htmlFor="name">Dish Name:</label><br/>
                    <input type="text" onChange={this.handleChange} id="name" value={this.state.name}/><br/>
                    <label htmlFor="course">Course:</label><br/>
                    <input type="text" onChange={this.handleChange} id="course" value={this.state.course}/><br/>
                    <label htmlFor="price">Price:</label><br/>
                    <input type="number" onChange={this.handleChange} id="price" value={this.state.price}/><br/>
                    <label htmlFor="image">Image Link:</label><br/>
                    <input type="text" onChange={this.handleChange} id="image"
                    value={this.state.image}/><br/>
                    <label htmlFor="description">Description:</label><br/>
                    <input type="text" onChange={this.handleChange} id="description" value={this.state.description}/><br/>
                    <input type="submit" value="Add Dish" />
                  </form>
              </details>
                </li>
              )
              })}
            </ul>
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
      <li className="liNav"><a id ="title" href="#">Mason's Tavern</a></li>
      <li className="liNav"><a href="#">Menu</a></li>
      <li className="liNav"><a href="#">Create</a></li>
    </ul>
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
