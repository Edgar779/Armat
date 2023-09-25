#!/bin/bash

#remove everything from admin and client
rm -R -f /var/www/armat/admin/*
rm -R -f /var/www/armat/webapp/*
rm -R -f /var/www/armat/dashboard/*
rm -R -f /var/www/armat/api/*
rm -R -f /etc/nginx/sites-enabled/nginx.config
rm -R -f /etc/nginx/sites-enabled/armat.nginx
