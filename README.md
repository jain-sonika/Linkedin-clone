# LinkedIn Clone - Next.js & Material-UI

A fully functional LinkedIn clone built with Next.js 14, TypeScript, and Material-UI (MUI). This project replicates the core UI/UX features of LinkedIn's web interface with modern web technologies.

  ![LinkedIn Clone Demo](./public/Screen%20Recording%202026-01-02%20121010.gif)

## 🚀 Features

### Navigation Bar
- Responsive navigation with LinkedIn branding
- Search bar with proper styling
- Navigation icons: Home, My Network, Jobs, Messaging, Notifications
- Active state indicators with underline effect
- Hover states with color transitions
- Badge notifications on Messaging and Notifications
- Premium reactivation banner
- User profile dropdown

### Left Sidebar
- User profile card with:
  - Custom background image
  - User avatar
  - Profile information (name, title, location, company)
  - Profile viewers count with hover underline
  - Analytics link
  - Premium reactivation CTA with gradient icon
- Quick access menu items:
  - My items
  - Saved items
  - Groups
  - Newsletters
  - Events
- Hover effects on all interactive elements
- Rounded card design with proper spacing

### Main Feed
- Post creation card with:
  - User avatar
  - Pill-shaped input field
  - Media options (Video, Photo, Write article) with colored icons
- Post sorting functionality:
  - Top (default)
  - Recent (chronological order)
- Multiple post types:
  - Regular posts
  - Reposted content
  - Company posts with nested cards
- Post features:
  - Author information with badges (1st, 2nd, 3rd+ connections)
  - Follow/Connect buttons
  - Verified badges for verified accounts
  - Post timestamps and edit indicators
  - "...more" expansion for long content
- Reaction system:
  - Like button with hover emoji picker (👍, 👏, 💡, ❤️, 😂, 💯)
  - Outlined like icon
  - Reaction count with overlapping emoji icons
  - Comment, Repost, Send buttons
- Equal spacing between action buttons

### Right Sidebar
- LinkedIn News section:
  - Top stories with bullet points
  - Reader counts and timestamps
  - Hover effects on news items
  - "Show more" expansion
- Today's Puzzle Games:
  - Game cards with custom images
  - Connection activity tracking
  - Navigation arrows
  - Hover effects
- Promoted content card:
  - Gradient header with "Promoted" label
  - Overlapping avatars (user + company logo)
  - Follow button with proper styling
- Footer links with LinkedIn branding

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Styling**: MUI's sx prop, CSS-in-JS
- **Icons**: Material-UI Icons
- **State Management**: React Hooks (useState)
- **Image Handling**: Next.js Image optimization

## 📁 Project Structure
```
linkedin-clone-mui/
├── src/
│   └── app/
│       ├── components/
│       │   ├── LeftSidebar.tsx      # Left sidebar with profile & menu
│       │   ├── MainFeed.tsx         # Main feed with posts
│       │   └── RightSidebar.tsx     # Right sidebar with news & games
│       ├── layout.tsx               # Root layout
│       ├── page.tsx                 # Main home page with navbar
│       └── theme.ts                 # MUI theme configuration
├── public/
│   ├── background.jpg               # Profile background image
│   ├── young-man-avatar...avif      # User avatar
│   ├── ava4.webp                    # Avatar 4
│   ├── avatar2.png                  # Avatar 2
│   ├── avatar3.avif                 # Avatar 3
│   ├── linkedin-zip-icon...png      # Zip game icon
│   ├── sudoku.png                   # Sudoku game icon
│   ├── tango.webp                   # Tango game icon
│   └── linkedin-queens...webp       # Queens game icon
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design Features

### Color Palette
- **Primary Blue**: #0A66C2 (LinkedIn brand color)
- **Background**: #F3F2EF (light gray)
- **Text Primary**: #000000DE (87% opacity)
- **Text Secondary**: #00000099 (60% opacity)
- **Borders**: #E0E0E0
- **Hover Background**: rgba(0,0,0,0.08)

### Typography
- **Headers**: 16px, font-weight 600
- **Body Text**: 14px, font-weight 400
- **Captions**: 12px
- **Consistent line heights and spacing**

### Interactive Elements
- Hover effects on all clickable items
- Smooth transitions (0.2s)
- Underline effects on links
- Scale animations on emoji reactions
- Active state indicators
- Rounded corners (8px for cards, 24px for inputs)

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd linkedin-clone-mui
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Add images to the `public` folder:
   - background.jpg
   - User avatars (young-man-avatar...avif, ava4.webp, avatar2.png, avatar3.avif)
   - Game icons (linkedin-zip-icon...png, sudoku.png, tango.webp, linkedin-queens...webp)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Dependencies
```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "@mui/material": "^5.x",
    "@mui/icons-material": "^5.x",
    "@emotion/react": "^11.x",
    "@emotion/styled": "^11.x"
  },
  "devDependencies": {
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "typescript": "^5.x"
  }
}
```

## 🎯 Key Components

### Navbar (`page.tsx`)
- Sticky positioning
- LinkedIn logo and search bar
- Navigation items with active states
- Notification badges
- Premium banner

### LeftSidebar (`LeftSidebar.tsx`)
- Profile card with background image
- User stats (profile viewers, analytics)
- Premium CTA with gradient icon
- Quick access menu with 4 separate cards
- Hover effects and underlines

### MainFeed (`MainFeed.tsx`)
- Post creation interface
- Sorting functionality (Top/Recent)
- Multiple post types rendering
- Like system with emoji picker
- Action buttons (Like, Comment, Repost, Send)

### RightSidebar (`RightSidebar.tsx`)
- LinkedIn News with top stories
- Puzzle games section
- Promoted content card with overlapping avatars
- Footer links

## 🔧 Customization

### Changing Colors
Edit the theme configuration in `src/app/theme.ts` or modify the `sx` props in components.

### Adding Posts
Modify the `postsData` array in `MainFeed.tsx`:
```typescript
const postsData = [
  {
    id: 1,
    author: 'Author Name',
    authorAvatar: '/path/to/avatar.png',
    content: 'Post content here...',
    // ... other properties
  }
];
```

### Modifying News Items
Update the `news` array in `RightSidebar.tsx`.

### Adding Games
Update the `games` array in `RightSidebar.tsx` with new game data and images.

## 📱 Responsive Design
- Desktop-first approach
- Container max-width: 'lg' (1280px)
- Fixed sidebar widths:
  - Left: 225px
  - Center: 550px (flex)
  - Right: 300px

## 🎨 UI/UX Features
- Consistent spacing (8px grid system)
- Smooth hover transitions
- Clear visual hierarchy
- Accessible color contrast
- Interactive feedback on all actions
- Card-based layout with shadows
- Rounded corners for modern look

## 🚀 Performance Optimizations
- Next.js automatic code splitting
- Image optimization with Next.js Image
- CSS-in-JS with emotion (MUI)
- Minimal re-renders with proper state management

## 📝 Future Enhancements
- [ ] User authentication
- [ ] Post creation functionality
- [ ] Comment system
- [ ] Real-time notifications
- [ ] Profile pages
- [ ] Search functionality
- [ ] Messaging system
- [ ] Dark mode support
- [ ] Mobile responsive design
- [ ] API integration

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is created for educational purposes. LinkedIn is a trademark of LinkedIn Corporation.

## 👨‍💻 Author
Created by [Your Name]

## 🙏 Acknowledgments
- LinkedIn for design inspiration
- Material-UI for the component library
- Next.js team for the amazing framework

---

**Note**: This is a clone project created for learning purposes only. It is not affiliated with or endorsed by LinkedIn Corporation.
