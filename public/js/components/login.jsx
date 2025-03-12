function Login({notification}) {
    let [user, setUser] = React.useState("");
    let [password, setPassword] = React.useState("");

    async function login() {
        //axios el login
        try {
            const response = await axios.post('http://localhost:2025/users/login', {
                username: user,
                password: password
            }, {
                withCredentials: true
            });

            //window.location.href = "/profile";
        } catch(e) {
            if(e.response) {
                const error = e.response.data.error;
                notification({
                    title: "Error al iniciar sesión",
                    text: error,
                    type: "error",
                    show: true
                });
            }
        }
    }

    return <>
        <form className="text-center" onSubmit={ () => {
            event.preventDefault();
            login();
        }}>
            <section className="login-box">
                <h4>Iniciar Sesión</h4>
                <div className="col-auto">
                    <label htmlFor="user" className="col-form-label">Nombre de usuario</label>
                </div>
                <div className="col-12">
                    <input value={user} onChange={() => { setUser(event.target.value) }} type="text" name="user" id="user" className="form-control" aria-describedby="userTip" />
                </div>
                <div className="col-auto">
                    <span id="userTip" className="form-text">
                        Solo letras, _ y números.
                    </span>
                </div>

                <hr />

                <div className="col-auto">
                    <label htmlFor="password" className="col-form-label">Contraseña</label>
                </div>
                <div className="col-12">
                    <input value={password} onChange={() => { setPassword(event.target.value) }} type="password" name="password" id="password" className="form-control" aria-describedby="passwordTip" />
                </div>
                <div className="col-auto">
                    <span id="passwordTip" className="form-text">
                        Solo letras, _ y números.
                    </span>
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3 w-100 mt-3">Iniciar Sesión</button>
                </div>
            </section>
        </form>
    </>
}