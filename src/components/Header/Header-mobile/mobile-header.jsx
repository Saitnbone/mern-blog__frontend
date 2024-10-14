import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleElement } from "../../../utils/redux/slices/dropDown-elements";
import { Link } from "react-router-dom";
import { ProfileIcon } from "../../ProfileIcon";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./Header-mobile.module.scss";

export const MobileHeader = ({ menuId }) => {
  const dispatch = useDispatch();

  const handleElement = () => {
    dispatch(toggleElement(menuId));
    console.log("Dispatched action with menuId:", menuId);
  };
  return (
    <header className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>AG Blog</div>
          </Link>
          <div className={styles.buttons}>
            <Link to="/add-post">
              <EditIcon sx={{ fontSize: 27, color: "#4361ee" }} />
            </Link>
            <span>
              <ProfileIcon onClick={handleElement} />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};
