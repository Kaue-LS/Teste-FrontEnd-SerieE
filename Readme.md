# Sobre o Projeto:

O projeto é um teste de um processo seletivo da **Serie.e Design**, na qual é desenvolvido uma **SPA(Single Page Aplication)** utilizando dados fornecidos de uma **API da Marvel**;
O projeto atualmente se apresenta incompleto, nem todos os componentes presentas apresentam funcionalidade devido a dificuldades de obter dados pela API;
Porém ainda contem animações e pequenas função em alguns componentes presentes nas páginas, principalmente na home, mesmo sem ter um banco de dados para provar suas funcionalidades, foi copiado uma parte da API e também foi usado inteligência artifical para gerar mais personagens para realizar determinados objetivos do projeto.
Além disso o projeto foi desenvolvido para ser responsivo, na qual você pode verificar no **vercel** onde o projeto esta hospedado:

- https://teste-front-end-serie-e.vercel.app/

## O que foi usado:

- React.js
- CSS
- Google Fonts
- Axios
- Context API

### Antes de iniciar a o projeto:

- A chaves privada e publica estão guardados no arquivo **.env**, por ser um arquivo destinado somente para desenvolvimento, o projeto hospedado nao conseguia buscar resultados de busca da API sem os paramentros solicitados, com isso o arquivo foi mantido, caso nao funcionar, será necessario trocar as chaves, se inscrevendo no proprio site da [**Marvel API**](https://developer.marvel.com);

### Iniciando projeto:

- Para iniciar o projeto é necesario ter **Node.js** e **npm** instalado, assim iniciado no seu terminal **CMD** ou **VSCode** com o comando **npm start**;

### Estruturas importantes:

- Os conteudos do projeto estão na pasta **src**;
- A pasta **assets** contém os icones e imagens utilizadas;
- **components** onde localiza os componentes presentes nas paginas presentes em **pages** e para as funcionalidades dos prósprios. Entre esses componenetes estão **API** e **context**;
- Os estilos e css estão em **styles**;
- As rotas, a principal e as customizadas estão localizadas no arquivo **router.js**
