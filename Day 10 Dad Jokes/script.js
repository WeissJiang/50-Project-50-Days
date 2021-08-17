const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    let response = await fetch(
        'https://icanhazdadjoke.com',
        {
            headers:{
                accept: 'application/json'
            }
        }
    );
  
    const data = await response.json();
  
    joke.innerHTML = data.joke;
  }
  