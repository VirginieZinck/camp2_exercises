--# Joins
--
--1. Write a query in SQL to display the first name, last name, department number, and department name for each employee.
--
select 	e.first_name,
		e.last_name,
		e.department_id,
		d.name
from employees e
inner join departments d on (e.department_id = d.id);


--2. Write a query in SQL to display the first and last name, department, city, and state province for each employee.
select 	employees.first_name,
		employees.last_name,
		employees.department_id,
        departments.name,
        locations.city,
        locations.state
from employees 
inner join departments on (employees.department_id = departments.id)
inner join locations on (departments.location_id=locations.id);


select 	employees.first_name,
		employees.last_name,
		employees.department_id,
        departments.name,
        locations.city,
        locations.state
from.  employees,  departments, locations
where (employees.department_id = departments.id)
and   (departments.location_id = locations.id);


--3. Write a query in SQL to display the first name, last name, salary, and job grade for all employees.
select 	employees.first_name,
		employees.last_name,
		employees.salary,
        job_grades.level
from employees 
inner join job_grades on (employees.salary between job_grades.min_salary and job_grades.max_salary)
order by salary;

--4. Write a query in SQL to display the first name, last name, department number and department name, for all employees
--for departments 8 or 4.
select 	employees.first_name,
		employees.last_name,
		employees.department_id,
        departments.name
from employees 
inner join departments on (employees.department_id = departments.id)
where department_id in (4,8);

--5. Write a query in SQL to display those employees who contain a letter z to their first name and also display their
--last name, department, city, and state province.
select 	employees.first_name,
		employees.last_name,
		employees.department_id,
        departments.name,
        locations.city,
        locations.state
from employees 
inner join departments on (employees.department_id = departments.id)
inner join locations on (departments.location_id=locations.id)
where upper(employees.first_name) like ('%Z%');


--6. Write a query in SQL to display all departments including those where does not have any employee.
select  departments.id,
		departments.name,
		departments.location_id,
		count(employees.*) 
from departments
left join employees on (employees.department_id = departments.id)
group by departments.id;

select * from departments;

--7. Write a query in SQL to display the first and last name and salary for those employees who earn less than the
--employee earn whose number is 83.
select first_name,
       last_name,
       salary
from employees
where salary < (select salary from employees where id= 83);

--8. Write a query in SQL to display the first name of all employees including the first name of their manager.
select  empl.first_name,
		empl.last_name,
		manag.first_name as manager_first_name,
		manag.last_name as manager_last_name
from employees as empl
inner join employees as manag on (empl.manager_id = manag.id);

--9. Write a query in SQL to display the department name, city, and state province for each department.
select d.name,
 		l.city,
 		l.state
 from departments d
 inner join locations l on (d.location_id=l.id);

--10. Write a query in SQL to display the first name, last name, department number and name, for all employees who have or
--have not any department.
select e.first_name,
		e.last_name,
		e.department_id,
		d.name
from employees e
left join departments d on (e.department_id = d.id);

select * from employees;

--11. Write a query in SQL to display the first name of all employees and the first name of their manager including those
--who does not working under any manager.
select e.first_name, 
		e.last_name,
		m.first_name as manager_first_name,
		m.last_name as manager_last_name
from employees e
left join employees m on (e.manager_id = m.id);

--12. Write a query in SQL to display the first name, last name, and department number for those employees who work in the
--same department as the employee who hold the last name as Taylor.
select 	first_name,
		last_name,
		department_id
from employees
where department_id in (select department_id from employees where last_name = 'Taylor');

select * from employees where last_name = 'Taylor';

--13. Write a query in SQL to display the job title, department name, full name (first and last name ) of employee, and
--starting date for all the jobs which started on or after 1st January, 1993 and ending with on or before 31 August, 1997.
select  j.title as job_title,
		d.name as department_name,
		e.first_name || ' ' || e.last_name as employee_name,
		h.start_date,
		h.end_date
from job_history h
inner join departments d on (h.department_id = d.id)
inner join jobs j        on (h.job_id        = j.id)
inner join employees e   on (h.employee_id   = e.id)
where h.start_date >= '1993-01-01'
and   h.end_date <= '1997-08-31';

select * from job_history;

--14. Write a query in SQL to display job title, full name (first and last name ) of employee, and the difference between
--maximum salary for the job and salary of the employee.
select  e.first_name || ' ' || e.last_name as employee_name,
		e.salary,
		j.title,
		j.min_salary,
		j.max_salary,
		(j.max_salary - e.salary) as delta_with_max_salary
from employees e
inner join jobs j on (e.job_id = j.id); 

--15. Write a query in SQL to display the name of the department, average salary and number of employees working in that
--department who got commission.
select d.name,
       avg(e.salary),
       count(e.*)
from departments d
inner join employees e on (e.department_id = d.id)
where e.commission_pct > 0
group by d.name;

--16. Write a query in SQL to display the full name (first and last name ) of employee, and job title of those employees
--who is working in the department which ID is 8.
select e.first_name || ' ' || e.last_name as employee_name,
       j.title
from   employees e
inner join jobs j on (e.job_id = j.id)
where  e.department_id = 8;

--17. Write a query in SQL to display the name of the country, city, and the departments which are running there.
select 	c.name,
		l.city,
		d.name 
from    locations l
inner join departments d on (l.id = d.location_id)
inner join countries c on (c.id = l.country_id);

--18. Write a query in SQL to display department name and the full name (first and last name) of the manager.
select d.name,
       e.first_name || ' ' || e.last_name as employee_name
from departments d
inner join employees e on (d.manager_id = e.id);


--19. Write a query in SQL to display job title and average salary of employees.
select jobs.title,
       avg(e.salary)
from jobs
inner join employees as e on (e.job_id = jobs.id)
group by jobs.title;

--20. Write a query in SQL to display the details of jobs which was done by any of the employees who is presently earning
--a salary on and above 12000.
select * 
from   job_history h
inner join employees e on (e.id = h.employee_id)
inner join jobs j on (j.id = h.job_id)
where e.salary>= 12000;


--22. Write a query in SQL to display the department name, full name (first and last name) of manager, and their city.
select  d.name,
		e.first_name || ' ' || e.last_name as manager_name,
		l.city
from departments d
inner join employees e on (e.id = d.manager_id)
inner join locations l on (l.id = d.location_id);

--23. Write a query in SQL to display the employee ID, job name, number of days worked in for all those jobs in department
--8.
select  h.employee_id,
		j.title,
		h.end_date,
		h.start_date,
		(h.end_date - h.start_date) as days
from job_history h
inner join jobs j on (j.id = h.job_id)
where h.department_id = 8; 

 
--24. Write a query in SQL to display the full name (first and last name), and salary of those employees who working in
--any department located in London.
select  e.first_name || ' ' || e.last_name as manager_name,
		e.salary,
		l.city
from departments d
inner join employees e on (e.id = d.manager_id)
inner join locations l on (l.id = d.location_id)
where l.city = 'London';

--25. Write a query in SQL to display full name(first and last name), job title, starting and ending date of last jobs for
--those employees with worked without a commission percentage.



--26. Write a query in SQL to display the department name and number of employees in each of the department.
--
--27. Write a query in SQL to display the full name (fisrt and last name ) of employee with ID and name of the country
--presently where (s)he is working.
