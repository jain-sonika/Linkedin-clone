'use client';
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Link,
} from '@mui/material';
import { Info, MoreHoriz, FiberManualRecord } from '@mui/icons-material';

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
      <Card>
        <CardContent>
          {/* LinkedIn News Section */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="subtitle2" fontWeight={600}>
              LinkedIn News
            </Typography>
            <Info fontSize="small" />
          </Box>
          
          <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
            Top stories
          </Typography>
          
          <List disablePadding>
            {news.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                <FiberManualRecord sx={{ fontSize: 6, mr: 1 }} />
                <ListItemText
                  primary={
                    <Typography variant="body2" fontWeight={600}>
                      {item.title}
                    </Typography>
                  }
                  secondary={`${item.time}${item.readers ? ` • ${item.readers} readers` : ''}`}
                />
              </ListItem>
            ))}
          </List>
          
          <Button fullWidth sx={{ mt: 1 }}>
            Show more ▼
          </Button>

          <Divider sx={{ my: 2 }} />

          {/* Today's puzzle games Section */}
          <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
            Today's puzzle games
          </Typography>
          
          <List disablePadding>
            {games.map((game, index) => (
              <ListItem key={index} disablePadding sx={{ py: 1 }}>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    src={game.image}
                    alt={game.name}
                    sx={{ width: 48, height: 48 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${game.name} ${game.number}`}
                  secondary={game.connections || game.description}
                />
                <Typography variant="h5">›</Typography>
              </ListItem>
            ))}
          </List>
          
          <Button fullWidth sx={{ mt: 1 }}>
            Show more ▼
          </Button>
        </CardContent>
      </Card>

      {/* Second Card - Promoted Profile */}
      <Card sx={{ mt: 1, overflow: 'hidden' }}>
        {/* Blue Header with Promoted */}
        <Box 
          sx={{ 
           
            height: '60px',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            p: 1
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
              Promoted
            </Typography>
            <MoreHoriz  />
          </Box>
        </Box>

        <CardContent sx={{ pt: 0, mt: -3, textAlign: 'center' }}>
          {/* Overlapping Avatars */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, position: 'relative' }}>
            <Avatar 
              src="/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.avif"
              sx={{ 
                width: 56, 
                height: 56,
                position: 'relative',
                zIndex: 2
              }}
            />
            <Box
              sx={{
                width: 48,
                height: 48,
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                right: 'calc(50% - 40px)',
                zIndex: 1
              }}
            >
              <Typography sx={{  fontSize: '20px', fontWeight: 700 }}>
                d
              </Typography>
            </Box>
          </Box>

          <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
            Sonika, explore relevant opportunities with Dayforce
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
            Get the latest jobs and industry news
          </Typography>
          <Button 
            variant="outlined"
            fullWidth
          >
            Follow
          </Button>
        </CardContent>
      </Card>

      {/* Footer Links */}
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Box sx={{ mb: 1.5 }}>
          {['About', 'Accessibility', 'Help Center', 'Privacy & Terms', 'Ad Choices', 'Advertising', 'Business Services', 'Get the LinkedIn app', 'More'].map((item) => (
            <Link 
              key={item} 
              variant="caption" 
              color="text.secondary"
              sx={{ mx: 0.75, display: 'inline' }}
            >
              {item}
            </Link>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
          <Typography 
            variant="caption" 
            color="primary"
            fontWeight={700}
          >
            Linked
          </Typography>
          <Box 
            sx={{ 
              width: 14, 
              height: 14, 
              bgcolor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography sx={{ color: 'white', fontSize: '10px', fontWeight: 700 }}>
              in
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            LinkedIn Corporation © 2026
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}