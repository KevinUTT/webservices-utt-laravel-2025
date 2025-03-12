<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
    <script src="{{ asset('js/boostrap.js') }}"></script>
    <script src="{{ asset('js/axios.js') }}"></script>
    <script src="{{ asset('js/components/menu.jsx') }}" type="text/babel"></script>
    <script src="{{ asset('js/components/loader.jsx') }}" type="text/babel"></script>
    <script src="{{ asset('js/components/notification.jsx') }}" type="text/babel"></script>
    <script src="http://localhost:2025/react.js"></script>
    <script src="http://localhost:2025/reactDom.js"></script>
    <script src="http://localhost:2025/babel.js"></script>
    <title>UTT Library</title>
</head>

<body>
    <main id="app" class="container">
        
    </main>

    <script type="text/babel"> 
        function App() {
            let [showLoader, setShowLoader] = React.useState(false);
            let [notification, setNotification] = React.useState({
                title: "Ejemplo",
                text: "texto",
                type: "x",
                show: false
            });

            return <div>
                <Menu />
                <section>
                    <h2 className="mt-3">Bienvenido a UTT Library</h2>
                    <div className="alert alert-purple" role="alert">
                        Si eres nuevo, <a href="/register">regístrate aquí :)</a>
                    </div>
                </section>
                <hr />
                <div className="text-center">
                    Si ya tienes cuenta <br />
                    Puedes iniciar sesión <br />
                    <a href="/login">Dando click aquí</a>
                </div>
                <Notification notification={notification} setNotification={setNotification}/>
                <Loader show={showLoader} />
            </div>
        }

        const container = document.getElementById('app');
        const root = ReactDOM.createRoot(container);
        root.render(<App />);
    </script>
</body>

</html>
