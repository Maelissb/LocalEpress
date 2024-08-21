# Utilise une image Node.js comme base
FROM node:18-alpine

# Crée un répertoire de travail dans le conteneur
WORKDIR /app/backend

# Copie le package.json et le package-lock.json dans le conteneur
COPY package.json .

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application dans le conteneur
COPY . .

# Expose le port sur lequel le service écoutera
EXPOSE 3000