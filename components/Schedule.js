import data from "../utils/data";

const Schedule = () => {
  return (
		<div>
			<div className="flex flex-col gap-5 mt-10">
				<table className="table auto border-spacing-6 border-separate">
					<thead>
						<tr>
							<th>Name</th>
							<th>Position</th>
							<th>Sunday</th>
							<th>Monday</th>
							<th>Tuesday</th>
							<th>Wendsday</th>
							<th>Thursday</th>
							<th>Friday</th>
							<th>Saturday</th>
							<th>Hours</th>
						</tr>
					</thead>
					<tbody>
						{data.employees.map((employee) => (
							<tr key={employee.slug}>
								<th>{employee.name}</th>
								<th>{employee.position}</th>
								<th>{employee.sunday}</th>
								<th>{employee.monday}</th>
								<th>{employee.tuesday}</th>
								<th>{employee.wendsday}</th>
								<th>{employee.thursday}</th>
								<th>{employee.friday}</th>
								<th>{employee.saturday}</th>
								<th>{employee.hours}</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Schedule;