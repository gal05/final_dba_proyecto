var Area =	require('./modelos/area');
var Venta_boleto=require('./modelos/venta_boletos');
var Evento 	=require('./modelos/modelos_pruebas/fakeEvento.js');

//seccion Venta boletos --> no tocar <----
exports.getVenta_boletos=function(req,res){
	Venta_boleto.find({},function(err,venta_boletos){
		if(err)
			res.send(err);
		res.json(venta_boletos);
	});

}

//fin seccion Venta boletos --> no tocar <----

//codigo fake de evento para simular la compra de una boleto por evento
exports.getFakeEvento=function(req,res){
	Evento.find({},function(err,fakeEvento){
		if(err)
			res.send(err);
		res.json(fakeEvento);
	});
}

//Fin de evento falso
















//codigo del profe

//Obteniendo todas la areas

exports.getAreas=function(req,res){
	Area.find({},function(err,areas){
		if(err)
			res.send(err);
		res.json(areas);
	});
}

//Adicionando un nuevo objeto Area en la base de datos

exports.setArea=function(req,res){
	Area.create({Nombre		:req.body.Nombre,
				Abreviatura	:req.body.Abreviatura,
				Estado		:req.body.Estado},function(err,area){
					if(err)
						res.send(err);
					Area.find(function(err,area){
						if(err)
							res.send(err);
						res.json(area);
					});
				});
}

//Modifica un objeto area de la base  de datos
exports.updateArea	=function(req,res){
	Area.update({_id:req.params.area_id},
		{$set:{Nombre	:req.body.Nombre,
			Abreviatura	:req.body.Abreviatura,
			Estado		:req.body.Estado}},function(err,area){
				if(err)
					res.send(err);
				Area.find(function(err,area){
					if(err)
						res.send(err);
					res.json(area);
				});
			});
}

//Elimina un objeto Area de la base de datos
exports.removeArea=function(req,res){
	Area.remove({_id:req.params.area_id},function(err,area){
		if(err)
			res.send(err);
		Area.find(function(err,areas){
			if(err)
				res.send(err);
			res.json(areas);
		});
	});
}

