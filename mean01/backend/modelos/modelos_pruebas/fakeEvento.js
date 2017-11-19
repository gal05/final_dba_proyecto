var mongoose = require('mongoose');
var Esquema =	mongoose.Schema;

var EsquemaPrecio=new Esquema({
	norte:String,
	sur:String,
	oriente:String,
	occidente:String
});



let EsquemaFakeEvento=new Esquema({
	_id		:String,
	local 	:String,
	visitante:String,
	estadio	:String,
	fecha 	:String,
	Precio 	:[EsquemaPrecio]
});
module.exports=mongoose.model("Evento",EsquemaFakeEvento,'Evento');