# Инструкция по запуску проекта

## Установка зависимостей

### Установите глобально dotenv-cli и npx

### Перейдите в директорию с проектом в терминале и выполните команду: npm i
```
npm i
```

## Переменные окружения

#### Создайте файл .backend.env в директории /environments по примеру /environments/.backend.env-example

```
JWT_ACCESS_SECRET=secret                                        - секрет для токена доступа
JWT_REFRESH_SECRET=secret                                       - секрет для рефреш токена
JWT_ACCESS_LIFE_TIME=15m                                        - время жизни токена доступа
JWT_REFRESH_LIFE_TIME=7d                                        - время жизни рефреш токена

UPLOAD_DESTINATION='./upload'                                   - директория для загрузки файлов

PORT=3333                                                       - номер порта для запуска сервера
HOST=localhost                                                  - хост сервера

DATABASE_URL=postgres://admin:test@localhost:5432/fit-friends   - url для подключения к базе данных

MAIL_SMTP_HOST=localhost                                        - host почтового сервиса
MAIL_SMTP_PORT=5025                                             - port почтового сервиса
MAIL_USER_NAME=admin                                            - пользователь почтового сервиса
MAIL_USER_PASSWORD=test                                         - пароль пользователя почтового сервиса
MAIL_FROM=<noreply@notify.fit-friends.local>                    - от кого
```

## Запуск Docker

### 1. Запустите десктопное приложение Docker Desktop

### 2. Разверните docker контейнер:

```
docker-compose.yml

docker-compose up -d
```


## Запуск проекта

### Выполните генерацию типов для Prisma

```
nx run backend:db-generate
```

### Выполните миграцию в базу данных

```
nx run backend:db-migrate
```

### Выполните начальное заполнение базы данных

```
nx run backend:db-fill
```

### Для запуска сервисов (frontend, backend), введите следующую команду в терминале:

```
npm run start
```

# Сценарии

## Backend

### Генерация типов для Prisma

```
nx run backend:db-generate
```

### Валидация схемы Prisma

```
nx run backend:db-validate
```

### Сброс базы данных

```
nx run backend:db-reset
```

### Миграция в базу данных

```
nx run backend:db-migrate
```

### Запуск сервера

```
nx run backend:serve
```

### Проверка проекта линтером

```
nx run backend:lint
```

### Запуск юнит тестов

```
nx run backend:test
```

### Сборка проекта

```
nx run backend:build
```

## Frontend

### Запуск клиента

```
nx run frontend:serve
```

### Проверка проекта линтером

```
nx run frontend:lint
```

### Сборка проекта

```
nx run frontend:build
```

# Документация

## С документацией можно ознакомиться после запуска проекта, по следующему веб-адресу:

```
host = localhost
port = 3333

http://{host}:{port}/spec
```

