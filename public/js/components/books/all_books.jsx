let libros_loaded = false;

function AllBooks({setShowLoader}) {

    async function getAllBooks() {
        setShowLoader(true);
        return await axios.get('http://localhost:2025/libros/all');
    }

    async function eliminarLibro(ISBN) {
        setShowLoader(true);
        await axios.delete(`http://localhost:2025/libros/${ISBN}`);
        setShowLoader(false);
    }

    async function newAIBook() {
        setShowLoader(true);
        return await axios.post('http://localhost:2025/libros/ai/new', {});
    }

    let [newBook, setNewBook] = React.useState({});
    let [allBooks, setAllBooks] = React.useState([]);
    if(!libros_loaded) {
        libros_loaded = true;
        getAllBooks().then(response => {
            console.log(response);
            setAllBooks(response.data);
            setShowLoader(false);
        });
    }
    const books_html = [];

    for(let i = 0; i < allBooks.length; i++) {
        const book = allBooks[i];
        books_html.push(
        <li key={Math.random()} 
            className="book-item list-group-item d-flex justify-content-between align-items-start">
            <div className="book-buttons h-100 me-2">
                <div className="book-button">
                    <span onClick={async () => {
                            await eliminarLibro(book.ISBN);
                            let libros = await getAllBooks();
                            setAllBooks(libros.data);
                            setShowLoader(false);
                        }} 
                        class="material-symbols-outlined">
                        delete
                    </span>
                    <span
                        onClick={async () => {
                            
                        }} 
                        class="material-symbols-outlined">
                        add
                    </span>
                </div>
            </div>
            <div className="me-auto">
                <div className="fw-bold">{book.title}</div>
                {book.name} {book.lastName} {book.secondLastName} - {book.year}
            </div>
            <span className="badge text-bg-primary rounded-pill">
                {book.pages} pages
            </span>
        </li>);
    }

    let [showModal, setShowModal] = React.useState(false);

    return <>
        <div className={ showModal ? 'show-modal' : "d-none" }>
            <div className="row h-100 w-100 align-items-center">
                <div className="col h-100 text-center">
                    <form className="new-book-form d-inline-block" onSubmit={async () => {
                        event.preventDefault();
                        let libro = await newAIBook();
                        setNewBook(libro.data);
                        setShowLoader(false);
                    }}>
                        <h3>Crear un nuevo libro</h3>
                        <button type="submit" className="new-book-ai mb-3">
                            Generar con IA
                        </button>
                        <div className="mb-3">
                            <input readOnly value={newBook.ISBN} type="text" className="form-control" id="ISBN" placeholder="El ISBN de tu libro" />
                        </div>
                        <div className="mb-3">
                            <input readOnly value={newBook.title} type="text" className="form-control" id="title" placeholder="El título de tu libro" />
                        </div>
                        <div className="mb-3">
                            <input readOnly value={newBook.autor_license} type="text" className="form-control" id="autor_license" placeholder="Licencia del autor" />
                        </div>
                        <div className="mb-3">
                            <input readOnly value={newBook.editorial} type="text" className="form-control" id="editorial" placeholder="La editorial de tu libro" />
                        </div>
                        <div className="mb-3">
                            <input readOnly value={newBook.pages} type="number" className="form-control" id="pages" placeholder="Número de páginas" />
                        </div>
                        <div className="mb-3">
                            <input readOnly value={newBook.year} type="number" className="form-control" id="year" placeholder="El año de tu libro" />
                        </div>
                        <div className="mb-3">
                            <input readOnly value={newBook.genre} type="text" className="form-control" id="genre" placeholder="El género de tu libro" />
                        </div>
                        <div className="mb-3">
                            <input readOnly value={newBook.language} type="text" className="form-control" id="language" placeholder="El idioma de tu libro" />
                        </div>
                        <div className="mb-3">
                            <input readOnly value={newBook.format} type="text" className="form-control" id="format" placeholder="El formato de tu libro" />
                        </div>
                        <div className="mb-3">
                            <input readOnly value={newBook.sinopsis} type="text" className="form-control" id="sinopsis" placeholder="La sinopsis de tu libro" />
                        </div>
                        <div className="mb-3">
                            <textarea readOnly value={newBook.content} type="text" className="form-control" id="content" placeholder="El contenido de tu libro"></textarea>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <div>
            <button onClick={ () => {
                setShowModal(true);
            }}
                className="btn btn-primary mt-3 mb-3">+ Nuevo Libro</button>
        </div>
        <ol className="list-group list-group-numbered">
            {books_html}
        </ol>
    </>
}