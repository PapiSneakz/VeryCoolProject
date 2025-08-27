"use client";

import Image from "next/image";

type ThemeCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  onSelect: () => void;
};

export default function ThemeCard({ title, description, imageUrl, onSelect }: ThemeCardProps) {
  return (
    <div
      onClick={onSelect}
      className="cursor-pointer border rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white"
    >
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
