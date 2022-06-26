+++
title = "How I Created An 'apps.musimatic.xyz' Subdomain To House My Portfolio Projects"
author = ["Samuel Banya"]
date = 2022-06-25T00:00:00-04:00
draft = false
+++

I thought about 'where' to host my portfolio projects, and despite there being some great alternatives like 'Netlify' and 'Heroku' that do a lot of the heavy lifting for you, I went ahead and took up the challenge to self-host my own projects subdomain.

I did some research and found this great blog post on the topic of how to host subdomains within the same website on a VPS running 'nginx':

-   <https://adamtheautomator.com/nginx-subdomain/>

I then proceeded to go to 'epik.com' which I use as my domain registrar, signed into my account, and modified the 'DNS Records' section accordingly for the 'musimatic.xyz' domain so that I had the following two domain records to handle 'AAAA' for 'IPv6' and 'A' for 'IPv4':

| Host | Type        | Points To                 | TTL |
|------|-------------|---------------------------|-----|
| apps | AAAA (IPv6) | 2604:a880:800:14::11:6000 | 30  |
| apps | A (IPv4)    | 104.131.2.109             | 30  |

I then created a related directory, '/var/www/apps' on the Digital Ocean VPS running the 'musimatic.xyz' website itself.

I then changed the ownership of this same directory with this command:

```bash
sudo chown -R www-data:www-data /var/www/apps/
```

I then created an 'index.html' file in '/var/www/apps':

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>Document</title>
    </head>
    <body>
        <h1>Welcome To 'apps.musimatic.xyz'</h1>
    </body>
</html>
```

I then placed this into the related nginx config in '/etc/sites-available/apps':

```bash
server {
       listen [::]:80;
       listen 80;

       # Path to default 'index.html' page for 'apps.musimatic.xyz/index.html' page:
       root /var/www/apps;

       # Define the index page to use:
       index index.html index.html;

       # Allow Nginx to use the empty name:
       server_name apps.musimatic.xyz;

       location / {
       # Return a 404 error for instances when the server
       # requests for untraceable files and directories.
       try_files $uri $uri/ =404;
       }
}
```

I then tried to test the config with this command:

```bash
root@musimatic:/var/www/apps# sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

I then created this symbolic link accordingly:

```bash
sudo ln -s /etc/nginx/sites-available/apps /etc/nginx/sites-enabled/
```

I then restarted Nginx with this command:

```bash
sudo systemctl restart nginx
```

I then ran the following 'certbot' command as the 'root' user to generate a corresponding SSL certificate for the 'apps.musimatic.xyz' domain:

```bash
certbot
```

I then used the following prompts for the 'certbot' wizard:

-   2: apps.musimatic.xyz
-   2: Redirect - Make all requests redirect to secure HTTPS access.

I then was greeted with a message stating that this process was successful, and I am now able to see the basic page at 'apps.musimatic.xyz' without a problem!

Going forward, I plan on being able to deploy a 'React' website that hosts my projects site on that section of the site, so it should be pretty cool to see where it goes next. At least the heavy lifting of the networking side of this is complete, so that should be good going forward.

For now, I have created a corresponding GitHub repo for the 'apps' portion of my website which can be found here:

-   <https://github.com/SamuelBanya/musimaticapps>

Also, if I plan on creating related '&lt;a&gt;&lt;/a&gt;' anchor tags on that '/var/www/apps' subdomain for 'index.html' for any specific projects, I noted the following as an example:

-   Since I have 'root /var/www/apps;' present in my Nginx config, I could then use either of the following links in the future within related anchor tags so that I can refer to any specific project pages themselves
-   Example future project anchor tag options to use within an anchor tag:
-   <https://apps.musimatic.xyz/jsprojectwebsites/project1/>
-   <https://apps.musimatic.xyz/jsprojectwebsites/project1/index.html>
-   I can even limit it further to JUST be the specific subdomain due to link shortening that's possible within HTML links themselves to be a relative file path:
-   'jsprojectwebsites/project1/index.html'

One step at a time, but a definitely great (and somewhat involved) step forward has been taken today.

~ Sam