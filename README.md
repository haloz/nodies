nodies
======

Nodies - a Node.JS based movie database

Running with Vagrant
--------------------
* install Vagrant
* git clone this repo to a directory
* open a terminal in that directory and do
```
vagrant up
```
* when ready booting the app should run at 127.0.0.1:20080 :)

Run it directly
--------------------
* node_modules/forever/bin/forever --watch server/server.js &

without forever:

* nodejs server/server.js
