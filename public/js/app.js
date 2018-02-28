/*
const header = () => {
  const h1 = React.DOM.h1;
  const p = React.DOM.p;
  const title = 'Getting started';
  const el = 

}

ReactDOM.render(
  header(),
  document.querySelector('header')
);
*/



const header = (
  <div>
    <h1>Getting Started</h1>
    <p>Descripción</p>
  </div>
);

ReactDOM.render(
  header,
  document.querySelector('#header')
);

const section = (
  <div>
    <h2>Main Section</h2>
    <article>
      <h3>Titulo 1</h3>
      <p>Descripcion 1</p>
      <hr />
    </article>
    <article>
      <h3>Titulo 2</h3>
      <p>Descripcion 2</p>
      <hr />
    </article>
    <article>
      <h3>Titulo 3</h3>
      <p>Descripcion 2</p>
      <hr />
    </article>
  </div>
);

ReactDOM.render(
  section,
  document.querySelector('#main')
);