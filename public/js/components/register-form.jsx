function Register({setShow, notification, setNotification}) {

    let [name, setName] = React.useState("");
    let [lastName, setLastName] = React.useState("");
    let [secondLastName, setSecondLastName] = React.useState("");
    let [username, setUsername] = React.useState("");
    let [email, setEmail] = React.useState("");
    let [password, setPassword] = React.useState("");

    async function registrarUsuario(event) {
        //Abrir loader
        setShow(true);
        event.preventDefault();
        try {
            await axios.post('http://localhost:2025/users/register', {
                name: name,
                lastName: lastName,
                secondLastName: secondLastName,
                username: username,
                email: email,
                password: password
            });

            //Puedo hacer lo que quiera
            const nuevaNotificacion = Object.assign({}, notification);
            nuevaNotificacion.show = true;
            nuevaNotificacion.title = "Registro Exitoso";
            nuevaNotificacion.text = `Gracias, ${name} por registrarte.`;
            setNotification(nuevaNotificacion);
            
            //window.location.href = "/login";
        } catch(e) {
            console.error(e);
            const nuevaNotificacion = Object.assign({}, notification);
            nuevaNotificacion.show = true;
            nuevaNotificacion.title = "Registro Fallido";
            nuevaNotificacion.text = `${e.response.data.error}`;
            setNotification(nuevaNotificacion);
        } finally {
            //Cerrar loader
            setShow(false);
            setTimeout(() => {
                const nuevaNotificacion = Object.assign({}, notification);
                nuevaNotificacion.show = false;
                setNotification(nuevaNotificacion);
            }, 3500);
        }
    }

    return <form onSubmit={ () => { registrarUsuario(event)} }>
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="name" className="col-form-label">Nombre</label>
            </div>
            <div className="col-12">
                <input value={name} onChange={() => { setName(event.target.value) }} type="text" name="name" id="name" className="form-control" aria-describedby="nombreTip" />
            </div>
            <div className="col-auto">
                <span id="nombreTip" className="form-text">
                    Solo letras, _ y números.
                </span>
            </div>
        </div>
        <hr />
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="lastName" className="col-form-label">Apellido Paterno</label>
            </div>
            <div className="col-12">
                <input value={lastName} onChange={() => { setLastName(event.target.value) }} type="text" name="lastName" id="lastName" className="form-control" aria-describedby="lastNameTip"/>
            </div>
            <div className="col-auto">
                <span id="lastNameTip" className="form-text">
                    Solo letras, _ y números.
                </span>
            </div>
        </div>
        <hr />
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="secondLastName" className="col-form-label">Apellido Materno</label>
            </div>
            <div className="col-12">
                <input value={secondLastName} onChange={() => { setSecondLastName(event.target.value) }} type="text" name="secondLastName" id="secondLastName" className="form-control" aria-describedby="secondLastNameTip"/>
            </div>
            <div className="col-auto">
                <span id="secondLastNameTip" className="form-text">
                    Solo letras, _ y números.
                </span>
            </div>
        </div>
        <hr />
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="username" className="col-form-label">Username</label>
            </div>
            <div className="col-12">
                <input value={username} onChange={() => { setUsername(event.target.value) }} type="text" name="username" id="username" className="form-control" aria-describedby="usernameTip"/>
            </div>
            <div className="col-auto">
                <span id="usernameTip" className="form-text">
                    Solo letras, _ y números.
                </span>
            </div>
        </div>
        <hr />
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="email" className="col-form-label">Correo</label>
            </div>
            <div className="col-12">
                <input value={email} onChange={() => { setEmail(event.target.value) }} type="email" name="email" id="email" className="form-control" aria-describedby="emailTip"/>
            </div>
            <div className="col-auto">
                <span id="emailTip" className="form-text">
                    Solo letras, _ y números.
                </span>
            </div>
        </div>
        <hr />
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="password" className="col-form-label">Contraseña</label>
            </div>
            <div className="col-12">
                <input value={password} onChange={() => { setPassword(event.target.value) }} type="password" name="password" id="password" className="form-control" aria-describedby="passwordTip"/>
            </div>
            <div className="col-auto">
                <span id="passwordTip" className="form-text">
                    Solo letras, _ y números.
                </span>
            </div>
        </div>
        <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Registrar</button>
        </div>
    </form>
}