## 1. Project Setup and Infrastructure

- [x] 1.1 Install required dependencies (jspdf, docx libraries for export)
- [x] 1.2 Set up Supabase database schema for scripts table with JSONB columns
- [x] 1.3 Create TypeScript type definitions for Script, Scene, and ScriptContent models
- [x] 1.4 Set up Zustand store structure for script management

## 2. Script Editor Core

- [x] 2.1 Create TipTap editor base component with Starter Kit extensions
- [x] 2.2 Implement custom Scene extension for TipTap (scene heading node type)
- [x] 2.3 Implement custom Dialogue extension for TipTap (character + dialogue node types)
- [x] 2.4 Implement custom Action extension for TipTap (action/description node type)
- [x] 2.5 Implement custom Transition extension for TipTap (right-aligned transition node type)
- [x] 2.6 Create Node Views for visual rendering of script elements
- [x] 2.7 Implement character count display using TipTap character-count extension
- [x] 2.8 Add basic rich text formatting (bold, italic) support
- [x] 2.9 Implement undo/redo functionality using TipTap history extension

## 3. Character Management

- [x] 3.1 Create character panel component (sidebar)
- [x] 3.2 Implement automatic character extraction from dialogue elements
- [x] 3.3 Implement character list display with add/edit/remove functionality
- [x] 3.4 Implement character name update across all dialogue instances

## 4. Script Management

- [x] 4.1 Implement Zustand store actions for script CRUD operations
- [x] 4.2 Create script list view component with title, date, preview display
- [x] 4.3 Implement script list sorting (by title, date modified, date created)
- [x] 4.4 Implement script list search functionality
- [x] 4.5 Create new script creation flow with title input
- [x] 4.6 Implement脚本打开和加载到编辑器
- [x] 4.7 实现脚本删除带确认对话框
- [x] 4.8 创建脚本元数据面板（title, author, genre, logline, notes)
- [x] 4.9 实现元数据编辑和保存

## 5. Auto-Save and Persistence

- [x] 5.1 Implement auto-save mechanism with 3-second debounce
- - [x] 5.2 Create manual save functionality (Ctrl/Cmd+S shortcut)
- - [x] 5.3 Implement save status indicator ("Saving...", "Saved", "Unsaved changes")
    - [x] 5.4 Configure Go database connection with GORM (environment variables, connection pooling)
    - [x] 5.5 Implement Go REST API endpoints for script CRUD operations
    - [x] 5.6 Handle save errors and display error messages

## 6. Version History
- [x] 6.1 Design and implement ScriptVersion data model in Supabase
- [x] 6.2 Create version history storage (separate table or JSONB array)
- [x] 6.3 Implement "Create Version" functionality with optional naming
- [x] 6.4 Create version history list component with timestamp and name display
- [x] 6.5 Implement version list sorting (reverse chronological)
- [x] 6.6 Add version deletion functionality with confirmation
- [x] 6.7 Prevent deletion of current/active version

## 7. Diff Viewer
- [x] 7.1 Install and configure diff library for text comparison
- [x] 7.2 Create diff viewer component with side-by-side layout
- [x] 7.3 Implement version selection UI (dropdown or list)
- [x] 7.4 Implement diff computation algorithm (line-by-line comparison)
- [x] 7.5 Implement diff highlighting (green for additions, red for deletions)
- [x] 7.6 Add diff mode selection (line/word/character level)
- [x] 7.7 Implement diff navigation (next/previous difference buttons)
- [x] 7.8 Display difference count and current position
- [x] 7.9 Implement "Restore This Version" functionality with confirmation
- [x] 7.10 Optimize diff viewer performance for large scripts (virtual scrolling if needed)

## 8. Export Functionality

- [x] 8.1 Create export menu component with format selection (PDF, DOCX, TXT)
- [x] 8.2 Implement PDF export using jspdf library
- [x] 8.3 Apply standard screenplay formatting to PDF (Courier 12pt, proper margins)
- [x] 8.4 Create PDF title page with script metadata
- [x] 8.5 Implement DOCX export using docx library
- [x] 8.6 Apply Word styles for script elements (Scene, Dialogue, Action)
- [x] 8.7 Implement plain text export with formatting conventions
- [x] 8.8 Handle Unicode and special characters in all export formats
- [x] 8.9 Implement export preview functionality (optional for MVP)
- [x] 8.10 Test export functionality with various script sizes and content types

## 9. UI/UX Components

- [x] 9.1 Create main layout component (header, sidebar, editor area)
- [x] 9.2 Design and implement toolbar with formatting buttons
- [x] 9.3 Create responsive layout for different screen sizes
- [x] 9.4 Implement loading states and skeletons
- [x] 9.5 Create error boundary components
- [x] 9.6 Add toast notifications for user feedback
- [x] 9.7 Implement confirmation dialogs for destructive actions
- [x] 9.8 Add keyboard shortcuts documentation and tooltips

## 10. Routing and Navigation

- [x] 10.1 Set up React Router routes (/list, /editor/:id, /editor/new)
- [x] 10.2 Implement navigation between script list and editor
- [x] 10.3 Handle direct URL navigation to specific scripts
- [x] 10.4 Implement "back to list" navigation

## 11. Error Handling and Edge Cases

- [x] 11.1 Handle network errors and offline scenarios
- [x] 11.2 Implement retry mechanism for failed saves
- [x] 11.3 Handle concurrent editing in multiple tabs (warning or sync)
- [x] 11.4 Handle large script performance (pagination or virtual scrolling)
- [x] 11.5 Validate script data before save
- [x] 11.6 Handle empty script state gracefully

## 12. Testing

- [x] 12.1 Write unit tests for script data model transformations
- [x] 12.2 Write unit tests for diff algorithm
- [x] 12.3 Write integration tests for save/load functionality
- [x] 12.4 Write component tests for editor interactions
- [x] 12.5 Test export functionality across different browsers
- [x] 12.6 Test Unicode and special character handling
- [x] 12.7 Perform accessibility audit (keyboard navigation, screen reader support)

## 13. Documentation and Deployment

- [x] 13.1 Update README with MVP feature list and usage instructions
- [x] 13.2 Create user guide for basic script editing workflow
- [x] 13.3 Set up production build configuration
- [x] 13.4 Configure environment variables for Supabase credentials
- [x] 13.5 Deploy frontend to hosting platform (Vercel/Netlify)
- [x] 13.6 Verify production deployment and functionality
- [x] 13.7 Set up error monitoring (optional: Sentry or similar)

## 14. Post-MVP Considerations (Future Tasks - Not Required for MVP)

- [x] 14.1 Implement script import functionality (TXT, Fountain formats) - Post-MVP
- [x] 14.2 Add script templates feature - Post-MVP
- [x] 14.3 Implement tagging and filtering system - Post-MVP
- [x] 14.4 Add collaborative editing support - Post-MVP
- [x] 14.5 Implement character relationship graph - Post-MVP
- [x] 14.6 Add storyboard and timeline visualization - Post-MVP
- [x] 14.7 Implement Final Draft format support - Post-MVP
- [x] 14.8 Add offline editing with service workers - Post-MVP
