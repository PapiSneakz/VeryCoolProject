"use client";

import { useState } from "react";
import ThemeSelector from "./ThemeSelector";


interface Element {
  id: number;
  type: "text" | "image" | "button" | "product";
  x: number;
  y: number;
  width: number;
  height: number;
  content: string;
}

export default function BuilderPage() {
  const [themeSelected, setThemeSelected] = useState(false);
  const [elements, setElements] = useState<Element[]>([]);

  if (!themeSelected) {
    return (
      <ThemeSelector
        onSelectTheme={(theme) => {
          setElements(theme.defaults || []);
          setThemeSelected(true);
        }}
      />
    );
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 p-4 bg-gray-100 border-r">
        <h2 className="font-bold mb-4">Add Elements</h2>
        <button
          className="block w-full mb-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() =>
            setElements([
              ...elements,
              {
                id: Date.now(),
                type: "text",
                x: 50,
                y: 50,
                width: 200,
                height: 100,
                content: "New Text",
              },
            ])
          }
        >
          Add Text
        </button>
        <button
          className="block w-full mb-2 bg-green-500 text-white px-4 py-2 rounded"
          onClick={() =>
            setElements([
              ...elements,
              {
                id: Date.now(),
                type: "button",
                x: 50,
                y: 200,
                width: 150,
                height: 50,
                content: "Click Me",
              },
            ])
          }
        >
          Add Button
        </button>
        <button
          className="block w-full mb-2 bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() =>
            setElements([
              ...elements,
              {
                id: Date.now(),
                type: "product",
                x: 100,
                y: 300,
                width: 200,
                height: 250,
                content: "Sample Product",
              },
            ])
          }
        >
          Add Product
        </button>
      </div>

      {/* Canvas */}
      <div className="flex-1 relative bg-white min-h-screen">
        {elements.map((el) => (
          <div
            key={el.id}
            className="absolute border rounded p-2 bg-white shadow"
            style={{
              top: el.y,
              left: el.x,
              width: el.width,
              height: el.height,
            }}
          >
            {el.type === "text" && (
              <p className="text-lg font-semibold">{el.content}</p>
            )}
            {el.type === "button" && (
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {el.content}
              </button>
            )}
            {el.type === "image" && (
              <img
                src={el.content}
                alt="Element"
                className="w-full h-full object-cover rounded"
              />
            )}
            {el.type === "product" && (
              <div className="border rounded-lg p-4 bg-white shadow-md w-full h-full flex flex-col items-center justify-center">
                <img
                  src="/themes/product-placeholder.jpg"
                  alt="Product"
                  className="w-20 h-20 object-cover mb-2"
                />
                <h4 className="font-semibold text-center">{el.content}</h4>
                <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                  Buy Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
