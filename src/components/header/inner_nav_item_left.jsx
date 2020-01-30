import React from "react";


class InnerNavItemLeft extends React.Component{
    render() {
        return (
            <ul className={"bars"} style={{display: this.props.isOpen ? 'flex' : 'none'}}>
                {this.props.inner_menu.map((inner_nav_item,i) => {
                    return (<div key={i} className={"list_item col-4"}>{inner_nav_item.map((list_item, j) => {
                        return <li  className={"list_item_li"} key={j}>
                            {list_item.href ? <a href={list_item.href}>{list_item.title}</a> : <h3 className={"sub_header"}>{list_item.title}</h3>}
                            </li>
                        })}</div>
                    )}
                )}
            </ul>

        )
    }
}

export default InnerNavItemLeft;