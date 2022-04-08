import React from "react";

export default class SetCoordinate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: '',
            longitude: ''
        };
    }

    render () {
        return (
            <div className="row">
                <form className="form-group">
                    <label htmlFor="">Latitude</label>
                    <input type="text" className="form-control" name="latitude"/>
                    <label htmlFor="">Longitude</label>
                    <input type="text" className="form-control" name="longitude"/>
                </form>

                <div className="row">
                            <div className="col-lg-12">
                                <button className="btn btn-primary">Login</button>
                            </div>
                </div>
            </div>
        )
    }

}