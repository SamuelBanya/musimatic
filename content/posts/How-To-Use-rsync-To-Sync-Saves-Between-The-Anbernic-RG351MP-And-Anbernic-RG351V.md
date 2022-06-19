+++
title = "How To Use 'rsync' To Sync Saves Between The Anbernic RG351MP And Anbernic RG351V"
author = ["Samuel Banya"]
date = 2022-06-18T00:00:00-04:00
draft = false
+++

I finally figured out how to use 'rsync' so that I can sync battery saves between two handheld retro handheld devices I bought last year, which include the 'Anbernic RG351MP' and 'Anbernic RG351V':

-   <https://anbernic.com/products/anbernic-new-rg351mp-retro-games-built>
-   <https://anbernic.com/products/anbernic-new-rg351v>

'rsync' is basically a program that allows you to sync files between two Linux machines. You can use it for backing up files, entire harddrives, websites, you name it.

The cool application that I am going to explore in this blog post is how to make 'rsync' work for you so that you can seamlessly backup saves between your devices.

NOTE:

-   This guide assumes you know how to create 'ssh' keys on different machines
-   Also, this guide assumes you are running these commands on a Linux laptop or desktop computer since its just easier with Linux to do this kind of admin tasks on Linux than other OS's
-   If you ALREADY have existing saves on your retro handheld, then I would say follow this blog post first to set everything up, and then placed the SD card of the retro handheld in your Linux computer to then move over the remaining saves to the '/saves' folder you setup accordingly.

What you will need to have the following:

-   A central server that is capable of running 'rsync': This could include a 'Raspberry Pi', old Dell Optiplex or laptop, etc, basically anything that could run Linux on your local LAN network
-   An Anbernic RG351V, an Anbernic RG351MP, (or both like in my case)
-   Also, make sure that you're using the latest version of '351Elec' on the handheld devices ("Pineapple Forest" is what I'm using for this guide)
-   Ideally, a Linux laptop or desktop computer that you can ssh into all of these devices so you don't have to just use the central server to do all this

With this in mind, let's get started.

First, install 'rsync' on the central Linux server you plan on using.

In my case, I have an old Dell Optiplex that's running 'Fedora Server' on my local LAN network.

I simply used this command to install 'rsync', but you might need to modify this command depending on what Linux distro you're using:

```bash
sudo dnf install rsync
```

The next step is to pick a file path location where you want to dump your emulator saves to. In my case, I have a harddrive mounted to '/media/REDHDD', and used the '/media/REDHDD/EmulatorsFolder/saves' directory. Keep this in mind for the 'rsync' commands later in the blog post.

After that, you will then need to be able to 'ssh' into each of the handheld devices. Here is the default 'ssh' command with its associated password for the default 'ssh' user on the 'Anbernic RG351MP' and 'Anbernic RG351V' devices. If you have BOTH the 'Anbernic RG351V' and 'Anbernic RG351MP', please open up two separate terminal windows to do the following commands in tandem:

NOTE: Any time you see a '#' sign, this is just a comment within the script below telling you what to enter

Anbernic RG351MP version of the 'ssh' command:

```bash
ssh root@rg351mp

# NOTE: Enter in the password as the following without the hashtag:
# 351elec
# Then, press the 'Enter' key
```

Anbernic RG351V version of the 'ssh' command:

```bash
ssh root@rg351v

# NOTE: Enter in the password as the following without the hashtag:
# 351elec
# Then, press the 'Enter' key
```

Now that we are connected into the retro handheld via 'ssh', you'll want to do the following command (NOTE: If you have BOTH Anbernic devices, repeat this command in each separate terminal window):

```bash
mkdir saves
```

Now, let's change our focus to 'Retroarch' on the retro handheld devices themselves by doing the following steps:

-   Turn on the given retro handheld, let '351Elec' boot successfully, and then navigate to 'Tools &gt; Start 64bit RetroArch'.
-   Once RetroArch starts up, go to 'Settings &gt; Directory &gt; Save Files'.
-   Click on this menu option, and change it to '/storage/saves'.
-   Then, go to 'Settings &gt; Saving &gt; Write Saves to Content Directory'.
-   Click on this menu option once, and make sure it is set to 'OFF'.
-   Then, go to 'Main Menu &gt; Configuration File &gt; Save Current Configuration', and click this menu option to save your Retroarch configuration.

