# OTR Notification Beep Chrome Extension

This Chrome extension monitors the [otrlistens.net](https://otrlistens.net) website for new messages. If the message counter increases while the browser tab is not in focus, it plays a notification sound (`message.mp3`). The sound will repeat every 5 seconds until you focus back to the tab.

## Features
- Monitors for new message
- Plays a custom notification sound when the tab is unfocused
- Repeats the sound every 5 seconds until you return to the tab

## Installation
1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select this project folder.
5. Make sure `message.mp3` is present in the folder (or replace it with your own sound file).

## Usage
- Visit [otrlistens.net](https://otrlistens.net).
- If the notification counter increases while you are not viewing the tab, the sound will play every 5 seconds until you return.