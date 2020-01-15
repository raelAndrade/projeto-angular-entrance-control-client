# Controle de Entradas

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Servidor de desenvolvimento

Execute o comando `ng serve` para inicializar o servidor. Navegue no endereço `http://localhost:4200/` .

## Gerar componentes

Execute o comando para gerar um novo componente angular `ng generate component component-name` ou `ng g c component-name` .
Você também pode usar o seguinte comando `ng generate directive|pipe|service|class|guard|interface|enum|module` .

## JSON-SERVER

Execute o comando `json-server --watch locals.json` . O arquivo `locals.json` contém a estrutura do arquivo que será gerado um json

## Plugin REST Client

Ferramenta para enviar requisições HTTP Rest.
O arquivo `api.http` contém os métodos HTTP que serão utilizados conforme a necessidade do projeto.

### Locals - Endpoints

``` js
@GET todos

curl - X GET http: //localhost:3000/locals -H 'cache-control: no-cache'
```

``` js
@GET por id

curl - X GET http: //localhost:3000/locals/1 -H 'cache-control: no-cache'
```

``` js
@POST

curl - X POST http: //localhost:3000/locals -H 'cache-control: no-cache' -H'content-type: application/json' -d '{
    "initial": "RAVAP",
    "description": "Regional Administrativa do Vale do Paraíba",
    "administrations": [{
        "name": "Guaratinguetá",
        "cnpj": "123.123.123/0001-47",
        "churches": [{
            "name": "Vila Passos",
            "code": "221605",
            "description": "Congregação Vila Passos",
            "rooms": [{
                "name": "Sala Administração Coletas",
                "description": "Sala Administração de Coletas",
                "entrances": [
                    "MAIN_ENTRANCE"
                ],
                "created": "{{$localDatetime iso8601}}",
                "updated": "{{$localDatetime iso8601}}"
            }],
            "created": "{{$localDatetime iso8601}}",
            "updated": "{{$localDatetime iso8601}}"
        }],
        "created": "{{$localDatetime iso8601}}",
        "updated": "{{$localDatetime iso8601}}"
    }],
    "created": "{{$localDatetime iso8601}}",
    "updated": "{{$localDatetime iso8601}}"
}
'
```

<!-- ## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.-->

<!-- ## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).-->

<!-- ## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).-->

<!-- ## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).-->

