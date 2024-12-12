import React, { useState } from "react";

export default function Header() {
  const [isopen, setIsopen] = useState(false);

  return (
    <div className="flex gap-10 bg-black justify-center text-white h-10 items-center">
      <input type="text" />
      <div>2024/06/12</div>

      <div onClick={() => setIsopen(!isopen)}>
        1 adult . 2 children . 1 room
      </div>

      {isopen && (
        <div className="absolute z-10 top-10  overflow-auto min-w-[150px]  bg-green-400">
          <ListItem />
        </div>
      )}

      <button>Search</button>
    </div>
  );
}

function ListItem() {
  return (
    <>
      <ul role="menu" className=" bg-red-300 flex justify-center gap-3  ">
        <li>adult</li>
        <li>+</li>
        <li>1</li>
        <li>-</li>
      </ul>

      <ul role="menu" className=" bg-red-300 flex justify-center gap-3  ">
        <li>adult</li>
        <li>+</li>
        <li>1</li>
        <li>-</li>
      </ul>

      <ul role="menu" className=" bg-red-300 flex justify-center gap-3  ">
        <li>adult</li>
        <li>+</li>
        <li>1</li>
        <li>-</li>
      </ul>
    </>
  );
}
