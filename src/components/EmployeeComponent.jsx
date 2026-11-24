function EmployeeComponent() {

    return (
        <div>

            <h2>Employees List</h2>

            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sidra</td>
                        <td>Shafi</td>
                        <td>sidra@gmail.com</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Waseem</td>
                        <td>Akram</td>
                        <td>waseem@gmail.com</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Muhammad</td>
                        <td>saqlain</td>
                        <td>saqlain@gmail.com</td>
                    </tr>
                </tbody>

            </table>

        </div>
    );
}

export default EmployeeComponent;