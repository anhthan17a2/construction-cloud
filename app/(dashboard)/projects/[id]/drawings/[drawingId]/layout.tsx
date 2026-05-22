// Drawing viewer is fullscreen — overlays app shell and project sidebar
export default function DrawingViewerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#1a1a2e]">
      {children}
    </div>
  );
}
