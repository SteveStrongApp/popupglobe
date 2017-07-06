
#  first build app using
#  ng build --prod


FROM nginx
COPY dist /usr/share/nginx/html
EXPOSE 80

# docker build -t wingspan/globe .
# docker run -p 80:80 -it wingspan/globe
# localhost:80

# docker run -p 80:80 -d wingspan/globe
# localhost:80 
