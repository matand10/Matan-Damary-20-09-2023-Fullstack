const dbService = require("../../services/db.service")

class City {
    cityKey: string
    localizedName: string

    constructor(cityKey: string, localizedName: string) {
        this.cityKey = cityKey
        this.localizedName = localizedName
    }

    async save() {
        const query = `INSERT INTO city (cityKey, localizedName) VALUES ('${this.cityKey}', '${this.localizedName}')`
        try {
            dbService.runSQL(query)
        } catch (error) {
            throw error
        }
    }

    static async getAll(): Promise<Array<typeof City>> {
        const query = `SELECT * FROM city`;
        try {
            const result = await dbService.runSQL(query)
            return result
        } catch (error) {
            throw error
        }
    }

    static async remove(key: string): Promise<string> {
        const query = `DELETE FROM city WHERE cityKey = ${key}`;
        try {
            await dbService.runSQL(query)
            return key
        } catch (error) {
            throw error
        }
    }
}

module.exports = City
