export function HomeBanner() {
  return (
    <div className="w-100 max-h-100 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-0 pb-[56.25%]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/video/ClothVideo.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-8 py-2 text-black rounded bg-slate-100"
            >
              남성
            </button>
            <button
              type="button"
              className="px-8 py-2 text-black rounded bg-slate-100"
            >
              여성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
