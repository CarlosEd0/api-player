## 1 Requisitos Prévios

- Node.js e npm instalados. Você pode baixá-los em [nodejs.org](https://nodejs.org/).
- MySQL: A configuração é local, mas pode ser facilmente reconfigurada no arquivo backend/config/config.json
    - [mySQL download](https://dev.mysql.com/downloads/installer/)
    - [Interface Workbench](https://dev.mysql.com/downloads/workbench/)
	
### 1.1 Configure o Backend NODE + EXPRESS

	Faça o clone do repositório

	```bash
	git clone https://github.com/CarlosEd0/api-player.git
	```
### 1.2 Configure o Backend NODE + EXPRESS
```powershell

cd api-player/backend

npm install 
npx sequelize db:create
npx sequelize db:migrate
```
### 1.3 Para rodar a API no modo DESENVOLVEDOR é necessário o seguinte comando no Powershell
```powershell

npx nodemon index.js
```
