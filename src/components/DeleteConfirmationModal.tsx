const DeleteConfirmationModal = ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => (
  <div className="absolute top-10 right-0 bg-white p-3 shadow-lg rounded-lg border z-10">
    <p className="text-sm text-gray-800 mb-2">Are you sure?</p>
    <div className="flex gap-2">
      <button onClick={onConfirm} className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition">
        Confirm
      </button>
      <button onClick={onCancel} className="px-3 py-1 bg-gray-300 text-gray-800 text-sm rounded hover:bg-gray-400 transition">
        Cancel
      </button>
    </div>
  </div>
);

export default DeleteConfirmationModal;