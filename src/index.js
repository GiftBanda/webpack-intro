import generateJoke from "./generateJoke";
import './styles/main.scss';
import diamond from './assets/diamond.png';


const laughImg = document.getElementById ('laughImg');
laughImg.src = diamond;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke()

// console.log(generateJoke()); 