'use client';
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Avatar,
} from '@mui/material';
import { Info, MoreHoriz } from '@mui/icons-material';

export default function RightSidebar() {
  const news = [
    { title: 'How to deal with interview nerves', time: '1d ago', readers: '38,523' },
    { title: 'AI will revive cinema icons', time: '10h ago', readers: '125' },
    { title: 'Gen Z ramps up wealth creation', time: '1h ago', readers: '103' },
    { title: 'How 2026 looks for Indian realty', time: '1h ago', readers: '' },
    { title: 'Global classrooms, local campuses', time: '1d ago', readers: '' },
  ];

  const games = [
    { name: 'Zip', number: '#290', connections: '51 connections played', image: '/linkedin-zip-icon-filled-256.png' },
    { name: 'Mini Sudoku', number: '#143', description: 'The classic game, made mini', image: '/sudoku.png' },
    { name: 'Tango', number: '#451', connections: '15 connections played', image: '/tango.webp' },
    { name: 'Queens', number: '#611', description: 'Crown each region', image: '/linkedin-queens-how-to-logically-select-next-square-for-v0-xiz8uhxyom1f1.webp' },
  ];

  return (
    <Box>
      {/* First Card - News and Games */}
      <Card sx={{ borderRadius: '8px', border: '1px solid #E0E0E0', boxShadow: 'none' }}>
        <CardContent sx={{ py: 1.5, px: 2, '&:last-child': { pb: 1.5 } }}>
          {/* LinkedIn News Section */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
            <Typography variant="subtitle2" fontWeight={600} sx={{ fontSize: '16px', color: '#000000DE' }}>
              LinkedIn News
            </Typography>
            <Info sx={{ fontSize: 16, color: '#00000099', cursor: 'pointer' }} />
          </Box>
          
          <Typography variant="body2" fontWeight={600} sx={{ mb: 1, fontSize: '13px', color: '#000000DE' }}>
            Top stories
          </Typography>
          
          <Box>
            {news.map((item, index) => (
              <Box 
                key={index} 
                sx={{ 
                  py: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    '& .news-title': {
                      textDecoration: 'underline'
                    }
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.75 }}>
                  <Box 
                    component="span" 
                    sx={{ 
                      width: 3, 
                      height: 3, 
                      borderRadius: '50%', 
                      bgcolor: '#000000DE',
                      display: 'inline-block',
                      mt: 0.75,
                      flexShrink: 0
                    }} 
                  />
                  <Box>
                    <Typography 
                      className="news-title"
                      variant="body2" 
                      fontWeight={600} 
                      sx={{ fontSize: '13px', color: '#000000DE', lineHeight: 1.3 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>
                      {item.time}{item.readers && ` • ${item.readers} readers`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          
          <Box 
            sx={{ 
              py: 1,
              cursor: 'pointer',
              '&:hover': {
                '& .show-more-text': {
                  color: '#000000DE'
                }
              }
            }}
          >
            <Typography 
              className="show-more-text"
              variant="body2" 
              sx={{ fontSize: '13px', color: '#00000099', fontWeight: 600 }}
            >
              Show more ▼
            </Typography>
          </Box>

          {/* Divider */}
          <Box sx={{ height: '1px', bgcolor: '#E0E0E0', my: 2 }} />

          {/* Today's puzzle games Section */}
          <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1.5, fontSize: '16px', color: '#000000DE' }}>
            Today's puzzle games
          </Typography>
          
          <Box>
            {games.map((game, index) => (
              <Box 
                key={index} 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  py: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.08)',
                    borderRadius: '4px',
                    mx: -1,
                    px: 1
                  }
                }}
              >
                <Box 
                  sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '4px',
                    overflow: 'hidden',
                    mr: 1.5,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#F3F2EF'
                  }}
                >
                  <img 
                    src={game.image} 
                    alt={game.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="body2" fontWeight={600} sx={{ fontSize: '14px', color: '#000000DE' }}>
                    {game.name} {game.number}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ fontSize: '12px', color: '#00000099' }}
                    noWrap
                  >
                    {game.connections || game.description}
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ ml: 1, color: '#00000099', fontWeight: 300 }}>
                  ›
                </Typography>
              </Box>
            ))}
          </Box>
          
          <Box 
            sx={{ 
              py: 1,
              cursor: 'pointer',
              '&:hover': {
                '& .show-more-text': {
                  color: '#000000DE'
                }
              }
            }}
          >
            <Typography 
              className="show-more-text"
              variant="body2" 
              sx={{ fontSize: '13px', color: '#00000099', fontWeight: 600 }}
            >
              Show more ▼
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Second Card - Promoted Profile */}
      <Card sx={{ mt: '8px', borderRadius: '8px', border: '1px solid #E0E0E0', boxShadow: 'none', overflow: 'hidden' }}>
        {/* Blue Header with Promoted */}
        <Box 
          sx={{ 
            background: 'linear-gradient(90deg, #0099FF 0%, #0066CC 100%)',
            height: '60px',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            p: 1
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="caption" sx={{ color: 'white', fontSize: '12px', fontWeight: 600 }}>
              Promoted
            </Typography>
            <MoreHoriz sx={{ fontSize: 16, color: 'white' }} />
          </Box>
        </Box>

        <CardContent sx={{ pt: 0, mt: -3, textAlign: 'center', px: 2, pb: 2, '&:last-child': { pb: 2 } }}>
          {/* Overlapping Avatars */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, position: 'relative' }}>
            <Avatar 
              src="/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.avif"
              sx={{ 
                width: 56, 
                height: 56,
                border: '2px solid white',
                position: 'relative',
                zIndex: 2
              }}
            />
            <Box
              sx={{
                width: 48,
                height: 48,
                bgcolor: '#0A66C2',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                right: 'calc(50% - 40px)',
                border: '2px solid white',
                zIndex: 1
              }}
            >
              <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 700 }}>
                d
              </Typography>
            </Box>
          </Box>

          <Typography variant="body2" fontWeight={600} sx={{ fontSize: '14px', color: '#000000DE', mb: 1, lineHeight: 1.4 }}>
            Sonika, explore relevant opportunities with Dayforce
          </Typography>
          <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099', display: 'block', mb: 2 }}>
            Get the latest jobs and industry news
          </Typography>
          <Button 
            variant="outlined"
            fullWidth
            sx={{ 
              textTransform: 'none',
              borderRadius: '24px',
              borderColor: '#0A66C2',
              color: '#0A66C2',
              fontWeight: 600,
              fontSize: '16px',
              py: 0.75,
              '&:hover': {
                borderColor: '#004182',
                bgcolor: 'rgba(10, 102, 194, 0.08)',
                borderWidth: '2px'
              }
            }}
          >
            Follow
          </Button>
        </CardContent>
      </Card>

      {/* Footer Links */}
      <Box sx={{ mt: 2, px: 1 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5, mb: 1.5 }}>
          {['About', 'Accessibility', 'Help Center', 'Privacy & Terms', 'Ad Choices', 'Advertising', 'Business Services', 'Get the LinkedIn app', 'More'].map((item) => (
            <Typography 
              key={item} 
              variant="caption" 
              sx={{ 
                fontSize: '12px',
                color: '#00000099',
                cursor: 'pointer',
                '&:hover': { color: '#0A66C2', textDecoration: 'underline' }
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#0A66C2', 
              fontWeight: 700,
              fontSize: '13px'
            }}
          >
            Linked
          </Typography>
          <Box 
            sx={{ 
              width: 14, 
              height: 14, 
              bgcolor: '#0A66C2', 
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography sx={{ color: 'white', fontSize: '10px', fontWeight: 700 }}>
              in
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>
            LinkedIn Corporation © 2026
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}