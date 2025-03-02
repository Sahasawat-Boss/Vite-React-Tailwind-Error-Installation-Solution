import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";

function HelloVite() {
    return (
        <main className="flex flex-col items-center justify-center text-center">
            {/* Title */}
            <p className="text-3xl text-green-500 font-semibold">
                Tailwind NPM Problem Solution in Vite + React 🚀
            </p>

            {/* Logos Section */}
            <div className="flex gap-6 p-6 items-center justify-center">
                <img src={viteLogo} alt="Vite Logo" className="w-10 h-10" />
                <img src={reactLogo} alt="React Logo" className="w-10 h-10" />
            </div>

            <p className="mt-4 text-lg text-red-500 font-semibold">
                Successfully Installed Tailwind After Facing Errors 🎉
            </p>


        </main>
    );
}

export default HelloVite;
