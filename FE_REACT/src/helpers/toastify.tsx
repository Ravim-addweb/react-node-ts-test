import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const toastify = ((text) => {
    toast.success(text, { 
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light"
    })
})

export default toastify;