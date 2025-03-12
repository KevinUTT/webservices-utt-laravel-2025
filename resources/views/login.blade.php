<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/login.css') }}" rel="stylesheet">
    <script src="{{ asset('js/boostrap.js') }}"></script>
    <script src="{{ asset('js/axios.js') }}"></script>
    <script src="{{ asset('js/components/menu.jsx') }}" type="text/babel"></script>
    <script src="{{ asset('js/components/login.jsx') }}" type="text/babel"></script>
    <script src="{{ asset('js/components/loader.jsx') }}" type="text/babel"></script>
    <script src="{{ asset('js/components/notification.jsx') }}" type="text/babel"></script>
    <script src="http://localhost:2025/react.js"></script>
    <script src="http://localhost:2025/reactDom.js"></script>
    <script src="http://localhost:2025/babel.js"></script>
    <title>Iniciar Sesión</title>
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
                <Login notification={setNotification} />
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
