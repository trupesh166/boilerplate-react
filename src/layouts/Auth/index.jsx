import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayouts = () => {
  return (
    <div className="flex">
      <div>
        <Outlet />
      </div>
      <div>Right side</div>
    </div>
  );
};
