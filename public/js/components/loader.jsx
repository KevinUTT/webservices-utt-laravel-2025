function Loader({show}) {
    return <>
        <div className={show ? 'loader row align-items-center' : 'd-none'}>
            <div className="text-center col loader-text">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div>Espere un momento por favor...</div>
            </div>
        </div>
    </>
}