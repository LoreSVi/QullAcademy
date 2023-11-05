
const handleOnClick = ()=>{
    const consulta = document.getElementById('message')
    const nombre = document.getElementById('name')
    const email = document.getElementById('email')
    const telefono = document.getElementById('phone')
    console.log('llamando boton mensaje'+ consulta)
    window.open(`https://api.whatsapp.com/send?phone=543546520243&text=Consulta desde el Formulario Web:
    ${'%0A'}Nombre: ${nombre.value}
    ${'%0A'}Telefono: ${telefono.value}
    ${'%0A'}Email: ${email.value}
    ${'%0A'}Consulta: ${consulta.value}`, 'blank')
       
}

