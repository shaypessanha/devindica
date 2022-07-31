import './header.css'

function Header(props) {
  return(
    <div className="header">
      <h2>{props.children}</h2>
      {props.subheader}
      {props.image ? <img src={props.image} alt={props.description} /> : <span></span>}
    </div>
  )
}

export default Header