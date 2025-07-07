const TriggerDetailsPanel = ({ trigger }) => {
    return (
      <div>
        <h3 className="font-bold text-xl mb-4">Trigger Details</h3>
        <p className="text-gray-700 mb-2">Selected Trigger:</p>
        <p className="text-blue-600 font-semibold">{trigger}</p>
  
        {/* Mocked list of posts for now */}
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Choose Post or Reel:</p>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="border rounded-md h-[100px] bg-gray-100 flex items-center justify-center text-gray-600"
              >
                Post #{item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TriggerDetailsPanel;
  