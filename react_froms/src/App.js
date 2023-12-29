import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    occupation: "",
    gender: "",
    language: []
  });
  const onChangeHandler = (event) => {
     console.log(event)
    if (event.target.name === "language") {
      const copy = { ...formData };
      if (event.target.checked) {
        copy.language.push(event.target.value);
      } else {
        copy.language = copy.language.filter(t=> 
          t !== event.target.value
        );
      }

      setformData(copy)
    } else {
      setformData(() => ({
        ...formData, [event.target.name]: event.target.value
      }));
    }
  };
  return (
    <div className="App">
      <form>
        <div>
          <label>User Name</label>
          <input type="text" name="username"  onChange={onChangeHandler}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email"  onChange={onChangeHandler}/>
        </div>
        <div>
          <label>
            Occupation
            <select name="occupation" onChange={onChangeHandler}>
              <option value="Student">Student</option>
              <option value="Employee">Employee</option>
              <option value="Others">Others</option>
            </select>
          </label>
        </div>
        <div>
          <p>Gender</p>
          <label>
            <input type="radio" name="gender" value="option1"  onChange={onChangeHandler}/>
            Option1
          </label>
          <label>
            <input type="radio" name="gender" value="option2" onChange={onChangeHandler} />
            Option2
          </label>
          <label>
            <input type="radio" name="gender" value="option3"  onChange={onChangeHandler}/>
            Option3
          </label>
        </div>
        <div>
          <p>Languages</p>
          <label>
            <input type="checkbox" name="language" value='HTML' onChange={onChangeHandler} checked={formData.language.indexOf('HTML') !== -1}/>
            HTML
          </label>
          <label>
            <input type="checkbox" name="language" value="CSS" onChange={onChangeHandler} checked={formData.language.indexOf('CSS') !== -1}/>
            CSS
          </label>
          <label>
            <input type="checkbox" name="language" value="JavaScript"  onChange={onChangeHandler} checked={formData.language.indexOf('JavaScript') !== -1}/>
            JavaScript
          </label>
        </div>
      </form>

      <button type="submit" onClick={()=>{console.log(formData)}}>submit</button>
    </div>
  );
}

export default App;
