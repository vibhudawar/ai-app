"use client";
import { Copy } from "lucide-react";
import React from "react";
import copy from "clipboard-copy";

function DiscountBadge(props: { code: string; text: string }) {
  const handleCopyClick = () => {
    copy(props.text);
  };

  return (
    <div
      className="h-24 bg-gradient-to-r from-[#E4F6F5] to-[#FDFEFE] flex p-3 rounded-md gap-10 relative"
      id="main-div"
    >
      <div className="absolute bg-white rounded-full size-10 translate-x-24 -translate-y-[2.2rem]"></div>
      <div className="absolute bg-white rounded-full size-10 translate-x-24 translate-y-[5.7rem]"></div>

      <div
        id="left-div"
        className="flex justify-center items-center text-center p-4"
        style={{
          borderColor: "#04A599",
          borderRightStyle: "dotted",
        }}
      >
        <p className="text-[#04A599] font-bold">DISCOUNT</p>
      </div>

      <div id="right-div flex items-center">
        <div className="gap-2 flex items-center" id="coupon-code">
          <p className="font-semibold" id="copyText">
            {props.code}
            CS250
          </p>
          <Copy onClick={handleCopyClick} />
        </div>
        <p className="text-[#04A599] font-medium" id="below-text">
          {props.text}
          FLAT 250 OFF PURCHASE ABOVE 1999
        </p>
      </div>
    </div>
  );
}

export default DiscountBadge;
