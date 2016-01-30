FROM node:5-slim
RUN mkdir -p /opt/apps/nodies
WORKDIR /opt/apps/nodies
RUN git clone -b develop https://github.com/haloz/nodies.git /opt/apps/nodies
RUN npm install
EXPOSE 20080
CMD node_modules/forever/bin/forever --watch server/server.js &

