function App() {
  let name = "Alex";
  let age = 20;
  let isStudent = true;
  let headingColor = "lightblue";
  let favoriteHobbies = ["Reading", "Hiking", "Coding"]
  let favoriteHobbieslist = [];
  for (let i = 0; i < favoriteHobbies.length; i++) {
    favoriteHobbieslist.push(<li key={i}> {favoriteHobbies[i]} </li>

    );
  }
  let showEnthusiasm = () => {
    document.getElementById("message").innerHTML =
      "Hello from React! I love my hobbies!";

    document.getElementById("heading").style.backgroundColor =
      headingColor;
  };
  return (
    <div>
      <h1 id="heading">{name}</h1>
      <p>Age is :{age}</p>
      <p>{isStudent.toString()}</p>
      <div className="container">

</div>
      <ul>{favoriteHobbieslist}</ul>
      {favoriteHobbies.map((item) => { return <p>{item}</p> })}
      <button
        className="btn btn-primary mt-3"
        onClick={showEnthusiasm}>
         Show Enthusiasm

      </button>


      <p id="message" className="mt-3">
        Click the button to see my enthusiasm!
      </p>
    </div>
  );
}
export default App;