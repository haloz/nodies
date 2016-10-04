Easyily spawn the latest nodies app
=====================
With this Vagrantfile you can automatically create a VM that runs the latest nodies app. This saves the hassle to setup a virtualbox VM yourself, which is especially useful and time saving when working on the same codebase with a whole team.

What it does
-------------
This essential does:
* create an unbuntu VM. This is basically a single virtualized server / cluster node that can run a web application.
* install docker
* fetch the latest docker image build of the nodies app from the automatic build in docker hub
* start the application

Steps to set it up
-------------
To get this setup in place I did these steps:
* on the host machine install VirtualBox, the VirtualBox Extension Pack and a SSH client like putty
* on the host also install Vagrant by following https://www.vagrantup.com/docs/installation/
* create an own folder for a new box, browse there via cmd-line and setup a new box (see https://www.vagrantup.com/docs/getting-started/boxes.html)
```
vagrant init
```
this creates a new Vagrantfile
* our base image is the current development version of ubuntu (15.10 for me). There's a box for that in the hashicorp atlas: https://atlas.hashicorp.com/boxcutter/boxes/ubuntu1510
* change the Vagrantfile to be based on that image:
```
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.box = "boxcutter/ubuntu1604"
    config.vm.network "forwarded_port", guest: 20080, host: 20080
    config.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.memory = "2048"
    end
    config.vm.provision "docker" do |d|
        d.run "haloz/nodies",
            daemonize: true,
            args: "-p 20080:20080"
    end
end
```
* this Vagrantfile includes a docker provisioning which automatic installs docker, pulls our application from docker hub and runs it with parameters for mapping the network port. More on provisioning with docker here: https://www.vagrantup.com/docs/provisioning/docker.html
* boot up the VM via:
```
vagrant up
```
* you should now be able to access the app from your host computer via http://127.0.0.1:20080/


What's next?
-------------
* setup automatic update when the docker image on docker hub is change - for example with watchtower (https://www.ctl.io/developers/blog/post/watchtower-automatic-updates-for-docker-containers/)
* map the shared folders to the source code so that a developer can fiddle with the code directly in the docker container. On the developer's box this folder can then commited to his github repo - which then again triggers the automatic build for the docker container
