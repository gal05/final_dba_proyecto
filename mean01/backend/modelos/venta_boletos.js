var mongoose = require('mongoose');
var Esquema =	mongoose.Schema;

var EsquemaUsuario=new Esquema({
	dni:String,
	tarjeta:String
});
var EsquemaEvento=new Esquema({
	_id:String
});

var EsquemaPrecio=new Esquema({
	norte:String
});


let EsquemaVenta_boleto=new Esquema({
	_id		:String,
	Usuario	:[EsquemaUsuario],
	Evento	:[EsquemaEvento],
	Precio 	:[EsquemaPrecio]
});
module.exports=mongoose.model("Venta_boleto",EsquemaVenta_boleto,'Venta_boleto');