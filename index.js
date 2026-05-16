fetch('https://dragonball-api.com/api/characters/')
    method: "GET"
    headers:{
        "Content-Type": "application/json"
    }
    body: JSON.stringify()
    .then(response => response.json())
    .then(data => {
        console.log(data.data[1].name);
    })

    .catch(error => console.error("Error", error));