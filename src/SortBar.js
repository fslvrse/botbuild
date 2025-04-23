import React from "react";

function SortBar({ onSort }) {
  return (
    <div className="sort-bar">
      <label>Sort by: </label>
      <button onClick={() => onSort("health")}>Health</button>
      <button onClick={() => onSort("damage")}>Damage</button>
      <button onClick={() => onSort("armor")}>Armor</button>
    </div>
  );
}

export default SortBar;
