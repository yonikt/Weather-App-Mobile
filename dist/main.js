const renderer = new Renderer
const tempManager = new TempManager


async function loadPage() {
   await tempManager.getDataFromDB()
   for(let i=0; i<tempManager.cityData.length; i++){
   renderer.renderData(tempManager.cityData[i])
   }
}



const getData = async function () {
    const input = $('input').val()
    const data = await tempManager.getCityData(input)
   renderer.renderData(data)
}

const saveData= async function(){
   let cityName = $(this).parent().find('.name').text()
  await tempManager.saveCity(cityName)
  $(this).prop('disabled', true)
  
}

const deleteData= async function(){
   let cityName = $(this).parent().find('.name').text()
  tempManager.removeCity(cityName)
  await tempManager.getDataFromDB()
   $(this).parent().remove()
   $(this).prop('disabled', true)
}




$('#search').on('click', getData)
$('body').on('click', '#save', saveData) 
$('body').on('click', '#delete', deleteData)

loadPage()
