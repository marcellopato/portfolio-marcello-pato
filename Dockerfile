FROM node:20-alpine

WORKDIR /app

# Instalar dependências
COPY package.json package-lock.json* ./
RUN npm install

# Copiar os arquivos do projeto
COPY . .

# Expor a porta que encontramos livre (3000)
EXPOSE 3000

# Iniciar o servidor de desenvolvimento
CMD ["npm", "run", "dev"]
