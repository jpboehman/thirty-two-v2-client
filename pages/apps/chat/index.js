import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ChatBox from "@/components/Apps/Chat/ChatBox";
import ChatBoxTwo from "@/components/Apps/Chat/ChatBoxTwo";
import ChatBoxThree from "@/components/Apps/Chat/ChatBoxThree";

// Search field style
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 100,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 0,
  marginLeft: 0,
  marginBottom: 20,
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    marginRight: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "#757FEF",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: "0",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "5",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    backgroundColor: "#F5F7FA",
    borderRadius: "30px",
    padding: theme.spacing(1.4, 0, 1.4, 2),
  },
}));

export default function Chat() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Chat</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            Chat
          </li>
        </ul>
      </div>

      <Tabs className="chat-tabs">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
        >
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
            <Card
              sx={{
                boxShadow: "none",
                p: "20px",
                mb: "15px",
              }}
            >
              <Typography
                as="h1"
                sx={{
                  fontSize: 17,
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Messages
              </Typography>

              {/* Search */}
              <Search className="ls-search-form">
                <SearchIconWrapper className="search-btn">
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search here.."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              {/* All Messages */}
              <Typography mb="10px">
                <i className="ri-message-2-line"></i> ALL MESSAGES
              </Typography>

              <TabList>
                {/* Tab 1 */}
                <Tab>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <img
                          src="/images/user1.png"
                          alt="User"
                          width="45px"
                          height="45px"
                          className="borRadius100"
                        />
                        <span className="active-status successBgColor"></span>
                      </Box>

                      <Box className="ml-1">
                        <Typography
                          as="h4"
                          fontSize="13px"
                          fontWeight="500"
                          mb="5px"
                        >
                          Laurent Perrier
                        </Typography>
                        <Typography fontSize="12px">Typing...</Typography>
                      </Box>
                    </Box>

                    <Box textAlign="right">
                      <Typography
                        sx={{
                          color: "#A9A9C8",
                          fontSize: "11px",
                        }}
                      >
                        4:30 PM
                      </Typography>

                      <Box className="mr-10px">
                        <Badge 
                          badgeContent={2} 
                          color="primary" 
                          className="for-dark-text-white"
                        ></Badge>
                      </Box>
                    </Box>
                  </Box>
                </Tab>

                {/* Tab 2 */}
                <Tab>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <img
                          src="/images/user2.png"
                          alt="User"
                          width="45px"
                          height="45px"
                          className="borRadius100"
                        />
                        <span className="active-status successBgColor"></span>
                      </Box>

                      <Box className="ml-1">
                        <Typography
                          as="h4"
                          fontSize="13px"
                          fontWeight="500"
                          mb="5px"
                        >
                          Nunez Faulkner
                        </Typography>
                        <Typography fontSize="12px">
                          Hello everyone ...
                        </Typography>
                      </Box>
                    </Box>

                    <Box textAlign="right">
                      <Typography
                        sx={{
                          color: "#A9A9C8",
                          fontSize: "11px",
                        }}
                      >
                        9.36 AM
                      </Typography>

                      <Box className="mr-10px">
                        <Badge 
                          badgeContent={1} 
                          color="primary"
                          className="for-dark-text-white"
                        ></Badge>
                      </Box>
                    </Box>
                  </Box>
                </Tab>

                {/* Tab 3 */}
                <Tab>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <img
                          src="/images/user3.png"
                          alt="User"
                          width="45px"
                          height="45px"
                          className="borRadius100"
                        />
                        <span className="active-status successBgColor"></span>
                      </Box>

                      <Box className="ml-1">
                        <Typography
                          as="h4"
                          fontSize="13px"
                          fontWeight="500"
                          mb="5px"
                        >
                          Bernard Langley
                        </Typography>
                        <Typography fontSize="12px">
                          That cool, go for it...
                        </Typography>
                      </Box>
                    </Box>

                    <Box textAlign="right">
                      <Typography
                        sx={{
                          color: "#A9A9C8",
                          fontSize: "11px",
                        }}
                      >
                        7.18 PM
                      </Typography>
                    </Box>
                  </Box>
                </Tab>

                {/* Tab 4 */}
                <Tab>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <img
                          src="/images/user4.png"
                          alt="User"
                          width="45px"
                          height="45px"
                          className="borRadius100"
                        />
                        <span className="active-status successBgColor"></span>
                      </Box>

                      <Box className="ml-1">
                        <Typography
                          as="h4"
                          fontSize="13px"
                          fontWeight="500"
                          mb="5px"
                        >
                          Edwards Mckenz
                        </Typography>
                        <Typography fontSize="12px">Great ! 🔥</Typography>
                      </Box>
                    </Box>

                    <Box textAlign="right">
                      <Typography
                        sx={{
                          color: "#A9A9C8",
                          fontSize: "11px",
                        }}
                      >
                        08:30 PM
                      </Typography>
                    </Box>
                  </Box>
                </Tab>

                {/* Tab 5 */}
                <Tab>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <img
                          src="/images/user5.png"
                          alt="User"
                          width="45px"
                          height="45px"
                          className="borRadius100"
                        />
                        <span className="active-status successBgColor"></span>
                      </Box>

                      <Box className="ml-1">
                        <Typography
                          as="h4"
                          fontSize="13px"
                          fontWeight="500"
                          mb="5px"
                        >
                          Elsie Melendez
                        </Typography>
                        <Typography fontSize="12px">Typing...</Typography>
                      </Box>
                    </Box>

                    <Box textAlign="right">
                      <Typography
                        sx={{
                          color: "#A9A9C8",
                          fontSize: "11px",
                        }}
                      >
                        2:30 PM
                      </Typography>

                      <Box className="mr-10px">
                        <Badge 
                          badgeContent={5} 
                          color="primary"
                          className="for-dark-text-white"
                        ></Badge>
                      </Box>
                    </Box>
                  </Box>
                </Tab>

                {/* Tab 6 */}
                <Tab>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <img
                          src="/images/user6.png"
                          alt="User"
                          width="45px"
                          height="45px"
                          className="borRadius100"
                        />
                        <span className="active-status secondaryBgColor"></span>
                      </Box>

                      <Box className="ml-1">
                        <Typography
                          as="h4"
                          fontSize="13px"
                          fontWeight="500"
                          mb="5px"
                        >
                          Mcleod Wagner
                        </Typography>
                        <Typography fontSize="12px">What are you...</Typography>
                      </Box>
                    </Box>

                    <Box textAlign="right">
                      <Typography
                        sx={{
                          color: "#A9A9C8",
                          fontSize: "11px",
                        }}
                      >
                        1:30 PM
                      </Typography>
                    </Box>
                  </Box>
                </Tab>

                {/* Tab 7 */}
                <Tab>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <img
                          src="/images/user7.png"
                          alt="User"
                          width="45px"
                          height="45px"
                          className="borRadius100"
                        />
                      </Box>

                      <Box className="ml-1">
                        <Typography
                          as="h4"
                          fontSize="13px"
                          fontWeight="500"
                          mb="5px"
                        >
                          Joseph Strickland
                        </Typography>
                        <Typography fontSize="12px">Hello Joseph!!</Typography>
                      </Box>
                    </Box>

                    <Box textAlign="right">
                      <Typography
                        sx={{
                          color: "#A9A9C8",
                          fontSize: "11px",
                        }}
                      >
                        7:30 PM
                      </Typography>
                    </Box>
                  </Box>
                </Tab>

                {/* Tab 8 */}
                <Tab>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <img
                          src="/images/user8.png"
                          alt="User"
                          width="45px"
                          height="45px"
                          className="borRadius100"
                        />
                      </Box>

                      <Box className="ml-1">
                        <Typography
                          as="h4"
                          fontSize="13px"
                          fontWeight="500"
                          mb="5px"
                        >
                          Joseph Strickland
                        </Typography>
                        <Typography fontSize="12px">How are you?</Typography>
                      </Box>
                    </Box>

                    <Box textAlign="right">
                      <Typography
                        sx={{
                          color: "#A9A9C8",
                          fontSize: "11px",
                        }}
                      >
                        5:30 PM
                      </Typography>
                    </Box>
                  </Box>
                </Tab>

                {/* Tab 9 */}
                <Tab>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <img
                          src="/images/user9.png"
                          alt="User"
                          width="45px"
                          height="45px"
                          className="borRadius100"
                        />
                      </Box>

                      <Box className="ml-1">
                        <Typography
                          as="h4"
                          fontSize="13px"
                          fontWeight="500"
                          mb="5px"
                        >
                          Silva Foster
                        </Typography>
                        <Typography fontSize="12px">Cool! 🔥</Typography>
                      </Box>
                    </Box>

                    <Box textAlign="right">
                      <Typography
                        sx={{
                          color: "#A9A9C8",
                          fontSize: "11px",
                        }}
                      >
                        8:30 PM
                      </Typography>
                    </Box>
                  </Box>
                </Tab>
              </TabList>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={8} lg={8} xl={9}>
            <Card
              sx={{
                boxShadow: "none",
                p: "25px 20px",
                mb: "15px",
                borderRadius: "10px",
              }}
            >
              <TabPanel>
                {/* ChatBox */}
                <ChatBox />
              </TabPanel>

              <TabPanel>
                {/* ChatBox */}
                <ChatBoxTwo />
              </TabPanel>

              <TabPanel>
                {/* ChatBox */}
                <ChatBoxThree />
              </TabPanel>

              <TabPanel>
                {/* ChatBox */}
                <ChatBox />
              </TabPanel>

              <TabPanel>
                {/* ChatBox */}
                <ChatBoxTwo />
              </TabPanel>

              <TabPanel>
                {/* ChatBox */}
                <ChatBoxThree />
              </TabPanel>

              <TabPanel>
                {/* ChatBox */}
                <ChatBox />
              </TabPanel>

              <TabPanel>
                {/* ChatBox */}
                <ChatBoxTwo />
              </TabPanel>

              <TabPanel>
                {/* ChatBox */}
                <ChatBoxThree />
              </TabPanel>
            </Card>
          </Grid>
        </Grid>
      </Tabs>
    </>
  );
}
