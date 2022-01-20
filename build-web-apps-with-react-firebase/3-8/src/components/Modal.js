import "./Modal.css";
import ReactDOM from "react-dom";

export default function Modal({ children, handleClose, isSalesModal }) {
 return ReactDOM.createPortal((
  <div className="modal-backdrop">
   <div className="modal-content"
    style={{
     border: "4px solid", 
     borderColor: isSalesModal ? "#ff4500" : "#00bfff",
     textAlign: "center",
    }}>
    {children}
    <button 
    className={isSalesModal ? "sales-btn": ""} 
    onClick={handleClose}>Close</button>
   </div>
  </div>
 ), document.body);
}
