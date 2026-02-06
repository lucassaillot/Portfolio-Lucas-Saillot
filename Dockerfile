FROM nginx:alpine

# Copier vos fichiers HTML dans le dossier servi par nginx
COPY . /usr/share/nginx/html/

# Exposer le port 80
EXPOSE 80