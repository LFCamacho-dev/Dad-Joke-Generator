
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const jokeUrl = 'https://icanhazdadjoke.com';

generateJoke();


//USING async await
async function generateJoke() {
  const config = {
    headers: {
      "Accept": "application/json"
    }
  }

  const res = await fetch(jokeUrl, config)
  const data = await res.json()

  jokeEl.innerHTML = data.joke
}


//USING .then
// function generateJoke() {
//   const config = {
//     headers: {
//       "Accept": "application/json"
//     }
//   }

//   fetch(jokeUrl, config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     });
// }

jokeBtn.addEventListener('click', generateJoke);