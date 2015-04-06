# angularjs-practice
Start working with AngularJS



###Installation:

Get the source code:

```
git clone git@github.com:GreenGlobalDevs/angularjs-practice.git
```

Then, please create your own branch and switch into there, so that you can do our homework without affecting to master branch.

```
git branch YOURNAME
git checkout YOURNAME
```

###Configuration

After cloning this repository, you would need to add a fake domain within your hosts file. For example:

```
127.0.0.1   localhost
127.0.1.1   bella-mint.com  bella-mint

# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters

127.0.0.1 angularjs.me
```


You also need to add a new config file into your nginx/site-enabled folder, for example:

```
server {
    listen       80;
    server_name  angularjs.me;

    charset      utf-8;

    root /var/www/html/angularjs-practice/;
    index index.php index.htm index.html;

    location / {
        index  index.php index.html index.htm;
    }

}
```

For the case you are using Apache server:

```
Listen 80

NameVirtualHost *:80

<VirtualHost *:80>
    DocumentRoot /var/www/html/angularjs-practice/
    ServerName angularjs.me
</VirtualHost>
```

If everything is OK, it would work for you.


###Data source

REST API --> https://ng-api-ndaidong.c9.io/
Guide: https://github.com/GreenGlobalDevs/ng-api/blob/master/README.md

