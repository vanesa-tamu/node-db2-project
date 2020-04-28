const db = require('../data/dbConfig.js');

module.exports = {
    getCars,
    getCarId,
    postCar
}


function getCars(){
    return db('cars')
}

async function getCarId(id){
    try {
        const car = await db('cars').where({ id }).first()
        console.log('CAR', car)
        return car
    }
    catch {
        console.error('ERR in getCarId')
    }
}

async function postCar(body){
    const [id] = await db('cars').insert(body, 'id')
    console.log('post ID: ', id)

    const newCar = getCarId(id)
    console.log('Model New Car: ', newCar)
    return newCar;
}