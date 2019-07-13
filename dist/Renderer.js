class Renderer {

   async renderData(data) {
   
$('#container').append(`<div id="weather_wrapper">
<div class="weatherCard">
    <div class="currentTemp">
        <span class="temp">${data.temperature}<sup>°C</sup></span>
        <span class="location"> <div class="name">${data.name}</div>
            <span class="last">Last Updated:  ${data.updatedAt}</span> 
        </span>
    </div>
    <div class="currentWeather">
        <span class="conditions"><img src=${data.conditionPic} width="120"></span>
        <div class="info">
            <span class="infor">${data.condition}</span>
        </div>
    </div>
</div>
<button id="save">Save</button>
<button id="delete">Delete</button>
</div>`)

     }
     
    }
 //add later - .slice(11,16)
