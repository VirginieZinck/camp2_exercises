CREATE EXTENSION pgcrypto;

CREATE TABLE marathon_runners (
id              UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
race            varchar(100) NOT NULL,
race_date       date         NOT NULL,
runner_name     varchar(200) NOT NULL,
runner_bib      integer      NOT NULL,
runner_position integer      NOT NULL,
runner_time     time         NOT NULL);

drop table marathon_runners;

insert into marathon_runners 
(race, race_date, runner_name, runner_bib, runner_position, runner_time)
values 
('New York City Marathon - Women', '2017/05/13', 'Virginie Zinck', 80, 55000, '4:50');

insert into marathon_runners 
(race, race_date, runner_name, runner_bib, runner_position, runner_time)
values 
('New York City Marathon - Women', '2017/05/13', 'Marie Speedy', 35, 882, '2:12:46');

insert into marathon_runners 
(race, race_date, runner_name, runner_bib, runner_position, runner_time)
values 
('New York City Marathon - Women', '2017/05/13', 'Chloé Dupuis', 556, 330, '2:27:41');

insert into marathon_runners 
(race, race_date, runner_name, runner_bib, runner_position, runner_time)
values 
('New York City Marathon - Men', '2017/05/13', 'Marc Oliver', 250, 24998, '3:59:52');

insert into marathon_runners 
(race, race_date, runner_name, runner_bib, runner_position, runner_time)
values 
('New York City Marathon - Men', '2017/05/13', 'John Super Fast', 110, 133, '2:07:18');

insert into marathon_runners 
(race, race_date, runner_name, runner_bib, runner_position, runner_time)
values 
('New York City Marathon - Men', '2017/05/13', 'John Super Fast', 110, 133, '2:07:18');

insert into marathon_runners 
(race, race_date, runner_name, runner_bib, runner_position, runner_time)
values 
('New York City Marathon - Men', '2017/05/13', 'Vianney Flint', 3055, 220, '2:25:01');

select * from marathon_runners;

select * from marathon_runners
where race like '%Women';

--top3 runners
select * from marathon_runners
where race like '%Men'
order by runner_time
limit 3;


--runners who ran the race in less than 2:30:00 and didn't start in the 100 first runners
select * 
from marathon_runners
where runner_time < '2:30:00'
and runner_bib > 100;

--Find runners who ran the course in:
--	•	less than 2:15:00 and start in the 100 first runners or;
--	•	less than 2:30:00 if they started after the 100 firsts. 
--We would like to have the data sorted first by runners who started in the first 100, followed by the others. 
--We would also like to have them sorted by overlap time.
(select * 
from marathon_runners
where runner_time < '2:15:00'
and runner_bib < 100)
union
(select * 
from marathon_runners
where runner_time < '2:30:00'
and runner_bib > 100)
--order by runner_bib;
order by runner_time;


--	•	BONUS: Find runners (bib, name, and position) who made a better time than "Koen Naert". We would like to have the fastest first
select * 
from marathon_runners
where runner_time < (
  select runner_time 
  from marathon_runners
  where runner_name ='Koen Naert');




create table purchases (
id                     UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
client_name            varchar(200) NOT NULL,
euros_spent            money        NOT NULL,
fidelity_points_earned integer      NOT NULL,
purchase_date          date         NOT NULL,
number_of_items        integer      NOT NULL);


--	•	Find the three oldest client's name
select client_name from purchases order by purchase_date limit 3;

--	•	Find all clients that have not made a purchase in the last two months
select CURRENT_DATE - INTERVAL '2 months';
select CURRENT_DATE - INTERVAL '2 weeks';

select * 
from   purchases 
where  client_name not in (select client_name from purchases where purchase_date > (CURRENT_DATE - INTERVAL '2 months'));

select client_name, max(purchase_date)
from purchases
group by client_name
having max(purchase_date) < (CURRENT_DATE - INTERVAL '2 months');

--	•	Find all clients that have not made a purchase in the last month but are big customer (have purchased more than 3 items in one purchase previously)
select distinct client_name
from   purchases 
where  client_name not in (select client_name from purchases where purchase_date > '2017-11-11')
and    number_of_items > 3;

select client_name, max(purchase_date)
from purchases
where    number_of_items > 3
group by client_name
having max(purchase_date) < (CURRENT_DATE - INTERVAL '1 months');

--	•	Find the best client (the one who spent the most money in one purchase)
select * from purchases where euros_spent = (select max(euros_spent) from purchases) limit 1;

select * from purchases order by euros_spent desc limit 1;
 

--	•	BONUS, find how much money our store made in the summer
select sum(euros_spent) from purchases where purchase_date between '2017-07-01' and '2017-08-31';

