const TriggerCards = ({ onTriggerClick }) => {
    return (
      <div className="flex space-x-4">
        <div
          onClick={onTriggerClick}
          className="bg-white shadow-md border p-4 cursor-pointer hover:bg-gray-100 rounded-lg"
        >
          <h3 className="font-bold text-lg">+ New Trigger</h3>
        </div>
  
        <div className="bg-white shadow-md border p-4 rounded-lg">
          <h3 className="font-bold text-lg">Send Message</h3>
          <p className="text-sm text-gray-500">Add a text</p>
        </div>
      </div>
    );
  };
  
  export default TriggerCards;
  