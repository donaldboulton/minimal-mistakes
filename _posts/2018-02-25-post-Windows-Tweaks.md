---
layout: single
title: "Windows Tweaks"
permalink: /posts/2018-02-26-post-Windows-Tweaks/
date: 2018-02-26 16:16:01 -0600
last_modified_at: 2018-03-02T12:42:38-04:00
search: true
author: Donald Boulton
author_profile: true
sidenav: true
adds: true
reviews: true
tags:
  - Windows Tweaks
  - Windows 10
category:
  - Windows

toc: true
toc_label: "Contents"

read_time: true
comments: true
share: true
related: true
excerpt: "This Tweaks page has evolved from Windows XP to Now upgrading this to Windows 10. Included is My testing and Opinions, try at you own risk."
image:
  cover: true
  path: &image /assets/images/pages/windows-tweaks.png
  feature: *image
  thumbnail: /assets/images/pages/windows-tweaks-320.png
header:
  image: /assets/images/pages/windows-tweaks-1200.png
  teaser: /assets/images/pages/windows-tweaks-320.png
---

{% include octo-arm.html %}
{% include page-intro.html %}

# Windows 10, 8, 7, Vista, Xp

Basic Tweaks Sites:

[TweakHounds](http://www.tweakhound.com/vista/tweakguide/page_3.htm),
[PcTuneUpTips](http://pctuneuptips.com/tips/vista_tweaks/),
[H Enthusiasts](http://enthusiast.hardocp.com/article.html?art=MTMyNywxLCxoZW50aHVzaWFzdA==),
[Windows Fanatics](http://www.lockergnome.com/windows/)

## Windows Fanatics at TechNet

 [Tech Net 1,](http://technet.microsoft.com/en-us/magazine/cc162494)
 [Tech Net 2,](http://technet.microsoft.com/en-us/magazine/cc162480.aspx)
 [Tech Net 3](http://technet.microsoft.com/en-us/magazine/cc162480.aspx)

Below is My testing and Opinions, "try at you own risk".

I tried all the below.

### Advanced System Settings

Go to Control Panel, Click System, Go to advanced System settings in left pane, click on system property's, it will come up in a new Window, click on the advanced tab and click on Performance,  and new Window saying Performance options will appear, click on advanced tab, make sure it is not set to background services = set it to programs.

#### Virtual Memory

Also on the Advanced tab for Virtual Memory click the Change button and  a new window will again pop up, click on Custom size button, type in the initial size as 4069 and in the Maximum size type 8069 and then click set, you can do this for more than one drive, and the maximum size can be at 3 times the amount of RAM installed on your computer. If you see warnings at these [Windows Vista](http://windowshelp.microsoft.com/Windows/en-US/Help/89ca317f-649d-40a6-8934-e5707ee5c4b81033.mspx) recommended levels, then increase the minimum and maximum sizes.

Vista SP1 changes this to allot of different Values, some sites suggest not to set this to custom and let Windows decide Virtual Memory settings,  OK, they said that about XP also, but I found setting this to the max and on multiple drives increases performance and in XP if you reboot several times and then set it back o System Managed size it will increase the normal System management and size of page filing by letting Windows decide Virtual Memory settings, kind of tricks Windows into increasing this value, through its own Management. I leave it on custom, and to the MAX.

My second partition I set to 2069 and 4069 which was the best min & max for XP Pro 32 bit. CAUTION, the above [Virtual Memory](http://windowshelp.microsoft.com/Windows/en-US/Help/89ca317f-649d-40a6-8934-e5707ee5c4b81033.mspx) setting is for 64 bit machines. Initial minimum: 1536 or 3072 or 4096 Maximum:, is max in X86 32 bit XP Machines. Some Vista Tweak's web sites recommend Disabling Virtual Memory, I don't know what they are smoking, but I don not recommend sharing whatever they are puffing on or Disabling Virtual Memory.

[Top](#Top)

## Advanced Visual Effects

Go to the Visual effects tab and click on CUSTOM = click on Desktop compression, smooth screen fonts, Folder background images, drop shadows, visual styles = which will still give you the Vista look without the Glass which eats up system resources along with allot of visual additions not really needed, You can play with this for the look you want.

Turn on DEP for programs except the ones you choose = add only X86 32 bit programs as it will not let you choose any  X64  programs, make sure to find the .exe files for your specific trusted programs in Program Files x86 in explorer.

On remote tab uncheck allow remote assistance unless needed = this allows Microsoft or anyone access to your computer.

Close out all windows and Restart Computer = VS Express and SQL express problem  fixed and/or and 64 bit slowness or problems.
Page Filing was = 2063, now 6118 on two drives.

## Defragment Boot Sector

Defragment Your Hard Drives after a new Upgrades, "before doing anything else". Defragment after installation or un-installations of several Programs or if they are very large = a good example is Visual Studio, Office suites and others. Defrag after updates and after moving or copying allot of files.

Is Windows Vista taking a long time to startup? You can try defragmenting the boot files by using the Command Prompt in Windows Vista.

1\. Go to Start/All Programs/Accessories/Command Prompt

2\. At the prompt, type defrag c: -b

Disk Defragmenter does not defragment files in the Recycle Bin. It is best to run Disk Cleaner first and then empty the Recycle Bin, before defragmenting

Disk Defragmenter will also not defragment files which are in use. Best to try and shut down as many processes as possible and then defragment.

Disk Defragmenter does not defragment the following files: Bootsect DOS, Safeboot fs, Safeboot csv, Safeboot rsv, Hiberfil sys, Memory dmp and the Windows page file. However using the -b parameter, as mentioned below, will optimize the boot files.

Disk defragmenter Command line options

There are various command line options for you to exercise control over the defragmentation process.

To defrag a specific drive, say Drive C, open a command prompt and type:

defrag c: -v

Doing it verbos instead of with the numbering system

Disk Defragmenter does not defragment files in the Recycle Bin. It is best to run Disk Cleaner first and then empty the Recycle Bin, before defragmenting

You can use the following parameters or switches with the Defrag command to further fine-tune your control:

```sql
-r  This is the default setting and defragments file fragments that less than 64 MB.

-a  Analyze the selected drive / volume & display a summary report, consisting of analysis and defragmentation reports.

-c  Defragments all volumes on the computer. Don’t specify a drive letter while using this.

-w  Perform FULL defragmentation of files of ALL sizes.

-f  Forced defragmentation even when there is less amount of free space on the drive being defragmented. A volume must have at least 15 % free space before Disk Defragmenter can completely defragment it.

-i  This makes Defrag run in the background & operate only if the computer is idle, like when run as a scheduled task.

-v  Displays complete reports.

-b  It optimizes boot files and applications only.
```

The only indication you will get is a blinking cursor. This means that the process is going. To interrupt the defragmentation process, press Ctrl + C in the command window.

You can read more here on Defrag Options & Command line switches.

### Defragmenter does not run

If you find that you are unable to defragment or cannot run the defragment utility in Windows or that a drive or volume has been marked  as having errors, run chdsk by entering

chkdsk c: /f

at any command prompt; where c is the drive letter. You will be able to then run Defrag after Chkdsk has repaired the file system. If you still face problems, seee this post on Disk defragmenter could not start or Failed to initialize.

In Windows 8, while the  is good enough for most of us, there are some who prefer to use Free Defragmentation Software. You may want to have a look at these too.

Or any drive letter. The below is some different ways to defrag from command prompt.

defrag c:

defrag c:\vol\mountpoint -w -f

defrag c: -a -v

defrag -c -v

3\. Exit Dos Window when defrag has completed., you will see the original prompt when it is finished = as in mine it's C:\Users\donboulton

 [Top](#Top)

## Clear temp files

Go to start then click run, and type in the test field %temp% and hit enter. When it open up highlight all temp files and delete.

## 32 & 64 bit Explorer

For all that are having Flash and SilverLight problems.

In Vista X64 you should have two versions of Internet Explorer a 32 bit version and a 64 bit version the 32 bit allows you to view Flash and SilverLight if installed while using your X86 = 32bit IE. You can forget using Flash and SilverLight on X64 and I do not see it coming soon. P. S. you do not need any other browsers like Firefox unless you want it for some reason. Firefox and all Mozilla and AOL browsers eat up your memory, and you cannot get it back by closing out these programs, you have to restart your computer.

You can Turn off UAC if you are the only one using your computer UAC is a pain, and if are the only one using your computer it should not be needed. Go To Start > Control Panel > User Accounts, Administrator Account >  At the Bottom of the left list click turn User Account Control on or off > New Window, uncheck UAC and click OK > Reboot, and/or restart computer for these setting to take effect.

## Regedit

Vista Registry Fixes,  on classic start menu, go to start and then run and type in the text box field regedit.exe and click OK, or enter on keyboard.

Caution the below is for Experts only! Pay attention to what you are doing and details.

Some tweaks Curtsey of
Regedit Tweaks below. and the links to the details on how to do each one of them below.

A ADDED VALUE!

### Turned off Defender

Links for regedit below.

[Added registry entry for 32 bit not 64 bit](http://www.liutilities.com/products/registrybooster/tweaklibrary/tweaks/11423/)

```sql
[Path: [HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\]
Location: Local Machine
Value Name: Windows Defender
Data Type: Key Enabled Value:
Disabled Value:
Action Type: Add an Entry Path: [HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender\]
Location: Local Machine
Value Name: DisableAntiSpyware Data Type: DWORD (DWORD Value)
Enabled Value: 1 >
Disabled Value: 0
Action Type: Add an Entry](http://www.liutilities.com/products/registrybooster/tweaklibrary/tweaks/11423/)
```

A Changed Value!

### Processor Scheduling

I set to 12

```sql
Path: [HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\PriorityControl\]
Location: Local Machine
Value Name: Win32PrioritySeparation
Data Type: DWORD (DWORD Value)
Enabled Value: 12
Disabled Value: 26
Action Type: Modified
```

[Top](#Top)

A Changed Value!

### Level 2 Cash settings

Processor Settings

Set to 400 for L2 1024 was 0 = HAL was sick. 

L2 common settings 80 for 128, 100 for 256, 200 for 512, 400 for 1024 and so on. Hal not reading AMD 64 X2 Level 2 cash.

Most Xp and Vista Machines have this setting to 0 Check AMD or Intel for you processor L2 cash and set this value accordingly.

```sql
Path: [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management\]
Location: Local Machine
Value Name: SecondLevelDataCache
Data Type: DWORD (DWORD Value)
Enabled Value: 80 / 100 / 200
Disabled Value: 0
Action Type: Modified
```

### Superfetcher Behavior

A Changed Value!

Superfetch is a new feature in window since vista that understands which applications you use most, and preloads these applications into memory, so your system is more responsive. Superfetch uses a complex prioritization scheme that can even differentiate which applications you use most often and when you use them. Now, you can change the way that superfetch behaves by making a change in the registry. This is helpful when you want to alter superfetch or disable superfetch completely.

For this, go to start > run menu, enter regedit and navigate to the registry path listed below. Now, right-click and modify the dword value enable prefetcher, in the right panel, to the suitable value given above. However, if you want to get the default value back, change the value data to 2\. The changes take effect after a restart or logoff.

My value was 3, I changed it to 1 as stated below!

Set a user defined value like "1" to alter the behavior of Prefetcher and click 'OK'.

```sql
Path: [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management\PrefetchParameters\]
Location: Local Machine
Value Name: EnableSuperfetch
Data Type: DWORD (DWORD Value)
Enabled Value:
Disabled Value:
Action Type: Modified
```

[Top](#Top)

### Prefetcher Behavior

A Changed Value!

Change the behavior of Prefetcher = I set it to 1 was set to 3\. Still allot of files in prefetch = 45MB after a couple of restarts it is only 32 MB setting's after registry tweak below. Prefetch size depends on how many programs you have used in Vista and how often they are used. If you have installed programs you no longer use or rarely use some programs, Vista puts some parts of these programs in the Windows > Prefetch folder and then loads them into memory for faster startup of these commonly used programs and sometimes all previously used programs. At startup the size of  the contents of this folder is taken out of you memory size so if it is 48MB it come off of your 2GB or whatever, right at startup. You can delete all the contents of this folder except the Sub-Folder named ReadyBoot = do not mess with this folder or its contents. If you use allot of Different Programs and do not like waiting for them to startup, do not change these values, as some delay in starting these programs could occur. If you have allot of Memory then I would not change these values like 4GB or more of RAM.

Prefetcher in most of the sites and tweaks you will find that they suggest that you do not mess with this feature, but it worked great for me. Tweak It for less memory usage.

```sql
Path: [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management\PrefetchParameters\]
Location: Local Machine Value Name: EnablePrefetcher
Data Type: DWORD (DWORD Value)
Enabled Value:
Disabled Value:
Action Type: Modified
```

A ADDED VALUE!

### Turn off NV Cache

Turn off for faster boot and resume time feature.

Added registry entry for 32bit not 64 bit

```sql
Path: [HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\]
Location: Local Machine
Value Name: NvCache
Data Type: Key Enabled Value:
Disabled Value: Action Type:
Add an Entry Path: [HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\NvCache\] Location: Local Machine Value Name: OptimizeBootAndResume
Data Type: DWORD (DWORD Value) Enabled Value: 0
Disabled Value: 1
Action Type: Add an Entry
```

[Top](#Top)

## More Registry, Tweaks

Get rid of the shortcut arrow on the Vista desktop. Frameworkx, it work's.

A Changed Value!

Tweak for the Registry Desktop Icon. The Icon Size is to large, my registry size was 36, I set it to 16. Worked great for me. I have dual 32 inch HDTV monitors with 1366 X 786 display resolutions so the icons are now a tolerable size. Smaller displays and resolutions 16 might be to small, and 16 is the smallest size, if you set it smaller than 16 will default and reset to 16.

"HKEY_CURRENT_USER\Control Panel\Desktop\WindowMetrics" and the key is "Shell Icon Size" was set at 36, I set it to 16.

A trick to change Icon sizes that works till reboot is. While on your desktop, hold down the CTRL key and scroll your mouse up for larger and down for smaller icons.  You can make your icons very small or extremely large.

### Rename Recycle Bin

To whatever you want.

Navigate to the following branch:

HKEY_CURRENT_USER \ Software \ Microsoft \ Windows \ CurrentVersion \ Explorer \ CLSID \ {645FF040-5081-101B-9F08-00AA002F954E}

Double-click **(default)** and replace the existing text ("Recycle Bin") with your preferred text.

[Top](#Top)

### Change Desktop Icon Spacing

Changing Desktop Icon Spacing in Vista, "ALL Versions", adjustments can be made to horizontal and vertical alignment spacing.

Steps for spacing desktop icons horizontal and vertical. Also you can change Desktop, Explorer and Most Vista Program Fonts and sizes here also.

1\. Right Click Desktop + Choose “Personalize”

2\. At the top + Choose "Window Color and Appearance".

3\. In the Window Color and Appearance Window, go to the bottom and click + Open classic appearance properties for more color options.

4\. In the Appearance Settings Window choose + Advanced.

5\. In the Advanced Appearance + Choose Item and select Icon Spacing (Horizontal) and to the right of the Item selection set the + spacing you desire =  Repeat this step 5 for Icon Spacing (Vertical), Then click OK in the Advanced Appearance Window , and the click Apply and then OK in the Appearance Settings Window and close the Personalization window and you are done.

I made the choice 16 for Horizontal and 30 for Vertical mainly because Recycle bin overlaps the bottom of other icons because of its large size, even though I made it smaller as in the above Visual Tweaks section of this document or you can put it on top or other icons and change Vertical to what ever works, CAUTION do not overlap icons as when you click on them it will activate both that are overlapped. Note this will change Icon spacing in Explorer also.  You will notice the size and spacing in the Print Screen of my desktop on bottom right next to the sidebar.

[Top](#Top)

A Changed Value!

### For Indexing problems

Or indexing will not start or stay running. = Indexing and search are file renaming problems

Set the registry value
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Search\SetupCompletedSuccessfully ( set it to 0 and try restarting the Windows Search service.

See this post in MSDN

If you want Multiple Operating Systems and Windows or DOS boot manager is not working for you or there is dual boot problems or Vista gets confused with the 32 bit OS. Then Install each on a different Hard Drive = "not a partition", and install the OS 32 bit or 64 bit on the Drive that does not have Vista 32 bit or 64 bit installed on it.

You have to shut down computer and unplug the drive you have Vista on, or visa versa if you have installed Vista already. Then start up your computer and hit delete or escape and go to the BIOS and set the drive you want to install as boot drive and clear the drive vista was on. This creates a situation where if you want to change OS's you have to go to BIOS each time and select the drive you want. There are allot of different bios's so you will have to know somewhat how to do this on your machine.

If you set them up in BIOS where they are complete different separate OS's there is some advantages and the only disadvantage is having to go to the Bios each time to change OS's

Now my Vista Home Premium is smoking Fast and stable, quick startup and shutdown, but renaming files in explorer and some moving of files is still slow = Microsoft has not fixed this for their own Vista Computers!

If you use the Windows Explorer shortcut on your Start Menu, you probably notice that it always opens in the same window. For example, if you use Windows Vista, Windows Explorer always opens to the Documents folder.

If you find this to be an annoyance, Explorer always opening to the Documents folder, you can configure it to open to a folder of your choice. You can do so by editing the properties of the Windows Explorer shortcut.

Open [Windows Explorer](http://www.lockergnome.com/windows/2007/08/27/start-explorer-in-a-different-folder-in-windows-vista/)and locate your Start Menu folder. Right click the shortcut to Windows Explorer and click Properties. From the Shortcut tab, change the target so it reads as follows: %systemroot%\explorer.exe /n, /e, x:\folder where x:\folder is the path to the folder that you want Explorer to open in. Click OK. Now when you launch Windows Explorer from the Start Menu, it will open in the folder that you specified.

This is located in my computer in the Explorer Location Bar at:

[Explorer Location Bar](C:\Users\donboulton\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Accessories)

Just click your Explorer location Bar and it will give you the Exact Location.

For this to Work you have to put a shortcut to Windows Explorer on your desktop, it will not work if you right click on the start bar button and click on explorer it goes to its default location.

YOU CAN PUT AS MANY OF THESE EXPLORER SHORTCUTS ON YOU DESKTOP AS YOU WANT.

Make sure after you create each one you rename it. I call One D for D Drive I call on Doc for documents on another Drive or Folder that My Documents are stored; est.

Right Click the Explorer shortcut and a drop down list will appear go to send to and create a shortcut to the desktop.

Then you will see the shortcut to Windows Explorer, right click on it and you will see target, change you link in this field.

The Shortcut I used was to a different drive, as in drive D: = I changed it to = %SystemRoot%\explorer.exe /n /e, D:\Downloads

If you mess up it will default to its original location.

Sometimes if you use a different drive as explained above for [Loading Multiple OS's](#Multiple OSs) you can save files, and all downloads on that separate Hard drive that gives you ability or can help eliminate the problems of downloading infected files and malware, thus helping separate from your OS from infection.

This can be done in my system to %SystemRoot%\explorer.exe /n, /e, E:\Downloads, or whichever drive letter you have for the separate Hard Drive and/or Partition's, better on a separate Hard Drive.

Thanks To:, Dana Huggins at [Windows Fanatics](http://www.lockergnome.com/windows/).