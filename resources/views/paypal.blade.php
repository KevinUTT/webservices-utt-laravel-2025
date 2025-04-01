<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
    <script src="https://www.paypal.com/sdk/js?currency=MXN&client-id=AZWBVMe0O8H1vsIiHrn4axk_SqaUm1TOSKYI-gneuKpfHWL-2ymKt8T4jMTPiWSNSpIqX-BGyqs0rbZP&components=buttons"></script>
    <script src="{{ asset('js/boostrap.js') }}"></script>
    <script src="{{ asset('js/axios.js') }}"></script>
    <script src="{{ asset('js/components/menu.jsx') }}" type="text/babel"></script>
    <script src="{{ asset('js/components/loader.jsx') }}" type="text/babel"></script>
    <script src="{{ asset('js/components/notification.jsx') }}" type="text/babel"></script>
    <script src="http://localhost:2025/react.js"></script>
    <script src="http://localhost:2025/reactDom.js"></script>
    <script src="http://localhost:2025/babel.js"></script>
    <title>Registro de usuario</title>
</head>

<body>
    <main id="app" class="container">
    </main>
    <div id="paypal"></div>

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
                <Notification notification={notification} setNotification={setNotification}/>
                <Loader show={showLoader} />
            </div>
        }

        const container = document.getElementById('app');
        const root = ReactDOM.createRoot(container);
        root.render(<App />);
    </script>
    <script src="{{ asset('js/components/paypal.js') }}" type="text/javascript"></script>
</body>

</html>
