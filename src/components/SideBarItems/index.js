import { useHistory } from "react-router";
const SideBarItem = ({ item }) => {
  const history = useHistory();

  const redirectToPage = () => {
    history.push({
      pathname: `/site-description/${item.site_id}`,
      state: {
        site: item,
      },
    });
  };
  return (
    <li
      className="sidebar-main-title"
      onClick={redirectToPage}
      style={{ cursor: "pointer" }}
    >
      <div>
        <h6 className="lan-1">{item.site_name}</h6>
      </div>
    </li>
  );
};

export default SideBarItem;
