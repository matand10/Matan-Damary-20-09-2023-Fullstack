export class EndPoints {
    static readonly HTTPS_PROTOCOL = 'https://'
    static readonly HTTP_PROTOCOL = 'http://'
    static readonly LOCAL_HOST = 'localhost:3030/api/'
}

export const WeatherEP = {
    default: 'weather',
}

export const CityEP = {
    default: 'city',
    add: 'city/add',
    get: 'city/get',
    delete: 'city/delete/'
}