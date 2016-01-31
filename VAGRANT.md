Easyily spawn the latest nodies app
=====================
With this Vagrantfile you can automatically create a VM that runs the latest nodies app. 

What it does
-------------
This essential does:
* create an unbuntu VM. This is basically a single virtualized server / cluster node that can run a web application.
* install docker
* fetch the latest docker image build of the nodies app from the automatic build in docker hub
* start the application
* (setup automatic update & start at VM start time)

Steps to set it up
-------------
To get this setup in place I did these steps:
* on the host machine install VirtualBox, the VirtualBox Extension Pack and a SSH client like putty
* on the host also install Vagrant by following https://www.vagrantup.com/docs/installation/
* create an own folder for a new box, browser there via cmd-line and setup a new box (see https://www.vagrantup.com/docs/getting-started/boxes.html)
```
vagrant init
```
this creates a new Vagrantfile
* our base image is the current dev of ubuntu (15.10 for me). There's a box for that at the hashicorp atlas: https://atlas.hashicorp.com/boxcutter/boxes/ubuntu1510
* change the Vagrantfile to be based on that image:
```
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.box = "boxcutter/ubuntu1510"
    config.vm.network "forwarded_port", guest: 20080, host: 20080
    config.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.memory = "2048"
    end
    config.vm.provision "docker" do |d|
        d.run "haloz/nodies",
            args: "-d -p 20080:20080"
    end
end
```
* boot up the VM via:
```
vagrant up
```
* you should now be able to access the app from your host computer via http://127.0.0.1:20080/