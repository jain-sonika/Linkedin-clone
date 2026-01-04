'use client';
import React from 'react';
import {
  AppBar,
  Toolbar,
  InputBase,
  Avatar,
  Box,
  Container,
  Typography,
  ButtonBase,
  Divider,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Search,
  Home,
  People,
  Work,
  Message,
  Notifications,
  Apps,
  ArrowDropDown,
  Menu as MenuIcon,
} from '@mui/icons-material';
import LeftSidebar from './components/LeftSidebar';
import MainFeed from './components/MainFeed';
import RightSidebar from './components/RightSidebar';

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box>
      <AppBar 
        position="sticky" 
        color="default"
      >
        <Container maxWidth="lg">
          <Toolbar 
            sx={{ 
              minHeight: { xs: '56px', sm: '52px' },
              px: { xs: 1.5, sm: 2, md: 0 },
              justifyContent: 'space-between'
            }}
          >
            {/* Left Section - Logo & Search */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
              {/* Mobile: Profile Avatar */}
              <Avatar
                src="/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.avif"
                sx={{
                  width: 40,
                  height: 40,
                  display: { xs: 'flex', sm: 'none' }
                }}
              >
                S
              </Avatar>

              {/* Desktop: LinkedIn Logo */}
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  bgcolor: 'primary.main',
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 700
                  }}
                >
                  in
                </Typography>
              </Box>
              {/* Desktop Search */}
<Box
  sx={{
   display: { xs: 'none', sm: 'flex' },
    alignItems: 'center',
    bgcolor: '#EEF3F8',
    borderRadius: '4px',
    px: 1.5,
    height: '34px',
    width: '280px',
    cursor: 'text'
  }}
>
  <Search sx={{ fontSize: 20, color: '#666' }} />
  <InputBase
    placeholder="Search"
    sx={{ ml: 1, fontSize: '14px', width: '100%' }}
  />
