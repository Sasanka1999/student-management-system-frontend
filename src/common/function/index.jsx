import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  export const ConfirmLogout = (onConfirm) => {
    const navigate = useNavigate();
    return Swal.fire({
        title: 'Are you sure?',
        text: 'You will be logged out!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!',
        cancelButtonText: 'No, cancel',
    }).then((result) => {
        if (result.isConfirmed && onConfirm) {
            onConfirm(); 
        }
        navigate('/card')
    });
};
