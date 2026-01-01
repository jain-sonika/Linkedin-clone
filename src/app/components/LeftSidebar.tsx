'use client';
import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
} from '@mui/material';
import {
  Bookmark,
  Group,
  Newspaper,
  Event,
} from '@mui/icons-material';

export default function LeftSidebar() {
  return (
    <Box>
      {/* Card 1 - Profile Details */}
      <Card sx={{ borderRadius: '8px', overflow: 'hidden', boxShadow: 'none', border: '1px solid #E0E0E0' }}>
        <Box sx={{ 
          height: 54, 
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <CardContent sx={{ pt: 0, mt: -4, px: 2, pb: 2, '&:last-child': { pb: 2 } }}>
          <Box sx={{ textAlign: 'center', mb: 1 }}>
            <Avatar 
              src="/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.avif"
              sx={{ 
                width: 72, 
                height: 72, 
                mx: 'auto', 
                mb: 1,
                border: '2px solid white'
              }}
            >
              S
            </Avatar>
           <Typography 
  variant="subtitle1" 
  fontWeight={600}
  sx={{ 
    fontSize: '16px',
    color: '#000000DE',
    mb: 0.5,
    cursor: 'pointer',
    textAlign: 'left',
    '&:hover': {
      textDecoration: 'underline'
    }
  }}
>
  Sonika Jain
</Typography>
<Typography 
  variant="body2" 
  sx={{ 
    fontSize: '12px',
    color: '#00000099',
    lineHeight: 1.4,
    textAlign: 'left'
  }}
>
  Full Stack Developer | Frontend (ReactJS, API Integration, UI/UX...)
</Typography>
<Typography 
  variant="body2" 
  sx={{ 
    fontSize: '12px',
    color: '#00000099',
    mt: 0.5,
    textAlign: 'left'
  }}
>
  Bengaluru, Karnataka
</Typography>
            <Box sx={{ display: 'flex', alignItems: 'left', gap: 0.5, mt: 1, justifyContent: 'left' }}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  background: 'linear-gradient(135deg, #6B4DE6 0%, #E63D6F 100%)',
                  borderRadius: '2px',
                  flexShrink: 0
                }}
              />
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: '12px',
                  color: '#000000DE',
                  fontWeight: 600
                }}
              >
                DigiMaveric Technologies
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Card 2 - Profile Viewers & Analytics */}
      <Card sx={{ mt: '2px', borderRadius: '8px', boxShadow: 'none', border: '1px solid #E0E0E0' }}>
        <CardContent sx={{ py: 1.5, px: 2, '&:last-child': { pb: 1.5 } }}>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              mb: 1.5,
              cursor: 'pointer',
              '&:hover .profile-viewer-text': {
                textDecoration: 'underline'
              }
            }}
          >
            <Typography 
              className="profile-viewer-text"
              variant="caption" 
              sx={{ 
                fontSize: '12px',
                color: '#00000099',
                fontWeight: 600
              }}
            >
              Profile viewers
            </Typography>
            <Typography 
              className="profile-viewer-text"
              variant="caption" 
              sx={{
                fontSize: '12px',
                color: '#0A66C2',
                fontWeight: 600
              }}
            >
              184
            </Typography>
          </Box>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              cursor: 'pointer',
              '&:hover .analytics-text': {
                textDecoration: 'underline'
              }
            }}
          >
            <Typography 
              className="analytics-text"
              variant="caption" 
              sx={{ 
                fontSize: '12px',
                color: '#00000099',
                fontWeight: 600
              }}
            >
              View all analytics
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Card 3 - Premium Reactivation */}
      <Card sx={{ mt: '2px', borderRadius: '8px', boxShadow: 'none', border: '1px solid #E0E0E0' }}>
        <CardContent sx={{ py: 1.5, px: 2, '&:last-child': { pb: 1.5 } }}>
          <Typography 
            variant="caption" 
            sx={{ 
              fontSize: '12px',
              color: '#00000099',
              display: 'block',
             
              
            }}
          >
            Achieve 4x more profile visits
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 0.5,
              cursor: 'pointer',
              '&:hover .premium-text': {
                color: '#004182'
              }
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                background: 'linear-gradient(135deg, #F5B75D 0%, #C8853C 100%)',
                borderRadius: '2px',
                flexShrink: 0
              }}
            />
            <Typography 
              className="premium-text"
              variant="caption" 
              sx={{ 
                fontSize: '11.5px',
                
                fontWeight: 550,
                
              }}
            >
              Reactivate Premium: 50% Off
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Card 4 - My Items, Saved Items, Groups, Newsletters, Events */}
      <Card sx={{ mt: '2px', borderRadius: '8px', boxShadow: 'none', border: '1px solid #E0E0E0' }}>
  <CardContent sx={{ py: 0, px: 0, '&:last-child': { pb: 0 } }}>
    {/* My Items */}
    <Box 
      sx={{ 
        px: 2, 
        py: 1,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'rgba(0,0,0,0.08)',
          '& .item-text': {
            textDecoration: 'underline'
          }
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box component="span" sx={{ mr: 1.5, fontSize: '16px', color: '#00000099' }}>🔖</Box>
        <Typography 
          className="item-text"
          variant="body2" 
          sx={{ fontSize: '12px', fontWeight: 600, color: '#000000DE' }}
        >
          My items
        </Typography>
      </Box>
    </Box>

    {/* Saved Items */}
    <Box 
      sx={{ 
        px: 2, 
        py: 1,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'rgba(0,0,0,0.08)',
          '& .item-text': {
            textDecoration: 'underline'
          }
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Bookmark sx={{ fontSize: 20, color: '#00000099', mr: 1.5 }} />
        <Typography 
          className="item-text"
          variant="body2" 
          sx={{ fontSize: '12px', fontWeight: 600, color: '#000000DE' }}
        >
          Saved items
        </Typography>
      </Box>
    </Box>

    {/* Groups */}
    <Box 
      sx={{ 
        px: 2, 
        py: 1,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'rgba(0,0,0,0.08)',
          '& .item-text': {
            textDecoration: 'underline'
          }
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Group sx={{ fontSize: 20, color: '#00000099', mr: 1.5 }} />
        <Typography 
          className="item-text"
          variant="body2" 
          sx={{ fontSize: '12px', fontWeight: 600, color: '#000000DE' }}
        >
          Groups
        </Typography>
      </Box>
    </Box>

    {/* Newsletters */}
    <Box 
      sx={{ 
        px: 2, 
        py: 1,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'rgba(0,0,0,0.08)',
          '& .item-text': {
            textDecoration: 'underline'
          }
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Newspaper sx={{ fontSize: 20, color: '#00000099', mr: 1.5 }} />
        <Typography 
          className="item-text"
          variant="body2" 
          sx={{ fontSize: '12px', fontWeight: 600, color: '#000000DE' }}
        >
          Newsletters
        </Typography>
      </Box>
    </Box>

    {/* Events */}
    <Box 
      sx={{ 
        px: 2, 
        py: 1,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'rgba(0,0,0,0.08)',
          '& .item-text': {
            textDecoration: 'underline'
          }
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Event sx={{ fontSize: 20, color: '#00000099', mr: 1.5 }} />
        <Typography 
          className="item-text"
          variant="body2" 
          sx={{ fontSize: '12px', fontWeight: 600, color: '#000000DE' }}
        >
          Events
        </Typography>
      </Box>
    </Box>
  </CardContent>
</Card>
    </Box>
  );
}