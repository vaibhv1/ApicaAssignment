import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import "./styles/SummaryCard.css";
const SummaryCard = () => {
  return (
    <div id="summary-cards">
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          padding: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          className:"summary-card",
          width: "400px",
          marginLeft:2,
          height:"100px"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              backgroundColor: "#ffeced",
              borderRadius: "50%",
              padding: 1,
              marginRight: 2,
            }}
          >
            <ShoppingBagOutlinedIcon fontSize="large" />
          </Box>
          <Box>
            <Typography variant="h6" fontSize="15px" color="text.secondary">
              All Orders
            </Typography>
            <Typography variant="h6"  fontSize="15px" fontWeight="normal">
              450
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ textAlign: "center", marginRight: 4 }}>
            <Typography variant="h6" fontSize="15px" color="text.secondary">
              Pending
            </Typography>
            <Typography variant="h6" fontSize="15px" fontWeight="normal">
              5
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontSize="15px" color="text.secondary">
              Completed
            </Typography>
            <Typography variant="h6" fontSize="15px" fontWeight="normal">
              320
            </Typography>
          </Box>
        </Box>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </Card>
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          padding: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          className:"summary-card",
          width: "400px",
          marginLeft:3,
          height:"100px",
          fontSize:"15px"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              backgroundColor: "#ffeced",
              borderRadius: "50%",
              padding: 1,
              marginRight: 2,
            }}
          >
            <ShoppingBagOutlinedIcon fontSize="large" />
          </Box>
          <Box>
            <Typography variant="h6" fontSize="15px" color="text.secondary">
              Canceled
            </Typography>
            <Typography variant="h6" fontSize="15px" fontWeight="normal">
              30 <Typography fontSize="13px" display="inline" color="red">-20%</Typography>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ textAlign: "center", marginRight: 4 }}>
            <Typography variant="h6" fontSize="15px" color="text.secondary">
              Returned
            </Typography>
            <Typography variant="h6" fontSize="15px" fontWeight="normal">
              20
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontSize="15px" color="text.secondary">
              Damaged
            </Typography>
            <Typography variant="h6" fontSize="15px" fontWeight="normal">
              5
            </Typography>
          </Box>
        </Box>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </Card>
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          padding: 2,
          marginLeft:3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          className:"summary-card",
          width: "400px",
          height:"100px"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "end"}}>
          <Box
            sx={{
              backgroundColor: "#ffeced",
              borderRadius: "50%",
              padding: 1,
              marginRight: 2,
            }}
          >
            < ShoppingCartOutlinedIcon fontSize="large" />
          </Box>
          <Box>
            <Typography variant="h6" fontSize="15px" color="red">
                Abandoned
            </Typography>
            <Typography variant="h6" fontSize="15px" fontWeight="normal">
              20% <Typography variant="h6" fontSize="15px" display="inline"fontWeight="light" color="darkgreen" >
                +0.00%
            </Typography>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ textAlign: "center", marginRight: 4 }}>
            <Typography variant="h6" fontSize="15px" marginLeft="15px" color="text.secondary">
              Pending
            </Typography>
            <Typography variant="h6"  fontSize="15px" marginLeft="15px" fontWeight="normal">
              5
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontSize="15px" color="text.secondary">
              Completed
            </Typography>
            <Typography variant="h6" fontSize="15px" fontWeight="normal">
              320
            </Typography>
          </Box>
        </Box>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </Card>
    </div>
  );
};

export default SummaryCard;
