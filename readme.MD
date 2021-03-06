# Playbook p/instalação de stack Jitsi

## Introdução

Instalação do stack jitsi para utilização no serviço de videoconferência do Serpro

# Arquitetura basica

![](docker-jitsi-meet.png)

## Instalação

### Em ambiente de testes

Com vagrant:

```sh
vagrant up
```

Com Ansible rodando localmente (usuário root):

Obs. : é necessário trocar chaves ssh previamente

**Instalação parâmetros default:**
```sh
ansible-playbook -i localhost, -u root main.yml
```

**Instalação utilizando parâmetros básicos customizados:**

Obs. : O comando a seguir utiliza dados fictícios.
```sh
ansible-playbook -i localhost, -u root \
  -e PUBLIC_URL=https://videoconfqualquer.serpro.gov.br \
  -e DOCKER_HOST_ADDRESS=148.166.15.6 \
  -e ENABLE_LOBBY=1 \
  -e ENABLE_LETSENCRYPT=1 \
  -e LETSENCRYPT_DOMAIN=videoconfqualquer.serpro.gov.br \
  -e LETSENCRYPT_EMAIL=email@mail.com \
  -e ENABLE_HTTP_REDIRECT=1 \
  -e ansible_python_interpreter=/usr/bin/python3  \
  -e IMAGEM_TAG=stable-5142-3 \
  /usr/src/deploy-jitsi-server/main.yml
```

## Configuração

### Parâmetros

Parâmetros básicos:

* `HTTP_PORT`: Porta para acesso http. Valor padrão 80
* `HTTPS_PORT`: Porta para acesso https. Valor padrão: 443
* `TZ`: Zona de fuso horário. Valor padrão: America/Fortaleza
* `PUBLIC_URL`: URL pública de acesso ao serviço: Padrão: https://chama-homologacao.serpro.gov.br
* `DOCKER_HOST_ADDRESS`: Endereço IP do servidor. Valor padrão: o IP definido no inventário do ansible
* `ENABLE_LOBBY`: Habilitar funcionalidade de lobby. Valor padrão: 1
* `instalar_repositorio_serpro`: Instalar repositório Serpro. Valor padrão: false
* `instalar_repositorio_docker`: Instalar repositório Docker. Valor padrão: false
* `REFLETORA_IP`: Endereço IP do servidor refletor ASSISTE. Valor padrão: 161.148.200.152
* `REFLETORA_PORTA`: Porta IP do servidor refletor ASSISTE. Valor padrão: 1935


Parâmetros avançados:
* `IMAGEM_TAG`: Tag de versionamento das imagens jitsi a ser instaladas. Valor padrão: stable-5142
* `ENABLE_AUTH`: Parâmetros de autenticação. Valor padrão: 0
* `ENABLE_GUESTS`: Parâmetros de autenticação. Valor padrão: 1
* `AUTH_TYPE`: Parâmetros de autenticação. Valor padrão: internal
* `JWT_APP_ID`: Parâmetros de autenticação. Valor padrão: my_jitsi_app_id
* `JWT_APP_SECRET`: Parâmetros de autenticação. Valor padrão: my_jitsi_app_secret
* `JWT_ACCEPTED_ISSUERS`: Parâmetros de autenticação. Valor padrão: my_web_client,my_app_client
* `JWT_ACCEPTED_AUDIENCES`: Parâmetros de autenticação. Valor padrão: my_server1,my_server2

Para maiores informações a respeito dos parâmetros, analise o arquivo de variáveis de grupo em *group_vars/all*
