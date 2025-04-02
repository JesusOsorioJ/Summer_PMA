const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <button onClick={onClose} className="text-red-500 mb-4">Cerrar</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
