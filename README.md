# test-deno
My first proyect with DENO

* first step: you need install deno and config PATH
```sh
sudo apt-get install curl
curl -fsSL https://deno.land/x/install/install.sh | sudo DENO_INSTALL=/usr/local sh
```
* second step: install denon if you don´t want to restart server when you stay develop.
```sh
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
```
* third step: create and configure .env file with your postgresql server credentials, take .env.sample as an example

* finally: start with this command
```sh
denon run --allow-read --allow-env --allow-net server.ts
```
