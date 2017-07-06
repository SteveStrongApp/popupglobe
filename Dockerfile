
#  first build app using
#  ng build --prod


FROM nginx
COPY dist /usr/share/nginx/html


# docker build -t wingspan/globe .
# docker run -p 3000:80 -it wingspan/globe
# localhost:3000

# docker run -p 3000:80 -d wingspan/globe
# localhost:3000 

# docker build -t stevestrongbah/globe .
# docker push stevestrongbah/globe

