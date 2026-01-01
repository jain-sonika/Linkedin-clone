'use client';
import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button,
  Divider,
  Box,
  TextField,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  ThumbUpOutlined,
  Comment,
  Share,
  Send,
  VideoLibrary,
  Image,
  Article,
  MoreVert,
  Close,
  Public,
  ArrowDropDown,
} from '@mui/icons-material';



export default function MainFeed() {
  const posts = [
  {
    id: 1,
    repostedBy: 'Delta4 Infotech',
    repostedAvatar: '/ava4.webp',
    author: 'Taniya',
    authorAvatar: '/avatar2.png',
    badge: '• 3rd+',
    time: '3w',
    title: 'Human Resource Specialist at Delta4 Infotech Pvt. Ltd.| Product Hunt En...',
    content: 'We are looking for an Office Boy for our office at Mohali !\n\nWe are hiring a dedicated and responsible Office Boy to support day-to-day',
    showMore: true,
    likeIcons: ['👍', '👏'],
    likesCount: 15,
    comments: 3,
    reposts: 2,
  },
  {
    id: 2,
    likedBy: 'Harshit Kumar',
    author: 'Ibrahim Ammar',
    authorAvatar: '/avatar3.avif',
    badge: '• 2nd',
    time: '9h',
    title: 'Java Technical Lead | Senior Java Developer',
    content: '#COPIED\n\n📢 Hiring: React Developers & .NET Developers with Azure (Contract) dubai',
    showMore: true,
    likeIcons: ['👍'],
    likesText: 'Harshit Kumar and 15 others',
    comments: 2,
    reposts: 2,
  },
  {
    id: 3,
    author: 'Cox & Kings',
    authorAvatar: '/ava4.webp',
    isCompany: true,
    followers: '44,727 followers',
    time: '2w',
    content: '❗ Interested candidates send your CV to anushka.panwar@coxandkings.com or DM for more details.',
    nestedPost: {
      author: 'Karan Agarwal',
      authorAvatar: '/avatar2.png',
      verified: true,
      badge: '• 3rd+',
      time: '2w',
      edited: true,
      title: 'Director at Cox and Kings, Wilson and Hughes',
      content: '📢 We\'re hiring a hands-on Growth Marketing Leader (not a deck-maker).\n\nWe\'re a fast-growing Travel & Experiences brand looking for a senior Growth Marketer who can own the entire performance funnel end-to-end — from demand to bookings.\n\nThis is not a strategy-only role.\nThis is for someone who has personally built, optimized, and scaled',
      showMore: true,
    },
    likeIcons: ['👍'],
    likesCount: 18,
    comments: 4,
  },
];
// At the top, after imports, inside the component:
const [sortBy, setSortBy] = useState('Top');
const [sortedPosts, setSortedPosts] = useState(posts);
const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = (option?: string) => {
  if (option) {
    setSortBy(option);
    if (option === 'Recent') {
      setSortedPosts([...posts].reverse());
    } else {
      setSortedPosts(posts);
    }
  }
  setAnchorEl(null);
};
 

  return (
    <Box>
      {/* Start a Post Card */}
      <Card sx={{  borderRadius: '8px', border: '1px solid #E0E0E0', boxShadow: 'none' }}>
        <CardContent sx={{ py: 1.5, px: 2, '&:last-child': { pb: 1.5 } }}>
          <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
            <Avatar 
              src="/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.avif"
              sx={{ width: 48, height: 48 }}
            >
              S
            </Avatar>
            <Box
              sx={{
                flex: 1,
                border: '1px solid #00000066',
                borderRadius: '24px',
                px: 2,
                py: 1.5,
                cursor: 'text',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              <Typography sx={{ fontSize: '14px', color: '#00000099', fontWeight: 600 }}>
                Start a post
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Button 
              startIcon={<VideoLibrary sx={{ color: '#5F9B41', fontSize: 24 }} />}
              sx={{ 
                textTransform: 'none',
                color: '#00000099',
                fontSize: '14px',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.08)'
                }
              }}
            >
              Video
            </Button>
            <Button 
              startIcon={<Image sx={{ color: '#378FE9', fontSize: 24 }} />}
              sx={{ 
                textTransform: 'none',
                color: '#00000099',
                fontSize: '14px',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.08)'
                }
              }}
            >
              Photo
            </Button>
            <Button 
              startIcon={<Article sx={{ color: '#C37D16', fontSize: 24 }} />}
              sx={{ 
                textTransform: 'none',
                color: '#00000099',
                fontSize: '14px',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.08)'
                }
              }}
            >
              Write article
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Sort by Divider */}
      {/* Sort by Divider */}
<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
  <Divider sx={{ flex: 1, borderColor: '#00000033' }} />
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      
      cursor: 'pointer'
    }}
    onClick={handleClick}
  >
    <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099', mr: 0.5 }}>
      Sort by:
    </Typography>
    <Typography variant="caption" sx={{ fontSize: '12px', color: '#000000DE', fontWeight: 600, mr: 0.5 }}>
      {sortBy}
    </Typography>
    <ArrowDropDown sx={{ fontSize: 20, color: '#00000099' }} />
  </Box>
