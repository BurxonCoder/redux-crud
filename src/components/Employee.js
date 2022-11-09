import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {Formik} from "formik";
import {connect} from "react-redux";
import {updateState} from "../redux/actions/employeeAction";

const Employee = (props) => {
    return (
        <div className="container">
            <div className="row">
                <button type="button" className="btn btn-success ml-auto d-block my-5" onClick={() => props.updateState({open: true})}>Add</button>
            </div>

            <Modal isOpen={props.open} toggle={() => props.updateState({open: false})}>
                <ModalHeader>
                    Add Employee
                </ModalHeader>
                <Formik
                    initialValues={{ firstName: '', lastName: '', age: '', salary: '', position: ''}}
                    onSubmit={(values) => {

                    }}
                >
                    {({
                          values,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <ModalBody>
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    value={values.firstName}
                                    className="form-control"
                                    placeholder='Firstname'
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    value={values.lastName}
                                    className="form-control mt-3"
                                    placeholder="Lastname"
                                />
                                <input
                                    type="number"
                                    name="age"
                                    onChange={handleChange}
                                    value={values.age}
                                    className="form-control mt-3"
                                    placeholder='Age'
                                />
                                <input
                                    type="number"
                                    name="salary"
                                    onChange={handleChange}
                                    value={values.salary}
                                    className="form-control mt-3"
                                    placeholder="Salary"
                                />
                                <select
                                    name="position"
                                    className="form-control mt-3"
                                    onChange={handleChange}
                                    value={values.position}
                                >
                                    <option>Choose select</option>
                                    <option value="CEO">CEO</option>
                                    <option value="Product Owner">Product Owner</option>
                                    <option value="Software Engineer">Software Engineer</option>
                                    <option value="Security">Security</option>
                                    <option value="Driver">Driver</option>
                                </select>
                            </ModalBody>
                            <ModalFooter>
                                <button type="submit" className="btn btn-success" disabled={isSubmitting}>Save</button>
                                <button type="button" className="btn btn-secondary" onClick={() => props.updateState({open: false})}>Cancel</button>
                            </ModalFooter>
                        </form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.employee.open,
    }
}

export default connect(mapStateToProps, {updateState})(Employee);