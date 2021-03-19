import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
      <div className="Comment">
          <UserInfo user={props.author} />
          <div className="Comment-text">
              {props.text}
          </div>
          <div className="Comment-date">
              {formatDate(props.date)}
          </div>
      </div>
  );
}

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img
//           className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

function formatDate(date) {
  return date.toLocaleDateString();
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function App() {
  return (
    <div className="App">
      {/* <Welcome name="Quoc" />
      <Welcome name="Hào" />
      <Welcome name="Hoàng" /> */}
      <Comment 
        date={comment.date}
        text={comment.text}
        author={comment.author} />
    </div>
  );
}

export default App;
