import '../Footer/footer.css'

function Footer (props) {
    return (
      <div className="footer">
        <p>{props.children}</p>
      </div>
    )
  }
  
  export default Footer