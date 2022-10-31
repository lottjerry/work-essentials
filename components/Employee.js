const Employee = ({ employee }) => {
	return (
		<tr>
			<td>{employee.name}</td>
			<td>{employee.position}</td>
			<td>{employee.sunday}</td>
			<td>{employee.monday}</td>
			<td>{employee.tuesday}</td>
			<td>{employee.wendsday}</td>
			<td>{employee.thursday}</td>
			<td>{employee.friday}</td>
			<td>{employee.saturday}</td>
			<td>{employee.hours}</td>
		</tr>
	);
};

export default Employee;
