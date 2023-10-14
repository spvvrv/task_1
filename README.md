# Task_1

## Подготовка к работе

1. Установка требуемых пакетов: `npm i`;
2. Сборка версии разработки, запуск сервера и открытие сайта в браузере: `npm run serve`;
3. Сборка версии разработки: `npm run dev`;
4. Сборка итоговой версии: `npm run build`;
5. Подготовительные действия перед деплоем: `npm run predeploy` (вызывается автоматически во время деплоя, см. п.6);
6. Деплой проекта на gh-pages: `npm run deploy`.

## Сборка и запуск docker
1. docker build -t task_1 -f docker/Dockerfile .
2. docker-compose -f docker/docker-compose.yml up -d

