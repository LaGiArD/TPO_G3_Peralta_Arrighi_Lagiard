const APIurl = "https://ws.smn.gob.ar/map_items/forecast/1"

async function obtenerClima(){
    const respuesta = await fetch (APIurl)
    const      data = await respuesta.json()
    console.log(data[7].name);  //posicion salta:7
    console.log(data[35].name); //posicion BARILOCHE:35
    console.log(data[161].name); //posicion MENDOZA:161
    console.log(data[9].name); //posicion cordoba:9
    console.log(data[56].name);//posicion 56: eldorado 
    

    // console.log(data[7].weather.morning_temp);
    // console.log(data[7].weather.afternoon_temp);
    document.getElementById("tms").innerHTML = data[7].weather.morning_temp
    document.getElementById("tmas").innerHTML = data[7].weather.afternoon_temp
    document.getElementById("tmb").innerHTML = data[35].weather.morning_temp
    document.getElementById("tmab").innerHTML = data[35].weather.afternoon_temp
    document.getElementById("tmm").innerHTML = data[161].weather.morning_temp
    document.getElementById("tmam").innerHTML = data[161].weather.afternoon_temp
    document.getElementById("tmc").innerHTML = data[9].weather.morning_temp
    document.getElementById("tmac").innerHTML = data[9].weather.afternoon_temp
}

obtenerClima()