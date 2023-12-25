import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function errorHandler(message) {
    Toastify({
        text : message,
        duration : 3000,
        gravity: 'top',
        position: 'right',
        close : true,
        style: {
            background: "#0a0a0a",
        },
    }).showToast();
}


export default errorHandler;