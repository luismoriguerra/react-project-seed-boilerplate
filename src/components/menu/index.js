//@ts-check
import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <nav className="px-5 py-5 space-x-5 text-right text-white bg-slate-800">
        <Link to="/admin">Admin</Link>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
