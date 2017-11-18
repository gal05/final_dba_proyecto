var mongoose = require('mongoose');

var EsquemaVenta_boleto=mongoose.Schema({
	_id		:String,
	Evento	:String,
			:String
});
module.exports=mongoose.model("Venta_boleto",EsquemaVenta_boleto,'Venta_boleto');