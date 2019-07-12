const renderer = new Renderer
const tempManager = new TempManager


const getData = async function () {
    const input = $('input').val()
    const data = await tempManager.getCityData(input)
   renderer.renderData(data)
}

const saveData= async function(){
   let cityName = $(this).parent().find('.name').text()
   let data = await tempManager.saveCity(cityName)
   renderer.renderData(data)
}

const deleteData=async function(){
   let cityName = $(this).parent().find('.name').text()
   let data = await tempManager.removeCity(cityName)
   renderer.renderData(data)
}

$('#search').on('click', getData)
$('body').on('click', '#save', saveData) 
$('body').on('click', '#delete', deleteData)




