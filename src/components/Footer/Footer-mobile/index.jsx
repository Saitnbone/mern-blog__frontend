// import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Logo } from "../../logo";
import { GitHubIcon } from "../../github-icon";
import { EmailIcon } from "../../email-icon";
import { ContactsList } from "../contacts-list";

export const FooterMobile = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: "10px 0",
        backgroundColor: "background.default",
      }}
    >
      <Box
        component="div"
        sx={{
          margin: "auto",
          maxWidth: "1200px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Logo />
          <ContactsList />
          {/* <Box
            component="ul"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              marginInlineEnd: "26px",
            }}
          >
            <Box
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <GitHubIcon />
              <MuiLink
                href="https://github.com/Saitnbone"
                target="_blank"
                rel="noopener"
                sx={{
                  position: "relative",
                  color: "text.primary",
                  textDecoration: "none",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#4361ee",
                  },
                }}
              >
                https://github.com/Saitnbone
              </MuiLink>
            </Box>
            <Box
              component="li"
              sx={{
                display: "flex",
                alignItems: "start",
                gap: "10px",
              }}
            >
              <EmailIcon />
              <MuiLink
                href="mailto:golodinaleksandr@gmail.com"
                sx={{
                  position: "relative",
                  color: "text.primary",
                  textDecoration: "none",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#4361ee",
                  },
                }}
              >
                golodinaleksandr@gmail.com
              </MuiLink>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
  // return (
  //   <footer className={styles.footer}>
  //     <div>
  //       <div className={styles["footer-block"]}>
  //         <div className={styles.inner}>
  //           <div className={styles["logo-block"]}>
  //             <Link className={styles.logo} to="/">
  //               <div>AG Blog</div>
  //             </Link>
  //           </div>
  //           <ul className={styles["contacts"]}>
  //             <li className={styles["contacts__github"]}>
  //               <GitHubIcon />
  //               <a
  //                 href="https://github.com/Saitnbone"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className={styles["contacts-link"]}
  //               >
  //                 https://github.com/Saitnbone
  //               </a>
  //             </li>
  //             <li className={styles["contacts__email"]}>
  //               <EmailIcon />
  //               <a
  //                 href="mailto:golodinaleksandr@gmail.com"
  //                 className={styles["contacts-link"]}
  //               >
  //                 golodinaleksandr@gmail.com
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );
};
