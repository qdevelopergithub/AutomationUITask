const triggers = [
    "User comments on your Post or Reel",
    "User replies to your Story",
    "User sends a message",
    "User clicks an Instagram Ad",
    "User comments on your Live",
  ];
  
  const TriggerModal = ({ isOpen, onClose, onSelect }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
          <h2 className="text-xl font-bold mb-4">Start automation when...</h2>
          {triggers.map((trigger, idx) => (
            <button
              key={idx}
              onClick={() => onSelect(trigger)}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 border-b last:border-none"
            >
              {trigger}
            </button>
          ))}
          <button onClick={onClose} className="mt-4 text-sm text-red-500">
            Cancel
          </button>
        </div>
      </div>
    );
  };
  
  export default TriggerModal;
  