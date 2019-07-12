const citySchema = require( './citySchema' )
const mongoose = require( 'mongoose' )

const cityModel = mongoose.model( 'city', citySchema )



module.exports = cityModel
