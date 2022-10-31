import Layout from '../components/Layout';
import Employee from '../components/Employee';
import data from '../utils/data';

export default function Home() {
	return (
		<Layout title="Home">
			<div className="flex flex-col gap-5 mt-10">
				<table class="table-auto border-spacing-6 border-separate">
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
							<Employee employee={employee} key={employee.slug}></Employee>
						))}
					</tbody>
				</table>
			</div>
		</Layout>
	);
}
