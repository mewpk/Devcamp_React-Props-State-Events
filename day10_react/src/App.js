import logo from './logo.svg';
import './App.css';

const ProfileFuncComp = (props) => {
  console.log(props)
  return (<><p>Firstname : {props.firstname}</p>
    <p>Lastname : {props.lastname}</p></>)
}

class ProfileClassComp extends React.Component {
  render() {
    console.log(this.props)
    return (<><p>Firstname : {this.props.firstname}</p>
      <p>Lastname : {this.props.lastname}</p></>)
  }
}

function App() {
  return (
    <>
      <ProfileClassComp firstname="Poppie" lastname="Finney" />
      <ProfileFuncComp firstname="Hollie" lastname="Chang" />
    </>
  );
}


export default App;
