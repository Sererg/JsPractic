import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        const {id,...itemProps} = item;
        return (
            <EmployeesListItem key={id} name = {item.name} salary={item.salary} increase={item.increase}/> //{...itemProps} спрет оператор сделает точно также 
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;