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
