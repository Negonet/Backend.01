let socket = io()
let getData = null

socket.on('message', (data)=>{
    console.log(data)
    getData = data
    socket.emit('msg', 'Hola back soy front')
})



function searchId(e){
    const id = {
        id: document.getElementById('idsearch').value
    }
    console.log(id)
    socket.emit('newId', id)
    return false
}