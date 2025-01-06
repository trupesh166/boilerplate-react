import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayouts = () => {
  return (
    <div className="flex">
      <div>
        <Outlet />
      </div>
      <div className="hidden md:block md:w-1/2 bg-blue-600">
        <div className="h-full flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Welcome to Our App</h2>
        </div>
      </div>
    </div>
  );
};
