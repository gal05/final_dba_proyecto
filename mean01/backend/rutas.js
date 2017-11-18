var Controlador	=require('./controlador');
var mainDir	="";



module.exports	={
	principal:function(app){
		//obteniendo todas la areas
		app.get('/api/areas',Controlador.getAreas);


		//Crea una nueva area
		app.post('/api/area',Controlador.setArea);

		//Borrar un area
		app.delete('/api/area/:area_id',Controlador.removeArea);


		//Modificar los datos de una area
		app.put('/api/area/:area_id',Controlador.updateArea);

		//A la aplicacion principal
		app.get('/',function(req,res){
			res.sendFile(mainDir+'/angular/index.html');
		});
	},
	iniciar: function(mdir){
		mainDir=mdir;
	}
}

