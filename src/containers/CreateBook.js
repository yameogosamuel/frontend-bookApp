import React, {Component} from "react";
import './CreateBook.css';

class CreateBook extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="create-book">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="Enter Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="author"
                            placeholder="Enter Author"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="year"
                            placeholder="Enter Year Published"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                        <button type="button" className="btn btn-default">
                            cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateBook;
