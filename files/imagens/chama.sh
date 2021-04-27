#!/bin/sh

#Copiar arquivo de tradução da home
cp /usr/share/jitsi-meet/images/app.bundle.min.js /usr/share/jitsi-meet/libs/

#Correções em arquivos html fora do lugar
cd /usr/share/jitsi-meet/static
ln -s ../head.html head.html
ln -s ../base.html base.html
ln -s ../title.html title.html

#Copiar arquivos de config para jvbs
cp /usr/share/jitsi-meet/images/jvbs.conf /config/nginx/
