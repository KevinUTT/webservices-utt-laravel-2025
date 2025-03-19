<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/books.css') }}" rel="stylesheet">
    <script src="{{ asset('js/boostrap.js') }}"></script>
    <script src="{{ asset('js/axios.js') }}"></script>
    <script src="{{ asset('js/components/books/all_books.jsx') }}" type="text/babel"></script>
    <script src="{{ asset('js/components/menu.jsx') }}" type="text/babel"></script>
    <script src="{{ asset('js/components/loader.jsx') }}" type="text/babel"></script>
    <script src="{{ asset('js/components/notification.jsx') }}" type="text/babel"></script>
    <script src="http://localhost:2025/react.js"></script>
    <script src="http://localhost:2025/reactDom.js"></script>
    <script src="http://localhost:2025/babel.js"></script>
    <title>Biblioteca</title>
</head>

<body>
    <main id="app" class="container">
        
    </main>

    <script type="text/babel"> 
        let libros_loaded = false;

        function App() {

            let [showLoader, setShowLoader] = React.useState(true);
            let [notification, setNotification] = React.useState({
                title: "Ejemplo",
                text: "texto",
                type: "x",
                show: false
            });        
            
            return <div>
                <Menu />
                <h2>Todos los libros</h2>
                <div>
                    <AllBooks setShowLoader={setShowLoader} />
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