Now for the testing portion of this blog post:

Pick either of your retro handhelds and pick a game where you know that the game will save internally. In my case, I used 'Super Mario World', and deliberately beat a previous 'Ghost House' level in a different section of the map to force the game to prompt me to 'Save and Continue'.

Now that we know we have saved our game accordingly, we want to sync our latest battery save to our central file server accordingly.

Here are the related 'rsync' commands you'll need to sync up your save to your file server, so note, PLEASE pay attention to what you're doing.

Here are the 'rsync' commands to sync your game save up to the central file server:

NOTE:

-   Please adjust the second portion of the command, '/media/REDHDD/EmulatorsFolder' accordingly to whatever file path you want to place them onto your file server, since this is just what I personally do for my saves:

ANOTHER NOTE:

-   This is what tripped me up when I first figured out the 'rsync' command in this scenario, but if you think about it, this is more of an 'rsync' file path type idea:
-   The rsync command's second argument file path directory is always one directory up from what you think it should be:
-   Ex using the first set of commands below to sync file from the retro handheld UP to the file server:
-   Instead of using '/media/REDHDD/EmulatorsFolder/saves' as the second argument, I had to instead use '/media/REDHDD/EmulatorsFolder' instead
-   Ex using the second set of commands below from the file server DOWN to the retro handheld:
-   Instead of using 'root@rg351mp:/storage/saves' as the second argument, I had to instead use 'root@rg351mp:/storage' as the second argument

From The RG351MP To File Server:

```bash
rsync -av root@rg351mp:/storage/saves /media/REDHDD/EmulatorsFolder
```

From RG351V To File Server:

```bash
rsync -av root@rg351v:/storage/saves /media/REDHDD/EmulatorsFolder
```

Then, to sync them from the file server to the other handheld, you can then use these commands accordingly:

NOTE: Please adjust the second portion of the command, '/media/REDHDD/EmulatorsFolder' accordingly to whatever file path you want to place them onto your file server, since this is just what I personally do for my saves:

From File Server To RG351MP:

```bash
rsync -av /media/REDHDD/EmulatorsFolder/saves root@rg351mp:/storage
```

From File Server To RG351V:

```bash
rsync -av /media/REDHDD/EmulatorsFolder/saves root@rg351v:/storage
```

And that's it!

It took a while for me to figure out, but honestly, this is going to be awesome, especially if I utilize some Bash aliases accordingly in my '~/.bashrc' config accordingly.

Here's an example of how to use Bash aliases in this case to make your life easier

I could create a 'mpup' Bash alias to run the first command on the 'RG351MP' to sync UP to the file server:

```bash
alias mpup=rsync -av root@rg351mp:/storage/saves /media/REDHDD/EmulatorsFolder
```

I could also create a "vup" Bash alias to run the first command on the 'RG351V' to sync UP to the file server:

```bash
alias vup=rsync -av root@rg351v:/storage/saves /media/REDHDD/EmulatorsFolder
```

I could then make the reverse 'vdown' Bash alias to bring the latest saves from the file server DOWN to the 'RG351V'

```bash
alias vdown=rsync -av /media/REDHDD/EmulatorsFolder/saves root@rg351v:/storage
```

I could also then make the reverse 'mpdown' Bash alias to bring the latest saves from the file server DOWN to the 'RG351MP'

```bash
alias mpdown=rsync -av /media/REDHDD/EmulatorsFolder/saves root@rg351mp:/storage
```

You would then just need to place these commands into your '~/.bashrc' config, and you would be good to go!

You can find these Bash alias commands above, as well as any other related alises I've used here, so feel free to steal them to use them in your own dotfiles on your machine:

-   <https://github.com/SamuelBanya/dotfiles/blob/main/bash/.bashrc>

Hope this helps someone out who has Anbernic retro handheld devices like me!

~ Sam