import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center items-center w-full border-b border-gray-300 bg-white py-6 sticky top-0">
      <div className="flex gap-4">
        <h1 className="text-3xl font-bold text-center">Minty Cafe Menü</h1>
        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
      </div>
    </div>
  );
}
