import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
const name = "Hoang Quoc";
const num = 2 + 5;
const user = {
  firstName: "Quoc",
  lastName: "Nguyen"
}
// const element = <h1>Hello, {formatName(user)}</h1>

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const newEle = <div>{getGreeting(user)}</div>

const childrenInEle = (
  <div>
    <h2>Hello</h2>
    <p>My name Quốc</p>
  </div>
);
*/

// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const element = <h1>{title}</h1>;

// const element = (
//   <h1 className="greeting">
//     Hello, asss
//   </h1>
// );

// const element2 = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// const element3 = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// ReactDOM.render(
//  element,
//   document.getElementById('root')
// );

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

//  ----------------- ham` state ---------------

/*
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
); 
*/

// ------------------ handle event ----------------
/*
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);
*/

// ---------------- conditional rendering ----------------

/*
function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up!</h1>
}

function  Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if(isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}
// ReactDOM.render(
//   <Greeting isLoggedIn={true} />,
//   document.getElementById('root')
// );

// ------------- 2 ------------------
function LoginButton(props) {
  return (
    <button onClick = {props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick = {props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    }
    else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
*/

// --------------- 3-------------
/*
function MailBox(props) {
  const unreadMesseages = props.unreadMesseages;
  // const count = 0;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMesseages.length > 0 && 
        <h2>
          You have {unreadMesseages.length} unread messenges;
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <MailBox unreadMesseages={messages} />,
  document.getElementById('root')
);
*/

// ------------- 4 ------------------
/*
function WarningBanner(props) {
  if(!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return(
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
*/

// ------------ lists and keys ------------
/*
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
*/
// --------------- 2 ---------------
/*
function ListItem(props) {
  return <li>{props.value}</li> // value chỗ này bằng chỗ dưới
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} /> //chỗ này là theo ở trên
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
*/
// ---------------- 3 --------------
/*
function  Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) => 
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
  );

  return (
    <div>
      {sidebar}<hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
*/

// ----------------- Forms ----------------
/*
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
*/
/*
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'mango'};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor: 
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">grapefruit</option>
            <option value="lime">lime</option>
            <option value="coconut">coconut</option>
            <option value="mango">mango</option>
          </select>
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);
*/

// ------------------ Lifting state up --------------
/*
function BoilingVerdict(props) {
  if(props.celcius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in cecius</legend>
        <input 
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celcius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
*/
// ------------- 2 ------------
/*
function BoilingVerdict(props) {
  if(props.celcius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    // this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  } 

  render() {
    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}:</legend>
        <input value={temperature}
                onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <Temperature
          scale="c"
          temperature={celcius}
          onTemperatureChange={this.handleCelsiusChange} />
        <Temperature
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict celcius={parseFloat(celcius)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
*/

// -------------- 3 --------------
/*
class OrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity: '', address: '', product: 'Product-3'};
  }

  orderInfoChange = val => {
    this.setState({quantity:val});
  }

  addressChange = val => {
    this.setState({address:val});
  }

  productChange = val => {
    this.setState({product:val});
  }

  render() {
    return (
      <div>
        <h1>Product order screen...</h1>
        <ProductInformationComponent 
          product={this.state.product}
          onProductChange={this.productChange}
          quantity={this.state.quantity} 
          onQuantityChange={this.orderInfoChange}
        />
        <AddressComponent address={this.state.address} 
          onAddressChange={this.addressChange}
        />
        <SummaryComponent quantity={this.state.quantity} 
          onQuantityChange={this.orderInfoChange}
          address={this.state.address} onAddressChange={this.addressChange}
        />
      </div>
    );
  }
}

class ProductInformationComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  handleChange = e => {
    this.props.onQuantityChange(e.target.value);
  }

  handleChangeProduct = e => {
    this.props.onProductChange(e.target.selected);
  }

  render() {
    return (
      <div style={{border: '3px solid red'}}>
        <h2>Product Information .....</h2>
        <p>
          <label>
            Product Name: 
            <select value={this.props.product} onChange={this.handleChangeProduct}>
              <option value="Product-1">Product-1</option>
              <option value="Product-2">Product-2</option>
              <option value="Product-3">Product-3</option>
            </select>
          </label>
        </p>
        <p>Enter Quantity: 
        <input type='text' 
          value={this.props.quantity} 
          onChange={this.handleChange}>
        </input>
        </p>
      </div>
    );
  }
}

class AddressComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  handleChange = e => {
    this.props.onAddressChange(e.target.value);
  }

  render() {
    return (
      <div style={{border: '3px solid red'}}>
        <h2>Address Information .....</h2>
        <p>
          <label>
            Address: 
            <textarea value={this.props.address}
              onChange={this.handleChange} />
          </label>
        </p> 
      </div>
    );
  }
}

class SummaryComponent extends React.Component {
  constructor(props) {
    super(props);

  }
  
  handleChange = e => {
    this.props.onQuantityChange(e.target.value);
  }

  render() {
    return (
      <div style={{border: '3px solid red'}}>
        <h2>Summary Information</h2>
        <p>
          <label>Product name: <b>{this.props.product}</b>
          </label>
        </p>
        <p>Enter Quantity: 
        <input type='text' 
          value={this.props.quantity} 
          onChange={this.handleChange}>
        </input>
        </p>
        <p>
          <label>Address: <b>{this.props.address}</b></label>
        </p>
        <button>Place Order</button>
      </div>
    );
  }
}

ReactDOM.render(
  <OrderComponent />,
  document.getElementById('root')
);
*/

// ---------------- Composition vs inheritance -------------
/*
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-messenge">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);
*/

// ---------------- 2 ----------------
/*
function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function Construct() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

ReactDOM.render(
  <Construct />,
  document.getElementById('root')
);
*/
// -------------- 3 -------------
/*
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog 
      title="Welcome"
      message="Thank you Quoc" />
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);
*/
// ------------- 4 ------------
/*
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  handleChange(val) {
    this.setState({login: val.target.value});
  }

  handleSignUp(){
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
        message="How should we refer to you?">
          <input value={this.state.login}
               onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
          Sign Me Up!
          </button>
        </Dialog>
    );
  }
}

ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('root')
);
*/

// -------------- thinking in React --------------

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if(product.name.indexOf(filterText) === -1) {
        return;
      }

      if(inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
      
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockOnlyChange(e) {
    this.props.onInStockOnlyChange(e.target.checked);
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input type="text" placeholder="Search..." 
          value={filterText} 
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input type="checkbox" 
            checked={inStockOnly}
            onChange={this.handleInStockOnlyChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filterText: '', inStockOnly: false};
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockOnlyChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockOnlyChange={this.handleInStockOnlyChange}
        />
        <ProductTable 
          products={this.props.products} 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}  
        />
      </div>
    );
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);


// function tick() {
//   ReactDOM.render(
//     <Clock />, 
//     document.getElementById('root'));
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <h1>Hello {props.name}</h1>
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
