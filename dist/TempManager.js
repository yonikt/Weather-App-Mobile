class TempManager {
    constructor(cityData) {
        this.cityData = []
    }

    getDataFromDB() {
        let self = this.cityData
        $.get('/cities', function (res) {
            this.self = res
            return res
        })
    }

    async getCityData(cityName) {
        let x = await $.get(`/city/${cityName}`)
        this.cityData.push(x)
        console.log(x)
        return x
    }

    async saveCity(cityName) {
        let self = this.cityData
        let data = await this.cityData.find(i => i.name === cityName)
        await $.post('/city', data)
        return data
        console.log("saved")
    }

    removeCity(cityName) {
        $.ajax({
            method: 'DELETE',
            url: `/city/${cityName}`,
            success: function (data) {
                console.log(data)
            }
        })

    }

   
}


