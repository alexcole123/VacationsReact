import { Copyrights } from "../Copyrights/Copyrights";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { Routing } from "../Routing/Routing";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header>
                <Header />
            </header>


            <main>
                <Routing />
            </main>

            <aside>
                < Menu />
            </aside>

            <footer>
                <Copyrights />
            </footer>


        </div>
    );
}
