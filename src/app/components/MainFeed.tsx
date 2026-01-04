'use client';
import React, { useState, useEffect } from 'react';
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
  const postsData = [
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
        author: 'Karan',
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

  const [sortBy, setSortBy] = useState('Top');
  const [sortedPosts, setSortedPosts] = useState(postsData);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option?: string) => {
    if (option) {
      setSortBy(option);
      if (option === 'Recent') {
        setSortedPosts([...postsData].reverse());
      } else {
        setSortedPosts(postsData);
      }
    }
    setAnchorEl(null);
  };

  if (!mounted) {
    return null;
  }

  return (
    <Box>
      {/* Start a Post Card - Desktop only */}
      <Card sx={{ display: { xs: 'none', sm: 'block' } }}>
        <CardContent sx={{ py: 1.5, px: 2 }}>
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
                px: 2,
                py: 1.5,
                cursor: 'text'
              }}
            >
              <Typography color="text.secondary" fontWeight={600}>
                Start a post
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Button 
              startIcon={<VideoLibrary />}
            >
              Video
            </Button>
            <Button 
              startIcon={<Image />}
            >
              Photo
            </Button>
            <Button 
              startIcon={<Article />}
            >
              Write article
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Sort by Divider - Desktop only */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', mb: 2, mt: 2 }}>
        <Divider sx={{ flex: 1 }} />
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            cursor: 'pointer',
            px: 2
          }}
          onClick={handleClick}
        >
          <Typography variant="caption" color="text.secondary" sx={{ mr: 0.5 }}>
            Sort by:
          </Typography>
          <Typography variant="caption" fontWeight={600} sx={{ mr: 0.5 }}>
            {sortBy}
          </Typography>
          <ArrowDropDown />
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
        <MenuItem onClick={() => handleClose('Top')}>
          Top
        </MenuItem>
        <MenuItem onClick={() => handleClose('Recent')}>
          Recent
        </MenuItem>
      </Menu>

      {sortedPosts.map((post) => (
        <Card key={post.id} sx={{ mb: 2 }}>
          {/* Reposted/Liked By Header */}
          {(post.repostedBy || post.likedBy) && (
            <Box sx={{ px: 2, pt: 1.5, pb: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {post.repostedAvatar && (
                  <Avatar src={post.repostedAvatar} sx={{ width: 16, height: 16 }} />
                )}
                <Typography variant="caption" color="text.secondary">
                  {post.repostedBy && `${post.repostedBy} reposted this`}
                  {post.likedBy && `${post.likedBy} likes this`}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
                <IconButton size="small">
                  <Close />
                </IconButton>
              </Box>
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
            // action={
            //   <Box sx={{ display: 'flex', gap: 0.5 }}>
            //     <IconButton size="small">
            //       <MoreVert />
            //     </IconButton>
            //     <IconButton size="small">
            //       <Close />
            //     </IconButton>
            //   </Box>
            // }
            title={
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {post.author}
                  </Typography>
                  {post.nestedPost?.verified && (
                    <Box 
                      sx={{ 
                        width: 16, 
                        height: 16, 
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography sx={{ color: 'white', fontSize: '10px', fontWeight: 700 }}>✓</Typography>
                    </Box>
                  )}
                  <Typography variant="caption" color="text.secondary">
                    {post.badge}
                  </Typography>
                </Box>
                {!post.isCompany && (
                  <Button 
                    size="small" 
                    variant="text"
                    startIcon={<span style={{ fontSize: '16px', fontWeight: 700 }}>+</span>}
                    sx={{ 
                      minWidth: 'auto',
                      px: 1,
                      py: 0.25,
                      fontWeight: 600
                    }}
                  >
                    Follow
                  </Button>
                )}
              </Box>
            }
            subheader={
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  {post.title || post.followers}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    {post.time}
                  </Typography>
                  {post.nestedPost?.edited && (
                    <Typography variant="caption" color="text.secondary">
                      • Edited
                    </Typography>
                  )}
                  <Typography variant="caption" color="text.secondary">•</Typography>
                  <Public fontSize="small" />
                </Box>
              </Box>
            }
            sx={{ pb: 1 }}
          />
          
          <CardContent sx={{ pt: 0, pb: 1.5 }}>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
              {post.content}
              {post.showMore && (
                <Typography 
                  component="span" 
                  color="text.secondary"
                  sx={{ cursor: 'pointer', ml: 0.5 }}
                >
                  ...more
                </Typography>
              )}
            </Typography>

            {/* Nested Post Card */}
            {post.nestedPost && (
              <Card sx={{ mt: 2 }}>
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
                      <Typography variant="subtitle2" fontWeight={600}>
                        {post.nestedPost.author}
                      </Typography>
                      {post.nestedPost.verified && (
                        <Box 
                          sx={{ 
                            width: 16, 
                            height: 16, 
                            bgcolor: 'primary.main',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Typography sx={{ color: 'white', fontSize: '10px', fontWeight: 700 }}>✓</Typography>
                        </Box>
                      )}
                      <Typography variant="caption" color="text.secondary">
                        {post.nestedPost.badge}
                      </Typography>
                      <Button 
                        size="small" 
                        variant="text"
                        startIcon={<span style={{ fontSize: '16px', fontWeight: 700 }}>+</span>}
                        sx={{ 
                          ml: 'auto',
                          minWidth: 'auto',
                          px: 1,
                          py: 0.25,
                          fontWeight: 600
                        }}
                      >
                        Follow
                      </Button>
                    </Box>
                  }
                  subheader={
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                        {post.nestedPost.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography variant="caption" color="text.secondary">
                          {post.nestedPost.time}
                        </Typography>
                        {post.nestedPost.edited && (
                          <Typography variant="caption" color="text.secondary">
                            • Edited
                          </Typography>
                        )}
                        <Typography variant="caption" color="text.secondary">•</Typography>
                        <Public fontSize="small" />
                      </Box>
                    </Box>
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                    {post.nestedPost.content}
                    {post.nestedPost.showMore && (
                      <Typography 
                        component="span" 
                        color="text.secondary"
                        sx={{ cursor: 'pointer', ml: 0.5 }}
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    ml: index > 0 ? -0.5 : 0
                  }}
                >
                  {icon}
                </Box>
              ))}
              <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                {post.likesText || post.likesCount}
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">
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
                startIcon={<ThumbUpOutlined />}
                sx={{ 
                  py: 1.5,
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 0.25, sm: 0.5 }
                }}
              >
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Like</Box>
                <Typography variant="caption" sx={{ display: { xs: 'block', sm: 'none' } }}>
                  Like
                </Typography>
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
                  px: 1.5,
                  py: 1,
                  gap: 0.5,
                  alignItems: 'center',
                  zIndex: 10
                }}
              >
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Box sx={{ fontSize: '28px' }}>👍</Box>
                </Box>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Box sx={{ fontSize: '28px' }}>👏</Box>
                </Box>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Box sx={{ fontSize: '28px' }}>💡</Box>
                </Box>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Box sx={{ fontSize: '28px' }}>❤️</Box>
                </Box>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Box sx={{ fontSize: '28px' }}>😂</Box>
                </Box>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Box sx={{ fontSize: '28px' }}>💯</Box>
                </Box>
              </Box>
            </Box>
            
            <Button 
              fullWidth 
              startIcon={<Comment />}
              sx={{ 
                py: 1.5,
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 0.25, sm: 0.5 }
              }}
            >
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Comment</Box>
              <Typography variant="caption" sx={{ display: { xs: 'block', sm: 'none' } }}>
                Comment
              </Typography>
            </Button>
            <Button 
              fullWidth 
              startIcon={<Share />}
              sx={{ 
                py: 1.5,
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 0.25, sm: 0.5 }
              }}
            >
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Repost</Box>
              <Typography variant="caption" sx={{ display: { xs: 'block', sm: 'none' } }}>
                Repost
              </Typography>
            </Button>
            <Button 
              fullWidth 
              startIcon={<Send />}
              sx={{ 
                py: 1.5,
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 0.25, sm: 0.5 }
              }}
            >
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Send</Box>
              <Typography variant="caption" sx={{ display: { xs: 'block', sm: 'none' } }}>
                Send
              </Typography>
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}