</Box>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem 
          onClick={() => handleClose('Top')}
          sx={{ fontSize: '14px', minWidth: '120px' }}
        >
          Top
        </MenuItem>
        <MenuItem 
          onClick={() => handleClose('Recent')}
          sx={{ fontSize: '14px', minWidth: '120px' }}
        >
          Recent
        </MenuItem>
      </Menu>

     {sortedPosts.map((post) => (
  <Card key={post.id} sx={{ mb: 2, borderRadius: '8px', border: '1px solid #E0E0E0', boxShadow: 'none' }}>
    {/* Reposted/Liked By Header */}
    {(post.repostedBy || post.likedBy) && (
      <Box sx={{ px: 2, pt: 1.5, pb: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
        {post.repostedAvatar && (
          <Avatar src={post.repostedAvatar} sx={{ width: 16, height: 16 }} />
        )}
        <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>
          {post.repostedBy && `${post.repostedBy} reposted this`}
          {post.likedBy && `${post.likedBy} likes this`}
        </Typography>
      </Box>
    )}

    <CardHeader
      avatar={
        <Avatar 
          src={post.authorAvatar}
          sx={{ width: 48, height: 48 }}
        >
          {post.author[0]}
        </Avatar>
      }
      action={
        <Box>
          <IconButton size="small">
            <MoreVert sx={{ fontSize: 20, color: '#00000099' }} />
          </IconButton>
          <IconButton size="small">
            <Close sx={{ fontSize: 20, color: '#00000099' }} />
          </IconButton>
        </Box>
      }
      title={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography variant="subtitle2" sx={{ fontSize: '14px', fontWeight: 600, color: '#000000DE' }}>
            {post.author}
          </Typography>
          {post.nestedPost?.verified && (
            <Box 
              sx={{ 
                width: 16, 
                height: 16, 
                bgcolor: '#0A66C2',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography sx={{ color: 'white', fontSize: '10px', fontWeight: 700 }}>✓</Typography>
            </Box>
          )}
          <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>
            {post.badge}
          </Typography>
          {!post.isCompany && (
            <Button 
              size="small" 
              variant="text"
              startIcon={<span style={{ fontSize: '16px', fontWeight: 700 }}>+</span>}
              sx={{ 
                textTransform: 'none',
                ml: 1,
                minWidth: 'auto',
                px: 1,
                py: 0.25,
                fontSize: '16px',
                fontWeight: 600,
                color: '#0A66C2',
                '&:hover': {
                  bgcolor: 'rgba(10, 102, 194, 0.08)'
                }
              }}
            >
              Follow
            </Button>
          )}
        </Box>
      }
      subheader={
        <Box>
          <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099', display: 'block' }}>
            {post.title || post.followers}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>
              {post.time}
            </Typography>
            {post.nestedPost?.edited && (
              <>
                <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>
                  • Edited
                </Typography>
              </>
            )}
            <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>•</Typography>
            <Public sx={{ fontSize: 12, color: '#00000099' }} />
          </Box>
        </Box>
      }
      sx={{ pb: 1 }}
    />
    
    <CardContent sx={{ pt: 0, pb: 1.5 }}>
      <Typography variant="body2" sx={{ fontSize: '14px', color: '#000000DE', whiteSpace: 'pre-line' }}>
        {post.content}
        {post.showMore && (
          <Typography 
            component="span" 
            sx={{ color: '#00000099', cursor: 'pointer', ml: 0.5 }}
          >
            ...more
          </Typography>
        )}
      </Typography>

      {/* Nested Post Card */}
      {post.nestedPost && (
        <Card sx={{ mt: 2, border: '1px solid #E0E0E0', boxShadow: 'none' }}>
          <CardHeader
            avatar={
              <Avatar 
                src={post.nestedPost.authorAvatar}
                sx={{ width: 40, height: 40 }}
              >
                {post.nestedPost.author[0]}
              </Avatar>
            }
            title={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography variant="subtitle2" sx={{ fontSize: '14px', fontWeight: 600, color: '#000000DE' }}>
                  {post.nestedPost.author}
                </Typography>
                {post.nestedPost.verified && (
                  <Box 
                    sx={{ 
                      width: 16, 
                      height: 16, 
                      bgcolor: '#0A66C2',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography sx={{ color: 'white', fontSize: '10px', fontWeight: 700 }}>✓</Typography>
                  </Box>
                )}
                <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>
                  {post.nestedPost.badge}
                </Typography>
                <Button 
                  size="small" 
                  variant="text"
                  startIcon={<span style={{ fontSize: '16px', fontWeight: 700 }}>+</span>}
                  sx={{ 
                    textTransform: 'none',
                    ml: 1,
                    minWidth: 'auto',
                    px: 1,
                    py: 0.25,
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#0A66C2',
                    '&:hover': {
                      bgcolor: 'rgba(10, 102, 194, 0.08)'
                    }
                  }}
                >
                  Follow
                </Button>
              </Box>
            }
            subheader={
              <Box>
                <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099', display: 'block' }}>
                  {post.nestedPost.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>
                    {post.nestedPost.time}
                  </Typography>
                  {post.nestedPost.edited && (
                    <>
                      <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>
                        • Edited
                      </Typography>
                    </>
                  )}
                  <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>•</Typography>
                  <Public sx={{ fontSize: 12, color: '#00000099' }} />
                </Box>
              </Box>
            }
            sx={{ pb: 0 }}
          />
          <CardContent sx={{ pt: 0 }}>
            <Typography variant="body2" sx={{ fontSize: '14px', color: '#000000DE', whiteSpace: 'pre-line' }}>
              {post.nestedPost.content}
              {post.nestedPost.showMore && (
                <Typography 
                  component="span" 
                  sx={{ color: '#00000099', cursor: 'pointer', ml: 0.5 }}
                >
                  ...more
                </Typography>
              )}
            </Typography>
          </CardContent>
        </Card>
      )}
    </CardContent>

    <Divider />

    {/* Reactions Section */}
    <Box sx={{ px: 2, py: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {post.likeIcons && post.likeIcons.map((icon, index) => (
          <Box 
            key={index}
            sx={{ 
              width: 16, 
              height: 16, 
              bgcolor: '#E0E0E0',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              border: '1px solid white',
              ml: index > 0 ? -0.5 : 0
            }}
          >
            {icon}
          </Box>
        ))}
        <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099', ml: 0.5 }}>
          {post.likesText || post.likesCount}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ fontSize: '12px', color: '#00000099' }}>
        {post.comments} comments • {post.reposts} reposts
      </Typography>
    </Box>

    <Divider />

   <CardActions sx={{ px: 0.5, py: 0.5, display: 'flex', justifyContent: 'space-between' }}>
  <Box 
    sx={{ 
      flex: 1,
      position: 'relative',
      '&:hover .like-options': {
        display: 'flex'
      }
    }}
  >
    <Button 
      fullWidth 
      startIcon={<ThumbUpOutlined sx={{ fontSize: 20 }} />}
      sx={{ 
        textTransform: 'none',
        color: '#00000099',
        fontSize: '14px',
        fontWeight: 600,
        py: 1.5,
        '&:hover': {
          bgcolor: 'rgba(0,0,0,0.08)'
        }
      }}
    >
      Like
    </Button>
    
    {/* Like Options Popup */}
    <Box 
      className="like-options"
      sx={{ 
        display: 'none',
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        mb: 1,
        bgcolor: 'white',
        borderRadius: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        px: 1.5,
        py: 1,
        gap: 0.5,
        alignItems: 'center',
        zIndex: 10,
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '8px solid white',
        }
      }}
    >
      <Box 
        sx={{ 
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '50%',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.3)'
          }
        }}
      >
        <Box sx={{ fontSize: '28px' }}>👍</Box>
      </Box>
      <Box 
        sx={{ 
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '50%',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.3)'
          }
        }}
      >
        <Box sx={{ fontSize: '28px' }}>👏</Box>
      </Box>
      <Box 
        sx={{ 
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '50%',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.3)'
          }
        }}
      >
        <Box sx={{ fontSize: '28px' }}>💡</Box>
      </Box>
      <Box 
        sx={{ 
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '50%',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.3)'
          }
        }}
      >
        <Box sx={{ fontSize: '28px' }}>❤️</Box>
      </Box>
      <Box 
        sx={{ 
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '50%',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.3)'
          }
        }}
      >
        <Box sx={{ fontSize: '28px' }}>😂</Box>
      </Box>
      <Box 
        sx={{ 
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '50%',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.3)'
          }
        }}
      >
        <Box sx={{ fontSize: '28px' }}>💯</Box>
      </Box>
    </Box>
  </Box>
  
  <Button 
    fullWidth 
    startIcon={<Comment sx={{ fontSize: 20 }} />}
    sx={{ 
      textTransform: 'none',
      color: '#00000099',
      fontSize: '14px',
      fontWeight: 600,
      py: 1.5,
      '&:hover': {
        bgcolor: 'rgba(0,0,0,0.08)'
      }
    }}
  >
    Comment
  </Button>
  <Button 
    fullWidth 
    startIcon={<Share sx={{ fontSize: 20 }} />}
    sx={{ 
      textTransform: 'none',
      color: '#00000099',
      fontSize: '14px',
      fontWeight: 600,
      py: 1.5,
      '&:hover': {
        bgcolor: 'rgba(0,0,0,0.08)'
      }
    }}
  >
    Repost
  </Button>
  <Button 
    fullWidth 
    startIcon={<Send sx={{ fontSize: 20 }} />}
    sx={{ 
      textTransform: 'none',
      color: '#00000099',
      fontSize: '14px',
      fontWeight: 600,
      py: 1.5,
      '&:hover': {
        bgcolor: 'rgba(0,0,0,0.08)'
      }
    }}
  >
    Send
  </Button>
</CardActions>
  </Card>
))}
    </Box>
  );
}