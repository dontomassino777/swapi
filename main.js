const resBtn = document.querySelector('button');

function buttonClick() {
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then(res => {
        res.data.results[0].residents.forEach(elem => {
            console.log(elem);
            axios.get(elem)
            .then(res => {
                let newH2 = document.createElement('h2');
                newH2.textContent = res.data.name;
                document.body.appendChild(newH2)
            })
        })
      })
      .catch(error => {
        console.log(error)
      })
}

resBtn.addEventListener('click', buttonClick)