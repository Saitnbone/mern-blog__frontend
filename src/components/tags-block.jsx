// imports
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
import { SideBlock } from "./side-block";

// Tagged block component
export const TagsBlock = ({ items = [], isLoading = true }) => {
  return (
    <SideBlock>
      <List>
        {(isLoading ? [...Array(5)] : items || []).map((name, i) => {
          const key = isLoading ? `skeleton-${i}` : `tag-${name}`;
          return (
            <a
              key={key}
              style={{ textDecoration: "none", color: "black" }}
              href={`/tags/${name}`}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TagIcon />
                  </ListItemIcon>
                  {isLoading ? (
                    <Skeleton width={100} />
                  ) : (
                    <ListItemText primary={name} />
                  )}
                </ListItemButton>
              </ListItem>
            </a>
          );
        })}
      </List>
    </SideBlock>
  );
};
