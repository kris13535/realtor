import React from 'react';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            len_apartments: this.props.len_apartments,

        }
    };

    componentWillReceiveProps(nextProps, nextContext) {
       this.setState({
           len_apartments: nextProps.len_apartments,
       })
    }

    render() {

        const {len_apartments} = this.state;
        const number_of_pages = Math.round(len_apartments/12);
        let arr_number_of_pages = [];
        for (let i = 1 ; i <= number_of_pages; i++){
            arr_number_of_pages.push(i);
        }

        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="/" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>

                        {arr_number_of_pages.map((item, i) => {
                            return (
                                <li className="page-item" key={i}><a className="page-link" href="/"  onClick={() => this.props.pageHandelClick(item)}>{item}</a></li>
                            )
                        })}

                        <li className="page-item">
                            <a className="page-link" href="/" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Pagination;
