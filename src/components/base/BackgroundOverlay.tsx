export default function BackgroundOverlay({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="z-50 top-0 left-0 flex items-center justify-center fixed w-screen h-screen bg-[#000000AA]">
            {children}
        </div>
    )
}