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


/* 

Se genero un archivo JSON con el googleSheet con el AppsScripts
GoogleSheet:
https://docs.google.com/spreadsheets/d/1KuSz3FMSZJvHQjwr-ihg6ZgUmbiCpM4oiZ2BZUUZVyE/edit?usp=sharing
Codigo AppsScript:
function doGet() {

  var sheet = SpreadsheetApp.openById('1KuSz3FMSZJvHQjwr-ihg6ZgUmbiCpM4oiZ2BZUUZVyE');
  var values = sheet.getActiveSheet().getDataRange().getValues();
  var data=[];

  for(var i=1;i<values.length;i++){
    var row = values[i];
    var feedback={};
    feedback['id']=row[0];
    feedback['nombre']=row[1];
    feedback['rubro']=row[2];
    feedback['marca']=row[3];
    feedback['proveedor']=row[4];
    feedback['precio']=row[5];

    data.push(feedback);
  }
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

JSON:

https://script.googleusercontent.com/macros/echo?user_content_key=ag5mF7et3SksGG88oR3dQDA7IDLOHKyjy7E1IovG5rzqRg_0-oFxI_I91tkS8OuxrCCUs5yLNAuZoDb611ZxzyjMjQxWobDAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFFmVWUCbnlSQGXiYK9H8GshoCjUAJrC5svirlfj2MJWI6zvndoZiNmH6HbmXCqQxHU98P6KO5XBuNohf8OssGxxe8dkPacKcdz9Jw9Md8uu&lib=MVqGNRiinXwUgtU0oKg0dcnT2xDUZaPi5
















*/