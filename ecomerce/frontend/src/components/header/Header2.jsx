import { ExpandMore, ShoppingCartOutlined } from '@mui/icons-material'
import { alpha, Badge, Container, IconButton, InputBase, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Stack, styled, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
const options = ["All Categories", "CAR", "Clothes", "Electronics"];

const Search = styled('div')(({ theme }) => ({ flexGrow : 0.4,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
   [theme.breakpoints.down('sm')]: {
    width: 'auto', // Allow the width to adjust more naturally on small screens
  },
  '&:hover': {
    border : "1px  solid #2B3445"
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '380px',
    [theme.breakpoints.down("sm")] : {
      marginLeft : theme.spacing(3),
      width : "300px",
    }
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme()
  return (
    <Container sx={{ my: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Left part: logo */}
      <Stack alignItems="center" direction="row" spacing={1}>
        <ShoppingCartOutlined />
        <Typography variant="h6">E-commerce</Typography>
      </Stack>

      {/* Center part: category + search */}
      <Stack direction="row" alignItems="center" spacing={0}>
        {/* Category Selector */}
       
        {/* Search */}
        <Search sx={{ borderRadius: ' 22px'  ,  bgcolor : theme.palette.favColor.main}}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={`Search in ${options[selectedIndex]}…`}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <List component="nav" aria-label="category-selector" sx={{ p: 0 }}>
        <ListItem
  aria-expanded={open ? "true" : undefined}
  onClick={handleClickListItem}
  sx={{
    cursor: 'pointer',
    '&:hover': {
      
      
    }
  }}
>

            <ListItemText primary={options[selectedIndex]} sx={{ textAlign: 'center' }} />
            <ExpandMore fontSize="16px"  />
          </ListItem>
        </List>

        {/* Menu items */}
        <Menu
          id="category-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'category-button',
            role: 'listbox',
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Stack>

      {/* Right part: profile + cart */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </StyledBadge>
        </IconButton>
      </Stack>
    </Container>
  );
}