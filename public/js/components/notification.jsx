function Notification({ notification, setNotification }) {
    return <>
        <div className="toast-container position-fixed notification">
            <div className={ notification.show ? "toast show" : "toast"} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." className="rounded me-2" alt="..." />
                        <strong className="me-auto">{notification.title}</strong>
                        <small className="text-body-secondary">just now</small>
                        <button type="button" className="btn-close" aria-label="Close" onClick={
                            () => {
                                const copia = Object.assign({}, notification);
                                copia.show = false;
                                setNotification(copia);
                            }
                        
                        }></button>
                </div>
                <div className="toast-body">
                    {notification.text}
                </div>
            </div>
        </div>
    </>
}