import './BadgeList.css'

function BadgeList(props) {
    let itemList = Array.isArray(props.items) ? props.items : [props.items];
    return (
        <div className="badge-list">
            {
                itemList.map(item => {
                    return (
                        <span className={"badge-item " + (props.outlined === 'true' ? "" : "filled")} key={item}>{item}</span>
                    )
                })
            }
        </div>
    )
}

export default BadgeList