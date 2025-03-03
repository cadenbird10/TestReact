import './App.css'

const bandNames = [
  {name: "Dire Straits", 
    members: "Ur Mom, Joe mama, Carol, Karen", 
    formed: 1977},
  {name: "BTR",
     members: "Kendall, Carlos, James, Logan", 
     formed: 2010},
  {name: "Collective Soul", 
    members: "Ed Roland, Dean, David, Ross, Shane", 
    formed: 1992},
  {name: "Traffic", 
    members: "Apple, Bean, Jim, Peach",
    formed: 1967
  }
];

function Welcome() {
  return <h1>Criminally Underrated Bands</h1>
}

function Band({name, members, formed}: {name: string; members: string; formed: number}) {

  return (
    <>
      <img />
      <h2>{name}</h2>
      <h3>Original Members: {members}</h3>
      <h3>Formed: {formed}</h3>
    </>
  );
}

function BandList() {

  return (
    <>
    {
      bandNames.map((singleBand) => (
        <Band {...singleBand} />
      ))
    }
    </>
  );
}

function App() {

  return (
    <>
      <Welcome />
      <BandList />
    </>
  )
}

export default App
