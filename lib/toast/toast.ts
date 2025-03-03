  import { ToastContainer, ToastOptions, toast } from 'react-toastify';


  export class Toast{  
        showToast = (type: string, toastMessage: string)=>{
          const toastOptions: ToastOptions = {

            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            } 
          type == 'success'? toast.success(toastMessage, toastOptions)
          
          : toast.error(toastMessage, toastOptions)
            
      }
  }