+++
title = "How I Modified My Emacs Config To Be Somewhat Useful For 'lsp-mode'"
author = ["Samuel Banya"]
date = 2022-06-24T00:00:00-04:00
draft = false
+++

I have been consistently frustrated with trying to use Emacs for web development since 'lsp-mode' is really not that easy at all to set up.

The typical suggested workflow is to just use 'use-package' in your Emacs config to allow 'lsp-mode' to be installed, followed by a lot of configuration in terms of how you want 'IDE-like' qualities to be added to Emacs.

The problem that I found was that the language servers by default were automatically installed no matter what I did. The problem with this is that you really don't know what 'NodeJS' is going to install for you, nor any other terminal utility based package manager is going to pull in for you.

I went through so many iterations for the past few months to get this right, and really couldn't find any relief for this to the point where I was even debating checking out 'Spacemacs' or 'Doom Emacs' again just for sane defaults for 'lsp-mode'.

However, through a ton of research, I found these two very web development centered Emacs videos on how to configure it with 'lsp-mode', and it found a nice sweet spot in my Emacs config as a result:

-   Setting up Emacs for Typescript React projects with lsp-mode and prettier (<https://www.youtube.com/watch?v=ELOmzi0RW_8>)
-   Emacs - Updating init.el for Typescript React (<https://www.youtube.com/watch?v=FIW31ivaxjg>)

I also got rid of a few things in my config I just don't flat out use in my Emacs workflow as well.

Overall, getting closer to what I want. I even was able to modify fonts accordingly based upon the system in which Emacs runs as well, so that was cool to have too.

End results of my changes can be found here:

-   <https://github.com/samuelbanya/samsemacs>

~ Sam