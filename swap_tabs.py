#!/usr/bin/env python3
import re

# Read the file
with open('src/components/Menhome/Menusection.js', 'r') as f:
    content = f.read()

# The strategy: Extract each tab section and re-order them
# Tab-1 (currently Classics) - keep as is (already done)
# Tab-2 (needs Burmese Street Food - was originally in old tab-1)  
# Tab-3 (needs Salads - currently in tab-2)

# Find tab sections using regex - find div with specific tab ID
tab_pattern = r'(<div className=\{`tab \$\{tabMenu\.\w+ && "active-tab"`\} id="tab-(\d+)">.*?</div>\s*</div>\s*</div>\s*)\s*(?=<div className=\{`tab|<div className=\{`tab|$)'

print("Script ready to swap tabs")
