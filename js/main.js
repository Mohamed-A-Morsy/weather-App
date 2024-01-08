let apiData =[];
let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
let month =["Jan","Feb","Mar","Apr","May","Jun","jul","aug","sept","okt","nov","dec"]

let req = new XMLHttpRequest();
req.open('get',`https://api.weatherapi.com/v1/forecast.json?key=d0c9c9fbf7a04c56871185052240301&q=cairo&days=3`);
req.send()
req.addEventListener('loadend',function(){
if(req.readyState == 4 && req.status >= 200 && req.status <300){
   apiData=JSON.parse(req.response);
   displayData();
}
});
function displayData(){
    let data ="";
    let date = new Date();
    let dayOfWeek =date.getDay();
    let nextDayIndex = (dayOfWeek + 1) % 7;
    let nextDayName = days[nextDayIndex];
    let afterNextDayIndex = (dayOfWeek + 2) % 7;
    let afterNextDayName = days[afterNextDayIndex];
    


    data +=`
    <div class="col-4">
            <div class="innerHtml">
              <div class="card text-bg-dark bg-transparent mb-3 border">
                <div
                  class="card-header text-center d-flex justify-content-between pt-3"
                >
                  <p>${days[dayOfWeek]}</p>
                  <p>${date.getDate()} ${ month[date.getMonth()]} </p>
                </div>
                <div class="card-body border-top">
                  <p class="card-text fs-4 fw-lighter">${apiData.location.name}</p>

                  <div class="d-flex">
                    <h5 class="card-title fs-1">${apiData.current.temp_c} C</h5>
                    <img class="ms-5" src="${apiData.current.condition.icon}" alt="icon">
                  </div>

                  <p class="card-text text-info">${apiData.current.condition.text}</p>
                </div>
                <div class="pt-3 d-flex justify-content-around">
                  <p class="">
                    <span><i class="fa-solid fa-umbrella"></i></span> 20%
                  </p>
                  <p>
                    <span><i class="fa-solid fa-wind"></i></span> 18km/h
                  </p>
                  <p>
                    <span><i class="fa-regular fa-compass"></i></span> East
                  </p>
                </div>
              </div>
            </div>
          </div>

    


          <div class="col-4">
          <div class="innerHtml ">
            <div class="card text-bg-dark bg-transparent mb-3 border">
              <div class="card-header text-center m-auto pt-3">
                <p>${nextDayName}</p>
              </div>
              <div class="card-body border-top">

                <div class=" text-center">
                  <img  src="${apiData.forecast.forecastday[1].day.condition.icon}" alt="sss">
                  <h5 class="card-title fs-1">${apiData.forecast.forecastday[1].day.maxtemp_c} C</h5>
                  <h5 class="card-title fs-5 ">${apiData.forecast.forecastday[1].day.mintemp_c} C</h5>

                  <p class="card-text text-info">${apiData.forecast.forecastday[1].day.condition.text}</p>
                </div>

                
              </div>
          
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="innerHtml ">
            <div class="card text-bg-dark bg-transparent mb-3 border">
              <div class="card-header text-center m-auto pt-3">
                <p>${afterNextDayName}</p>
              </div>
              <div class="card-body border-top">

                <div class=" text-center">
                  <img  src="${apiData.forecast.forecastday[2].day.condition.icon}" alt="sss">
                  <h5 class="card-title fs-1">${apiData.forecast.forecastday[2].day.maxtemp_c} C</h5>
                  <h5 class="card-title fs-5 ">${apiData.forecast.forecastday[2].day.mintemp_c} C</h5>

                  <p class="card-text text-info">${apiData.forecast.forecastday[2].day.condition.text}</p>
                </div>

                
              </div>
          
            </div>
          </div>
        </div>
        


    
    `
    document.querySelector(".master").innerHTML=data
   
  
    

}
