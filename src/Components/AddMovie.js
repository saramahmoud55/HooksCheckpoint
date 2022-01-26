import React, { useRef } from "react";

export default function AddMovie(addMovie) {
    const ref=useRef(null);
    const close =useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();


        const movie ={
            title: e.target.title.value,
            rate : Number(e.target.rate.value),
            description: e.target.description.value,
            posterURL : e.target.posterURL.value
        };
        close.current.click();
        addMovie(movie);
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
            >
                Add New Movie
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {/**head */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Add Movie
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                     {/**form */}

                        <div className="modal-body">
                            <div className="container">
                                <div className="col justify-content-center">
                                    <form onSubmit={handleSubmit}>
                                        {/**title */}

                                        <div className="form-group">
                                            <label htmlFor="title">Title</label>
                                            <input
                                                id="title"
                                                name="title"
                                                className="form-control"
                                            />
                                        </div>
                                        {/**des */}
                                        <div className="form-group">
                                            <label htmlFor="description">
                                                Description
                                            </label>
                                            <input
                                                id="description"
                                                name="description"
                                                className="form-control"
                                            />
                                        </div>
                                        {/**img */}
                                        <div className="form-group">
                                            <label htmlFor="url">
                                                Image URL
                                            </label>
                                            <input
                                                id="url"
                                                name="url"
                                                className="form-control"
                                            />
                                        </div>
                                        {/**rate */}
                                        <div className="form-group">
                                            <label htmlFor="rate">Rate</label>
                                            <input
                                                type="number"
                                                max="10"
                                                id="rate"
                                                name="rate"
                                                className="form-control"
                                            />
                                        </div>
                                        {/**disabeled button */}
                                        <input
                                            ref={ref}
                                            type="submit"
                                            className="d-none"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {/**close */}
                            <button
                                ref={close}
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            {/**save */}
                            <button
                                onClick={() => ref.current.click()}
                                type="button"
                                className="btn btn-primary"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}