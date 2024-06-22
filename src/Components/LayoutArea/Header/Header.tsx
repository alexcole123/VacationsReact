import { UserMenu } from "../../UserArea/UserMenu/UserMenu";
import "./Header.css";

export function Header(): JSX.Element {
    return (
        <div className="Header">
            <UserMenu />
			<h1 className="split-color-text">🏖 Vacation Stats 🏝</h1>
        </div>
    );
}
