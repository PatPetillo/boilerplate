// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { history } from '../history';
// import axios from 'axios';

// export default class AllStudents extends Component {
//   constructor() {
//     super();
//     this.state = {
//       students: [],
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleStudentSubmit = this.handleStudentSubmit.bind(this);
//   }

//   componentDidMount() {
//     axios.get('api/students')
//       .then(res => res.data)
//       .then(students => this.setState({ students }))
//       .catch(error => console.error('Error', error));
//   }

//   handleChange(evt) {
//     const value = evt.target.value;
//     const name = evt.target.name;

//     this.setState({
//       [name]: value,
//     });
//   }

//   handleStudentSubmit (evt) {
//     axios.post('/api/students', { name: this.state.studentName, email: this.state.studentEmail, campusId: this.state.campus.id })
//       .then(res => res.data)
//       .catch((error) => console.error('Error', error))
//     evt.preventDefault();
//     history.push('/students');
//   }

//   render() {
//     const { students } = this.state;
//     return (
//       <div>
//         {
//           students.map(student => (
//             <div key={student.id}>
//               <ul>
//                 <li> { student.name } </li>
//                 <li> { student.email } </li>
//                 <li> { student.gpa } </li>
//               </ul>
//             </div>
//             ))
//         }
//         <form onSubmit={ this.handleStudentSubmit }>
//           <div>Add Student To: { `${ campus.name }` }</div>
//           <br />
//           Student Name: <br />
//           <input type="text" name="studentName" placeholder="Student Name" onChange={ this.handleChange } /><br />
//           E-Mail: <br />
//           <input type="text" name="studentEmail" placeholder="E-Mail Address" onChange={ this.handleChange } /><br />
//           <input type="submit" value="submit" />
//         </form>
//         <br />
//       </div>
//     );
//   }
// }

// const mapState = ({ students }) => ({ students });
// export default connect(mapState)(AllStudents);

// AllStudents.propTypes = {
//   students: PropTypes.arrayOf(PropTypes.any).isRequired,
// };
