/*body class*/
class Body extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      textValue: "Welcome Message",
      menuDisplay: 'none'
    }
  }


  render() {
    return <div>
      {/*nav bar*/} 

     <nav>
      <div>Website Title / Logo</div>
        <div className='menu' onClick={this.clickShowMenu.bind(this)}>menu</div>
       <List style="list" content="item"/>
      </nav>
      
      {/*sectino area*/} 

      <header onClick={this.clickChangeText.bind(this)}>
        {this.state.textValue}
    </header>
      <section>
        <h3>Section Title</h3>
        <List style="content-block" content="contentbox" style2="p" />
        <div className='btn'>Call to Aciton
    </div>
      </section>

     {/*hidden menu panel*/} 
      <div className='hiddenMenu' style={
        {display: this.state.menuDisplay}
      }>
        <div className='X' onClick={this.clickHideMenu.bind(this)}>X</div>
        <List style="hiddenList" content="item"/>
      </div>

      {/*hidden box*/} 
      
      

    {/*render end tag*/} 
    </div>
  }

  clickChangeText(e) {
    console.log('clicked!')
    this.setState({ textValue:"Have a Good Time!"});
    }

  clickShowMenu(e) {
    console.log('clicked!')
    this.setState({ menuDisplay: 'inline-block' })
  }

  clickHideMenu(e) {
    console.log('clicked!')
    this.setState({ menuDisplay: 'none'})
  }

  
}

/*list class*/
class List extends React.Component{
  render() {
    return <ul className={this.props.style}>
      <li className={this.props.style2}>{this.props.content} 1</li>
      <li className={this.props.style2}>{this.props.content} 2</li>
      <li className={this.props.style2}>{this.props.content} 3</li>
      <li className={this.props.style2}>{this.props.content} 4</li>
    </ul>
}

}



/*組建實體*/
let Page = <Body />

/*render到容器裡*/
ReactDOM.render(
  Page, document.getElementById('root')
)