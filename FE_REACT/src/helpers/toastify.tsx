import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const toastifyError = ((text: string) => {
    toast.error(text, { 
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light"
    })
})

export const toastifySuccess = ((text: string) => {
    toast.success(text, { 
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light"
    })
})