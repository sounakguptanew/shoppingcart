
import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import "./stylesheet/main.css";


class PureBreadcrumbs extends Component{
    state = {
        isBreadcumVisible:true,
    }
    componentDidMount() {
        const {location} = this.props;
        if (location.pathname === '/') {
            this.setState({
                isBreadcumVisible: false,
            })
        } else {
            this.setState({
                isBreadcumVisible:true
            })
        }

    }

    componentDidUpdate(prevProps) {
        const {location} = this.props;

        if (prevProps.location.pathname !== location.pathname) {

            if (location.pathname === '/') {
                this.setState({
                    isBreadcumVisible: false,
                })
            } else {
                this.setState({
                    isBreadcumVisible:true
                })
            }


        }
    }

    render(){
        const {breadcrumbs,location} = this.props;


        return (
            this.state.isBreadcumVisible ?
                <div className="breadcrumbs">
                    {breadcrumbs.map(({breadcrumb, match}, index) => (
                        <div className="bc" key={match.url}>
                            <NavLink to={match.url || ""}>{breadcrumb}</NavLink>
                            {index < breadcrumbs.length - 1 && ">"}
                        </div>
                    ))}
                </div> : null
        )
    }





}

export default withBreadcrumbs()(PureBreadcrumbs);