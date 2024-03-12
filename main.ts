const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/tiendas')
  .catch((error) => console.log(error));


import { ITienda, TiendaModel } from './models/Tienda';
import { ILoc, LocModel } from './models/Localitation';


const loc1: ILoc = {
    "id": 1,
    "name": "Barcelona",
    
    "loc":"41°22′57″N 2°10′37″E"
    
}
const tienda1: ITienda = {
  "id": 1,
  "name": "Marmota",
  "phone": "777777777",
  "email":"marmota@marmota.com",
  "web" : "www.marmota.es"
}

const newLoc= new LocModel(loc1);
newLoc.save()
    .then( loc => {
        console.log('New loc:  ' + loc._id + ',  ' + loc.loc) 
    })
    .catch( error => {
        console.log('Error');
    });
const newTienda= new TiendaModel(tienda1);
newTienda.save()
    .then( tienda => {
        console.log('New tienda:  ' + tienda._id + ',  ' + tienda.name) 
    })
    .catch( error => {
        console.log('Error');
    });

LocModel.findOne({id: 1}).exec()
    .then( loc => {
        console.log('Existe ' + loc._id + ',  ' + loc.name)
        
    })
    .catch((error) => {
		console.log('Error');
    });
TiendaModel.findOne({id: 1}).exec()
    .then( tienda => {
        console.log('Existe ' + tienda._id + ',  ' + tienda.name)
        
    })
    .catch((error) => {
		console.log('Error');
    });

LocModel.findOneAndDelete({ id: 1 })
    .then( () => console.log( ' Borrado '))
    .catch((error) => {
      console.log('Error');
    });
TiendaModel.findOneAndDelete({ id: 1 })
    .then( () => console.log( ' Borrado '))
    .catch((error) => {
      console.log('Error');
    });


