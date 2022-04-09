import './App.css';
import PROFILE from './profile/PROFILE';

function App() {
  const fName='BEN SALEM INES';
  const profession= 'Radiology Technician';
  const bio = 'biography';
  const imgLink='https://static.vecteezy.com/ti/vecteur-libre/p1/2275818-avatar-femme-icone-profil-femme-pour-reseau-vectoriel.jpg'; 
  const handleName=(props) =>{
    alert(fName)
  }
  return (
    <div className="App">
      <PROFILE fName={fName} profession={profession} bio={bio} handleName={handleName}>
      <img src={imgLink} width='250px' alt="profile"/>
        </PROFILE>
    </div>
  );
}

export default App;
