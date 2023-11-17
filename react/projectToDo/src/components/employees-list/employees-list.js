import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id,...itemProps} = item;
        return (
            <EmployeesListItem
             key={id} name = {item.name} salary={item.salary} increase={item.increase} rise={item.rise} //{...item} спрет оператор сделает точно также 
             onDelete={() => onDelete(id)}
             onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> 
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;