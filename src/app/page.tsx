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
  Badge,
  ButtonBase,
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
} from '@mui/icons-material';
import LeftSidebar from './components/LeftSidebar';
import MainFeed from './components/MainFeed';
import RightSidebar from './components/RightSidebar';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F3F2EF' }}>
      <AppBar 
        position="sticky" 
        sx={{ 
          bgcolor: 'white', 
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            sx={{ 
              minHeight: '30px !important',
              px: '0 !important',
              justifyContent: 'space-between'
            }}
          >
            {/* Left Section - Logo & Search */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* LinkedIn Logo */}
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  bgcolor: '#0A66C2',
                  borderRadius: '4px',
                  display: 'flex',
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
                    fontWeight: 700,
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  in
                </Typography>
              </Box>

              {/* Search Bar */}
<Box
  sx={{
    display: 'flex',
    alignItems: 'center',
  
    borderRadius: '999px',   // 👈 makes it pill-shaped
    px: 1.5,
    height: '34px',
    width: '280px',
    cursor: 'text',
    border: '1px solid black',
  }}
>
  <Search sx={{ color: '#383636ff', fontSize: 16 }}  />
  <InputBase
    placeholder="Search"
    sx={{
      ml: 1,
      flex: 1,
      fontSize: '14px',
      color: '#000000DE',
      '& input': {
        padding: 0,
        '&::placeholder': {
          color: '#666666',
          opacity: 1
        }
      }
    }}
  />
</Box>

            </Box>

            {/* Right Section - Navigation Icons */}
           {/* Right Section - Navigation Icons */}
{/* Right Section - Navigation Icons */}
<Box sx={{ display: 'flex', alignItems: 'center', height: '52px', gap: 0.5 }}>
  {/* Home */}
  <ButtonBase
    sx={{
      flexDirection: 'column',
      gap: 0,
      px: 1.5,
      pt: 1,
      pb: 0.5,
      height: '52px',
      borderRadius: 0,
      borderBottom: '2px solid #000000',
      '&:hover': { bgcolor: 'rgba(0,0,0,0.08)' }
    }}
  >
    <Home sx={{ fontSize: 22, color: '#000000', mb: 0.25 }} />
    <Typography
      sx={{
        fontSize: '12px',
        color: '#000000',
        fontWeight: 400,
        lineHeight: 1
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
      px: 1.5,
      pt: 1,
      pb: 0.5,
      height: '52px',
      borderRadius: 0,
      borderBottom: '2px solid transparent',
      transition: 'all 0.2s',
      '&:hover': { 
        bgcolor: 'rgba(0,0,0,0.08)',
        '& .MuiSvgIcon-root': { color: '#000000' },
        '& .MuiTypography-root': { color: '#000000' }
      },
      '&:active': {
        borderBottom: '2px solid #000000'
      }
    }}
  >
    <People sx={{ fontSize: 22, color: '#666666', mb: 0.25, transition: 'color 0.2s' }} />
    <Typography
      sx={{
        fontSize: '12px',
        color: '#666666',
        fontWeight: 400,
        lineHeight: 1,
        transition: 'color 0.2s'
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
      px: 1.5,
      pt: 1,
      pb: 0.5,
      height: '52px',
      borderRadius: 0,
      borderBottom: '2px solid transparent',
      transition: 'all 0.2s',
      '&:hover': { 
        bgcolor: 'rgba(0,0,0,0.08)',
        '& .MuiSvgIcon-root': { color: '#000000' },
        '& .MuiTypography-root': { color: '#000000' }
      },
      '&:active': {
        borderBottom: '2px solid #000000'
      }
    }}
  >
    <Work sx={{ fontSize: 22, color: '#666666', mb: 0.25, transition: 'color 0.2s' }} />
    <Typography
      sx={{
        fontSize: '12px',
        color: '#666666',
        fontWeight: 400,
        lineHeight: 1,
        transition: 'color 0.2s'
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
      px: 1.5,
      pt: 1,
      pb: 0.5,
      height: '52px',
      borderRadius: 0,
      borderBottom: '2px solid transparent',
      transition: 'all 0.2s',
      '&:hover': { 
        bgcolor: 'rgba(0,0,0,0.08)',
        '& .MuiSvgIcon-root': { color: '#000000' },
        '& .MuiTypography-root': { color: '#000000' }
      },
      '&:active': {
        borderBottom: '2px solid #000000'
      }
    }}
  >
    <Badge
      badgeContent={4}
      sx={{
        '& .MuiBadge-badge': {
          bgcolor: '#CC1016',
          color: 'white',
          fontSize: '10px',
          height: '16px',
          minWidth: '16px',
          padding: '0 4px',
          fontWeight: 600,
          top: 2,
          right: 2
        }
      }}
    >
      <Message sx={{ fontSize: 22, color: '#666666', transition: 'color 0.2s' }} />
    </Badge>
    <Typography
      sx={{
        fontSize: '12px',
        color: '#666666',
        fontWeight: 400,
        lineHeight: 1,
        mt: 0.25,
        transition: 'color 0.2s'
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
      px: 1.5,
      pt: 1,
      pb: 0.5,
      height: '52px',
      borderRadius: 0,
      borderBottom: '2px solid transparent',
      transition: 'all 0.2s',
      '&:hover': { 
        bgcolor: 'rgba(0,0,0,0.08)',
        '& .MuiSvgIcon-root': { color: '#000000' },
        '& .MuiTypography-root': { color: '#000000' }
      },
      '&:active': {
        borderBottom: '2px solid #000000'
      }
    }}
  >
    <Badge
      badgeContent={5}
      sx={{
        '& .MuiBadge-badge': {
          bgcolor: '#CC1016',
          color: 'white',
          fontSize: '10px',
          height: '16px',
          minWidth: '16px',
          padding: '0 4px',
          fontWeight: 600,
          top: 2,
          right: 2
        }
      }}
    >
      <Notifications sx={{ fontSize: 22, color: '#666666', transition: 'color 0.2s' }} />
    </Badge>
    <Typography
      sx={{
        fontSize: '12px',
        color: '#666666',
        fontWeight: 400,
        lineHeight: 1,
        mt: 0.25,
        transition: 'color 0.2s'
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
      px: 1.5,
      pt: 1,
      pb: 0.5,
      height: '52px',
      borderRadius: 0,
      borderBottom: '2px solid transparent',
      transition: 'all 0.2s',
      '&:hover': { 
        bgcolor: 'rgba(0,0,0,0.08)',
        '& .MuiSvgIcon-root': { color: '#000000' },
        '& .MuiTypography-root': { color: '#000000' }
      },
      '&:active': {
        borderBottom: '2px solid #000000'
      }
    }}
  >
    <Avatar
      sx={{
        width: 24,
        height: 24,
        bgcolor: '#666666',
        fontSize: '12px',
        mb: 0.25
      }}
    >
      S
    </Avatar>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
      <Typography
        sx={{
          fontSize: '12px',
          color: '#666666',
          fontWeight: 400,
          lineHeight: 1,
          transition: 'color 0.2s'
        }}
      >
        Me
      </Typography>
      <ArrowDropDown sx={{ fontSize: 16, color: '#666666', transition: 'color 0.2s' }} />
    </Box>
  </ButtonBase>

  {/* Divider */}
  <Box
    sx={{
      width: '1px',
      height: '42px',
      bgcolor: 'rgba(0,0,0,0.15)',
      mx: 0.5
    }}
  />

  {/* For Business */}
  <ButtonBase
    sx={{
      flexDirection: 'column',
      gap: 0,
      px: 1.5,
      pt: 1,
      pb: 0.5,
      height: '52px',
      borderRadius: 0,
      borderBottom: '2px solid transparent',
      transition: 'all 0.2s',
      '&:hover': { 
        bgcolor: 'rgba(0,0,0,0.08)',
        '& .MuiSvgIcon-root': { color: '#000000' },
        '& .MuiTypography-root': { color: '#000000' }
      },
      '&:active': {
        borderBottom: '2px solid #000000'
      }
    }}
  >
    <Apps sx={{ fontSize: 22, color: '#666666', mb: 0.25, transition: 'color 0.2s' }} />
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
      <Typography
        sx={{
          fontSize: '12px',
          color: '#666666',
          fontWeight: 400,
          lineHeight: 1,
          transition: 'color 0.2s'
        }}
      >
        For Business
      </Typography>
      <ArrowDropDown sx={{ fontSize: 16, color: '#666666', transition: 'color 0.2s' }} />
    </Box>
  </ButtonBase>

  {/* Premium Banner */}
  {/* Premium Banner */}
{/* Premium Banner */}
<Box
  sx={{
    ml: 1,
    textAlign: 'right',
    cursor: 'pointer',
  }}
>
  <Typography
    sx={{
      fontSize: '12px',
      color: '#915907',
      fontWeight: 400,
      textDecoration: 'underline',
      '&:hover': {
        color: '#6B4205'
      }
    }}
  >
    Reactivate Premium:
  </Typography>
  <Typography
    sx={{
      paddingRight: 4,
      fontSize: '12px',
      color: '#915907',
      
      textDecoration: 'underline',
      '&:hover': {
        color: '#6B4205'
      }
    }}
  >
    50% Off
  </Typography>
</Box>
</Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Box sx={{ width: '225px', flexShrink: 0 }}>
            <LeftSidebar />
          </Box>
          <Box sx={{ flex: 1, maxWidth: '550px' }}>
            <MainFeed />
          </Box>
          <Box sx={{ width: '300px', flexShrink: 0 }}>
            <RightSidebar />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
