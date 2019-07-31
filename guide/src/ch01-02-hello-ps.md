# Hello, PS

We've installed PSudo, It's time to try!
Traditionally, When starting a new programming language,
we write down a little program that prints `Hello, world!` on a terminal.
So, Let's try it!

> Note: This book assumes you to know command-line interface.
> This book won't limit you to use editor or development tools
> and place the file where. Just develop in your favorite environment.

## Create a Folder

> Note: PSudo never requires folder because codes and compiler configurations are stored in a single file.
> But we recommend you to create a folder and store all the PSudo codes on it. Because it is easier to organize.

First, create a folder where store code.
It's not a matter where to place code,
But this book assumes that you're creating a `psudo-solutions` folder in your home directory.
Open a terminal and enter following commands to create the folder.

for Linux, macOS, Windows:

```sh
mkdir ~/psudo-solutions
cd ~/psudo-solutions
```

for Windows CMD:

```cmd
mkdir "%USERPROFILE%\psudo-solutions"
cd /d "%USERPROFILE%\psudo-solutions"
```

## Write and Run Your First Solution

Next, Make a new source file and call it `hello-world.ps`.
PSudo file should end with `.ps` extension.
If you're using more than one word on your file name,
use the hyphen to separate them.

Now open the file and write down below codes.

```psudo
output "Hello, world!"
```

Save the file and go back to your terminal window.
Then run following command.

```sh
psudo run hello-world.ps
```

Whatever your OS is. It will print `Hello, world` on your terminal.
If you didn't see these output,
Go to [Chapter 1: Installation - Troubleshooting](./ch01-01-installation.md#troubleshooting) part to get help.

However, if you did these jobs successfully, Congratulations!
You've written a PSudo Solution!
Which means, from now on you're _PSudoer_ - welcome!
