
import HomeNavigation from "./components/navigation/home.navigation";



export default function Template( { children }: { children: React.ReactNode } ) {
    return (
        
            <div>
                <nav className="antialiased tracking-wide text-gray-600">
                    <HomeNavigation />
                </nav>
                <div>
                    { children }
                </div>
            </div>
    )
}