const NavigationItem = ({ title, onShowHeader }) => {
  const displayHeader = () => {
    onShowHeader(title.toLowerCase());
  };

  return (
    <li onMouseEnter={displayHeader}>
      {title}
      <i className="fa-solid fa-angle-down"></i>
    </li>
  );
};

export default NavigationItem;
