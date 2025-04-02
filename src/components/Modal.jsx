const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000070]">
      <div className="bg-white p-6 rounded shadow-md">
        <button onClick={onClose} className="w-full mb-4 text-right text-red-400">Close</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
