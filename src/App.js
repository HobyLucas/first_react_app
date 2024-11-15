// import React, { Component } from 'react';
// import logo from './logo.svg';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
import './App.css';
import { useState, useRef, useEffect } from 'react';

function MainApp() {
	
	const [values, setValues] = useState('');
	const [lists, setLists] = useState([]);
	const [isInput, setIsInput] = useState(false);
	const [isLists, setIsLists] = useState(false);
	const [checkedItems, setCheckedItems] = useState([]);

	const inputRef = useRef(null);

	function handleClick() {
		setIsInput(true);
	}

	function handleChange(e) {
		setValues(e.target.value);
	}

	function handleKey(e) {
		if (e.key === 'Enter') {
			add();
		}
	}

	function handleDelete(index) {
		// setCheckedItems((prev) => prev.filter((i) => i !== index));
		const newList = lists.filter((_, i) => i !== index);
		setLists(newList);
		const newChecked = checkedItems.filter(i => i !== index);
		// newChecked.map((n) => (n > index ? n-1:n));
		  setCheckedItems(newChecked);
		if (newList.length === 0) {
			 setIsLists(false);
		}
	}

	function add() {
		if (values) {
			setIsLists(true);
			setLists([...lists, { text: values, checked: false }]);
			setValues('');
		}
		setIsInput(false);
	}
	
function checking(index) {
	 const newList = lists.map((item, i) =>
            i === index ? { ...item, checked: !item.checked } : item
        );
        setLists(newList);
	 };
	
	useEffect(() => {
		if (isInput && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isInput]);
	
	useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
        document.head.appendChild(link);
		       return () => {
            document.head.removeChild(link);
        };
    }, []);

	return(
		<div className="mainDiv">
	<h1>To do list react-app</h1>
	{
		 isLists && <ul className="styled-list">
				{
					lists.map((lis, index) => (
						<li key={index} 
					className='list'
					>
				 	   <label className={`${lis.checked ? 'checked' : ''}`}>
                <input type="checkbox" 
					               checked={lis.checked}
					               onChange={() => checking(index)}
					              />
                {lis.text}
					    </label>
					{ lis.checked &&
					 	<i class="fas fa-trash delete-icon" onClick={ () => {handleDelete(index)} }></i>
					}
					</li>
					))
				}
			</ul>
	}
			{
				isInput ? (
					<input
						type = "text"
						value = { values }
						onChange = { handleChange }
						onKeyDown = { handleKey }
						ref = { inputRef }
				 className = "addingInp"
					/>
				):(
					<button onClick={ handleClick } className="addingBtn">Add new tasks</button>
				)
			}
		</div>
	);

}

export default MainApp;

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;

const user = [
	{
		firstName: 'Hoby Lucas',
		familyName: 'RAZAFIMAHEFA',
		imageUrl : logo,
		imageSize: 90
	},
	{
                firstName: 'Hanja Lucky',
                familyName: 'RAZAFIMAHEFA',
                imageUrl : logo,
                imageSize: 50
        },
]

// let isLogged = false;

const parents = [
	{ name: 'Luc', as: 'Vater' },
	{ name: 'Vololona', as: 'Mutter' },
]

let count = 0;

function Image() {

  return (
	<img
		className="App-logo"
		src={user.imageUrl}
		alt="logo"
		style={{
			width: user[count].imageSize,
			height: user[count].imageSize
		}}
	/>
	// <img src={logo} className="App-logo" alt="logo" />
  );
}

function Parents() {

	const listParent = parents.map(parent =>
        	<li> {parent.name} </li>
	);

	return (
		<ul> {listParent} </ul>
	);
}

function Button() {
	const [counts, setCounts] = useState(0);

	function handleClick() {

		if (count == 0){
			setCount(counts + 1);
		} else {
			setCount(counts - 1);
		}

		setCounts(counts + 1)
	}

	return (
	    <div>
	        <p>Nummer: { counts } </p>
		    <button onClick={ handleClick }>
			    Click me
		    </button>
		</div>
	);
}

export default function App() {

	return (
		<div>
		    < Image />
			<h1>Hello World!</h1>
			<p> Mein Familienname ist {user[count].familyName} </p>
			<p> Meine Vornamen ist {user[count].firstName} </p>
			<p> Meine Elterne sind :</p>
			< Parents />
			< Button />
		</div>
	);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
