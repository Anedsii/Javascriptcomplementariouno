setInterval(function() {
    let url = 'https://script.googleusercontent.com/macros/echo?user_content_key=ag5mF7et3SksGG88oR3dQDA7IDLOHKyjy7E1IovG5rzqRg_0-oFxI_I91tkS8OuxrCCUs5yLNAuZoDb611ZxzyjMjQxWobDAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFFmVWUCbnlSQGXiYK9H8GshoCjUAJrC5svirlfj2MJWI6zvndoZiNmH6HbmXCqQxHU98P6KO5XBuNohf8OssGxxe8dkPacKcdz9Jw9Md8uu&lib=MVqGNRiinXwUgtU0oKg0dcnT2xDUZaPi5';
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {
        console.log(data)
        let body = ""
        for (var i = 0; i < data.length; i++) {
            body += `<tr><td>${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].rubro}</td><td>${data[i].marca}</td><td>${data[i].proveedor}</td><td>${data[i].precio}</td></tr>`
        }
        document.getElementById('data').innerHTML = body
    }
}, 1000);