import React from "react";

export function Button({
  children,
  onClick,
  variant = "default",
  size = "base"
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "destructive";
  size?: "base" | "sm";
}) {
  const base = "px-4 py-2 rounded text-white font-semibold";
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700",
    destructive: "bg-red-600 hover:bg-red-700"
  };
  const sizes = {
    base: "text-base",
    sm: "text-sm px-3 py-1"
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
}
