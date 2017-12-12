--# Sorting And Filtering

--1. Write a query in SQL to display the full name (first and last name), and salary for those employees who earn below 6000.
select first_name || ' ' || last_name, 
       salary 
from employees 
where salary < 6000;

--2. Write a query in SQL to display the first and last_name, department number and salary for those employees who earn more than 8000.
select first_name || ' ' || last_name, 
       salary,
       department_id 
from employees 
where salary > 8000;


--3. Write a query in SQL to display the first and last name, and department number for all employees whose last name is "McEwen".
select first_name || ' ' || last_name, 
       department_id 
from employees 
where last_name = 'McEwen';


--4. Write a query in SQL to display all the information for all employees without any department number.
select id, 
		first_name,
		last_name,
		email,
		phone_number,
		hire_date,
		job_id,
		salary,
		commission_pct,
		manager_id
from employees 
where last_name = 'McEwen';


--5. Write a query in SQL to display all the information about the department Marketing.
select d.*, 
       (e.first_name || ' ' || e.last_name) as manager_name 
from departments d
INNER JOIN employees e on (e.id = d.manager_id)
where name = 'Marketing';

--6. Write a query in SQL to display the full name (first and last), hire date, salary, and department number for those
--employees whose first name does not containing the letter M and make the result set in ascending order by department
--number.
select  first_name,
		last_name, 
		hire_date,
		salary,
        department_id 
from employees 
where lower(first_name) NOT LIKE '%m%'
order by department_id ASC;

--7. Write a query in SQL to display all the information of employees whose salary is in the range of 8000 and 12000 and
--commission is not null or department number is except the number 4, 12 and 7 and they have been hired before June
--5th, 1987.
select  first_name,
		last_name, 
		hire_date,
		salary,
        department_id 
from employees 
where salary between 8000 and 12000
and   commission_pct is not null
and   department_id not in (4,12,7)
and   hire_date < '1987-06-05';

--8. Write a query in SQL to display the full name (first and last name), and salary for all employees who does not earn
--any commission.
select (first_name || ' ' || last_name) as employee_name, 
		salary
from employees
where commission_pct = 0 ;

--9. Write a query in SQL to display the full name (first and last), the phone number and email separated by hyphen, and
--salary, for those employees whose salary is within the range of 9000 and 17000. The column headings assign with
--Full_Name, Contact_Details and Remuneration respectively.
select  (first_name || ' ' || last_name) as Full_Name, 
		(phone_number || '-' || email) as Contact_Details,
		 salary as Remuneration
from employees 
where salary between 9000 and 17000;

--10. Write a query in SQL to display the first and last name, and salary for those employees whose first name is ending
--with the letter m.
select	first_name,
		last_name,
		salary
from employees
where first_name like '%m'; 

--11. Write a query in SQL to display the full name (first and last) name, and salary, for all employees whose salary is
--out of the range 7000 and 15000 and make the result set in ascending order by the full name.
select  (first_name || ' ' || last_name) as Full_Name, 
		 salary 
from employees 
where salary < 7000
or    salary > 15000
order by Full_Name;

--12. Write a query in SQL to display the full name (first and last), job id and date of hire for those employees who was
--hired during November 5th, 2007 and July 5th, 2009.
select  (first_name || ' ' || last_name) as Full_Name, 
		 job_id,
		 hire_date 
from employees 
where hire_date between '2007-11-05' and '2009-07-05';

--13. Write a query in SQL to display the the full name (first and last name), and department number for those employees
--who works either in department 7 or 9.
select  (first_name || ' ' || last_name) as Full_Name, 
		 department_id
from employees 
where department_id in (7,9);

--14. Write a query in SQL to display the full name (first and last name), salary, and manager number for those employees
--who is working under a manager.
select  (first_name || ' ' || last_name) as Full_Name, 
		 salary,
		 manager_id
from employees 
where manager_id is not null;

--15. Write a query in SQL to display all the information from Employees table for those employees who was hired before
--June 21st, 2002.
select * from employees
where hire_date < '2002-06-21';

--16. Write a query in SQL to display the first and last name, email, salary and manager ID, for those employees whose
--managers are hold the ID 21, 4 or 46.
select first_name,
		last_name,
		email,
		salary,
		manager_id
from employees
where manager_id in (21,4,46);

--17. Write a query in SQL to display all the information for all employees who have the letters D, S, or N in their first
--name and also arrange the result in descending order by salary.
select * 
from employees 
where UPPER(first_name) like '%D%'
or    UPPER(first_name) like '%S%'
or    UPPER(first_name) like '%N%'
order by salary ASC;
--73

select * 
from employees 
where UPPER(first_name) not like '%D%'
and   UPPER(first_name) not like '%S%'
and   UPPER(first_name) not like '%N%'
order by salary ASC;
--34

select * from employees;
--107


--18. Write a query in SQL to display the full name (first name and last name), hire date, commission percentage, email
--and telephone separated by '-', and salary for those employees who earn the salary above 11000 or the seventh digit in
--their phone number equals 3 and make the result set in a descending order by the first name.
select  (first_name || ' ' || last_name) as Full_Name, 
		hire_date,
		trim('.' from phone_number),
		commission_pct,
		(email || '-' || phone_number) as Contact_Details,
 		 salary as Remuneration
from employees 
where salary > 11000
AND   SUBSTRING(REPLACE(phone_number, '.', ''), 7, 1) = '3';



--19. Write a query in SQL to display the first and last name, and department number for those employees who holds a
--letter s as a 3rd character in their first name.
--
--20. Write a query in SQL to display the employee ID, first name, job id, and department number for those employees who
--is working except the departments 5, 3 and 8.
--
--21. Write a query in SQL to display the employee Id, first name, job id, and department number for those employees whose
--department number equals 3, 4 or 9.
--
--22. Write a query in SQL to display the ID for those employees who did two or more jobs in the past.
--
--23. Write a query in SQL to display job ID, number of employees, sum of salary, and difference between highest salary
--and lowest salary for a job.
--
--24. Write a query in SQL to display job ID for those jobs that were done by two or more for more than 300 days.
--
--25. Write a query in SQL to display the country ID and number of cities in that country we have.
--
--26. Write a query in SQL to display the manager ID and number of employees managed by the manager.
--
--27. Write a query in SQL to display the details of jobs in descending sequence on job title.
--
--28. Write a query in SQL to display the first and last name and date of joining of the employees who is either Sales
--Representative or Sales Man.
--
--29. Write a query in SQL to display the average salary of employees for each department who gets a commission percentage.
--
--30. Write a query in SQL to display those departments where any manager is managing 4 or more employees.
--
--31. Write a query in SQL to display those departments where more than ten employees work who got a commission percentage.
--
--32. Write a query in SQL to display the employee ID and the date on which he ended his previous job.
--
--33. Write a query in SQL to display the details of the employees who have no commission percentage and salary within the
--range 7000 to 12000 and works in that department which number is 5.
--
--34. Write a query in SQL to display the job ID for those jobs which average salary is above 8000.
--
--35. Write a query in SQL to display job Title, the difference between minimum and maximum salaries for those jobs which
--max salary within the range 12000 to 18000.
--
--36. Write a query in SQL to display all those employees whose first name or last name starts with the letter D.
--
--37. Write a query in SQL to display the details of jobs which minimum salary is greater than 9000.
--
--38. Write a query in SQL to display those employees who joined after 7th September, 1987.