</Box>

              {/* Search Bar - Full width on mobile */}
              <Box
                sx={{
                  // display: 'flex',
                   display: { xs: 'flex', sm: 'none' },
                  alignItems: 'center',
                
                  px: { xs: 1.5, sm: 1.5 },
                  height: { xs: '40px', sm: '34px' },
                  width: { xs: '100%', sm: '200px', md: '280px' },
                  cursor: 'text',
                  flex: { xs: 1, sm: 0 }
                }}
              >
                <Search sx={{ fontSize: { xs: 22, sm: 20 } }} />
                <InputBase
                  placeholder="Search"
                  sx={{
                    ml: 1,
                    flex: 1,
                    fontSize: { xs: '16px', sm: '14px' }
                  }}
                />
              </Box>
            </Box>

            {/* Mobile: Message Icon (top right) */}
            <IconButton 
              sx={{ 
                display: { xs: 'flex', sm: 'none' },
                p: 1
              }}
            >
              <Message sx={{ fontSize: 24 }} />
            </IconButton>

            {/* Right Section - Navigation Icons */}
            <Box sx={{ 
              display: { xs: 'none', sm: 'flex' }, 
              alignItems: 'center', 
              height: '52px', 
              gap: 0.5 
            }}>
              {/* Home */}
              <ButtonBase
                sx={{
                  flexDirection: 'column',
                  gap: 0,
                  px: { xs: 0.75, sm: 1.5 },
                  pt: 1,
                  pb: 0.5,
                  height: '52px',
                  minWidth: { xs: '50px', sm: 'auto' }
                }}
              >
                <Home sx={{ mb: 0.25, fontSize: { xs: 20, sm: 22 } }} />
                <Typography
                  variant="caption"
                  sx={{
                    lineHeight: 1,
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  Home
                </Typography>
              </ButtonBase>

              {/* My Network */}
              <ButtonBase
                sx={{
                  flexDirection: 'column',
                  gap: 0,
                  px: { xs: 0.75, sm: 1.5 },
                  pt: 1,
                  pb: 0.5,
                  height: '52px',
                  minWidth: { xs: '50px', sm: 'auto' }
                }}
              >
                <People sx={{ mb: 0.25, fontSize: { xs: 20, sm: 22 } }} />
                <Typography
                  variant="caption"
                  sx={{
                    lineHeight: 1,
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  My Network
                </Typography>
              </ButtonBase>

              {/* Jobs */}
              <ButtonBase
                sx={{
                  flexDirection: 'column',
                  gap: 0,
                  px: { xs: 0.75, sm: 1.5 },
                  pt: 1,
                  pb: 0.5,
                  height: '52px',
                  minWidth: { xs: '50px', sm: 'auto' },
                  display: { xs: 'none', sm: 'flex' }
                }}
              >
                <Work sx={{ mb: 0.25, fontSize: { xs: 20, sm: 22 } }} />
                <Typography
                  variant="caption"
                  sx={{
                    lineHeight: 1
                  }}
                >
                  Jobs
                </Typography>
              </ButtonBase>

              {/* Messaging */}
              <ButtonBase
                sx={{
                  flexDirection: 'column',
                  gap: 0,
                  px: { xs: 0.75, sm: 1.5 },
                  pt: 1,
                  pb: 0.5,
                  height: '52px',
                  minWidth: { xs: '50px', sm: 'auto' }
                }}
              >
                <Message sx={{ mb: 0.25, fontSize: { xs: 20, sm: 22 } }} />
                <Typography
                  variant="caption"
                  sx={{
                    lineHeight: 1,
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  Messaging
                </Typography>
              </ButtonBase>

              {/* Notifications */}
              <ButtonBase
                sx={{
                  flexDirection: 'column',
                  gap: 0,
                  px: { xs: 0.75, sm: 1.5 },
                  pt: 1,
                  pb: 0.5,
                  height: '52px',
                  minWidth: { xs: '50px', sm: 'auto' }
                }}
              >
                <Notifications sx={{ mb: 0.25, fontSize: { xs: 20, sm: 22 } }} />
                <Typography
                  variant="caption"
                  sx={{
                    lineHeight: 1,
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  Notifications
                </Typography>
              </ButtonBase>

              {/* Me */}
              <ButtonBase
                sx={{
                  flexDirection: 'column',
                  gap: 0,
                  px: { xs: 0.75, sm: 1.5 },
                  pt: 1,
                  pb: 0.5,
                  height: '52px',
                  minWidth: { xs: '50px', sm: 'auto' },
                  display: { xs: 'none', sm: 'flex' }
                }}
              >
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    mb: 0.25
                  }}
                >
                  S
                </Avatar>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      lineHeight: 1
                    }}
                  >
                    Me
                  </Typography>
                  <ArrowDropDown fontSize="small" />
                </Box>
              </ButtonBase>

              {/* Divider - Desktop only */}
              {isDesktop && (
                <Divider orientation="vertical" flexItem sx={{ mx: 0.5, my: 0.5 }} />
              )}

              {/* For Business - Desktop only */}
              {isDesktop && (
                <ButtonBase
                  sx={{
                    flexDirection: 'column',
                    gap: 0,
                    px: 1.5,
                    pt: 1,
                    pb: 0.5,
                    height: '52px'
                  }}
                >
                  <Apps sx={{ mb: 0.25 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        lineHeight: 1
                      }}
                    >
                      For Business
                    </Typography>
                    <ArrowDropDown fontSize="small" />
                  </Box>
                </ButtonBase>
              )}

              {/* Premium Banner - Desktop only */}
              {isDesktop && (
                <Box
                  sx={{
                    ml: 1,
                    textAlign: 'right',
                    cursor: 'pointer'
                  }}
                >
                  <Typography variant="caption">
                    Reactivate Premium:
                  </Typography>
                  <Typography variant="caption" sx={{ paddingRight: 4 }}>
                    50% Off
                  </Typography>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: { xs: 1, sm: 2, md: 3 }, 
          mb: { xs: 8, sm: 2, md: 3 },
          px: { xs: 1, sm: 2 }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          gap: { xs: 1, sm: 2, md: 3 },
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          {/* Left Sidebar - Hidden on mobile, visible on tablet+ */}
          <Box sx={{ 
            width: { xs: '100%', md: '225px' }, 
            flexShrink: 0,
            display: { xs: 'none', sm: 'block' }
          }}>
            <LeftSidebar />
          </Box>

          {/* Main Feed - Full width on mobile */}
          <Box sx={{ 
            flex: 1, 
            maxWidth: { xs: '100%', md: '550px' },
            mx: { xs: 0, md: 'auto' }
          }}>
            <MainFeed />
          </Box>

          {/* Right Sidebar - Hidden on mobile and tablet, visible on desktop */}
          <Box sx={{ 
            width: '300px', 
            flexShrink: 0,
            display: { xs: 'none', lg: 'block' }
          }}>
            <RightSidebar />
          </Box>
        </Box>
      </Container>

      {/* Mobile Bottom Navigation */}
      <AppBar 
        position="fixed" 
        color="default"
        sx={{ 
          top: 'auto', 
          bottom: 0,
          display: { xs: 'block', sm: 'none' }
        }}
      >
        <Toolbar 
          sx={{ 
            justifyContent: 'space-around', 
            minHeight: '60px',
            px: 0.5
          }}
        >
          {/* Home */}
          <ButtonBase
            sx={{
              flexDirection: 'column',
              gap: 0.25,
              py: 0.75,
              minWidth: '64px'
            }}
          >
            <Home sx={{ fontSize: 26 }} />
            <Typography 
              variant="caption"
              sx={{ fontSize: '11px', lineHeight: 1.2 }}
            >
              Home
            </Typography>
          </ButtonBase>

          {/* My Network */}
          <ButtonBase
            sx={{
              flexDirection: 'column',
              gap: 0.25,
              py: 0.75,
              minWidth: '64px'
            }}
          >
            <People sx={{ fontSize: 26 }} />
            <Typography 
              variant="caption"
              sx={{ fontSize: '11px', lineHeight: 1.2 }}
            >
              My Network
            </Typography>
          </ButtonBase>

          {/* Post */}
          <ButtonBase
            sx={{
              flexDirection: 'column',
              gap: 0.25,
              py: 0.75,
              minWidth: '64px'
            }}
          >
            <Box
              sx={{
                width: 26,
                height: 26,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography sx={{ fontSize: '28px', fontWeight: 300, lineHeight: 1 }}>
                +
              </Typography>
            </Box>
            <Typography 
              variant="caption"
              sx={{ fontSize: '11px', lineHeight: 1.2 }}
            >
              Post
            </Typography>
          </ButtonBase>

          {/* Notifications */}
          <ButtonBase
            sx={{
              flexDirection: 'column',
              gap: 0.25,
              py: 0.75,
              minWidth: '64px'
            }}
          >
            <Notifications sx={{ fontSize: 26 }} />
            <Typography 
              variant="caption"
              sx={{ fontSize: '11px', lineHeight: 1.2 }}
            >
              Notifications
            </Typography>
          </ButtonBase>

          {/* Jobs */}
          <ButtonBase
            sx={{
              flexDirection: 'column',
              gap: 0.25,
              py: 0.75,
              minWidth: '64px'
            }}
          >
            <Work sx={{ fontSize: 26 }} />
            <Typography 
              variant="caption"
              sx={{ fontSize: '11px', lineHeight: 1.2 }}
            >
              Jobs
            </Typography>
          </ButtonBase>
        </Toolbar>
      </AppBar>
    </Box>
  );
}