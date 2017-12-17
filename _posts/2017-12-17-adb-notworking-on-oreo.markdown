---
layout: default
title:  "ADB Start fails with CheckFailed packet size"
date:   2017-12-17 12:55:42 +0000
categories: adb fixes bug
---

# ADB Start fails with CheckFailed packet size

### The error
So today I encountered an interesting problem with my ADB when connecting to my Google Pixel.
This error only happened when using the Pixel. When using my Android things board or Emulator it doesn't seem to happen.
This happens when the phone is connected, you don't even have a chance to connect the ADB.

```
✘ jamescoggan@james-mbp  ~/Library/Android/sdk  adb connect 192.168.1.111:5555
* daemon not running; starting now at tcp:5037
ADB server didn't ACK
Full server startup log: /var/folders/n6/k_klm2tn3h92_zz6ffc6q12m0000gp/T//adb.502.log
Server had pid: 12301
--- adb starting (pid 12301) ---
adb I 12-17 12:46:47 12301 244333 main.cpp:57] Android Debug Bridge version 1.0.39
adb I 12-17 12:46:47 12301 244333 main.cpp:57] Version 27.0.0-4455170
adb I 12-17 12:46:47 12301 244333 main.cpp:57] Installed as /Users/jamescoggan/Library/Android/sdk/platform-tools/adb
adb I 12-17 12:46:47 12301 244333 main.cpp:57]
adb I 12-17 12:46:47 12301 244333 adb_auth_host.cpp:416] adb_auth_init...
adb I 12-17 12:46:47 12301 244333 adb_auth_host.cpp:174] read_key_file '/Users/jamescoggan/.android/adbkey'...
adb F 12-17 12:46:47 12301 244340 transport_usb.cpp:37] Check failed: usb_packet_size < 4096ULL (usb_packet_size=5120, 4096ULL=4096)
```

### The fix
After following stack overflow I encountered this [post](https://stackoverflow.com/questions/47665475/android-studio-adb-start-server-fails-adbkey-check-fails), that highlighted the bug is the current platform-tools version 27.0.0
To fix it you need to downgrade to platform-tools 26.0.2 below you have the links:

Windows: [platform-tools_r26.0.2-windows.zip](https://dl.google.com/android/repository/platform-tools_r26.0.2-windows.zip)

Mac: [platform-tools_r26.0.2-darwin.zip](https://dl.google.com/android/repository/platform-tools_r26.0.2-darwin.zip)

Remove the platform-tools folder from your SDK project, this command worked for me:
`rm -rf ~/Library/Android/sdk/platform-tools/`
