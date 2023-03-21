import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const ChatBoxThree = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Box
        sx={{
          border: "1px solid #F5F4F6",
          borderRadius: "14px",
        }}
        className="for-dark-chat-box"
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #F5F4F6",
            borderRadius: "10px",
            p: "15px",
          }}
          className="for-dark-chat-header"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src="/images/user3.png"
              alt="user"
              width="40px"
              height="40px"
              className="borRadius100"
            />
            <Box className="ml-1">
              <Typography as="h5" fontWeight="500">
                Bernard Langley
              </Typography>
              <Typography fontSize="12px" position="relative">
                <span className="active-status2 successBgColor"></span> Active
                Now
              </Typography>
            </Box>
          </Box>

          <Box>
            <IconButton
              size="small"
              sx={{ background: "#F2F6F8" }}
              className='ml-5px for-dark-button'
            >
              <VideocamIcon />
            </IconButton>

            <IconButton
              size="small"
              sx={{ background: "#F2F6F8" }}
              className='ml-5px for-dark-button'
            >
              <CallIcon />
            </IconButton>

            <IconButton
              size="small"
              sx={{ background: "#F2F6F8" }}
              className='ml-5px for-dark-button'
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Chat List */}
        <div className="chat-list-box">
          {/* Left Chat */}
          <Box
            sx={{
              display: "flex",
              maxWidth: "730px",
              mb: "20px",
            }}
          >
            <img
              src="/images/user3.png"
              alt="user"
              width="35px"
              height="35px"
              className="borRadius100"
            />
            <Box
              sx={{
                display: "flex",
              }}
              className="ml-1"
            >
              <Box>
                <Typography
                  sx={{
                    background: "#F5F6FA",
                    borderRadius: "0px 15px 15px 15px",
                    p: "14px 20px",
                    mb: "10px",
                  }}
                  className="dark-BG-101010"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pharetra ligula non varius curabitur etiam malesuada. Congue
                  eget luctus aliquet consectetur.
                </Typography>

                <Typography fontSize="12px">19:04</Typography>
              </Box>

              {/* Replay Dropdown */}
              <Box className="ml-1">
                <div className="right-replay-box">
                  <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>

                  <div className="hover-caption">
                    <List sx={{ display: "inline" }}>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "1px 15px" }}>
                          <ReplyIcon
                            fontSize="small"
                            sx={{ mt: "-4px" }}
                            className="mr-5px"
                          />
                          <ListItemText
                            primary="Reply"
                            primaryTypographyProps={{ fontSize: "12px" }}
                          />
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "1px 15px" }}>
                          <DeleteOutlineIcon
                            fontSize="small"
                            sx={{ mt: "-4px" }}
                            className="mr-5px"
                          />
                          <ListItemText
                            primary="Delete"
                            primaryTypographyProps={{ fontSize: "12px" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>

          {/* Right Chat */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              maxWidth: "730px",
              mb: "20px",
            }}
            className="ml-auto"
          >
            <Box
              sx={{
                display: "flex",
              }}
              className="ml-1"
            >
              {/* Replay Dropdown */}
              <Box>
                <div className="left-replay-box">
                  <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>

                  <div className="hover-caption">
                    <List sx={{ display: "inline" }}>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "1px 15px" }}>
                          <ReplyIcon
                            fontSize="small"
                            sx={{ mt: "-4px" }}
                            className="mr-5px"
                          />
                          <ListItemText
                            primary="Reply"
                            primaryTypographyProps={{ fontSize: "12px" }}
                          />
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "1px 15px" }}>
                          <DeleteOutlineIcon
                            fontSize="small"
                            sx={{ mt: "-4px" }}
                            className="mr-5px"
                          />
                          <ListItemText
                            primary="Delete"
                            primaryTypographyProps={{ fontSize: "12px" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Box>

              <Box className="mr-1">
                <Typography
                  sx={{
                    background: "#757FEF",
                    color: "#fff !important",
                    borderRadius: "15px 0 15px 15px",
                    p: "14px 20px",
                    mb: "10px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>

                <Typography fontSize="12px" textAlign="end">
                  19:04
                </Typography>
              </Box>
            </Box>

            <img
              src="/images/user5.png"
              alt="user"
              width="35px"
              height="35px"
              className="borRadius100"
            />
          </Box>

          {/* Left Chat */}
          <Box
            sx={{
              display: "flex",
              maxWidth: "730px",
              mb: "20px",
            }}
          >
            <img
              src="/images/user3.png"
              alt="user"
              width="35px"
              height="35px"
              className="borRadius100"
            />
            <Box
              sx={{
                display: "flex",
              }}
              className="ml-1"
            >
              <Box>
                <Typography
                  sx={{
                    background: "#F5F6FA",
                    borderRadius: "0px 15px 15px 15px",
                    p: "14px 20px",
                    mb: "10px",
                  }}
                  className="dark-BG-101010"
                >
                  Lorem ipsum dolor sit amet 🔥! Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </Typography>

                <Typography fontSize="12px">19:04</Typography>
              </Box>

              {/* Replay Dropdown */}
              <Box className="ml-1">
                <div className="right-replay-box">
                  <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>

                  <div className="hover-caption">
                    <List sx={{ display: "inline" }}>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "1px 15px" }}>
                          <ReplyIcon
                            fontSize="small"
                            sx={{ mt: "-4px" }}
                            className="mr-5px"
                          />
                          <ListItemText
                            primary="Reply"
                            primaryTypographyProps={{ fontSize: "12px" }}
                          />
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "1px 15px" }}>
                          <DeleteOutlineIcon
                            fontSize="small"
                            sx={{ mt: "-4px" }}
                            className="mr-5px"
                          />
                          <ListItemText
                            primary="Delete"
                            primaryTypographyProps={{ fontSize: "12px" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>

          {/* Right Chat */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              maxWidth: "730px",
              mb: "20px",
            }}
            className="ml-auto"
          >
            <Box
              sx={{
                display: "flex",
              }}
              className="ml-1"
            >
              {/* Replay Dropdown */}
              <Box>
                <div className="left-replay-box">
                  <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>

                  <div className="hover-caption">
                    <List sx={{ display: "inline" }}>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "1px 15px" }}>
                          <ReplyIcon
                            fontSize="small"
                            sx={{ mt: "-4px" }}
                            className="mr-5px"
                          />
                          <ListItemText
                            primary="Reply"
                            primaryTypographyProps={{ fontSize: "12px" }}
                          />
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "1px 15px" }}>
                          <DeleteOutlineIcon
                            fontSize="small"
                            sx={{ mt: "-4px" }}
                            className="mr-5px"
                          />
                          <ListItemText
                            primary="Delete"
                            primaryTypographyProps={{ fontSize: "12px" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Box>

              <Box className="mr-1">
                <Typography
                  sx={{
                    background: "#757FEF",
                    color: "#fff !important",
                    borderRadius: "15px 0 15px 15px",
                    p: "14px 20px",
                    mb: "10px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit
                </Typography>

                <Typography fontSize="12px" textAlign="end">
                  19:04
                </Typography>
              </Box>
            </Box>

            <img
              src="/images/user5.png"
              alt="user"
              width="35px"
              height="35px"
              className="borRadius100"
            />
          </Box>

          {/* Left Chat */}
          <Box
            sx={{
              display: "flex",
              maxWidth: "730px",
              mb: "20px",
            }}
          >
            <img
              src="/images/user3.png"
              alt="user"
              width="35px"
              height="35px"
              className="borRadius100"
            />
            <Box
              sx={{
                display: "flex",
              }}
              className="ml-1"
            >
              <Box>
                <Typography
                  sx={{
                    background: "#F5F6FA",
                    borderRadius: "0px 15px 15px 15px",
                    p: "14px 20px",
                    mb: "10px",
                  }}
                  className="dark-BG-101010"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </Typography>

                <Typography fontSize="12px">19:04</Typography>
              </Box>

              {/* Replay Dropdown */}
              <Box className="ml-1">
                <div className="right-replay-box">
                  <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>

                  <div className="hover-caption">
                    <List sx={{ display: "inline" }}>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "1px 15px" }}>
                          <ReplyIcon
                            fontSize="small"
                            sx={{ mt: "-4px" }}
                            className="mr-5px"
                          />
                          <ListItemText
                            primary="Reply"
                            primaryTypographyProps={{ fontSize: "12px" }}
                          />
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "1px 15px" }}>
                          <DeleteOutlineIcon
                            fontSize="small"
                            sx={{ mt: "-4px" }}
                            className="mr-5px"
                          />
                          <ListItemText
                            primary="Delete"
                            primaryTypographyProps={{ fontSize: "12px" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </div>

        {/* Footer */}
        <Box
          sx={{
            background: "#F5F6FA",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            p: "15px",
            position: "relative",
          }}
          className="dark-BG-101010"
        >
          <Box>
            <IconButton
              size="small"
              sx={{ background: "#F2F6F8" }}
              className='mr-5px for-dark-button'
            >
              <VideocamIcon />
            </IconButton>

            <IconButton
              size="small"
              sx={{ background: "#F2F6F8" }}
              className='mr-5px for-dark-button'
            >
              <CallIcon />
            </IconButton>
          </Box>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              flex: "auto",
            }}
            className="pr-60px"
          >
            <TextField
              fullWidth
              id="typeSomething"
              label="Type Something..."
              name="typeSomething"
              autoComplete="typeSomething"
              InputProps={{
                style: {
                  borderRadius: 100,
                  background: "#fff",
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                textTransform: "capitalize",
                borderRadius: "100%",
                fontWeight: "500",
                fontSize: "16px",
                padding: "0",
                minWidth: "44px",
                minHeight: "44px",
                position: "absolute",
                top: "22px",
                color: "#fff !important"
              }}
              className="right-20px"
            >
              <SendIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChatBoxThree;
