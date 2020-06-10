sudo apt-get install curl
curl -fsSL https://deno.land/x/install/install.sh | sudo DENO_INSTALL=/usr/local sh

deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts


## add 