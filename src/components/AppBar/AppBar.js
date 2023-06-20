import { useAuth } from "hooks";
import css from "./AppBar.module.css";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.wrapper}>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </header>
  );
};