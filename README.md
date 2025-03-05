# Instrucciones de instalación

1. Clonar el repositorio
2. En el folder del proyecto ejecutar el comando:

```bash
composer install
```

* Si te da errores, asegúrate de que el archivo **`php.ini`** tiene descomentadas las extensiones:
    * zip
    * curl
    * fileinfo
    * mysqli
    * pdo_mysql

3. Ejecutar el proyecto con el comando:

```bash
php artisan serve
```

## Posibles errores:

* Si tienes el error sobre el "key", ejecuta el comando:

```bash
php artisan key:generate
```

* Si te da un error 500 al abrir el server
  * Asegúrate de tener el archivo **`.env`** configurado:

**Archivo .env**:

```config
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:pnIers3jKUMxpW1XFH7xfs71ndKOO+jrSeFRCAY5yVg=
APP_DEBUG=true
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
# APP_MAINTENANCE_STORE=database

PHP_CLI_SERVER_WORKERS=4

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=

SESSION_DRIVER=file
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
# CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_SCHEME=null
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

VITE_APP_NAME="${APP_NAME}"
```
