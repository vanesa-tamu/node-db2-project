module.exports = function validateCarPost(req, res, next){
    const { VIN, make, model, mileage, transmission, title_status } = req.body;

    if(Object.keys(req.body).length === 0) {
        res.status(400).json({message: `Missing car data!`})
    }
    else if(!VIN){
        res.status(400).json({message: `Missing car VIN!`})
    }
    else if(!make){
        res.status(400).json({message: `Missing car MAKE!`})
    }
    else if(!model){
        res.status(400).json({message: `Missing car MODEL!`})
    }
    else if(!mileage){
        res.status(400).json({message: `Missing car MILEAGE!`})
    }
    else if(typeof VIN !== "string"){
        return res.status(400).json({error: `need STRING for VIN`});
    }
    else if(typeof make !== "string"){
        return res.status(400).json({error: `need STRING for make`});
    }
    else if(typeof model !== "string"){
        return res.status(400).json({error: `need STRING for model`});
    }
    else if(typeof mileage !== "number"){
        return res.status(400).json({error: `need STRING for mileage`});
    }
    req.body = { VIN, make, model, mileage, transmission, title_status }
    next();

}