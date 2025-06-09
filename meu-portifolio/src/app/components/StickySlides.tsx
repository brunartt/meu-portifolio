// components/StickySlides.tsx

export default function StickySlides() {
  return (
    <div className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
        <h2 className="text-4xl font-bold">The First Slide</h2>
        <p className="mt-2">Scroll down for next slide</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
        <h2 className="text-4xl font-bold">The Second Slide</h2>
        <p className="mt-2">Scroll down for next slide</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <h2 className="text-4xl font-bold">The Third Slide</h2>
        <p className="mt-2">That's all folks!</p>
      </div>
    </div>
  );
}
