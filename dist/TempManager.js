class TempManager {
    constructor(cityData) {
        this.cityData = []
    }


    async getDataFromDB() {
        let self = this.cityData
        let res = await $.get('/cities')
        if (res) {
            for (let i=0; i<res.length; i++) {
                self.push(res[i])
            }
        }
        return
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
    }

    removeCity(cityName) {
        $.ajax({
            method: 'DELETE',
            url: `/city/${cityName}`,
            success: function (data) {
                return data
            }
        })

    }

   
}


