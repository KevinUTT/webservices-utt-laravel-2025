function PracticaForm() {
    let [x, setX] = React.useState(0);
    let [y, setY] = React.useState(0);
    let [z, setZ] = React.useState(0);

    let [divs, setDivs] = React.useState([]);
    //traerPracticas();

    function traerPracticas() {
        axios.get('http://localhost:2025/practica/all')
        .then((response) => {
            let _divs = [];
            for(let i = 0; i< response.data.length; i++) {
                const element = response.data[i];
                _divs.push(
                    <div>
                        {element.x} - {element.y} - {element.z}
                        <span onClick={async () => {
                            await axios.delete(`http://localhost:2025/practica/${element.x}`);
                            traerPracticas();
                        }}>BORRAR</span>
                    </div>
                )
            }
            setDivs(_divs);
        });
    }

    async function registrarPractica(event) {
        event.preventDefault();

        await axios.post('http://localhost:2025/practica/new', {
            x: x,
            y: y,
            z: z
        });

        traerPracticas();
    }

    return <>
        <form onSubmit={ () => { registrarPractica(event)} }>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="x" className="col-form-label">Valor de X:</label>
                </div>
                <div className="col-12">
                    <input value={x} onChange={() => { setX(event.target.value) }} type="text" name="x" id="x" className="form-control" aria-describedby="nombreTip" />
                </div>
            </div>
            <hr />
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="y" className="col-form-label">Valor de Y:</label>
                </div>
                <div className="col-12">
                    <input value={y} onChange={() => { setY(event.target.value) }} type="text" name="y" id="y" className="form-control" aria-describedby="nombreTip" />
                </div>
            </div>
            <hr />
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="z" className="col-form-label">Valor de Z:</label>
                </div>
                <div className="col-12">
                    <input value={z} onChange={() => { setZ(event.target.value) }} type="text" name="z" id="z" className="form-control" aria-describedby="nombreTip" />
                </div>
            </div>
            <hr />
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Registrar</button>
            </div>
        </form>

        <section>
            {divs}
        </section>
    </>
}