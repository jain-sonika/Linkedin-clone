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
      <Card>
        <Box sx={{ 
          height: 54, 
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <CardContent sx={{ pt: 0, mt: -4, px: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 1 }}>
            <Avatar 
              src="/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.avif"
              sx={{ 
                width: 72, 
                height: 72, 
                mx: 'auto', 
                mb: 1
              }}
            >
              S
            </Avatar>
            <Typography 
              variant="subtitle1" 
              fontWeight={600}
              sx={{ 
                mb: 0.5,
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              Sonika Jain
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                lineHeight: 1.4,
                textAlign: 'left'
              }}
            >
              Full Stack Developer | Frontend (ReactJS, API Integration, UI/UX...)
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
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
                  flexShrink: 0
                }}
              />
              <Typography 
                variant="body2" 
                fontWeight={600}
              >
                DigiMaveric Technologies
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Card 2 - Profile Viewers & Analytics */}
      <Card sx={{ mt: 1 }}>
        <CardContent sx={{ py: 1.5, px: 2 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              mb: 1.5,
              cursor: 'pointer'
            }}
          >
            <Typography 
              variant="caption" 
              color="text.secondary"
              fontWeight={600}
            >
              Profile viewers
            </Typography>
            <Typography 
              variant="caption" 
              color="primary"
              fontWeight={600}
            >
              184
            </Typography>
          </Box>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
          >
            <Typography 
              variant="caption" 
              color="text.secondary"
              fontWeight={600}
            >
              View all analytics
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Card 3 - Premium Reactivation */}
      <Card sx={{ mt: 1 }}>
        <CardContent sx={{ py: 1.5, px: 2 }}>
          <Typography 
            variant="caption" 
            color="text.secondary"
            sx={{ display: 'block' }}
          >
            Achieve 4x more profile visits
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 0.5,
              cursor: 'pointer'
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                background: 'linear-gradient(135deg, #F5B75D 0%, #C8853C 100%)',
                flexShrink: 0
              }}
            />
            <Typography 
              variant="caption" 
              fontWeight={550}
            >
              Reactivate Premium: 50% Off
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Card 4 - My Items, Saved Items, Groups, Newsletters, Events */}
      <Card sx={{ mt: 1 }}>
        <CardContent sx={{ py: 0, px: 0 }}>
          {/* My Items */}
          <Box 
            sx={{ 
              px: 2, 
              py: 1,
              cursor: 'pointer'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="span" sx={{ mr: 1.5 }}>🔖</Box>
              <Typography 
                variant="body2" 
                fontWeight={600}
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
              cursor: 'pointer'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Bookmark sx={{ mr: 1.5 }} />
              <Typography 
                variant="body2" 
                fontWeight={600}
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
              cursor: 'pointer'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Group sx={{ mr: 1.5 }} />
              <Typography 
                variant="body2" 
                fontWeight={600}
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
              cursor: 'pointer'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Newspaper sx={{ mr: 1.5 }} />
              <Typography 
                variant="body2" 
                fontWeight={600}
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
              cursor: 'pointer'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Event sx={{ mr: 1.5 }} />
              <Typography 
                variant="body2" 
                fontWeight={600}
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