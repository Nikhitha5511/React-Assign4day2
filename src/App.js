
import './App.css';
import Body from './components/Body';

function App() {
  return (
    <div className="AppContainer">
      <div class='cardsdiv'>
      <Body colorCode='#FF6663' colorName='PINK'></Body>
      <Body colorCode='#333333' colorName='GRAY'></Body>
      <Body colorCode='#666666' colorName='BLACK'></Body>
      <Body colorCode='#38BB14' colorName='GREEN'></Body>
      <Body colorCode='#C90B0B' colorName='RED'></Body>
      <Body colorCode='#FF8000' colorName='ORANGE'></Body>
      <Body colorCode='#FFF500' colorName='YELLOW'></Body>
      <Body colorCode='#CCCCCC' colorName='LIGHT GRAY'></Body>
      <Body colorCode='#7E41A2' colorName='PURPLE'></Body>
      <Body colorCode='#C14911' colorName='BROWN'></Body>
      </div>
    </div>
  );
}

export default App;
