const nav = (
  <nav>
    <div>Website Title / Logo</div>
    <div className='menu'>menu</div>
    <ul className='list'>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
    </ul>
  </nav>
);

const header = (
  <header className="header">
    Welcome Message
</header>
);


const section = (
  <section>
    <h3>Section Title</h3>
    <div className='content-block'>
      <p className='p1'>contentbox 1</p>
      <p className='p2'>contentbox 2</p>
      <p className='p3'>contentbox 3</p>
      <p className='p4'>contentbox 4</p>
    </div>
    <div className='btn'>Call to Aciton</div>
  </section>

);

{/*hidden*/ }









ReactDOM.render(
  <div>
    {nav}
    {header}
    {section}
  </div>
  ,
  document.getElementById('root')
)