conn = new Mongo();
db = conn.getDB("proye_db");




db.Club.insert([{_id:1,nombre:"Alianza Lima"},{_id:2,nombre:"Universitario de Deportes"}]);

db.Estadio.insert({_id:1, nombre:"Monumental de Ate", capacidad: 30000, norte: 5000, sur: 5000, oriente : 10000, occidente: 10000});

db.Usuario.insert({_id:1, dni: 12345678, nombre: "algo", paterno: "algo", materno: "algo", tarjeta: "3333 3333 3333 3333"});
//como se llena local, visitante, estadio es a traves de la interfaz grafica
db.Evento.insert({_id: 1, local: "Universitario de Deportes", visitante: "Alianza Lima", estadio: "Monumental de Ate",fecha:"21/12/2017", Precio:{norte: 50, sur:30, oriente: 60, occidente: 70}});

db.Venta_boleto.insert({_id: 1, Usuario:{dni:12345678, tarjeta: "3333 3333 3333 3333"}, Evento:{_id:1}, Precio:{norte:50}});

