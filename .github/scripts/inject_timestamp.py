import sys
from datetime import datetime, timezone

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('{{BUILD_TIMESTAMP}}', timestamp)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Done. Timestamp: {timestamp}')
