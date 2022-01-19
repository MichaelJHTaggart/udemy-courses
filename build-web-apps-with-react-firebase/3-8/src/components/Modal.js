import "./Modal.css";

export default function Modal({ children, handleClose }) {
 return (
  <div className="modal-backdrop">
   <div className="modal-content">
    {children}
    <button onClick={handleClose}>Close</button>
   </div>
  </div>
)
}
