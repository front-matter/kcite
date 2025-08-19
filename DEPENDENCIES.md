# kcite Plugin Dependencies

## Overview
The kcite WordPress plugin has been modernized for WordPress 6.8 and PHP 8.4. This document outlines the key dependencies and their management.

## Core Dependencies

### JavaScript Libraries
- **citeproc.js** - Main library for CSL citation processing
- **kcite.js** - Plugin-specific customizations and output formatters
- **kcite_locale_style.js** - CSL styles and localization data
- **xmldom.js** - XML DOM parser for legacy browser support
- **xmle4x.js** - E4X-compatible XML processing

### CSL Style Files
- **ieee.csl** - IEEE citation style
- **chicago-author-date.csl** - Chicago Manual of Style (Author-Date)
- **nature.csl** - Nature Journal style
- **american-chemical-society.csl** - ACS style
- Additional CSL files as needed

## Environment Compatibility

### citeproc.js Environment Support
The citeproc.js has been optimized for multiple environments:

```javascript
// Node.js Environment
if (typeof require !== 'undefined') {
    // Loads xmldom if available
    global.DOMParser = require('xmldom').DOMParser;
}

// Browser Environment  
// Uses native DOMParser or XMLHttpRequest

// Module Export Support
// CommonJS, AMD, and Global Export
```

### WordPress Integration
- **PHP 8.4** compatible with static methods
- **WordPress 6.8** standards for plugins
- Secure file handling and sanitization

## File Loading Strategy

### CSL Styles
```javascript
// Load external CSL files
kcite_styles["numeric"] = loadCSLFromFile("ieee.csl") || fallback_style;

// Fallback for missing files
function loadCSLFromFile(filename) {
    // Node.js file system access
    if (typeof require !== 'undefined') {
        return fs.readFileSync(path.join(__dirname, filename), 'utf-8');
    }
    return null; // Trigger fallback
}
```

## Installation Requirements

### Server Environment
- **PHP 8.4+** with enable_dl and file_get_contents
- **WordPress 6.8+** 
- Write permissions for plugin directory

### Optional Dependencies
- **xmldom** npm package for Node.js environments
- **Modern Browser** with native DOMParser support

## Security Considerations

### File Access
- Only local CSL files are loaded
- No remote URL requests
- Path traversal protection through `path.join()`

### WordPress Security
- All inputs are sanitized
- CSRF protection for admin forms
- Nonce verification for actions

## Troubleshooting

### Common Issues
1. **XML Parser not available**
   - Solution: Use modern browser or install xmldom

2. **CSL file not found**
   - Solution: Check file paths and permissions

3. **Module export errors**
   - Solution: Environment-specific export strategy is automatically selected

## Development Setup

### Local Development
```bash
# WordPress with kcite Plugin
wp plugin activate kcite

# Optional: Node.js Dependencies  
npm install xmldom
```

### Testing
```javascript
// Test plugin functionality
kcite_test_citations();

// Check XML Parser availability
console.log(typeof DOMParser !== 'undefined');
```

## Updates and Maintenance

### Updating CSL Styles
1. Copy new .csl files to `kcite-citeproc/` directory
2. Update `kcite_locale_style.js` accordingly
3. Clear plugin cache

### Dependency Checks
- Regular updates of CSL styles from Zotero
- Check WordPress and PHP compatibility on updates
- Browser compatibility for JavaScript libraries

## Version Information
- **citeproc.js**: Version 1.4.61
- **kcite Plugin**: WordPress 6.8 / PHP 8.4 compatible
- **CSL Styles**: Current versions from Zotero Style Repository
