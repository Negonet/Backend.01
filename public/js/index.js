let socket = io()

socket.on('message', (data)=>{
    console.log(data)

    socket.emit('msg', 'Hola back soy front')
})


function searchId(e){
    const id = {
        id: document.getElementById('idsearch').value
    }
    console.log(id)
    socket.emit('ned', id)
    return false
}