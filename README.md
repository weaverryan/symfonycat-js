# Stripe: Killer Payment Processing + ??? = Profit

This repository holds the script, code and secrets to getting
rich quick (hint: lottery) for the KnpUniversity [Stripe Tutorial](http://knpuniversity.com/screencast/stripe).

## Setup

### 1) Install the vendor libs with Composer!

[Download Composer](https://getcomposer.org/) either globally or right
into *this* directory, and then (from this directory), run:

```bash
php composer.phar install
```

This will iteractively ask you for some settings - like `database_host`.
Fill those in. If you make a mistake - just modify `app/config/parameters.yml`
afterwards!

If you get an error about "Unknown Database" - it's cool! Ignore it for now :)

### 2) Bootstrap the database

To get your database up and running, execute the following commands:

```php
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
php bin/console h:d:f:l
```

If you get any errors, check your database settings in `app/config/parameters.yml`.

### 3) Start your web server

We recommend using the built-in PHP web server. To start it, run:

```bash
php bin/console server:run
```

Then, load the site at:

    http://localhost:8000
