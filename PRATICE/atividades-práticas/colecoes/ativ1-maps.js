function getAdmins(map){
    let admins = []
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}
const usuarios = new Map()

usuarios.set('Daniel', 'Admin');
usuarios.set('Fernando', 'Operator');
usuarios.set('Luiza', 'Admin');
usuarios.set('Joao', 'Admin');

console.log(getAdmins(usuarios));
