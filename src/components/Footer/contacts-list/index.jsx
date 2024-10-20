import { Box } from "@mui/material";
import { GitHubIcon } from "../../github-icon";
import { EmailIcon } from "../../email-icon";
import { Link as MuiLink } from "@mui/material";

export const ContactsList = () => { 
    return (<Box
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
      </Box>)
}