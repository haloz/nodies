Let's dockerize a Node.js app!
================

* On your host PC install Virtualbox and sourcetree
* Create a new ubuntu 64bit VM that uses a network bridge instead of NAT. This makes running stuff on the VM much easuer via shell/putty connection
* Install a minimal ubuntu 64bit server installation that has SSHd server running
* Create a github account if you don't have one yet and fork a node.JS project, i.e. from by project https://github.com/haloz/nodies.git. I'll just call your form "forkies" for now :)
* install docker on the VM via the tutorial from https://docs.docker.com/linux/
* go through the whole tutorial https://docs.docker.com/linux/. Be sure that you create a dockerhub account.
* do the automatic build tutorial at https://docs.docker.com/docker-hub/builds/
* configure the automatic build for the develop
* verify that your forkies github repo is configured to send webhooks to docker: https://docs.docker.com/docker-hub/github/*github-service-hooks
* make a commit on the forkies github repo you did on the master branch. You can read a bit about it here: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/. You have to modify the dockerfile:
```
FROM node:latest
RUN apt-get install -y git git-core
RUN rm -rf /opt/apps/forkies; true
RUN mkdir -p /opt/apps/forkies
WORKDIR /opt/apps/forkies
RUN git clone -b develop https://github.com/haloz/forkies.git /opt/apps/forkies
RUN npm install
EXPOSE 20080
CMD node_modules/forever/bin/forever --watch server/server.js
```

* pull and run the develop docker image to your vm: 
```
docker run -d -p 20080:20080 haloz/forkies
```
* Browse to the IP address of your vm on port 20080 and you should see the app running (ifconfig helps to find the IP addr)

