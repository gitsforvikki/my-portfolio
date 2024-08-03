import "./style.css";

export const MenuList = () => {
  return (
    <main className="container mx-auto px-2">
      <ul className="" id="menuList">
        <li className=" text-primary " id="menuListItem">
          Home
        </li>
        <li id="menuListItem">About</li>
        <li id="menuListItem">Resume</li>
        <li id="menuListItem"> Contact</li>
      </ul>
    </main>
  );
};
