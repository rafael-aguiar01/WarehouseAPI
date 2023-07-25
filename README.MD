<h1>WarehouseAPI - Controle de Estoque</h1>

<p>WarehouseAPI é uma API para o controle de estoque, com recursos para cadastro de produto, cadastro de armazém,
    movimentos de entrada e saída e controle do saldo dos produtos.</p>

<h2>Tecnologias Utilizadas</h2>
<ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>TypeScript</li>
    <li>PostgreSQL</li>
    <li>TypeORM</li>
    <li>tsyringe</li>
    <li>uuid</li>
    <li>swagger-ui-express</li>
</ul>

<h2>Dependências</h2>

<h3>Dependências de Desenvolvimento</h3>
<ul>
    <li>@types/jest: ^28.1.6</li>
    <li>@types/supertest: ^2.0.12</li>
    <li>@types/swagger-ui-express: ^4.1.3</li>
    <li>jest: ^28.1.3</li>
    <li>ts-jest: ^28.0.7</li>
    <li>ts-node: ^10.9.1</li>
    <li>ts-node-dev: ^2.0.0</li>
    <li>tsconfig-paths: ^4.0.0</li>
    <li>typescript: ^4.7.4</li>
</ul>

<h3>Dependências</h3>
<ul>
    <li>@types/uuid: ^8.3.4</li>
    <li>express: ^4.18.1</li>
    <li>pg: ^8.7.3</li>
    <li>supertest: ^6.2.4</li>
    <li>swagger-ui-express: ^4.5.0</li>
    <li>tsyringe: ^4.7.0</li>
    <li>typeorm: 0.2.45</li>
    <li>uuid: ^8.3.2</li>
</ul>

<h2>Como Rodar a Aplicação Localmente</h2>
<ol>
    <li>Faça o clone deste repositório:</li>
    <code>git clone https://github.com/seu-usuario/warehouse-api.git</code>
    <li>Entre na pasta do projeto:</li>
    <code>cd warehouse-api</code>
    <li>Instale as dependências:</li>
    <code>npm install</code>
    <li>Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias, como as credenciais do
        banco de dados e a porta da API.</li>
    <li>Execute as migrations para criar as tabelas no banco de dados:</li>
    <code>npm run typeorm migration:run</code>
    <li>Inicie a aplicação:</li>
    <code>npm run dev</code>
    <li>A API estará acessível em http://localhost:3000</li>
</ol>

<h2>Documentação da API</h2>
<p>A documentação da API está disponível através do Swagger UI. Após iniciar a aplicação, você pode acessar a
    documentação em http://localhost:3000/api-docs.</p>

<h2>Como Contribuir</h2>
<p>Se você deseja contribuir com este projeto, siga os passos abaixo:</p>
<ol>
    <li>Faça um fork deste repositório.</li>
    <li>Crie uma branch com a sua feature ou correção:</li>
    <code>git checkout -b minha-feature</code>
    <li>Faça as alterações necessárias e commit:</li>
    <code>git commit -m "Minha contribuição"</code>
    <li>Envie as alterações para o seu fork:</li>
    <code>git push origin minha-feature</code>
    <li>Crie um Pull Request para este repositório.</li>
</ol>

<h2>Licença</h2>
<p>Este projeto está licenciado sob a <a href="https://opensource.org/licenses/MIT">Licença MIT</a>.</p>

<hr>
<p>Agradecemos seu interesse no projeto WarehouseAPI! Caso tenha alguma dúvida ou sugestão, não hesite em entrar em
    contato. Esperamos que esta API seja útil para o controle de estoque e facilite o gerenciamento dos produtos e
    movimentos de entrada e saída.</p>
