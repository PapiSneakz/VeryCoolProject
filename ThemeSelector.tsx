"use client";

import ThemeCard from '../components/ui/ThemeCard';

interface Element {
  id: number;
  type: "text" | "image" | "button" | "product";
  x: number;
  y: number;
  width: number;
  height: number;
  content: string;
}

interface Theme {
  title: string;
  description: string;
  imageUrl: string;
  elements: Element[];
}

const themes: Theme[] = [
  {
    title: "Fashionista",
    description: "Perfect for clothing & accessories",
    imageUrl: "/themes/fashionista.jpg",
    elements: [
      {
        id: 1,
        type: "text",
        x: 100,
        y: 50,
        width: 400,
        height: 60,
        content: "Welcome to Fashionista ✨",
      },
      {
        id: 2,
        type: "product",
        x: 150,
        y: 150,
        width: 300,
        height: 400,
        content: "Summer Dress",
      },
    ],
  },
  {
    title: "Tech Haven",
    description: "Minimalist electronics store",
    imageUrl: "/themes/tech.jpg",
    elements: [
      {
        id: 1,
        type: "text",
        x: 100,
        y: 50,
        width: 500,
        height: 60,
        content: "Smart Tech for Smart Living 💻",
      },
      {
        id: 2,
        type: "product",
        x: 200,
        y: 150,
        width: 300,
        height: 400,
        content: "Laptop Pro 15",
      },
    ],
  },
  {
    title: "Home Essentials",
    description: "Cozy home decor & furniture",
    imageUrl: "/themes/home.jpg",
    elements: [
      {
        id: 1,
        type: "text",
        x: 100,
        y: 50,
        width: 500,
        height: 60,
        content: "Make Your Home Cozy 🏡",
      },
      {
        id: 2,
        type: "product",
        x: 180,
        y: 150,
        width: 320,
        height: 420,
        content: "Comfort Sofa",
      },
    ],
  },
  {
    title: "Blank Canvas",
    description: "Start from scratch",
    imageUrl: "/themes/blank.jpg",
    elements: [],
  },
];

interface ThemeSelectorProps {
  onSelectTheme: (theme: Theme) => void;
}

export default function ThemeSelector({ onSelectTheme }: ThemeSelectorProps) {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose Your Theme</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <ThemeCard
            key={theme.title}
            title={theme.title}
            description={theme.description}
            imageUrl={theme.imageUrl}
            onSelect={() => onSelectTheme(theme)}
          />
        ))}
      </div>
    </div>
  );
}
