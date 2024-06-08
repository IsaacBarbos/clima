window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const getWeather = async () => {
            const getData = await fetch(`https://api.weatherapi.com/v1/current.json?key=64930df30e9240b6be3214240242205&q=${latitude},${longitude}&lang=pt`)

            const res = await getData.json()

            const condicaoContainer = document.querySelector('.condicao')
            const localAtualContainer = document.querySelector('.local-atual')


            console.log(res.current.condition.text) //Condição
            console.log(res.location.name) //Cidade
            console.log(res.current.temp_c)
            console.log(res.current.feelslike_c) //SEnsação térmica
            console.log(res.current.condition.wind_kph) //Velocidade do vento





            const icone = document.createElement('img')
            const condicao = document.createElement('p')
            const Cidade = document.createElement('span')
            const temperatura = document.createElement('span')
            const sensTerm = document.createElement('span')
            const velVento = document.createElement('span')


            condicao.innerHTML = res.current.condition.text
            icone.setAttribute('src', 'https:' + res.current.condition.icon)
            Cidade.innerHTML = res.location.name
            Cidade.className = 'cidade'
            temperatura.innerHTML = res.current.temp_c + 'c'
            temperatura.classList.add('temperatura')
            sensTerm.innerHTML = res.current.feelslike_c
            velVento.innerHTML = res.current.wind_kph + 'kh'
            velVento.style.fontSize = '32px'

            


            condicaoContainer.appendChild(icone)
            localAtualContainer.appendChild(temperatura)
            condicaoContainer.appendChild(condicao)

            localAtualContainer.appendChild(Cidade)
            localAtualContainer.appendChild(sensTerm)
            localAtualContainer.appendChild(velVento)
        }
 
        document.querySelector('.load').className = 'hideload'

        getWeather()
    })
})


