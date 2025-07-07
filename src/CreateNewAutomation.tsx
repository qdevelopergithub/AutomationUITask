import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
} from "react-flow-renderer";
import Modal from "react-modal";
import "react-flow-renderer/dist/style.css";
import SidebarIcons from "./component/sidebarIcons";
import { RiDeleteBin5Line } from "react-icons/ri";

const customStyles:any = {
  content: {
    width: "400px",
    margin: "auto",
    padding: "20px",
    borderRadius: "12px",
    zIndex: 1000,
    position: "relative",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

const initialEdges = [{ id: "e1-2", source: "1", target: "2", animated: true }];

export default function AutomationBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDeleteNode = (nodeId:any) => {
    setNodes((prev) => prev.filter((n) => n.id !== nodeId));
    setEdges((prev) => prev.filter((e) => e.source !== nodeId && e.target !== nodeId));
  };

  const handleTriggerSelect = (triggerText:any) => {
    const updatedNodes = nodes.map((node) =>
      node.id === "1"
        ? {
            ...node,
            data: {
              ...node.data,
              label: (
                <div className="relative text-[10px]">
                  <div className="absolute -top-2 -right-2 z-10">
                    <button
                      onClick={() => handleDeleteNode("1")}
                      className="bg-white border rounded-full px-1 text-xs text-red-500 shadow hover:bg-red-100"
                    >
                    <RiDeleteBin5Line />

                    </button>
                  </div>
                  <strong>{triggerText}</strong>
                  <div
                    onClick={openModal}
                    style={{
                      color: "#3478f6",
                      marginTop: "8px",
                      border: "1px dotted #3478f6",
                      cursor: "pointer",
                    }}
                  >
                    Change Trigger
                  </div>
                </div>
              ),
            },
          }
        : node
    );
    setNodes(updatedNodes);
    setIsOpen(false);
    setIsSidebarOpen(true);
  };

  const handleAddNode = () => {
    const id = (nodes.length + 1).toString();
    const newNode = {
      id,
      position: { x: Math.random() * 250 + 200, y: Math.random() * 200 + 100 },
      data: {
        label: (
          <div className="relative">
            <div className="absolute -top-2 -right-2 z-10">
              <button
                onClick={() => handleDeleteNode(id)}
                className="bg-white border rounded-full px-1 text-xs text-red-500 shadow hover:bg-red-100"
              >
              <RiDeleteBin5Line />

              </button>
            </div>
            <strong>New Node {id}</strong>
          </div>
        ),
      },
      type: "default",
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const onConnect = useCallback((params:any) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)), []);

  useEffect(() => {
    setNodes([
      {
        id: "1",
        position: { x: 100, y: 100 },
        data: {
          label: (
            <div className="relative text-[8px] text-gray-400">
              <div className="absolute -top-2 -right-2 z-10">
                <button
                  onClick={() => handleDeleteNode("1")}
                  className="bg-white border rounded-full px-1 text-xs text-red-500 shadow hover:bg-red-100"
                >
                <RiDeleteBin5Line />

                </button>
              </div>
              <p>When…</p>
              <p>A Trigger is an event that starts your Automation.</p>
              <p>Click to add a Trigger</p>
              <div
                onClick={openModal}
                style={{
                  color: "#3478f6",
                  marginTop: "8px",
                  border: "1px dotted #3478f6",
                  cursor: "pointer",
                }}
              >
                + New Trigger
              </div>
            </div>
          ),
        },
        type: "default",
      },
      {
        id: "2",
        position: { x: 400, y: 100 },
        data: {
          label: (
            <div className="relative">
              <div className="absolute -top-2 -right-2 z-10">
                <button
                  onClick={() => handleDeleteNode("2")}
                  className="bg-white border rounded-full px-1 text-xs text-red-500 shadow hover:bg-red-100"
                >
                <RiDeleteBin5Line />

                </button>
              </div>
              <div className="flex gap-2 items-start">
                <img src="./insta.jpg" alt="" className="w-7 h-7" />
                <div className="text-[10px]">
                  <p>Instagram</p>
                  <p>Send Message</p>
                </div>
              </div>
              <button
                onClick={() => alert("Add Text button clicked!")}
                className="mt-2 px-3 py-1 text-gray-400 rounded border-dotted border-gray-400 border-[1px]"
              >
                Add Text
              </button>
            </div>
          ),
        },
        type: "default",
      },
    ]);
  }, []);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-16 bg-white border-r">
        <SidebarIcons />
      </div>

      {isSidebarOpen && (
        <div className="w-[300px] bg-white shadow-md border-r overflow-auto p-4 z-10">
          <h2 className="text-md font-semibold mb-3">Step 1 of 3</h2>
          <p className="text-sm mb-2">Which Post or Reel do you want to use in automation?</p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="border rounded overflow-hidden">
                <img src={`https://placehold.co/100x100?text=Reel+${idx + 1}`} alt={`Reel ${idx + 1}`} />
              </div>
            ))}
          </div>
          <div className="space-y-2 mb-4">
            <button className="w-full border rounded px-3 py-1 text-sm">All Posts or Reels</button>
            <button className="w-full border rounded px-3 py-1 text-sm">Next Post or Reel</button>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded"
            onClick={() => setIsSidebarOpen(false)}
          >
            Continue
          </button>
        </div>
      )}

      <div className="flex-1 relative">
        <div className="absolute top-4 right-6 z-10">
          <button
            onClick={handleAddNode}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            + Add Node
          </button>
        </div>

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <div className="text-sm">
          <h2 className="text-lg font-semibold mb-4">Start automation when...</h2>
          <div className="flex gap-4">
            <div className="w-32 border-r pr-2">
              <div className="mb-2 text-[#ef3f7d] font-medium cursor-pointer">Instagram</div>
              <div className="text-gray-400 cursor-not-allowed">Contact Events</div>
            </div>
            <div className="flex-1 space-y-2">
              <input
                type="text"
                placeholder="Search in Instagram"
                className="w-full border px-3 py-1 rounded mb-3"
              />
              {["User comments on your Post or Reel", "User replies to your Story", "User sends a message", "User clicks an Instagram Ad", "User comments on your Live"].map((text, index) => (
                <div
                  key={index}
                  onClick={() => handleTriggerSelect(text)}
                  className="p-3 border rounded hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                >
                  <span role="img" aria-label="instagram">📸</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
